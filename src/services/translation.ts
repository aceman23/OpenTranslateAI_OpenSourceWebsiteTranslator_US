export interface TranslationConfig {
  apiUrl: string;
  apiKey?: string;
}

export interface TranslationCache {
  [key: string]: string;
}

const DEFAULT_API_URL = 'https://libretranslate.com/translate';

export class TranslationService {
  private config: TranslationConfig;
  private cache: TranslationCache = {};

  constructor(config?: Partial<TranslationConfig>) {
    this.config = {
      apiUrl: config?.apiUrl || DEFAULT_API_URL,
      apiKey: config?.apiKey,
    };
  }

  private getCacheKey(text: string, source: string, target: string): string {
    return `${source}-${target}-${text}`;
  }

  async translate(text: string, sourceLang: string, targetLang: string): Promise<string> {
    if (!text.trim()) return text;
    if (sourceLang === targetLang) return text;

    const cacheKey = this.getCacheKey(text, sourceLang, targetLang);
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    const maxRetries = 2;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);

        const response = await fetch(this.config.apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
            format: 'text',
            api_key: this.config.apiKey,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || `Translation API error: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        const translated = data.translatedText;

        if (!translated) {
          throw new Error('No translation returned from API');
        }

        this.cache[cacheKey] = translated;
        return translated;
      } catch (error) {
        lastError = error as Error;
        console.error(`Translation attempt ${attempt + 1} failed:`, error);

        if (attempt < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
        }
      }
    }

    console.error('Translation failed after all retries:', lastError);
    throw lastError || new Error('Translation failed');
  }

  async translateBatch(
    texts: string[],
    sourceLang: string,
    targetLang: string
  ): Promise<string[]> {
    const promises = texts.map((text) => this.translate(text, sourceLang, targetLang));
    return Promise.all(promises);
  }

  clearCache(): void {
    this.cache = {};
  }

  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const testText = 'Hello';
      await this.translate(testText, 'en', 'es');
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }
}

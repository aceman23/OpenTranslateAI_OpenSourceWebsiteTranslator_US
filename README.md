# Open-Source Website Translator

A production-ready, SEO-optimized translation widget for React applications. Translate your website content into multiple languages with a beautiful, accessible component that's ready for production use.

🔗 **[View on GitHub](https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US)**

## Features

### Core Translation Features
- **Smart DOM Translation**: Preserves HTML structure, styles, and interactive elements
- **Multi-Language Support**: 10+ languages including Chinese, English, Spanish, French, German, Japanese, Korean, Arabic, Hindi, and Portuguese
- **Local Language Components**: Pre-translated Chinese, English, and Spanish versions for instant switching without API calls
- **Smart Caching System**: Instant language switching with zero latency once cached
- **Batch Processing**: Optimized translation with progress tracking
- **Rate Limit Protection**: Local languages avoid API rate limits entirely
- **Privacy-Focused**: Self-hosted option using LibreTranslate for complete data privacy

### Production-Ready Features
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Fully Accessible**: WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- **GDPR Compliant**: Cookie consent banner with accept/decline options
- **Mobile Responsive**: Seamless experience across all devices and screen sizes
- **Performance Optimized**: DNS prefetch, preconnect hints, and optimized loading
- **Custom 404 Page**: Professional error page with navigation options
- **Legal Compliance**: Privacy Policy, Terms of Service, and Cookie Policy links

### Developer Experience
- **Easy Integration**: Simple React component that works out of the box
- **TypeScript Support**: Full type safety and IntelliSense
- **Customizable**: Flexible positioning and styling options
- **Well Documented**: Comprehensive documentation and examples

## Quick Start

### Installation

```bash
npm install
npm run dev
```

### Basic Usage

```tsx
import { TranslationWidget } from './components/TranslationWidget';

function App() {
  return (
    <>
      <TranslationWidget
        defaultLang="zh"
        targetElementId="content"
        position="top-right"
      />
      <div id="content">
        {/* Your translatable content */}
      </div>
    </>
  );
}
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultLang` | string | `'zh'` | Initial language code |
| `apiUrl` | string | Public API | Custom translation API URL |
| `apiKey` | string | undefined | API key for authentication |
| `targetElementId` | string | `'translatable-content'` | ID of element to translate |
| `position` | string | `'top-right'` | Widget position (top-left, top-right, bottom-left, bottom-right) |
| `onLanguageChange` | function | undefined | Callback when language changes |
| `localLanguages` | array | [] | Languages with pre-translated content |

## Advanced Features

### Preventing Translation

Add `data-no-translate` attribute to elements that should not be translated:

```html
<button data-no-translate>Original Text</button>
<div data-no-translate>
  <!-- This entire section will not be translated -->
</div>
```

### Local Language Support

For better performance and to avoid API rate limits, provide pre-translated content for specific languages:

```tsx
function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en' | 'es'>('en');

  return (
    <>
      <TranslationWidget
        defaultLang="en"
        onLanguageChange={(lang) => {
          if (lang === 'zh' || lang === 'en' || lang === 'es') {
            setLocalLang(lang);
          }
        }}
        localLanguages={['zh', 'en', 'es']}
      />
      {localLang === 'zh' ? (
        <ChineseContent />
      ) : localLang === 'es' ? (
        <SpanishContent />
      ) : (
        <EnglishContent />
      )}
    </>
  );
}
```

**Benefits of Local Languages:**
- Instant language switching with zero latency
- No API calls or rate limiting issues
- Better SEO with pre-rendered content
- Improved user experience

### Custom Translation API

Configure the widget to use your own translation service:

```tsx
<TranslationWidget
  apiUrl="https://your-api.com/translate"
  apiKey="your-api-key"
  defaultLang="zh"
/>
```

## Architecture

### Translation Flow

1. **DOM Analysis**: TreeWalker API extracts all visible text nodes
2. **Batch Translation**: Text sent to translation API in optimized batches
3. **Smart Caching**: Translations cached for instant switching
4. **Precise Updates**: Direct text node updates preserve DOM structure

### Key Components

- **TranslationService** (`src/services/translation.ts`): API communication and caching
- **DOMTranslator** (`src/services/domTranslator.ts`): DOM traversal and text replacement
- **TranslationWidget** (`src/components/TranslationWidget.tsx`): Main UI widget
- **CookieConsent** (`src/components/CookieConsent.tsx`): GDPR-compliant cookie banner
- **NotFound** (`src/components/NotFound.tsx`): Custom 404 error page
- **DemoContent** (`src/components/DemoContent.tsx`): Chinese demo page (local language)
- **DemoContentEnglish** (`src/components/DemoContentEnglish.tsx`): English demo page (local language)
- **DemoContentSpanish** (`src/components/DemoContentSpanish.tsx`): Spanish demo page (local language)

## SEO Features

### Meta Tags
- Comprehensive SEO meta tags (title, description, keywords, author)
- Open Graph tags for Facebook sharing
- Twitter Card support for social previews
- Canonical links to prevent duplicate content

### Structured Data
- JSON-LD schema for search engines
- SoftwareApplication type with ratings and features
- Proper semantic HTML structure

### Search Engine Support
- sitemap.xml for crawler indexing
- robots.txt with proper directives
- Mobile-friendly meta viewport

## Accessibility

### WCAG Compliance
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Skip-to-main-content link
- Sufficient color contrast (WCAG AA compliant)

### Interactive Elements
- Focus indicators
- ARIA live regions for dynamic content
- Progress indicators with ARIA attributes
- Semantic HTML landmarks

## Supported Languages

| Language | Code | Native Name | Local Component |
|----------|------|-------------|-----------------|
| Chinese | zh | 中文 | ✅ Pre-translated |
| English | en | English | ✅ Pre-translated |
| Spanish | es | Español | ✅ Pre-translated |
| French | fr | Français | Via API |
| German | de | Deutsch | Via API |
| Japanese | ja | 日本語 | Via API |
| Korean | ko | 한국어 | Via API |
| Arabic | ar | العربية | Via API |
| Hindi | hi | हिन्दी | Via API |
| Portuguese | pt | Português | Via API |

**Note:** Languages with pre-translated local components provide instant switching without API calls, avoiding rate limits and ensuring the best user experience.

## Performance

### Optimization Features
- DNS prefetch for Google Fonts
- Preconnect hints for faster resource loading
- Smart caching reduces API calls
- Batch processing minimizes network overhead
- Instant language switching after initial load

### Performance Tips
1. Use specific target elements instead of translating entire page
2. Leverage local language support for instant switching
3. Pre-translate critical content for best UX
4. Monitor cache usage with TranslationDebug component

## Demo Site Features

The included demo site showcases a complete, production-ready landing page:

### Navigation
- Clean, modern header with navigation links
- Skip-to-main-content for accessibility
- Mobile-responsive menu

### Hero Section
- Eye-catching hero with call-to-action
- GitHub repository links
- Live translation demo

### Features Section
- Four feature cards highlighting capabilities
- Icons from Lucide React
- Responsive grid layout

### Pro Version Section
- AI model showcase with icons
- Feature comparison table
- Pricing information

### Use Cases
- Industry-specific examples
- Real-world applications
- E-commerce, education, healthcare, finance, and more

### FAQ Section
- Interactive accordion
- Common questions answered
- Smooth animations

### Footer
- Legal links (Privacy Policy, Terms, Cookie Policy)
- Project credits
- Social links

## Legal Compliance

### Cookie Consent
- GDPR-compliant banner
- Accept/decline options
- Link to privacy policy
- LocalStorage persistence

### Legal Pages
- Privacy Policy link
- Terms of Service link
- Cookie Policy link
- All accessible from footer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Rate Limit Errors

If you encounter "Slowdown: 10 per 1 minute" errors:

1. **Use Local Languages**: For Chinese, English, and Spanish, the app uses pre-translated components that don't make API calls
2. **Self-Host LibreTranslate**: Run your own instance for unlimited translations
3. **Enable Caching**: Once content is cached, switching back won't trigger API calls
4. **Custom API**: Configure your own translation service endpoint

### Performance Issues

1. Target specific elements with `targetElementId` instead of translating the entire page
2. Use `data-no-translate` to skip elements that don't need translation
3. Leverage local language support for frequently accessed languages

## Development

### Project Structure

```
src/
├── components/
│   ├── AIModelIcons.tsx       # AI model icons
│   ├── CookieConsent.tsx      # GDPR cookie banner
│   ├── DemoContent.tsx        # Chinese demo page (local)
│   ├── DemoContentEnglish.tsx # English demo page (local)
│   ├── DemoContentSpanish.tsx # Spanish demo page (local)
│   ├── NotFound.tsx           # 404 error page
│   ├── TranslationDebug.tsx   # Debug component
│   └── TranslationWidget.tsx  # Main widget
├── services/
│   ├── domTranslator.ts       # DOM translation logic
│   └── translation.ts         # API service
├── App.tsx                     # Main app component
└── index.css                   # Global styles

public/
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # Site structure
└── standalone-widget.html      # Standalone example
```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use in personal and commercial projects.

## Credits

Built with:
- [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) - Free, open-source translation API
- [React](https://react.dev/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Build tool

## Support

For issues, questions, or contributions, please visit:
- [GitHub Repository](https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US)
- [Issue Tracker](https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US/issues)

---

Created and maintained by **Hybrid Ads.ai**

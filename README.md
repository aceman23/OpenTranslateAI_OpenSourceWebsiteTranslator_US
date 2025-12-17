# Website Translation Plugin Widget

A beautiful, production-ready translation widget for React applications. Translate your website content into multiple languages with a simple, easy-to-use component.

🔗 **[View on GitHub](https://github.com/aceman23/open-website-translator-widget)**

## Recent Updates

### UI/UX Improvements
- **Redesigned Features Section**: Updated the Open Source Features section to display 4 cards in a single row on large screens for better visual presentation
- **Centralized CTA**: Removed individual buttons from each feature card and added a single, prominent "View on GitHub" button below the feature cards
- **Enhanced Section Headers**: Added descriptive subtitles to feature sections for better context
- **Improved Navigation**: Changed navigation button from "Install Now" to "Click Demo" for clearer user guidance
- **Updated Hero CTA**: Replaced "View Demo" button with "View on GitHub" button that links directly to the repository
- **Responsive Design**: Cards gracefully adapt from 4 columns on desktop to stacked layout on mobile devices

## Features

- **Smart DOM Translation**: Preserves HTML structure, styles, and interactive elements
- **Multi-Language Support**: Chinese, English, Spanish, French, German, Japanese, Korean, Arabic, Hindi, Portuguese
- **Smart Caching System**: Instant language switching with zero latency once cached
- **Batch Processing**: Translates content in optimized batches with progress tracking
- **Beautiful Demo Page**: Production-ready landing page with bilingual content (English/Chinese)
- **Beautiful UI**: Modern, accessible design with smooth animations
- **Easy Integration**: Simple React component that works out of the box

## Demo Content

The project includes a fully-featured demo landing page showcasing the translation widget:

- **Bilingual Support**: Available in both English (`DemoContentEnglish.tsx`) and Chinese (`DemoContent.tsx`)
- **Modern Navigation**:
  - "Click Demo" button in the header navigation for quick access to demo section
  - Clean, minimal navigation with Features, Go Pro, and Pricing links
- **Hero Section**:
  - Prominent "View on GitHub" CTA button linking to the repository
  - Secondary "Contribute on GitHub" link for open-source contributors
- **Feature Showcase**: Four beautifully designed feature cards in a single row layout:
  - Multi-Language Support
  - Privacy Protection
  - Real-time Translation
  - Smart Caching
  - Centralized "View on GitHub" CTA button below the feature cards
  - Descriptive subtitle: "Powerful translation capabilities, completely free and open source"
- **Use Cases Section**: Real-world application scenarios
- **Pro Version Comparison**: Detailed comparison of free vs pro features
- **FAQ Section**: Common questions about translation and privacy
- **Responsive Design**: Mobile-friendly layout adapting from 4 columns on desktop to stacked cards on mobile

## Quick Start

### Using in React

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
        {/* Your content */}
      </div>
    </>
  );
}
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultLang` | string | `'zh'` | Initial language code |
| `apiUrl` | string | Public translation API | Custom translation API URL |
| `apiKey` | string | undefined | API key for authentication (if required) |
| `targetElementId` | string | `'translatable-content'` | ID of element to translate |
| `position` | string | `'top-right'` | Widget position: top-left, top-right, bottom-left, bottom-right |

## Preventing Translation

Add `data-no-translate` attribute to elements that should not be translated:

```html
<button data-no-translate>Click Me</button>
<div data-no-translate>
  <!-- This entire section will not be translated -->
</div>
```

## Using Custom Translation API

You can configure the widget to use your own translation API:

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
3. **Smart Caching**: Translations cached for instant switching with zero latency
4. **Precise Updates**: Direct text node updates preserve DOM structure

### Key Components

- **TranslationService** (`src/services/translation.ts`): API communication and smart caching
- **DOMTranslator** (`src/services/domTranslator.ts`): DOM traversal and text replacement
- **TranslationWidget** (`src/components/TranslationWidget.tsx`): UI widget component
- **DemoContent** (`src/components/DemoContent.tsx`): Chinese demo landing page
- **DemoContentEnglish** (`src/components/DemoContentEnglish.tsx`): English demo landing page

## Supported Languages

Currently configured languages include:

- Chinese (中文) - `zh`
- English - `en`
- Spanish (Español) - `es`
- French (Français) - `fr`
- German (Deutsch) - `de`
- Japanese (日本語) - `ja`
- Korean (한국어) - `ko`
- Arabic (العربية) - `ar`
- Hindi (हिन्दी) - `hi`
- Portuguese (Português) - `pt`

## Performance Tips

1. **Use specific target elements** instead of translating the entire page
2. **Smart caching** enables instant language switching after initial translation
3. **Translation cache** automatically reduces API calls for repeated content
4. **Batch processing** optimizes API usage and reduces network overhead

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

MIT License - feel free to use in personal and commercial projects

## Credits

Built with:
- [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) - Translation API
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons

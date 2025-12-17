# Open-Source Website Translator

A production-ready, SEO-optimized translation widget for React applications. Translate your website content into multiple languages with a beautiful, accessible component that's ready for production use.

🔗 **[View on GitHub](https://github.com/aceman23/open-website-translator-widget)**

## Features

### Core Translation Features
- **Smart DOM Translation**: Preserves HTML structure, styles, and interactive elements
- **Multi-Language Support**: 10+ languages including Chinese, English, Spanish, French, German, Japanese, Korean, Arabic, Hindi, and Portuguese
- **Smart Caching System**: Instant language switching with zero latency once cached
- **Batch Processing**: Optimized translation with progress tracking
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

For better performance, provide pre-translated content for specific languages:

```tsx
function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en'>('zh');

  return (
    <>
      <TranslationWidget
        defaultLang="zh"
        onLanguageChange={(lang) => {
          if (lang === 'zh' || lang === 'en') {
            setLocalLang(lang);
          }
        }}
        localLanguages={['zh', 'en']}
      />
      {localLang === 'zh' ? <ChineseContent /> : <EnglishContent />}
    </>
  );
}
```

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
- **DemoContent** (`src/components/DemoContent.tsx`): Chinese demo page
- **DemoContentEnglish** (`src/components/DemoContentEnglish.tsx`): English demo page

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

| Language | Code | Native Name |
|----------|------|-------------|
| Chinese | zh | 中文 |
| English | en | English |
| Spanish | es | Español |
| French | fr | Français |
| German | de | Deutsch |
| Japanese | ja | 日本語 |
| Korean | ko | 한국어 |
| Arabic | ar | العربية |
| Hindi | hi | हिन्दी |
| Portuguese | pt | Português |

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

## Development

### Project Structure

```
src/
├── components/
│   ├── AIModelIcons.tsx       # AI model icons
│   ├── CookieConsent.tsx      # GDPR cookie banner
│   ├── DemoContent.tsx        # Chinese demo page
│   ├── DemoContentEnglish.tsx # English demo page
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
- [GitHub Repository](https://github.com/aceman23/open-website-translator-widget)
- [Issue Tracker](https://github.com/aceman23/open-website-translator-widget/issues)

---

Created and maintained by **Hybrid Ads.ai**

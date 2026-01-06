import { useState } from 'react';
import { TranslationWidget } from './components/TranslationWidget';
import { TranslationDebug } from './components/TranslationDebug';
import { DemoContent } from './components/DemoContent';
import { DemoContentEnglish } from './components/DemoContentEnglish';
import { CookieConsent } from './components/CookieConsent';
import { WaitlistPopup } from './components/WaitlistPopup';

function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en'>('en');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <TranslationWidget
        defaultLang="en"
        targetElementId="translatable-content"
        position="top-right"
        onLanguageChange={(lang) => {
          if (lang === 'zh' || lang === 'en') {
            setLocalLang(lang);
          }
        }}
        localLanguages={['zh', 'en']}
      />
      <TranslationDebug />
      {localLang === 'zh' ? (
        <DemoContent onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      ) : (
        <DemoContentEnglish onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      )}
      <CookieConsent />
      <WaitlistPopup isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </>
  );
}

export default App;

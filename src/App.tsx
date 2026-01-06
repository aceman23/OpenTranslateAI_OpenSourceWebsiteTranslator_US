import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TranslationWidget } from './components/TranslationWidget';
import { TranslationDebug } from './components/TranslationDebug';
import { DemoContent } from './components/DemoContent';
import { DemoContentEnglish } from './components/DemoContentEnglish';
import { DemoContentSpanish } from './components/DemoContentSpanish';
import { CookieConsent } from './components/CookieConsent';
import { WaitlistPopup } from './components/WaitlistPopup';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiePolicy } from './components/CookiePolicy';
import { NotFound } from './components/NotFound';

function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en' | 'es'>('en');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <TranslationWidget
              defaultLang="en"
              targetElementId="translatable-content"
              position="top-right"
              onLanguageChange={(lang) => {
                if (lang === 'zh' || lang === 'en' || lang === 'es') {
                  setLocalLang(lang);
                }
              }}
              localLanguages={['zh', 'en', 'es']}
            />
            <TranslationDebug />
            {localLang === 'zh' ? (
              <DemoContent onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            ) : localLang === 'es' ? (
              <DemoContentSpanish onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            ) : (
              <DemoContentEnglish onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            )}
            <CookieConsent />
            <WaitlistPopup isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

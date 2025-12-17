import { useState } from 'react';
import { TranslationWidget } from './components/TranslationWidget';
import { TranslationDebug } from './components/TranslationDebug';
import { DemoContent } from './components/DemoContent';
import { DemoContentEnglish } from './components/DemoContentEnglish';

function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en'>('zh');

  return (
    <>
      <TranslationWidget
        defaultLang="zh"
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
      {localLang === 'zh' ? <DemoContent /> : <DemoContentEnglish />}
    </>
  );
}

export default App;

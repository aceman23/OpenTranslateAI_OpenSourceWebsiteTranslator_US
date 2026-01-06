import { useState } from 'react';
import { ArrowRight, Shield, Gauge, Zap, Eye, Users, FileText, Check, Github, Circle, Info, Sparkles, Target, Gift, Crown, Globe, TrendingUp, Download } from 'lucide-react';
import { OllamaIcon, OpenAIIcon, ClaudeIcon, GrokIcon, QwenIcon } from './AIModelIcons';
import { AnimatedButton } from './AnimatedButton';

interface DemoContentProps {
  onOpenWaitlist: () => void;
}

export function DemoContent({ onOpenWaitlist }: DemoContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="translatable-content" className="min-h-screen bg-[#F9F9F9] text-gray-900 antialiased overflow-x-hidden flex flex-col scroll-smooth">
      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 animate-fade-up">
        <nav className="glass-nav border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300">
          <a href="#" className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors">
            <span className="text-2xl tracking-tight font-serif italic font-medium">OpenTranslateAI.com</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-montserrat font-medium text-gray-500">
            <a href="#features" className="hover:text-rose-600 transition-colors">功能</a>
            <a href="#pro" className="hover:text-rose-600 transition-colors">专业版</a>
            <a href="#pricing" className="hover:text-rose-600 transition-colors">定价</a>
          </div>

          <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

          <a href="#demo" className="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium">
            点击演示
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </nav>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto pt-32 px-6 pb-20 flex-grow w-full">
        {/* Hero Section */}
        <div className="bg-white rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-sm border border-gray-100 relative overflow-hidden group transition-shadow duration-700">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-montserrat font-semibold mb-8 shadow-sm hover:border-rose-200 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                开源版本 V1.0
              </div>

              <h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
                网站<span className="italic text-gray-400">翻译</span><br />
                变得<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">即时</span>且<br />
                隐私。
              </h1>

              <p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
                立即将您的网站从中文翻译成英文及更多语言。由 LibreTranslate 等开源工具提供支持。无需服务器。
              </p>

              <div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
                <AnimatedButton text="在 GitHub 上查看" href="https://github.com/aceman23/open-website-translator-widget" />
                <button
                  onClick={onOpenWaitlist}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-full text-base hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-montserrat font-medium flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  加入等候名单
                </button>
                <a href="https://github.com/aceman23/open-website-translator-widget" target="_blank" rel="noopener noreferrer" className="text-gray-600 px-6 py-4 rounded-full text-base hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2 group/link">
                  <Github className="w-4 h-4 text-gray-400 group-hover/link:text-gray-900 transition-colors" />
                  在 GitHub 上贡献
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full animate-slide-in delay-300">
              <div className="absolute top-10 right-10 w-full h-full bg-orange-100/50 rounded-[2rem] -rotate-3 z-0"></div>
              <div className="relative h-full w-full bg-gradient-to-br from-orange-50/80 via-white to-rose-50/80 rounded-[2rem] overflow-hidden shadow-2xl border border-orange-100/50 z-10 group/image flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>

                <div className="absolute top-20 right-10 md:right-16 z-30 animate-fade-up delay-500">
                  <div className="bg-orange-100/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-orange-200/50 rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                  </div>
                </div>

                <div className="absolute bottom-20 left-10 md:left-16 z-30 animate-fade-up delay-700">
                  <div className="bg-orange-100/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-orange-200/50 -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                </div>

                <div className="relative z-20 w-[85%] max-w-md bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-8 transition-transform duration-500 hover:scale-[1.02]">
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#FFF0E6] p-4 rounded-xl flex items-center justify-between group cursor-default hover:bg-[#ffe4d1] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-orange-500 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <span className="text-gray-900 font-montserrat font-medium text-lg">你好世界</span>
                      </div>
                      <span className="text-gray-500 text-xs font-bold tracking-wider opacity-60">中文</span>
                    </div>

                    <div className="bg-[#E6E8FF] p-4 rounded-xl flex items-center justify-between group cursor-default hover:bg-[#dce0ff] transition-colors shadow-sm ring-1 ring-indigo-100/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-indigo-500 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
                        </div>
                        <span className="text-gray-900 font-montserrat font-medium text-lg">Hello World</span>
                      </div>
                      <span className="text-gray-500 text-xs font-bold tracking-wider opacity-60">EN</span>
                    </div>

                    <div className="bg-[#FFF0E6] p-4 rounded-xl flex items-center justify-between group cursor-default hover:bg-[#ffe4d1] transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-orange-500 shadow-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <span className="text-gray-900 font-montserrat font-medium text-lg">Hola Mundo</span>
                      </div>
                      <span className="text-gray-500 text-xs font-bold tracking-wider opacity-60">ES</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Open-Source Version: Pros & Cons */}
        <div className="py-24">
          <h2 className="text-4xl md:text-5xl text-center mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
            免费开源版本：优缺点
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg mb-16 leading-relaxed font-montserrat max-w-3xl mx-auto">
            我们的免费版本使用 LibreTranslate 等开源工具进行客户端或自托管翻译，保持一切私密和可定制。
          </p>
          <div className="bg-white rounded-[2rem] p-12 md:p-16 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-montserrat">
                  <Check className="w-5 h-5 text-green-600" />
                  优点
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">完全免费</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      无订阅或隐藏费用。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">最大化隐私</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      在客户端或您自己的服务器上运行；不向第三方提供商发送数据。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">完全定制</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      开源代码允许您分叉、修改和按需集成。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">社区驱动</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      受益于 GitHub 贡献和持续改进。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-montserrat">
                  <Info className="w-5 h-5 text-gray-600" />
                  缺点
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">翻译质量</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      适用于一般用途（许多语言准确度为 80-90%），但可能难以处理细微差别、习语或专业术语。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">需要设置</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      需要基本配置（例如，自托管 LibreTranslate 实例以获得最佳性能）。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">性能限制</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      在低资源设置上可能较慢；公共实例可能有速率限制。
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">高级功能较少</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      没有内置的模型切换或高级 AI 增强功能。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2626] rounded-2xl p-8 md:p-10 mt-6">
              <p className="text-white text-center text-base md:text-lg leading-relaxed font-montserrat">
                适合注重隐私的用户、开发者或测试网站翻译的小型项目。为了获得更高的准确性、无缝的多模型 AI（例如 DeepSeek、Qwen、Grok）和零设置便利性，<a href="#pro" className="underline font-semibold hover:text-orange-400 transition-colors">升级到我们的 Pro 版本（即将推出）！</a>
              </p>
            </div>
          </div>
        </div>

        {/* Features (Free Version) */}
        <div id="features" className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-gray-900 font-montserrat font-semibold">
              开源功能
            </h2>
            <p className="text-gray-600 text-lg font-montserrat font-medium">
              强大的翻译能力，完全免费且开源
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#FFE4D6] rounded-2xl flex items-center justify-center mb-6 text-orange-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">多语言支持</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                支持数十种主要世界语言之间的翻译。无缝集成到您现有的内容结构中。
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#E0E7FF] rounded-2xl flex items-center justify-center mb-6 text-indigo-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">隐私保护</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                我们不收集数据，完全尊重用户隐私。所有翻译都在本地或通过您自己的私有实例进行。
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#FFE4D6] rounded-2xl flex items-center justify-center mb-6 text-orange-500 transition-transform group-hover:scale-[1.02] duration-500">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">实时翻译</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                即时翻译，无缝用户体验。针对最小布局偏移和最高速度进行优化。
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#E0E7FF] rounded-2xl flex items-center justify-center mb-6 text-indigo-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">智能缓存</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                缓存后，您可以即时在语言之间切换，无需额外的 API 调用。
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <AnimatedButton text="在 GitHub 上查看" href="https://github.com/aceman23/open-website-translator-widget" />
          </div>
        </div>

        {/* Pro Section */}
        <div id="pro" className="bg-gray-900 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-4 py-1 text-xs font-montserrat font-semibold text-rose-400 mb-8">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              专业版（即将推出）
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight font-medium">
                  多 AI 模型<br /><span className="text-gray-400 italic">驱动翻译。</span><br /><span className="text-rose-400 text-2xl">（即将推出）</span>
                </h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-montserrat">
                  通过<span className="text-white font-semibold">多模型 AI 切换</span>解锁高级翻译，以获得卓越的准确性。非常适合教育科技中复杂的中英文翻译。
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Circle className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">模型切换</h4>
                      <p className="text-gray-500 text-sm mt-1 font-montserrat">
                        即时选择顶级引擎：Grok、Gemini、GPT-4o、Claude 或针对中文优化的模型，如 DeepSeek 和 Qwen。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Circle className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">托管代理（无需设置）</h4>
                      <p className="text-gray-500 text-sm mt-1 font-montserrat">
                        添加您的网站一次。我们安全地处理 API 密钥。客户端不会暴露。
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Zap className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">无限使用</h4>
                      <p className="text-gray-500 text-sm mt-1 font-montserrat">
                        无速率限制。通过 Groq 基础设施实现超快推理。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <AnimatedButton text="加入候补名单" href="#" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-8 font-mono text-sm text-gray-300">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-500 mb-2">// config.js</p>
                <p><span className="text-purple-400">const</span> translator = <span className="text-blue-400">new</span> OpenTranslate({'{'}</p>
                <p className="pl-4">apiKey: <span className="text-green-400">"hidden_proxy_token"</span>,</p>
                <p className="pl-4">models: [</p>
                <p className="pl-8 text-orange-300">"deepseek-r1",</p>
                <p className="pl-8 text-orange-300">"gpt-4o",</p>
                <p className="pl-8 text-orange-300">"claude-3.5-sonnet"</p>
                <p className="pl-4">],</p>
                <p className="pl-4">glossary: {'{'}</p>
                <p className="pl-8"><span className="text-orange-300">"EdTech"</span>: <span className="text-green-400">"教育科技"</span></p>
                <p className="pl-4">{'}'}</p>
                <p>{'});'}</p>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span>翻译准确率</span>
                    <span className="text-green-400">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-2">
                    <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Models Marquee */}
        <div className="w-full py-12 mt-8 overflow-hidden marquee-mask relative group bg-transparent">
          <div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused]">
            <div className="flex items-center justify-around w-1/2 gap-16 px-8">
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <OllamaIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Ollama</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <OpenAIIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">GPT-4o</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <ClaudeIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Claude 3.5</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <GrokIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Grok</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <QwenIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Qwen</span>
              </div>
            </div>
            <div className="flex items-center justify-around w-1/2 gap-16 px-8">
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <OllamaIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Ollama</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <OpenAIIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">GPT-4o</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <ClaudeIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Claude 3.5</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <GrokIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Grok</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-300 hover:scale-110">
                <QwenIcon size={32} />
                <span className="text-lg font-montserrat font-semibold text-gray-700">Qwen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Version: Pros & Cons Section */}
        <div className="py-24">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-10 md:p-14 shadow-xl border border-gray-700">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6 tracking-tight text-white font-montserrat font-semibold">
                专业版：优缺点<br /><span className="text-rose-400 text-xl">（即将推出）</span>
              </h2>
              <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed font-montserrat max-w-3xl mx-auto">
                我们的专业版通过安全的托管后端为您提供尖端的多模型 AI 支持（Grok、Gemini、GPT-4o、Claude、DeepSeek、Qwen、Kimi、MiniMax 等），无需 API 密钥或自行托管。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3 font-montserrat">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  优点
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">卓越的翻译质量</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      90-98% 的准确率，上下文感知 AI 模型擅长处理细微差别、习语和专业术语（非常适合教育科技、法律或技术内容）。
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">无缝模型切换</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      为每个任务选择最佳的 AI 引擎（例如，DeepSeek/Qwen 在中英文互译方面表现卓越）。
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">零配置与无限使用</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      托管代理处理一切：无速率限制或实例管理。
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">额外功能</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      实时全页翻译、自定义词汇表、分析和优先支持。
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-8 flex items-center gap-3 font-montserrat">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <Circle className="w-5 h-5 text-red-400" />
                  </div>
                  缺点
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">订阅费用</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      付费计划起价为每月 $9（年度订阅享有折扣）。
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">需要网络连接</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      依赖云 API 提供高级模型支持（不像完全离线的免费版本）。
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-2 font-montserrat text-base">核心代码定制化程度较低</p>
                    <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
                      高级功能在服务器端管理，以确保安全性和可靠性。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed font-montserrat">
              非常适合企业、教育科技平台以及任何需要专业级、无忧多语言网站的人。准备好轻松走向全球化了吗？立即升级到专业版（即将推出）！🚀
            </p>
          </div>
        </div>

        {/* Multi-AI Model Powered Features */}
        <div className="py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-montserrat font-bold text-rose-600 mb-6">
              <Crown className="w-3.5 h-3.5" />
              专业版（即将推出）
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-gray-900 font-montserrat font-semibold">
              多 AI 模型驱动功能
            </h2>
            <p className="text-gray-600 text-lg font-montserrat max-w-3xl mx-auto">
              通过 OpenRouter 访问 100+ AI 模型，解锁专业级翻译
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Model Switching Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[2rem] p-8 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-xl mb-4 text-white font-montserrat font-semibold">模型切换</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-montserrat mb-6">
                从顶级 AI 引擎中选择
              </p>

              <div className="space-y-3 mb-4">
                <div className="text-xs font-montserrat font-bold text-gray-500 uppercase tracking-wider">云端模型</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Grok</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Gemini</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">GPT-4o</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Claude</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-montserrat font-bold text-gray-500 uppercase tracking-wider">开源模型</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">DeepSeek</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Qwen</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Kimi</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-montserrat">Llama</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 py-2.5 rounded-xl text-sm font-montserrat font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all">
                查看所有模型
              </button>
            </div>

            {/* Higher Quality Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-[2rem] p-8 border border-green-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-lg">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-4 text-white font-montserrat font-semibold">更高质量</h3>
              <p className="text-white/90 text-sm leading-relaxed font-montserrat mb-6">
                上下文感知的准确翻译
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-montserrat">上下文感知翻译</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-montserrat">神经网络驱动</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-sm font-montserrat">胜过基础 LibreTranslate</span>
                </div>
              </div>

              <div className="mt-6 bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-xs font-montserrat font-semibold">准确率</span>
                  <span className="text-white text-lg font-montserrat font-bold">90-98%</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            {/* No Setup Hassle Card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-[2rem] p-8 border border-blue-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-lg">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-4 text-white font-montserrat font-semibold">无需配置</h3>
              <p className="text-white/90 text-sm leading-relaxed font-montserrat mb-6">
                托管后端代理 - 一次添加您的网站
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-montserrat">无需暴露 API 密钥</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-montserrat">安全后端代理</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90 text-sm font-montserrat">一次性设置</span>
                </div>
              </div>

              <div className="mt-6 bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-white text-2xl font-montserrat font-bold mb-1">即插即用</div>
                <div className="text-white/80 text-xs font-montserrat">只需添加一行代码</div>
              </div>
            </div>

            {/* Extra Features Card */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-[2rem] p-8 border border-purple-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white shadow-lg">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-xl mb-4 text-white font-montserrat font-semibold">额外功能</h3>
              <p className="text-white/90 text-sm leading-relaxed font-montserrat mb-6">
                高级功能的无限使用
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-white text-white" />
                  <span className="text-white/90 text-sm font-montserrat">实时翻译</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-white text-white" />
                  <span className="text-white/90 text-sm font-montserrat">自定义词汇表</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-white text-white" />
                  <span className="text-white/90 text-sm font-montserrat">分析和 SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="w-2 h-2 fill-white text-white" />
                  <span className="text-white/90 text-sm font-montserrat">优先支持</span>
                </div>
              </div>

              <div className="mt-6 bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <div className="text-white text-sm font-montserrat font-semibold mb-1">无限制</div>
                <div className="text-white/80 text-xs font-montserrat">无速率限制</div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect for Every Industry */}
        <div className="py-24">
          <h2 className="text-4xl md:text-5xl text-center mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
            适用于各行各业
          </h2>
          <p className="text-center text-gray-500 text-lg mb-16 max-w-3xl mx-auto font-montserrat">
            从电商到教育、医疗到旅游——我们的翻译解决方案适应您的独特需求
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">电子商务</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                通过本地化产品页面和结账体验实现全球销售
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">教育</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                让学生在任何地方都能以任何语言学习
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">医疗保健</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                以患者的母语提供关键健康信息
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">金融</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                提供安全的多语言银行和投资平台
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">房地产</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                轻松向国际买家展示房产
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><rect width="10" height="8" x="7" y="8" rx="1"></rect></svg>
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">科技与SaaS</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                通过本地化界面实现软件全球化
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">旅游</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                以旅客的语言提供预订网站服务
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 group">
              <div className="mb-6 w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900 font-montserrat font-semibold">法律</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-montserrat">
                准确翻译法律文件和客户门户
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-24">
          <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-montserrat font-semibold">
            透明定价
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left text-gray-500 text-sm font-montserrat">
                  <th className="py-2 px-6 font-medium">功能</th>
                  <th className="py-2 px-6 font-medium">免费（开源）</th>
                  <th className="py-2 px-6 font-medium text-rose-600">专业版 ($9/月)</th>
                  <th className="py-2 px-6 font-medium">企业版 ($49+)</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base font-montserrat font-medium">
                <tr className="bg-white shadow-sm hover:shadow-md transition-shadow group">
                  <td className="py-6 px-6 rounded-l-2xl text-gray-900">基础翻译</td>
                  <td className="py-6 px-6 text-gray-600">✓ (LibreTranslate)</td>
                  <td className="py-6 px-6 text-gray-900 bg-rose-50/30 group-hover:bg-rose-50 transition-colors">✓</td>
                  <td className="py-6 px-6 rounded-r-2xl text-gray-900">✓</td>
                </tr>
                <tr className="bg-white shadow-sm hover:shadow-md transition-shadow group">
                  <td className="py-6 px-6 rounded-l-2xl text-gray-900">多模型切换</td>
                  <td className="py-6 px-6 text-gray-400">✗</td>
                  <td className="py-6 px-6 text-rose-600 font-semibold bg-rose-50/30 group-hover:bg-rose-50 transition-colors">✓ (DeepSeek, Grok...)</td>
                  <td className="py-6 px-6 rounded-r-2xl text-gray-900">✓</td>
                </tr>
                <tr className="bg-white shadow-sm hover:shadow-md transition-shadow group">
                  <td className="py-6 px-6 rounded-l-2xl text-gray-900">托管代理</td>
                  <td className="py-6 px-6 text-gray-400">✗</td>
                  <td className="py-6 px-6 text-gray-900 bg-rose-50/30 group-hover:bg-rose-50 transition-colors">✓</td>
                  <td className="py-6 px-6 rounded-r-2xl text-gray-900">✓</td>
                </tr>
                <tr className="bg-white shadow-sm hover:shadow-md transition-shadow group">
                  <td className="py-6 px-6 rounded-l-2xl text-gray-900">自定义词汇表</td>
                  <td className="py-6 px-6 text-gray-400">✗</td>
                  <td className="py-6 px-6 text-gray-400 bg-rose-50/30 group-hover:bg-rose-50 transition-colors">✗</td>
                  <td className="py-6 px-6 rounded-r-2xl text-gray-900">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-6 text-gray-400 text-sm font-montserrat">年度计划享受 20% 折扣。提供免费试用。</p>
        </div>

        {/* FAQ */}
        <div className="py-24">
          <h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-montserrat font-semibold">
            常见问题
          </h2>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <div className="border-b border-gray-100 pb-8 mb-8">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex justify-between items-start gap-4 text-left cursor-pointer group"
              >
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  开源翻译如何保护我的隐私？
                </h3>
                <div className={`mt-1 text-gray-400 transition-transform duration-300 ${openFaqIndex === 0 ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M3 20h18L12 4z"></path>
                  </svg>
                </div>
              </button>
              {openFaqIndex === 0 && (
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-montserrat font-medium animate-fade-up">
                  与商业 API 不同，我们的开源解决方案完全在您的基础设施上运行。不会向第三方发送数据，让您完全掌控敏感信息。
                </p>
              )}
            </div>

            <div className="border-b border-gray-100 pb-8 mb-8">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-start gap-4 text-left cursor-pointer group"
              >
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  支持哪些语言？
                </h3>
                <div className={`mt-1 text-gray-400 transition-transform duration-300 ${openFaqIndex === 1 ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M3 20h18L12 4z"></path>
                  </svg>
                </div>
              </button>
              {openFaqIndex === 1 && (
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-montserrat font-medium animate-fade-up">
                  LibreTranslate 支持超过 30 种语言，包括英语、西班牙语、法语、德语、中文、日语等等。语言列表随着社区贡献不断扩展。
                </p>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-start gap-4 text-left cursor-pointer group"
              >
                <h3 className="text-lg font-montserrat font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                  如何将其集成到我的网站中？
                </h3>
                <div className={`mt-1 text-gray-400 transition-transform duration-300 ${openFaqIndex === 2 ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M3 20h18L12 4z"></path>
                  </svg>
                </div>
              </button>
              {openFaqIndex === 2 && (
                <p className="mt-3 text-gray-500 text-sm leading-relaxed font-montserrat font-medium animate-fade-up">
                  使用我们的 JavaScript 小部件集成很简单。只需包含我们的脚本并添加几行代码。提供详细的文档和示例，帮您快速入门。
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Roadmap & Technical */}
        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-200 pt-20">
          <div>
            <h3 className="text-3xl mb-8 tracking-tight text-gray-900 font-montserrat font-semibold">
              路线图
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center"></div>
                <div>
                  <p className="text-gray-900 font-medium font-montserrat">专业版 Beta 发布</p>
                  <p className="text-gray-500 text-sm">2026 年第一季度</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center"></div>
                <div>
                  <p className="text-gray-900 font-medium font-montserrat">集成</p>
                  <p className="text-gray-500 text-sm">WordPress 插件、Webflow 应用</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center"></div>
                <div>
                  <p className="text-gray-900 font-medium font-montserrat">社区模型</p>
                  <p className="text-gray-500 text-sm">通过 Ollama 支持本地 LLM</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-2xl mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
              专业版工作原理
            </h3>
            <p className="text-gray-600 leading-relaxed font-montserrat font-medium mb-6">
              专业版使用轻量级后端（无服务器上的 Node.js）将翻译请求路由到 OpenRouter 和 Groq API。
            </p>
            <p className="text-gray-600 leading-relaxed font-montserrat font-medium">
              您将收到一个带有安全嵌入式 API 令牌的自定义小部件脚本，因此您的密钥永远不会在浏览器中暴露。
            </p>
          </div>
        </div>

        {/* CTA Callout Card */}
        <div className="py-24">
          <div className="bg-[#121D1D] rounded-[2rem] p-12 md:p-20 text-center shadow-2xl mx-auto relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl text-white mb-6 font-montserrat font-semibold tracking-tight">
              翻译网站. 构建您的未来
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-montserrat font-medium">
              加入数百名已经使用此解决方案触达全球受众的开发者
            </p>
            <AnimatedButton text="免费开始" href="#" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#121D1D] w-full py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="mb-10 space-y-3">
            <p className="text-white text-sm md:text-base font-montserrat font-medium">
              基于 <span className="text-orange-500">LibreTranslate</span> 构建 | <span className="text-orange-500">完全开源</span> | <span className="text-orange-500">MIT 协议</span>
            </p>
            <p className="text-gray-400 text-sm font-montserrat font-medium">
              支持自托管或使用公共实例 | 保护您的数据隐私
            </p>
          </div>
          <div className="h-px w-full bg-white/10 mb-10 max-w-4xl"></div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              隐私政策
            </a>
            <a href="/terms" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              服务条款
            </a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              Cookie 政策
            </a>
            <a href="/translation-widget-logo.svg" download="translation-widget-logo.svg" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              下载标志
            </a>
          </div>
          <p className="text-gray-500 text-sm font-montserrat font-medium">
            创建和开发由 <span className="text-orange-500 font-semibold">Hybrid Ads.ai</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

import { ArrowRight, Zap, Check, Github, Circle, Info, Sparkles, Crown, Download, Twitter, Linkedin } from 'lucide-react';
import { AnimatedButton } from './AnimatedButton';

interface DemoContentSpanishProps {
  onOpenWaitlist: () => void;
}

export function DemoContentSpanish({ onOpenWaitlist }: DemoContentSpanishProps) {
  return (
    <div id="translatable-content" className="min-h-screen bg-[#F9F9F9] text-gray-900 antialiased overflow-x-hidden flex flex-col scroll-smooth">
      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4 animate-fade-up">
        <nav className="glass-nav border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300">
          <a href="#" className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors">
            <span className="text-2xl tracking-tight font-serif italic font-medium">OpenTranslateAI.com</span>
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm font-montserrat font-medium text-gray-500">
            <a href="#features" className="hover:text-rose-600 transition-colors">Características</a>
            <a href="#pro" className="hover:text-rose-600 transition-colors">Versión Pro</a>
            <a href="#pricing" className="hover:text-rose-600 transition-colors">Precios</a>
          </div>

          <div className="h-4 w-px bg-gray-200 hidden md:block"></div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://x.com/OpenTranslateAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-600 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/opentranslateai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-600 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a href="#demo" className="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 hidden md:flex items-center gap-2 font-montserrat font-medium">
            Ver Demo
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
                CÓDIGO ABIERTO V1.0
              </div>

              <h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
                Traducción <span className="italic text-gray-400">de Sitios</span><br />
                Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Instantánea</span> y<br />
                Privada.
              </h1>

              <p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
                Traduce tu sitio web instantáneamente del mandarín al inglés y más idiomas. Impulsado por herramientas de código abierto como LibreTranslate. Sin servidor requerido.
              </p>

              <div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
                <AnimatedButton text="Ver en GitHub" href="https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US" />
                <button
                  onClick={onOpenWaitlist}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-full text-base hover:from-blue-600 hover:to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-montserrat font-medium flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Unirse a Lista de Espera
                </button>
                <a href="https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US" target="_blank" rel="noopener noreferrer" className="text-gray-600 px-6 py-4 rounded-full text-base hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2 group/link">
                  <Github className="w-4 h-4 text-gray-400 group-hover/link:text-gray-900 transition-colors" />
                  Contribuir en GitHub
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-montserrat font-bold text-green-600">
              <Github className="w-3.5 h-3.5" />
              OPEN SOURCE VERSION
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl text-center mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
            Versión Gratuita de Código Abierto: Pros y Contras
          </h2>
          <p className="text-gray-600 text-center text-base md:text-lg mb-16 leading-relaxed font-montserrat max-w-3xl mx-auto">
            Nuestra versión gratuita usa herramientas de código abierto como LibreTranslate para traducción del lado del cliente o autoalojada, manteniendo todo privado y personalizable.
          </p>
          <div className="bg-white rounded-[2rem] p-12 md:p-16 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-montserrat">
                  <Check className="w-5 h-5 text-green-600" />
                  Ventajas
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Completamente Gratis</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Sin suscripción ni tarifas ocultas.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Máxima Privacidad</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Se ejecuta del lado del cliente o en tu propio servidor; no se envían datos a proveedores externos.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Personalización Total</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      El código abierto te permite bifurcar, modificar e integrar según sea necesario.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Impulsado por la Comunidad</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Benefíciate de las contribuciones de GitHub y mejoras continuas.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-3 font-montserrat">
                  <Info className="w-5 h-5 text-gray-600" />
                  Desventajas
                </h3>
                <div className="space-y-8">
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Calidad de Traducción</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Bueno para uso general (80-90% de precisión en muchos idiomas), pero puede tener dificultades con matices, modismos o términos especializados.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Configuración Requerida</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Necesita configuración básica (por ejemplo, autoalojar una instancia de LibreTranslate para un mejor rendimiento).
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Límites de Rendimiento</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Puede ser más lento en configuraciones de recursos limitados; las instancias públicas pueden tener límites de velocidad.
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold mb-2 font-montserrat text-base">Menos Funciones Avanzadas</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-montserrat">
                      Sin cambio de modelo integrado ni mejoras premium de IA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2626] rounded-2xl p-8 md:p-10 mt-6">
              <p className="text-white text-center text-base md:text-lg leading-relaxed font-montserrat">
                Ideal para usuarios centrados en la privacidad, desarrolladores o proyectos pequeños que prueban traducción de sitios web. Para mayor precisión, IA multimodelo sin problemas (por ejemplo, DeepSeek, Qwen, Grok) y comodidad de configuración cero, <a href="#pro" className="underline font-semibold hover:text-orange-400 transition-colors">¡actualiza a nuestra versión Pro (próximamente)!</a>
              </p>
            </div>
          </div>
        </div>

        {/* Features (Free Version) */}
        <div id="features" className="py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-montserrat font-bold text-green-600 mb-6">
              <Github className="w-3.5 h-3.5" />
              OPEN SOURCE VERSION
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-gray-900 font-montserrat font-semibold">
              Características de Código Abierto
            </h2>
            <p className="text-gray-600 text-lg font-montserrat font-medium">
              Potentes capacidades de traducción, completamente gratis y de código abierto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#FFE4D6] rounded-2xl flex items-center justify-center mb-6 text-orange-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">Soporte Multilingüe</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                Admite traducción entre docenas de idiomas principales del mundo. Se integra sin problemas con tu estructura de contenido existente.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#E0E7FF] rounded-2xl flex items-center justify-center mb-6 text-indigo-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">Protección de Privacidad</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                No recopilamos datos y respetamos completamente la privacidad del usuario. Todas las traducciones ocurren localmente o a través de tu propia instancia privada.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#FFE4D6] rounded-2xl flex items-center justify-center mb-6 text-orange-500 transition-transform group-hover:scale-[1.02] duration-500">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">Traducción en Tiempo Real</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                Traducción instantánea, experiencia de usuario sin problemas. Optimizado para un cambio de diseño mínimo y máxima velocidad.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group flex flex-col h-full">
              <div className="h-36 w-full bg-[#E0E7FF] rounded-2xl flex items-center justify-center mb-6 text-indigo-500 transition-transform group-hover:scale-[1.02] duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-3 tracking-tight">Caché Inteligente</h3>
              <p className="text-sm text-gray-500 font-montserrat font-medium leading-relaxed">
                Después del almacenamiento en caché, puedes cambiar entre idiomas instantáneamente sin llamadas API adicionales.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <AnimatedButton text="Ver en GitHub" href="https://github.com/aceman23/OpenTranslateAI_OpenSourceWebsiteTranslator_US" />
          </div>
        </div>

        {/* Pro Section */}
        <div id="pro" className="py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-montserrat font-bold text-rose-600">
              <Crown className="w-3.5 h-3.5" />
              VERSIÓN PRO (PRÓXIMAMENTE)
            </div>
          </div>
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10">

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight font-medium">
                  Traducción con<br /><span className="text-gray-300 italic">Múltiples Modelos IA.</span>
                </h2>
                <p className="text-lg text-gray-300 mb-10 leading-relaxed font-montserrat">
                  Desbloquea traducción avanzada con <span className="text-white font-semibold">cambio de modelo IA múltiple</span> para una precisión superior. Ideal para idiomas complejos como chino a inglés en EdTech.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Circle className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">Cambio de Modelo</h4>
                      <p className="text-gray-400 text-sm mt-1 font-montserrat">
                        Elige los mejores motores sobre la marcha: Grok, Gemini, GPT-4o, Claude, o modelos optimizados para chino como DeepSeek y Qwen.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Circle className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">Proxy Alojado (Sin Configuración)</h4>
                      <p className="text-gray-400 text-sm mt-1 font-montserrat">
                        Agrega tu sitio una vez. Manejamos las claves API de forma segura. Sin exposición en el lado del cliente.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-gray-800 p-3 rounded-xl h-fit">
                      <Zap className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-semibold font-montserrat">Uso Ilimitado</h4>
                      <p className="text-gray-400 text-sm mt-1 font-montserrat">
                        Sin límites de velocidad. Inferencia ultra rápida a través de la infraestructura Groq.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <AnimatedButton text="Unirse a Lista de Espera" href="#" />
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-3xl p-8 font-mono text-sm text-gray-300">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-400 mb-2">// config.js</p>
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
                    <span>Precisión de Traducción</span>
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
        </div>

        {/* CTA Callout Card */}
        <div className="py-24">
          <div className="bg-[#121D1D] rounded-[2rem] p-12 md:p-20 text-center shadow-2xl mx-auto relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl text-white mb-6 font-montserrat font-semibold tracking-tight">
              Traduce Sitios Web. Construye tu Futuro
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto font-montserrat font-medium">
              Únete a cientos de desarrolladores que ya están usando esta solución para llegar a audiencias globales
            </p>
            <AnimatedButton text="Comenzar Gratis" href="#" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#121D1D] w-full py-16 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="mb-10 space-y-3">
            <p className="text-white text-sm md:text-base font-montserrat font-medium">
              Construido con <span className="text-orange-500">LibreTranslate</span> | <span className="text-orange-500">Totalmente de Código Abierto</span> | <span className="text-orange-500">Licencia MIT</span>
            </p>
            <p className="text-gray-400 text-sm font-montserrat font-medium">
              Admite autoalojamiento o instancias públicas | Protege la privacidad de tus datos
            </p>
          </div>
          <div className="h-px w-full bg-white/10 mb-10 max-w-4xl"></div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <a href="https://x.com/OpenTranslateAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/opentranslateai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/privacy-policy" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              Política de Privacidad
            </a>
            <a href="/terms" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              Términos de Servicio
            </a>
            <a href="/cookie-policy" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors">
              Política de Cookies
            </a>
            <a href="/translation-widget-logo.svg" download="translation-widget-logo.svg" className="text-gray-400 hover:text-orange-500 text-sm font-montserrat font-medium transition-colors flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              Descargar Logo
            </a>
          </div>
          <p className="text-gray-500 text-sm font-montserrat font-medium">
            Creado y Desarrollado por <span className="text-orange-500 font-semibold">Hybrid Ads.ai</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

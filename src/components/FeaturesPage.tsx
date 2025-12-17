import { CheckCircle, Zap, Shield, Globe, Sparkles, ArrowRight, Crown, GraduationCap, ShoppingCart, Layers, Bot, Languages, Code, Server, List, Target, TrendingUp, Infinity, Gift, Github } from 'lucide-react';

export function FeaturesPage() {
  return (
    <div id="translatable-content" className="min-h-screen bg-[#FFF8F3]">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose the version that fits your needs
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFE6D5] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#FF9A6C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Free Version</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Client-side translation</span> - privacy-focused, no data sent to servers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">LibreTranslate API support</span> - self-hosted or public instances
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Simple language switcher</span> - easy-to-use dropdown interface
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Works everywhere</span> - static and dynamic sites
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Lightweight JavaScript</span> - no dependencies required
                  </p>
                </div>
              </div>
              <button className="w-full mt-8 bg-[#1A2E2C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Get Started Free
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl border-2 border-[#FF9A6C] relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="w-8 h-8 text-[#FF9A6C]" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FF9A6C] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Pro Version</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Multi-AI Model Powered Translation
              </p>
              <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <h3 className="text-white font-bold text-xl mb-4">Why Go Pro?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Model Switching</p>
                      <p className="text-gray-300 text-sm">
                        Choose from top AI engines on-the-fly: Grok, Gemini, GPT-4o, Claude, DeepSeek, Qwen, Kimi, MiniMax, Llama variants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Superior Quality</p>
                      <p className="text-gray-300 text-sm">
                        90-98% accuracy with context-aware neural translation, beats basic LibreTranslate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">No Setup Hassle</p>
                      <p className="text-gray-300 text-sm">
                        Hosted backend proxy - add your site once, no API keys exposed client-side
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Unlimited Usage</p>
                      <p className="text-gray-300 text-sm">
                        No rate limits, faster inference via Groq for speed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">Extra Features</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF9A6C]" />
                    Real-time page translation
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#FF9A6C]" />
                    Custom glossaries (e.g., edtech terms for sites like Apply7)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF9A6C]" />
                    Analytics & SEO-friendly URLs
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF9A6C]" />
                    Priority support
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-[#FF9A6C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#FF8454] transition-colors flex items-center justify-center gap-2 group">
                Upgrade to Pro
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-[#FFE6D5] rounded-3xl p-12 text-center mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by OpenRouter
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Pro version uses OpenRouter's unified API for seamless access to 100+ AI models, giving you the flexibility to choose the best translation engine for your needs.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1A2E2C] to-[#0F1918] text-white px-6 py-2 rounded-full mb-4">
                <Github className="w-5 h-5" />
                <span className="font-bold">OPEN SOURCE</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Features (Free Forever)
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Privacy-first translation powered by LibreTranslate with zero dependencies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mb-6">
                  <Languages className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Client-side Translation</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Privacy-focused, no data sent to servers
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Complete privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">No server requests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">GDPR compliant</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-emerald-400/20 text-emerald-400 rounded-full border border-emerald-400/30">Enterprise Grade</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mb-6">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Lightweight JavaScript</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  No dependencies required
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Zero dependencies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Tiny bundle size</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Fast loading</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full border border-blue-400/30">Zero Latency</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-6">
                  <Server className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">LibreTranslate API</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Self-hosted or public instances
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Self-hosted option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Public instances</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Full control</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full border border-purple-400/30">Flexible</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-700">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mb-6">
                  <List className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Simple Language Switcher</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Easy-to-use dropdown interface
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Dropdown UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Easy integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Customizable</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-orange-400/20 text-orange-400 rounded-full border border-orange-400/30">User-Friendly</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://github.com/yourusername/your-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1A2E2C] to-[#0F1918] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all group"
              >
                <Github className="w-6 h-6" />
                View on GitHub
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF9A6C] to-[#FF7A4C] text-white px-6 py-2 rounded-full mb-4">
                <Crown className="w-5 h-5" />
                <span className="font-bold">PRO VERSION</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Multi-AI Model Powered Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock professional-grade translation with access to 100+ AI models through OpenRouter
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#FF9A6C]/30">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF9A6C] to-[#FF7A4C] rounded-3xl flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Model Switching</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Choose from top AI engines on-the-fly
                </p>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs text-gray-400 mb-2">CLOUD MODELS</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Grok</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Gemini</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">GPT-4o</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Claude</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-2">OPEN-SOURCE</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">DeepSeek</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Qwen</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Kimi</span>
                      <span className="px-3 py-1.5 bg-white/10 text-white text-xs rounded-lg border border-white/20">Llama</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#FF9A6C] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#FF8454] transition-colors">
                  View All Models
                </button>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#FF9A6C]/30">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Higher Quality</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  90-98% accuracy with context-aware neural translation
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Context-aware translation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Neural network powered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Beats basic LibreTranslate</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full border border-green-400/30">90-98% Accurate</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#FF9A6C]/30">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl flex items-center justify-center mb-6">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No Setup Hassle</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Hosted backend proxy - add your site once
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">No API keys exposed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">Secure backend proxy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">One-time setup</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full border border-blue-400/30">Plug & Play</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-[#FF9A6C]/30">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center mb-6">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Extra Features</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Unlimited usage with premium capabilities
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF9A6C] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Real-time translation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#FF9A6C] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Custom glossaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#FF9A6C] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Analytics & SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF9A6C] flex-shrink-0" />
                    <span className="text-sm text-gray-300">Priority support</span>
                  </div>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full border border-purple-400/30">No Limits</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF9A6C] to-[#FF7A4C] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all group">
                Upgrade to Pro
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600">
              Perfect for edtech platforms, e-commerce, SaaS platforms, or AI tools!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">EdTech Platforms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Break language barriers in education. Custom glossaries handle specialized terms perfectly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Course translations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Student portals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  Learning materials
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-Commerce</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expand globally with accurate product descriptions and checkout flows.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Product catalogs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Shopping experience
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Customer support
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SaaS Platforms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Localize your entire app interface for international users seamlessly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Dashboard UI
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  Documentation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  User onboarding
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Tools</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Power AI applications with multi-lingual capabilities and context awareness.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  Chatbot interfaces
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  AI-generated content
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  Multi-language APIs
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

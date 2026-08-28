import { html } from '../utils/html.js';
import profile from '/images/profile.webp';

export function Hero() {
    return html`

<section class="min-h-screen flex items-center justify-center py-20 px-6">
    <div class="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
        <div class="flex-shrink-0">
            <div class="w-80 h-80 md:w-86 md:h-86 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-7xl md:text-8xl shadow-2xl">
                <img class="w-80 h-80 md:w-86 md:h-86 rounded-full" src="${profile}"></img>
            </div>
        </div>

        <div class="flex-1">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
                <span class="text-white">Engenheiro de Software</span>
                <br />
                <span class="text-gray-400">Full Stack</span>
            </h1>

            <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
                Desenvolvedor apaixonado por criar soluções escaláveis e eficientes,
                com expertise em desenvolvimento web moderno e arquitetura de sistemas.
            </p>

            <div class="flex justify-center md:justify-start space-x-6 mb-12">
                <a
                    href="https://github.com/moraisz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <i data-lucide="github"></i>
                </a>
                <a
                    href="https://linkedin.com/in/moraisz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <i data-lucide="linkedin"></i>
                </a>
                <a
                    href="mailto:marcosviniciusm99@gmail.com"
                    class="p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <i data-lucide="mail"></i>
                </a>
            </div>

            <button
                onclick="scrollToSection('contato')"
                class="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
                Entre em Contato
            </button>
        </div>
    </div>
</section>

`;
};

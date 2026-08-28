import { html } from '../utils/html.js';

const sections = ["sobre", "skills", "projetos", "experiência", "contato"];

let openMenu = false;

function setOpenMenu(valor) {
    openMenu = valor;
    window.renderHeader();
}

// expõe pro onclick inline funcionar
window.setOpenMenu = setOpenMenu;

export function Header() {
  return html`
    <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <nav class="container mx-auto px-6 py-4">

        <div class="flex items-center justify-between">

          <div class="text-2xl font-bold">
            <span class="text-white">&lt;</span>
            <span class="text-gray-400">Moraisz</span>
            <span class="text-white">/&gt;</span>
          </div>

          <div class="flex items-center space-x-8">

            <!-- desktop -->
            <ul class="hidden md:flex space-x-8">
              ${sections.map((item) => `
                <li>
                  <button
                    onclick="scrollToSection('${item}');"
                    class="text-gray-400 hover:text-white transition-colors capitalize text-sm font-medium"
                  >
                    ${item}
                  </button>
                </li>
              `).join('')}
            </ul>

            <!-- botão hamburguer -->
            <button
              class="md:hidden text-white"
              onclick="setOpenMenu(${!openMenu});"
            >
              <i data-lucide="${openMenu ? 'x' : 'menu'}"></i>
            </button>

          </div>
        </div>

        <!-- menu mobile -->
        ${openMenu ? `
          <div class="md:hidden mt-4 pt-4 border-t border-gray-800">
            <ul class="space-y-4 mb-6">
              ${sections.map((item) => `
                <li>
                  <button
                    onclick="scrollToSection('${item}'); setOpenMenu(false);"
                    class="text-gray-400 hover:text-white transition-colors capitalize block w-full text-left"
                  >
                    ${item}
                  </button>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

      </nav>
    </header>
  `;
}

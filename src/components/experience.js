import { html } from '../utils/html.js';

const experiences = [
    {
        company: "Turimsoft",
        position: "Desenvolvedor Pleno",
        period: "2024 - Presente",
        description:
        "Desenvolvimento de aplicações web com PHP 8 e manutenção em sistema legado com PHP 7. Implementação de APIs REST e mentoria de desenvolvedores juniores.",
        achievements: [
            "Contribuiu para o aumento de 20% na eficiência do sistema através da otimização de consultas SQL",
            "Criou uma API REST de Proxy para integração com sistemas de terceiros, facilitando a comunicação entre plataformas",
            "Encontrou e corrigiu erros de segurança, melhorando a confiabilidade do sistema",
        ],
    },
];

export function Experience() {
    return html`

<section id="experiência" class="py-20 px-6 bg-black">
    <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold mb-12 text-center">
            <span class="text-white">Experiência </span>
            <span class="text-gray-400">Profissional</span>
        </h2>

        <div class="space-y-12 space-y-8">
            ${experiences.map((exp, index) => `
            <div
                class="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 class="text-xl font-semibold text-white mb-1">
                            ${exp.position}
                        </h3>
                        <div class="flex items-center text-gray-400">
                            <i data-lucide="briefcase" class="mr-2"></i>
                            <span>${exp.company}</span>
                        </div>
                    </div>
                    <div class="flex items-center text-gray-400 mt-2 md:mt-0">
                        <i data-lucide="calendar" class="mr-2"></i>
                        <span>${exp.period}</span>
                    </div>
                </div>

                <p class="text-gray-300 mb-4">${exp.description}</p>

                <div>
                    <h4 class="text-sm font-semibold text-gray-400 mb-2">
                        Principais Conquistas:
                    </h4>
                    <ul class="space-y-2">
                        ${exp.achievements.map((achievement, i) => `
                        <li key=${i} class="text-gray-300 flex items-start">
                            <span class="text-gray-600 mr-2">▸</span>
                            ${achievement}
                        </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

`;
};

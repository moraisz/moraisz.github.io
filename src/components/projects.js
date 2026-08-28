import { html } from '../utils/html.js';

const projects = [
    {
        title: "Blog Leticia",
        description:
        "Site de blog pessoal com painel administrativo para gerenciamento de posts e categorias, utilizando Laravel e Filament para uma experiência de administração eficiente.",
        tags: ["PHP", "Laravel", "Filament", "PostgreSQL", "Docker"],
        demo: "https://psicologaleticiamorais.com",
    },
    {
        title: "QueueFlow",
        description:
        "Aplicativo de gerenciamento de filas de atendimento, permitindo que os usuários criem e gerenciem suas filas de forma eficiente, utilizando PHP e PostgreSQL para garantir desempenho e escalabilidade.",
        tags: ["PHP", "PostgreSQL", "Docker"],
        github: "https://github.com/moraisz/queueflow",
    },
];

export function Projects() {
    return html`

<section id="projetos" class="py-20 px-6 bg-gray-950 relative overflow-hidden">
    <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col items-center mb-12">
            <h2 class="text-3xl font-bold mb-4">
                <span class="text-white">Meus </span>
                <span class="text-gray-400">Projetos</span>
            </h2>
            <div class="mb-12 h-1 w-20 bg-gradient-to-r from-gray-700 to-white rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            ${projects.map((project) => `
            <div class="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-all hover:transform hover:scale-105">
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-white mb-3">
                        ${project.title}
                    </h3>
                    <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                        ${project.description}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map((tag) => `
                        <span
                            class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                        >
                            ${tag}
                        </span>
                        `).join('')}
                    </div>

                    <div class="flex space-x-4">
                        ${project.github ? `
                        <a
                            href=${project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            <i data-lucide="github" class="mr-1"></i>
                            Código
                        </a>
                        ` : ''}
                        ${project.demo ? `
                        <a
                            href=${project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                        >
                            <i data-lucide="external-link" class="mr-1"></i>
                            Demo
                        </a>
                        ` : ''}
                    </div>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

`;
};

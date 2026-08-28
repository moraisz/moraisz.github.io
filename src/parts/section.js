export function SectionComponent() {
    return html`

<section id="skills" class="py-20 px-6 bg-black relative overflow-hidden">
    <div class="container mx-auto max-w-6xl relative z-10">
        <div class="flex flex-col items-center mb-12">
            <h2 class="text-3xl font-bold mb-4">
                <span class="text-white">Minhas </span>
                <span class="text-gray-400">Habilidades</span>
            </h2>
            <div class="mb-12 h-1 w-20 bg-gradient-to-r from-gray-700 to-white rounded-full" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            ${skillGroups.map((group) => `
            <div class="bg-gray-900/30 border border-gray-800/50 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <h3 class="text-base font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center">
                    <span class="w-8 h-[1px] bg-gray-700 mr-3"></span>
                    ${group.category}
                </h3>

                <div class="flex flex-wrap gap-3">
                    ${group.skills.map((skill) => `
                    <div
                        class="flex items-center px-3 py-1.5 bg-gray-900/80 rounded-lg border border-gray-800 hover:border-gray-500 transition-all group cursor-default"
                    >
                        <span class="text-xl mr-2 group-hover:scale-110 transition-transform">
                            <i class="${skill.icon}"></i>
                        </span>
                        <span class="text-gray-300 text-base font-medium">
                            ${skill.name}
                        </span>
                    </div>
                    `).join('')}
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</section>

`;
}

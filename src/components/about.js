import { html } from '../utils/html.js';

export function About() {
    return html`

<section id="sobre" class="py-20 px-6 bg-gray-950">
    <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold mb-12 text-center">
            <span class="text-white">Sobre </span>
            <span class="text-gray-400">Mim</span>
        </h2>

        <div class="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
                Sou um engenheiro de software full stack com experiência em criar
                aplicações web robustas e escaláveis. Tenho paixão por resolver
                problemas complexos e transformar ideias em produtos digitais de
                alta qualidade.
            </p>

            <p>
                Minha jornada no desenvolvimento de software começou há vários anos,
                e desde então venho aprimorando minhas habilidades em diversas
                tecnologias, sempre buscando as melhores práticas e soluções mais
                eficientes para cada desafio.
            </p>

            <p>
                Acredito na importância do código limpo, arquitetura bem planejada
                e na criação de experiências de usuário excepcionais. Estou sempre
                em busca de novos desafios que me permitam crescer profissionalmente
                e contribuir para projetos inovadores.
            </p>
        </div>
    </div>
</section>

`;
};

import { html } from '../utils/html.js';

export function Contact() {
    // Configurar event listeners após renderizar
    setTimeout(() => {
        const form = document.querySelector('#contact-form');
        if (form) {
            form.addEventListener('submit', handleSubmit);
        }
    }, 0);

    function handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        console.log("Form submitted:", formData);
        alert("Mensagem enviada com sucesso!");
        
        // Limpar formulário
        e.target.reset();
    }

    return html`

<section id="contato" class="py-20 px-6 bg-gray-950">
    <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold mb-12 text-center">
            <span class="text-white">Entre em </span>
            <span class="text-gray-400">Contato</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
                <h3 class="text-2xl font-semibold text-white mb-6">
                    Vamos conversar!
                </h3>
                <p class="text-gray-400 mb-6">
                    Estou sempre aberto a discutir novos projetos, ideias criativas
                    ou oportunidades para fazer parte de suas visões.
                </p>

                <div class="space-y-4">
                    <div class="flex items-center text-gray-300">
                        <i data-lucide="mail" class="mr-4 text-gray-400"></i>
                        <span>marcosviniciusm99@gmail.com</span>
                    </div>
                    <div class="flex items-center text-gray-300">
                        <i data-lucide="map-pin" class="mr-4 text-gray-400"></i>
                        <span>Brasil</span>
                    </div>
                </div>
            </div>

            <form id="contact-form" class="space-y-4">
                <div>
                    <label for="name" class="block text-gray-400 mb-2">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        class="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
                        placeholder="Seu nome"
                    />
                </div>

                <div>
                    <label for="email" class="block text-gray-400 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        class="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors"
                        placeholder="seu@email.com"
                    />
                </div>

                <div>
                    <label for="message" class="block text-gray-400 mb-2">
                        Mensagem
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        class="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-gray-600 transition-colors resize-none"
                        placeholder="Sua mensagem..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                    Enviar Mensagem
                </button>
            </form>
        </div>
    </div>
</section>

`;
};

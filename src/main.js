import './css/style.css';
import {
    createIcons,
    Mail,
    Linkedin,
    Github,
    ExternalLink,
    Briefcase,
    Calendar,
    MapPin,
    Menu,
    X,
} from 'lucide';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Skills } from './components/skills';
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";
import './utils/scrollToSection.js'; // Import só para executar o side-effect

document.getElementById('app').innerHTML = `
<div class="min-h-screen bg-black text-white">
    <div id="header-container">${Header()}</div>
    <main>
        ${Hero()}
        ${About()}
        ${Skills()}
        ${Projects()}
        ${Experience()}
        ${Contact()}
    </main>
</div>
`;

function initIcons() {
    createIcons({
        icons: {
            Mail,
            Linkedin,
            Github,
            ExternalLink,
            Briefcase,
            Calendar,
            MapPin,
            Menu,
            X // adicionei o X pro ícone de fechar o menu
        }
    });
}

// expõe globalmente para o Header usar
window.renderHeader = function() {
    document.getElementById('header-container').innerHTML = Header();
    initIcons();
}

initIcons();

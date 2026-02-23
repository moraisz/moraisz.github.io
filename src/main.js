import './css/style.css';
import { createIcons, Mail, Linkedin, Github, ExternalLink, Briefcase, Calendar, MapPin } from 'lucide';
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
    ${Header()}
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

createIcons({
    icons: {
        Mail,
        Linkedin,
        Github,
        ExternalLink,
        Briefcase,
        Calendar,
        MapPin,
    }
});

export function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
    }
}

window.scrollToSection = scrollToSection;

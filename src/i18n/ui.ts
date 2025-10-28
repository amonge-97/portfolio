export const languages = {
    en: 'English',
    es: 'Español',
};

export const getYearsOfExperience = (): number => {
    const startWorkingDate = new Date(2020, 10, 30); // November 30, 2020
    const now = new Date();
    let years = now.getFullYear() - startWorkingDate.getFullYear();
    const monthDiff = now.getMonth() - startWorkingDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < startWorkingDate.getDate())) {
        years--;
    }
    return years;
}

export const defaultLang = 'es';

export const ui = {
    en: {
        'about.me.card.title': 'About Me',
        'certifications.card.title': 'Certifications',
        'experience.card.title': 'Experience',
        'participations.card.title': 'Where I have contributed?',
        'skills.card.title': 'Skills',
        'profile.short.about.me.p1': 'Certified',
        'profile.short.about.me.p2': 'Salesforce B2C Commerce Cloud',
        'profile.short.about.me.p3': `Developer with over ${getYearsOfExperience()} years of experience in e-commerce development.`,
        'profile.contact.linkedin': 'LinkedIn',
        'profile.contact.email': 'Email',
        'profile.contact.repo': 'Repository',
        'experience.see.more': 'See More',
        'experience.see.less': 'See Less',
        'experience.current.period': 'Current',
    },
    es: {
        'about.me.card.title': 'Sobre Mí',
        'certifications.card.title': 'Certificaciones',
        'experience.card.title': 'Experiencia',
        'participations.card.title': '¿Dónde he contribuido?',
        'skills.card.title': 'Habilidades',
        'profile.short.about.me.p1': 'Desarrollador Certificado de',
        'profile.short.about.me.p2': 'Salesforce B2C Commerce Cloud',
        'profile.short.about.me.p3': `con ${getYearsOfExperience()} años de experiencia en el desarrollo de comercios electrónicos.`,
        'profile.contact.linkedin': 'LinkedIn',
        'profile.contact.email': 'Correo',
        'profile.contact.repo': 'Repositorio',
        'experience.see.more': 'Ver Más',
        'experience.see.less': 'Ver Menos',
        'experience.current.period': 'Actual',
    },
};
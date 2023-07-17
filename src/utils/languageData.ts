import { userData } from "@/utils/userData";

interface presentation {
    first_piece: string,
    second_piece: string,
    third_piece: string,
    fourth_piece: string,
    fifth_piece?: string
}

export interface ILanguage {
    projects: string,
    contact: string,
    socialMedia: string
    greeting: string
    presentation: presentation,
    projectsPresentation: string,
    seeProjects: string,
    portfolioCode: string,
    myProjects: string,
    sideProjects: string,
    contactPresentation: presentation,
    whatsapp: string,
    whatsappMessage: string,
    whatsappButton: string,
    email: string,
    emailMessage: string,
    emailButton: string,
    linkedin: string,
    linkedinMessage: string,
    linkedinButton: string,
    thanks: string,
    followLinkedin: string
}

export const ptBr: ILanguage = {
    projects: "Projetos",
    contact: "Contatos",
    socialMedia: "Mídia Social",
    greeting: `É um prazer te-lo aqui, meu nome é ${userData.nameUser}, desenvolvedor BackEnd`,
    presentation: {
        first_piece: "Tenho como ",
        second_piece: "objetivo ",
        third_piece: "fazer a ",
        fourth_piece: "diferença"
    },
    projectsPresentation: "Descubra aqui nesse ambiente, criado especialmente para você, meus projetos e tecnologias",
    seeProjects: "Veja meus Projetos",
    portfolioCode: "Veja o repistório do meu portfólio",
    myProjects: "Meus Projetos",
    sideProjects: "Alguns dos meus projetos pessoais",
    contactPresentation: {
        first_piece: "Entre em contato comigo!",
        second_piece: "Vamos nos falar, assim consigo ",
        third_piece: "entender melhor suas necessiade ",
        fourth_piece: ", e assim chegarmos em ",
        fifth_piece: "soluções juntos!"
    },
    whatsapp: "Meu Whatsapp",
    whatsappMessage: "Sinta-se a vontade para me chamar! Vamos conversar sobre soluções juntos?",
    whatsappButton: "Falar agora",
    email: "Meu Email",
    emailMessage: "Me envie um email trazendo feedbacks, sugestões e idéias",
    emailButton: "Enviar email",
    linkedin: "Meu Linkedin",
    linkedinMessage: "Compartilhando nossas redes conseguimos criar mais constâncias nos nossos contatos",
    linkedinButton: "Ir para meu Linkedin agora",
    thanks: "Obrigado!",
    followLinkedin: "Siga me no Linkedin e vamos conversar!"
}

export const enUSA: ILanguage = {
    projects: "Projects",
    contact: "Contacts",
    socialMedia: "Social Media",
    greeting: `Such a pleasure have you here, my name is ${userData.nameUser} and im a BackEnd Developer`,
    presentation: {
        first_piece: "My ",
        second_piece: "goal ",
        third_piece: "is to make a ",
        fourth_piece: "diference"
    },
    projectsPresentation: "Discover here in this environment, created especially for you, all my projects and technologies",
    seeProjects: "See Projects",
    portfolioCode: "See my portfolio source code",
    myProjects: "My Projects",
    sideProjects: "Some of my side projects" ,
    contactPresentation: {
        first_piece: "Reach me!",
        second_piece: "Let's talk so i can have a ",
        third_piece: "better understanding of your needs ",
        fourth_piece: ", and come up with ",
        fifth_piece: "solutions together!"
    },
    whatsapp: "My Whatsapp",
    whatsappMessage: "Feel free to reach me! Let's talk some solutions together!",
    whatsappButton: "Talk now",
    email: "My Email",
    emailMessage: "Send me an email reporting feedbacks, suggestions and ideas",
    emailButton: "Send me an email",
    linkedin: "My Linkedin",
    linkedinMessage: "We can create more constant interactions as well as a sharing network",
    linkedinButton: " Go to LinkedIn now",
    thanks: "Thank you!",
    followLinkedin: "Follow me on Linkedin and let's talk!"
}
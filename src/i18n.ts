import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "navbar_home": "HOME",
      "navbar_about": "ABOUT",
      "navbar_experience": "EXPERIENCE",
      "navbar_skills": "SKILLS",
      "navbar_contact": "CONTACT",

      "main_title": "Software Developer",
      "main_resume": "Resume",

      "about_title": "ABOUT ME",
      "about_1": "I am a professional software developer with over 2 years of experience developing internet applications using JavaScript/TypeScript ecosystem tools like NodeJs and ReactJs. I have also worked on applications using SQL and NoSQL databases such as PostgreSQL, MongoDB, and Redis, and AWS cloud services like EC2, S3, Lambda, SES, CloudWatch, and EventBridge.",
      "about_2": "I am accustomed to working in agile environments and have experience working in teams that use Scrum as a work management methodology. I'm also skilled in collaborating with teams to solve problems and implement innovative solutions.",

      "experience_tile": "PROFESSIONAL EXPERIENCE",
      "experience_techs": "Technologies used:",
      "experience_job_full_stack_title": "Full Stack Developer",
      "experience_job__present": "Present",

      "experience_job_1_description_1": "Development of a web app made specifically for internal clients, to improve the eﬃciency of the company's day-to-day processes, using NodeJs, ReactJs, MongoDB, and AWS.",
      "experience_job_1_description_2": "Development of the e-commerce system used by the company to improve the sales of their used vehicles. Integration with payment API and invoice issuing API to improve the eﬃciency of the sales process. Made with NextJs, NestJs, GraphQL, PostgreSQL, Redis, and AWS.",
      "experience_job_1_description_3": "Development of the web app for external clients to digitize the company's services, using NodeJs, ReactJs, MongoDB, Redis, and AWS.",

      "experience_job_2_description_1": "Development of a web app for the management of the company's civil construction projects. Made with Laravel, PostgreSQL, and NodeJs.",

      "experience_job_3_description_1": "Development of the company's main website using Angular.",
      "experience_job_3_description_2": "Development of a web app for real state management (rental and sale). Made with Laravel and MySQL.",

      "skills": "My Skills",

      "contact_title": "Get in contact:",
      "contact_name": "NAME",
      "contact_email": "EMAIL",
      "contact_message": "MESSAGE",
      "contact_send": "SEND MESSAGE",

      "thank_you_title": "Thanks for your message!",
      "thank_you_sub_title": "Connect with me"
    }
  },
  pt_BR: {
    translation: {
      "navbar_home": "INÍCIO",
      "navbar_about": "SOBRE",
      "navbar_experience": "EXPERIÊNCIA",
      "navbar_skills": "HABILIDADES",
      "navbar_contact": "CONTATO",

      "main_title": "Desenvolvedor de Software",
      "main_resume": "Currículo",

      "about_title": "SOBRE",
      "about_1": "Sou um desenvolvedor de software com mais de 2 anos de experiência profissional no desenvolvimento de aplicações para internet usando ferramentas do ecossistema JavaScript/TypeScript como NodeJs e ReactJs. Também trabalhei em aplicações usando bancos de dados SQL e NoSQL, como PostgreSQL, MongoDB e Redis, e serviços em nuvem AWS como EC2, S3, Lambda, SES, CloudWatch e EventBridge. Tenho proficiência em inglês e posso trabalhar em projetos internacionais.",
      "about_2": "Estou acostumado a trabalhar em ambientes ágeis e tenho experiência trabalhando em equipes que utilizam Scrum como metodologia de gestão de trabalho. Também tenho habilidade em colaborar com equipes para resolver problemas e implementar soluções inovadoras.",

      "experience_tile": "EXPERIÊNCIA PROFISSIONAL",
      "experience_techs": "Tecnologias utilizadas:",
      "experience_job_full_stack_title": "Desenvolvedor Full Stack",
      "experience_job__present": "Atualmente",

      "experience_job_1_description_1": "Desenvolvimento de uma aplicação web feita especificamente para clientes internos, para melhorar a eficiência dos processos do dia a dia da empresa, utilizando NodeJs, ReactJs, MongoDB e AWS.",
      "experience_job_1_description_2": "Desenvolvimento do sistema de e-commerce utilizado pela empresa para melhorar as vendas de seus veículos usados. Integração com API de pagamento e API de emissão de notas fiscais para melhorar a eficiência do processo de vendas. Feito com NextJs, NestJs, GraphQL, PostgreSQL, Redis e AWS.",
      "experience_job_1_description_3": "Desenvolvimento de uma aplicação para clientes externos com o objetivo de digitalizar os serviços da empresa, utilizando NodeJs, ReactJs, MongoDB, Redis e AWS.",

      "experience_job_2_description_1": "Desenvolvimento de uma aplicação web para gestão dos projetos de construção civil da empresa. Feito com Laravel, PostgreSQL e NodeJs.",

      "experience_job_3_description_1": "Desenvolvimento do site institucional da empresa utilizando Angular.",
      "experience_job_3_description_2": "Desenvolvimento de uma aplicação web para gestão imobiliária (aluguel e venda). Feito com Laravel e MySQL.",

      "skills": "Minhas habilidades:",

      "contact_title": "Entre em contato:",
      "contact_name": "NOME",
      "contact_email": "EMAIL",
      "contact_message": "MENSAGEM",
      "contact_send": "ENVIAR MENSAGEM",

      "thank_you_title": "Obrigado pela sua mensagem!",
      "thank_you_sub_title": "Conecte-se comigo"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
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
  
      "main_title": "Fullstack Developer",
      "main_resume": "Resume",
  
      "about_title": "ABOUT ME",
      "about_1": "In 2016 I graduated in Business Administration from PUC-PR and was working in a relatively stable job, however, I didn't feel professionally fulfilled, and honestly, I didn't like my job. Around 2019 I started to research other areas where I could fit in better and give myself the feeling of professional fulfillment I was looking for so much, that's when I saw in programming an opportunity to change careers. I've always been a very technical person, I really like to 'tweak' things, and use lines of code to solve problems, and be able to do this not only as a hobby but also as a job and build a career on top of it, that's what attracted me to the world of software engineering. I started my studies on my own through online courses, and in July 2021 I got my first job as a developer.",
      "about_2": "I'm again, at the beginning of my professional journey, but the difference is that now I work with something that makes me happy. And I'll keep doing my best to improve as a professional and to generate value for everyone I work with.",
  
      "experience_tile": "PROFESSIONAL EXPERIENCE",
      "experience_techs": "Technologies used:",
      "experience_job_full_stack_title": "Fullstack Developer",
      "experience_job__present": "Present",
  
      "experience_job_1_description_1": "Helped on the development of the admin panel used by both company and clients.",
      "experience_job_1_description_2": "Worked on the development of the eCommerce website used by the company to sell their used vehicles.",
      
      "experience_job_2_description_1": "Software development for internal management solutions.",
  
      "experience_job_3_description_1": "Software development for other companies.",
  
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
  
      "main_title": "Desenvolvedor Fullstack",
      "main_resume": "Currículo",
  
      "about_title": "SOBRE",
      "about_1": "Em 2016 eu me formei em Administração pela PUC-PR e estava trabalhando em um emprego relativamente estável, porém, eu não me sentia realizado profissionalmente, e sendo bem sincero, eu não gostava nem um pouco do meu trabalho. Por volta de 2019 eu comecei a pesquisar outras áreas em que eu poderia me encaixar melhor e me dar o sentimento de realização profissional que eu tanto buscava, foi aí que eu vi na programação uma oportunidade de mudar de carreira. Eu sempre fui uma pessoa muito técnica, gosto muito de 'fuçar' as coisas, e usar linhas de código para solucionar problemas e poder fazer isso não só por hobby, mas também como trabalho e construir uma carreira em cima disso, foi o que me atraiu para o mundo do desenvolvimento de sistemas, pra mim foi como unir o útil ao agradável. Comecei os meus estudos por conta própria através de cursos na internet, até que em Julho de 2021 eu consegui meu primeiro emprego como desenvolvedor.",
      "about_2": "Eu estou novamente, no começo da minha jornada profissional, mas a diferença é que agora eu trabalho com algo que me faz feliz. E vou continuar fazendo o meu melhor para melhorar como profissional e gerar valor para todos com quem trabalho.",
  
      "experience_tile": "EXPERIÊNCIA PROFISSIONAL",
      "experience_techs": "Tecnologias utilizadas:",
      "experience_job_full_stack_title": "Desenvolvedor Fullstack",
      "experience_job__present": "Atualmente",
  
      "experience_job_1_description_1": "Desenvolvimento do painel administrativo que é utilizando tanto pela empresa quanto pelos clientes.",
      "experience_job_1_description_2": "Desenvolvimento do eCommerce utilizado pela empresa para vender seus veículos semi-novos",
      
      "experience_job_2_description_1": "Desenvolvimento de software que gestão interno.",
  
      "experience_job_3_description_1": "Desenvolvimento de software para outras empresas.",
  
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
// language-switcher.js

// Language dictionary for translations
const translations = {
      fr: {
        "school-name": "École Primaire Kalonge",
        "home": "Accueil",
        "about-us": "À Propos",
        "contact": "Contact",
        "testimonials": "Témoignages",
        "language": "Langues",
        "fr-link": "Français",
        "en-link": "English",
        "welcome-message": "Bienvenue à l'École Primaire Kalonge",
        "welcome-description": "Nous sommes fiers d'offrir un environnement d'apprentissage sûr et inclusif pour nos élèves.",
        "mission": "Notre Mission",
        "mission-description": "Nous nous engageons à fournir un environnement d'apprentissage inclusif et équitable pour tous les élèves.",
        "about-description": "L'École Primaire Kalonge est dédiée à l'excellence académique et au développement personnel des élèves.",
        "engagement": "Notre engagement envers l'amélioration continue et la veille des tendances de l'industrie nous permet de fournir des solutions de pointe et de rester à la pointe des avancées technologiques.",
        "classes-title": "Nos Classes",
        "classes-description": "Nous offrons des cours pour les niveaux allant de la première à la sixième année.",
        "activities-title": "Activités Extrascolaires",
        "activities-description": "Des activités comme le sport, la musique, et les arts enrichissent l'expérience scolaire.",
        "resources-title": "Ressources et Informations",
        "calendar": "Calendrier Scolaire",
        "rules": "Règlement Intérieur",
        "admissions": "Procédure d'Admission",
      },
      en: {
        "school-name": "Kalonge Primary School",
        "home": "Home",
        "about-us": "About Us",
        "contact": "Contact",
        "testimonials": "Testimonials",
        "language": "Languages",
        "fr-link": "French",
        "en-link": "English",
        "welcome-message": "Welcome to Kalonge Primary School",
        "welcome-description": "We are proud to provide a safe and inclusive learning environment for our students.",
        "mission": "Our Mission",
        "mission-description": "We are committed to providing an inclusive and equitable learning environment for all students.",
        "about-description": "Kalonge Primary School is dedicated to academic excellence and personal development for students.",
        "engagement": "Our commitment to continuous improvement and monitoring industry trends allows us to deliver cutting-edge solutions and stay ahead of technological advancements.",
        "classes-title": "Our Classes",
        "classes-description": "We offer courses from first grade to sixth grade.",
        "activities-title": "Extracurricular Activities",
        "activities-description": "Activities like sports, music, and arts enrich the school experience.",
        "resources-title": "Resources and Information",
        "calendar": "School Calendar",
        "rules": "Internal Rules",
        "admissions": "Admission Procedure",
      },
    };
    
    // Function to update the language of all elements with a data-lang attribute
    function updateLanguage(language) {
      const elements = document.querySelectorAll("[data-lang]");
      elements.forEach((element) => {
        const key = element.getAttribute("data-lang");
        if (translations[language][key]) {
          element.textContent = translations[language][key];
        }
      });
    }
    
    // Event listeners for the language switcher dropdown
    document.querySelector("[data-lang='fr-link']").addEventListener("click", (e) => {
      e.preventDefault();
      updateLanguage("fr");
    });
    
    document.querySelector("[data-lang='en-link']").addEventListener("click", (e) => {
      e.preventDefault();
      updateLanguage("en");
    });
    
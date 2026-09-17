async function changeLanguage(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    } catch (error) {
        console.error("Error loading translation file:", error);
    }
}

async function loadLanguage(lang) {
  localStorage.setItem("language", lang);
  const response = await fetch(`./lang/${lang}.json`);
  const translations = await response.json();
  
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "ed";
  loadLanguage(savedLang);
});

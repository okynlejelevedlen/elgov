async function changeLanguage(lang) {
    try {
        const response = await fetch(`lng/${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll('dint').forEach(element => {
            const key = element.getAttribute('dint');
            if (translations[key]) {
                element.innerHTML = translations[key];
            }
        });
    } catch (error) {
        console.error("Error loading translation file:", error);
    }
}

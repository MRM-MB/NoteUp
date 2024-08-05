
// These functions enable background changes between accounts.
// Each background is fetched from "company-config.js". 
// Modify "company-config.js" to change the background images.

document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById("company-logo");
    const body = document.body;
    const accountName = logoImage ? logoImage.getAttribute("data-company-name").toLowerCase() : '';
    const backgroundStorageKey = `${accountName}BackgroundIndex`;
    const commonBackgroundClass = "background1"; // common background class for everyone

    // Function to set background based on the index
    function setBackground(company, index) {
        body.classList.remove(commonBackgroundClass, company.backgroundClass2, company.backgroundClass3);
        if (index === 1) {
            body.classList.add(commonBackgroundClass);
        } else if (index === 2) {
            body.classList.add(company.backgroundClass2);
        } else if (index === 3) {
            body.classList.add(company.backgroundClass3);
        }
    }

    // Function to get the next background index
    function getNextBackgroundIndex(currentIndex) {
        return (currentIndex % 3) + 1;  // Cycle through 1, 2, 3
    }

    // Function to toggle background based on company configuration
    function toggleBackground(company) {
        let currentBackgroundIndex = parseInt(localStorage.getItem(backgroundStorageKey)) || 1;
        let nextBackgroundIndex = getNextBackgroundIndex(currentBackgroundIndex);
        setBackground(company, nextBackgroundIndex);
        localStorage.setItem(backgroundStorageKey, nextBackgroundIndex);
    }

    // Function to set background from localStorage
    function setBackgroundFromStorage() {
        const config = companyConfig[accountName];
        if (config) {
            let currentBackgroundIndex = parseInt(localStorage.getItem(backgroundStorageKey)) || 1;
            setBackground(config, currentBackgroundIndex);
        }
    }

    setBackgroundFromStorage();

    // Attach click event listener to logo image if exists and config is available
    if (logoImage && companyConfig[accountName]) {
        const config = companyConfig[accountName];
        logoImage.addEventListener("click", function() {
            toggleBackground(config);
        });
    }

    // Add event listener to handle window before unload (if needed)
    window.addEventListener('beforeunload', function() {
    });
});


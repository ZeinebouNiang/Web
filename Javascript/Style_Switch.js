window.addEventListener('load', function() {
    const toggleButton = document.getElementById('toggle-style');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const stylesheets = document.styleSheets;
            const mainStyle = stylesheets[0]; // Premier lien CSS
            const altStyle = stylesheets[1];  // Deuxième lien CSS

            // On inverse l'état des deux feuilles de style
            if (altStyle.disabled) {
                altStyle.disabled = false;
                mainStyle.disabled = true;
            } else {
                altStyle.disabled = true;
                mainStyle.disabled = false;
            }
        });
    }
});




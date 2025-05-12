window.addEventListener('load', function() {
    const toggleButton = document.getElementById('toggle-style');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            const mainStyle = document.styleSheets[0];
            const altStyle = document.styleSheets[1];

            // On inverse leur état
            if (altStyle.disabled) {
                altStyle.disabled = false;
                mainStyle.disabled = true;
            } else {
                altStyle.disabled = true;
                mainStyle.disabled = false;
            }
        });

        // Important : désactiver l'alternative au chargement
        document.styleSheets[1].disabled = true;
    }
});


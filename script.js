window.addEventListener('scroll', function() {
    var menu = document.querySelector('.menu'); // Vyberte menu pomocí vhodného selektoru
    var scrollPosition = window.scrollY; // Získání aktuální pozice scrollování

    if (scrollPosition > 0) {
        menu.classList.add('sticky'); // Přidání třídy 'sticky' k menu
    } else {
        menu.classList.remove('sticky'); // Odebrání třídy 'sticky' z menu
    }
});
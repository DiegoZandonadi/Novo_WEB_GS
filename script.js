// Alternância de temas
const themeIcons = document.querySelectorAll('.theme-icon');
themeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        document.body.className = icon.dataset.theme;
        themeIcons.forEach(i => i.classList.remove('selected'));
        icon.classList.add('selected');
    });
});

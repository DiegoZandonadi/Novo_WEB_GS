
// Validação de formulário
const form = document.getElementById('subscribeForm');
form.addEventListener('submit', function(e) {
    let valid = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    if (!name) {
        document.getElementById('nameError').textContent = 'Nome é obrigatório.';
        valid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Email é obrigatório.';
        valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.';
        valid = false;
    }
    if (!valid) e.preventDefault();
});

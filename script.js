
// Quiz de esportes
const quizData = [
    { q: 'Qual país sediou a Copa do Mundo de 2014?', a: ['Brasil', 'Alemanha', 'Espanha', 'França'], c: 0 },
    { q: 'Quantos jogadores tem um time de vôlei?', a: ['5', '6', '7', '11'], c: 1 },
    { q: 'Quem é conhecido como o Rei do Futebol?', a: ['Pelé', 'Maradona', 'Messi', 'Cristiano Ronaldo'], c: 0 },
    { q: 'Qual esporte utiliza uma raquete e uma peteca?', a: ['Tênis', 'Badminton', 'Squash', 'Ping Pong'], c: 1 },
    { q: 'Em que ano o Brasil ganhou seu primeiro ouro olímpico no futebol?', a: ['2016', '2000', '1994', '1988'], c: 0 },
    { q: 'Qual é o maior evento esportivo do mundo?', a: ['Copa do Mundo', 'Super Bowl', 'Olimpíadas', 'Tour de France'], c: 2 },
    { q: 'Quantos pontos vale uma cesta de três no basquete?', a: ['1', '2', '3', '4'], c: 2 },
    { q: 'Qual é o nome do maior nadador olímpico?', a: ['Cesar Cielo', 'Michael Phelps', 'Ian Thorpe', 'Ryan Lochte'], c: 1 },
    { q: 'Em que esporte se usa o termo "try"?', a: ['Rugby', 'Futebol', 'Tênis', 'Basquete'], c: 0 },
    { q: 'Qual país é famoso pelo sumô?', a: ['China', 'Japão', 'Coreia', 'Tailândia'], c: 1 }
];
let quizIndex = 0;
let score = 0;
const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');
const startQuizBtn = document.getElementById('startQuiz');
function showQuestion() {
    if (quizIndex < quizData.length) {
        const q = quizData[quizIndex];
        quizContainer.innerHTML = `<div class="question">${q.q}</div>` +
            q.a.map((alt, i) => `<button class="answer" data-i="${i}">${alt}</button>`).join('');
    } else {
        quizContainer.innerHTML = '';
        quizResult.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
        startQuizBtn.style.display = 'block';
    }
}
quizContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('answer')) {
        if (parseInt(e.target.dataset.i) === quizData[quizIndex].c) score++;
        quizIndex++;
        showQuestion();
    }
});
startQuizBtn.addEventListener('click', function() {
    quizIndex = 0;
    score = 0;
    quizResult.textContent = '';
    startQuizBtn.style.display = 'none';
    showQuestion();
}); 
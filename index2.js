let inputScore = document.getElementById("inputScore");
let wScoreDisplay = document.getElementById("wScore")
let p1ScoreDisplay = document.getElementById("p1Score");
let p2ScoreDisplay = document.getElementById("p2Score");
let p1Btn = document.getElementById("p1btn");
let p2Btn = document.getElementById("p2btn");
let resetBtn = document.getElementById("resetbtn");
let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

p1Btn.addEventListener('click', () => {
    if (!gameOver) {
        p1Score++;
        winner(p1Score, winingScore)
    }
    p1ScoreDisplay.textContent = p1Score;
});
p2Btn.addEventListener('click', () => {
    if (!gameOver) {
        p2Score++;
        winner(p2Score, winingScore)
    }
    p2ScoreDisplay.textContent = p2Score;
});
function winner(oldScore, winingScore) {
    if (oldScore === winingScore) {
        if (p1Score === winingScore) {
            p1ScoreDisplay.classList.add('winner');
        } else {
            p2ScoreDisplay.classList.add('winner');
        }
        gameOver = true;
        p1Btn.setAttribute('disabled', 'disabled');
        p2Btn.setAttribute('disabled', 'disabled');
    }
}

inputScore.addEventListener('change', () => {
    winingScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    resetBtn();
    reset()
})
function reset() {
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.textContent = 0;
    p1ScoreDisplay.classList.remove('winner')
    p2ScoreDisplay.classList.remove('winner')
    p2ScoreDisplay.textContent = 0;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
}
resetBtn.addEventListener('click', reset);

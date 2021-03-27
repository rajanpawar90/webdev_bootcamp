const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

// p1Display = document.querySelector('#p1Display');
// p2Display = document.querySelector('#p2Display');

const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
let winningScore = 3;
isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        // player.score += 1;
        // if (player.score === winningScore) {
        //     isGameOver = true;
        //     player.display.classList.add('has-text-success');
        //     opponent.display.classList.add('has-text-danger');
        //     player.button.disabled = true;
        //     opponent.button.disabled = true;
        // }
        // player.display.textContent = player.score ;

        if (player.score === winningScore - 1) {

            player.score += 1;
            player.display.textContent = player.score;
            isGameOver = true;
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
        } else {
            player.score += 1;
            player.display.textContent = player.score;
        }
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});

// p1Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         if (p1Score === winningScore - 1) {
//             //player1 won
//             //Make p1Sore green
//             p1Score += 1;
//             p1Display.textContent = p1Score;
//             isGameOver = true;
//             p1Display.style.color = 'green';
//             p2Display.style.color = 'red';
//         } else {
//             p1Score += 1;
//             p1Display.textContent = p1Score;
//         }
//     }
// });

// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         if (p2Score === winningScore - 1) {
//             //player1 won
//             //Make p1Sore green
//             p2Score += 1;
//             p2Display.textContent = p2Score;
//             isGameOver = true;
//             p2Display.style.color = 'green';
//             p1Display.style.color = 'red';
//         } else {
//             p2Score += 1;
//             p2Display.textContent = p2Score;
//         }
//     }
// });

function reset() {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    winningScore = winningScoreSelect.value;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.display.style.color = 'black';
    p2.display.style.color = 'black';
}

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    alert("Change to " + this.value);
    winningScore = parseInt(this.value)
    console.log(winningScore)
    reset();
})
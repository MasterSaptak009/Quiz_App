const highScoresList = document.querySelector('#highScoreList')
const highScore = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScore.map(score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`  
}).join('')
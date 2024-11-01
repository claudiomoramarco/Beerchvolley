// Initialize scores
let team1Score = 0;
let team2Score = 0;
let secondaryScore1 = 0;
let secondaryScore2 = 0;

// Update the scores on the screen
document.getElementById("score1").textContent = team1Score;
document.getElementById("score2").textContent = team2Score;
document.getElementById("secondary-score1").textContent = secondaryScore1;
document.getElementById("secondary-score2").textContent = secondaryScore2;

// Function to update the score based on the button clicked
function updateScore(team, action) {
    if (team === 'team1') {
        if (action === 'N') team1Score += 1;
        else if (action === 'B') { team1Score += 1; secondaryScore1 += 1; }
        else if (action === 'S') { team1Score += 2; secondaryScore1 += 1; }
        else if (action === 'W') { team1Score += 3; secondaryScore1 += 2; }

        // Update Team 1 scores on the screen
        document.getElementById("score1").textContent = team1Score;
        document.getElementById("secondary-score1").textContent = secondaryScore1;
    } else if (team === 'team2') {
        if (action === 'N') team2Score += 1;
        else if (action === 'B') { team2Score += 1; secondaryScore2 += 1; }
        else if (action === 'S') { team2Score += 2; secondaryScore2 += 1; }
        else if (action === 'W') { team2Score += 3; secondaryScore2 += 2; }

        // Update Team 2 scores on the screen
        document.getElementById("score2").textContent = team2Score;
        document.getElementById("secondary-score2").textContent = secondaryScore2;
    }
}

// Timer variables
let timerInterval;
let timeRemaining = 480; // Default 8 minutes in seconds

// Function to display the timer in mm:ss format
function displayTime() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("time-remaining").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                displayTime();
            } else {
                pauseTimer(); // Pause timer when it reaches 0
            }
        }, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset the timer
function resetTimer() {
    pauseTimer();
    timeRemaining = 480; // Reset to 8 minutes
    displayTime();
}

// Initial display of the timer
displayTime();

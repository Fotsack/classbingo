// script.js

// List of preset strings for the bingo board
const bingoWords = [
    "nicht die Bohne","Das ist alles Mist","Plumperquatsch",
    "Ih Te", "🆓", "Teilen Sie sich mal in Gruppen auf",
    "Sie brauchen eine Abbildung","Ändern Se das ma","Thorsten",
    "Sie müssen miteinander reden","Wo ist die Datei vom letzten mal",
    "Plunder","Machen Se das ma weg","wieder mal eine ganze Stunde verschwendet",
    "Wiederholt Namen bei Anwesenheit","mehr als 5 min. zu spät","test"
  ];
  
  // Generate a new board with random strings
  function generateBoard() {
    const board = document.getElementById('bingo-board');
    board.innerHTML = ''; // Clear previous board
  
    // Shuffle the list of bingo words and take the first 16
    const shuffledWords = shuffleArray(bingoWords).slice(0, 17);
  
    // Populate the board with cells
    shuffledWords.forEach((word) => {
      const cell = document.createElement('div');
      cell.className = 'bingo-cell';
      cell.textContent = word;
  
      // Add click event listener to toggle "crossed" class
      cell.addEventListener('click', () => {
        cell.classList.toggle('crossed');
      });
  
      board.appendChild(cell);
    });
  }
  
  // Function to shuffle an array (Fisher-Yates shuffle)
  function shuffleArray(array) {
    const shuffled = array.slice(); // Create a copy of the original array
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  // Generate initial board on page load
  document.addEventListener('DOMContentLoaded', generateBoard);
  
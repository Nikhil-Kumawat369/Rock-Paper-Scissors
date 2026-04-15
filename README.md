# 🎮 Rock Paper Scissors – Animated Web Game

An animated Rock Paper Scissors web game built using HTML, CSS, and JavaScript.
This project focuses heavily on CSS animations to create smooth page transitions and engaging visual effects.

## 🚀 Features

- 🎬 Multi-page animated intro

- ✋ Interactive Rock, Paper, Scissors selection

- 🤖 Random computer choice generation

- 🏆 Win / Lose / Draw detection logic

- 🎉 Animated result screen

- 🔄 Play Again button (reloads game)

## 🛠️ Built With

- HTML5 – Structure

- CSS3 – Styling & Advanced Animations

- JavaScript (Vanilla JS) – Game Logic

## 📂 Project Structure
    Rock-Paper-Scissors/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    └── Images/
        ├── rock.png
        ├── paper.png
        └── scissor.png

## 🎯 How It Works

### 1️⃣ Game Logic

The core game logic is handled in JavaScript:

```js
// 0 : Rock | 1 : Scissor | 2 : Paper
function checkWin(usersChoice, computersChoice)
```

Win conditions are stored in a 2D array:

```js
[
  [0, 1], // Rock beats Scissor
  [1, 2], // Scissor beats Paper
  [2, 0]  // Paper beats Rock
]
```

**The function returns:**

- "Win"

- "Lose"

- "Draw"

### 2️⃣ Animations

CSS keyframes are used extensively for:

Intro screen transitions

Choice sliding animations

Win / Lose special transitions

Final result screen reveal

Animations are dynamically applied using:

```js
element.style.animation = "animation-name duration timing-function";
```

## 🎮 How To Play

- Open index.html in your browser.

- Watch the animated intro.

- Click on Rock, Paper, or Scissor.

- View the animated result.

- Click Play Again to restart.

## ⚠️ Notes

- Some animations were reversed during development, so alternate animation sets are used for certain outcomes.

- The game reloads completely when clicking Play Again.

## 💡 Future Improvements

- Improve animation logic (remove reverse fixes)

- Add score tracking

- Add sound effects

## 📜 License

>This project is open for learning and experimentation.
>You may modify, distribute, or expand it freely.

## 👤 Author

Developed by: Nikhil Kumawat
<br>
Language: HTML | CSS | JS
<br>
Project: Rock Paper Scissor

>“Built with caffeine and questionable decisions.”

>⭐ If you like this project, consider giving it a star!

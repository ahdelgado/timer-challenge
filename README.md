# Timer Challenge - The Almost Final Countdown

A fun and interactive React-based timer challenge game where players test their timing skills by stopping timers as close to the target time as possible.

## 🎮 Overview

Timer Challenge is a precision timing game that challenges players to stop multiple timers at exactly the right moment. The app features different difficulty levels, real-time feedback, and a scoring system that rewards accuracy.

## ✨ Features

- **Player Profile**: Set and display your name
- **Multiple Difficulty Levels**: Four challenges with varying target times (1s, 5s, 10s, 15s)
- **Real-time Timer**: Precise countdown with millisecond accuracy
- **Score Calculation**: Percentage-based scoring system based on timing accuracy
- **Result Modal**: Beautiful modal dialog showing your performance using React portals
- **Responsive Design**: Clean and modern user interface

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Refs** - Using `useRef` and `useImperativeHandle` for imperative DOM access
- **React Portals** - Rendering modals outside the main component tree
- **ESLint** - Code quality and linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**

## 🚀 Getting Started

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd timer_challenge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 🎯 How to Play

1. **Set Your Name**: Enter your name in the input field and click "Set Name"
2. **Choose a Challenge**: Select one of the four timer challenges:
   - **Easy**: 1 second
   - **Not easy**: 5 seconds
   - **Getting tough**: 10 seconds
   - **Pros only**: 15 seconds
3. **Start the Timer**: Click "Start Challenge" to begin the countdown
4. **Stop at the Right Time**: Click "Stop Challenge" when you think the timer has reached the target time
5. **View Results**: A modal will display your score and timing accuracy

## 📁 Project Structure

```
timer_challenge/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Player.jsx          # Player name input component
│   │   ├── TimerChallenge.jsx  # Individual timer challenge component
│   │   └── ResultModal.jsx     # Modal showing challenge results
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎓 Learning Concepts

This project demonstrates several important React concepts:

- **React Refs**: Using `useRef` to access DOM elements and store mutable values
- **useImperativeHandle**: Exposing custom methods to parent components via refs
- **React Portals**: Rendering components outside the normal DOM hierarchy
- **State Management**: Managing timer state and player information
- **Event Handling**: Handling user interactions and timer events

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Enjoy testing your timing skills!** ⏱️


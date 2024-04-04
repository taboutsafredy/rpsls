# Rock, Paper, Scissors - GAME 🎮

This is a simple yet fun Rock, Paper, Scissors game built using React and TypeScript. 
The game allows users to play Rock, Paper, Scissors against the computer.

![](./preview-desktop.png)

## Overview

### Links

- Live Site URL: [Play Here](https://istfredy.github.io/rpsls)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library

### What I learned

During the development of this project, 
I learned a lot about React and its ecosystem with TypeScript. 
Here are some of the key learnings:

1. **React Hooks**: I learned how to use React hooks to manage state in my application. 
I used the `useState` , `useEffect` and `useCallback` hooks to manage the game state and handle user interactions.

2. **React Context**: I learned how to use the React Context API to share state across multiple components. 
This was particularly useful for sharing the game state across different parts of the application.

3. **React With TypeScript**: I learned more about how we can extend our react app with TypeScript :). 
I also learned more about how to create `type` and `interface` for React components.

4. **Animations**: I learned how to create animations in React using the `canvas-confetti` library. This added a fun element to the game and improved the overall user experience.

Here is a code snippet of how I used the `canvas-confetti` library:

```js
import confetti from 'canvas-confetti';

const Confetti = confetti.create(document.getElementById('canvas') as HTMLCanvasElement, { useWorker: true });
Confetti({ particleCount: 100, spread: 70, origin: { y: 2 } });
setTimeout(() => { myConfetti.reset(); }, 1000);
```

### Continued development

In future projects, I plan to continue improving my skills in React and exploring more libraries for creating animations. 
I also want to learn more about managing state in larger applications and how to optimize performance in React.

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - This helped me understand how to use hooks in React.
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) - This library made it easy to create confetti animations.

## Author

- Instagram - [itsfredySWE](https://instagram.com/itsfredySWE)
- Telegram - [@itsfredytech](https://t.me/itsfredytech)
```

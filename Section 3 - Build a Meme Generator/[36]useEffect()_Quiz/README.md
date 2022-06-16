# useEffect() Quiz

1. What is a `side effect` in `React`? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync

2. What is NOT a `side effect` in `React`? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, render DOM elements

3. When does `React` run your `useEffect()` function? When does it NOT run the `effect` function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the `effect` when the values of the dependencies in the array stay the same between renders

4. How would you explain what the `dependecies array` is?
- Second parameter to the `useEffect()` function
- A way for `React` to know whether it should re-run the `effect` function
# useEffect() Syntax, Default behavior, and Dependencies Array

- Syntax, Default behavior
  - Inside of the `callback function` that we provide to `useEffect()`, we're allowed to put the code that has other `side effects` that interact with those `ouside systems` to keep them `in sync` with our `local state` in the `React` component.
  - However, we're not done yet! If we don't provide the 2nd parameter to `useEffect()`, then it's almost no different between putting our code `inside` and `outside` of `useEffect()` (except for that fact that it's guaranteed that anything inside the `callback function` runs only after the `UI` has been painted to the screen) and we're still stuck in an `infinite loop`.

- Dependencies Array
  - Even though this 2nd parameter is `optional`, it's almost always included.
  - The `dependencies array` contains values that if they change from 1 render and the next, we'll call `useEffect()` to run. In other words, this parameter limits the times that `useEffect()` is run, or rather it determines when `useEffect()` is run instead of running after every single render.
  - If the `dependencies array` is left as an `empty array`, it effectively tells `React` to run the `callback funtion` passed to `useEffect()` on the very 1st render of the component but then, there's no `dependencies` to watch and trigger this `useEffect()` to run again.

## Notes
- The code in this lesson is just for syntax reference.
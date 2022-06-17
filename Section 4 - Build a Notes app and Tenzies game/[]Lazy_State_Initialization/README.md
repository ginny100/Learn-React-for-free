# Lazy State Initialization
- [Lazy initial state](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)
  - The `initialState` argument is the state used during the `initial render`. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render

- [Lazy initialization](https://reactjs.org/docs/hooks-reference.html#lazy-initialization)
  - You can also create the `initial state` lazily. To do this, you can pass an `init` function as the third argument. The initial state will be set to `init(initialArg)`.
  - It lets you extract the logic for calculating the initial state outside the reducer. This is also handy for resetting the state later in response to an action
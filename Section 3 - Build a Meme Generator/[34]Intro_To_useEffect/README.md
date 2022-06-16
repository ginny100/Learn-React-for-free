# Intro to useEffect
- What are `React`'s primary tasks?
  - Work with the DOM/browser to render UI to the page
  - Manange `state` for us between `render cycles` (i.e. state values are "remembered" from one render to the next)
  - Keep the UI updated whenever state changes occur

- What can't `React` handle on its own? - (Out)side effects!
  - localStorage
  - API/database interactions
  - Subscriptions (e.g. web sockets)
  - Syncing 2 different `internal states` together
  - Basically anything that `React` isn't in charge of

- The [useEffect() hook](https://reactjs.org/docs/hooks-effect.html) helps us interact `outside` of the `React` ecosystem (i.e. mostly `state`, `props`, and the UI that is put on the page.) It is like a tool that allows us to synchronize `React state` with those `outside systems` such as `localStorage` or `API`, etc.
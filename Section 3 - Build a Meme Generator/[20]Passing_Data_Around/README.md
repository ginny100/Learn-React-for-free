# Passing Data around
- Passing data to components
  - There is no way to pass `state` (or any other type of data) of a `component` to its `sibling component`. In other word, `components` that have the same parent have no knowledge of each other.
  - We can only pass `state` of the `parent component` to its child or children through `props`.
  - We cannot pass `state` of a `child component` upwards to its `parent component` either.
- If you want a solution to this issue, you'll need to learn about `Redux`.
- Key take-away: You need to be careful when architecting your `component tree` so that you can `share state` amongst only components that need it. It would not be a really good idea to `init your state` way up near the top if you have components along the tree that need it. As a rule of thumb, keep `state` as `local` as you can, i.e. keep `state` closely tight to the `component(s)` that need it.

## Notes
- The code in this lesson is just for syntax reference.
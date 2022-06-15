# Controlled Inputs
- When it comes to maintaining state inside a component, there's a common concept called `the single source of truth`, which refers to the state that you're maintaining in your component.
- Take a look at the `Form.js` file in this lesson, currently, each of our `inputs` is holding its own `state` (in regular `HTML` form) and another `state` used to update keystrokes (in `React` code). A good practice is to make the `React state` drive the `HTML state` inside each input box. You can do this by simply adding a `value` property to each of our inputs and assign it to each associate piece of `state`. 
- Now, each time the user types a value to each input box, that value is no longer controlled by the input, but rather by `React`.

- Learn more about [React Controlled Components](https://reactjs.org/docs/forms.html#controlled-components)

## Notes
- The code in this lesson is just for syntax reference.
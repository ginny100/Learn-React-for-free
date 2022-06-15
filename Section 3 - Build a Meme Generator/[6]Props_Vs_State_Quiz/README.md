# Props vs. State Quiz

1. How would you describe the concept of ```state```?
- A way for React to remember saved values from within a component.
- This is similar to ```declaring variables from within a component```, with a few added bonuses.

2. When would you want to use ```props``` instead of ```state```?
- Anytime you want to ```pass data into a component``` so that component can determine what will get displayed on the
screen.

3. When would you want to use ```state``` instead of ```props```?
- Anytime you want a component to ```maintain some values from within the component```. (And "remember" those values even when React re-renders the component).

4. What does ```immutable``` mean? Are ```props``` immutable? Is ```state``` immutable?
- Unchanging. You should never change ```Props```, that's why they are ```immutable```. You mean to change ```State```, that's why it is ```mutable```.
1. What does the `.map()` array method do?
- (JavaScript) Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array. Usually we take the items from the original array and modify them
in some way.

2. What do we usually use `.map()` for in React?
- Convert an array of raw data into an array of JSX elements that can be displayed on the page.


3. Why is using `.map()` better than just creating the components manually by typing them out?
- It makes our code more "self-sustaining" - not requiring additional changes whenever the data changes.
1. You have 2 options for what you can pass in to a `state setter` function (e.g. `setCount`). What are they?
- a. New value of state (Ex. setCount(42))
- b. Callback function - whatever the callback function returns === new value of state

2. When would you want to pass the `first option` (from answer above) to the `state setter` function?
- Whenever you `don't` need the `previous value of state` to determine what the `new value of state` should be.

3. When would you want to pass the `second option` (from answer above) to the `state setter` function?
- Whenever you `do` need the `previous value of state` to determine what the `new value of state` should be.
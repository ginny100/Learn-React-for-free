# Event Listeners
- 2 different ways of adding Event Listeners in vanialla JavaScript applications:
    - Using the ```.addEventListener()``` method in ```js```
    ```
    .addEventListener("click", function() {})
    ```
    - Using the ```onclick``` attribute in ```html```, which is more similar to how we add Event Listeners in React
    ```
    <div onclick="myFunction()" id="root"></div>
    ```

- In React, what we have to do to add an Event Listener is to use the ```onClick``` handler as indicated in the ```App.js``` file. There are also some more handlers in React such as ```onMouseEnter```, ```onMouseOut```, ```onMouseOver```, etc. See more at [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)

## Notes
- The code in this lesson is just for syntax reference
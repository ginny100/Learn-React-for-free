# Event Listeners
2 different ways of adding Event Listeners in vanialla JavaScript applications:
- Using the ```.addEventListener()``` method in ```js```
```
.addEventListener("click", function() {})
```
- Using the ```onclick``` attribute in ```html```, which is more similar to how we add Event Listeners in React
```
<div onclick="myFunction()" id="root"></div>
```

In React, what we have to do to add an Event Listener is to use the ```onClick``` handler as indicated in the ```App.js``` file. There are also some more handlers in React such as ```onMouseEnter```, ```onMouseOut```, ```onMouseOver```, etc. See more at [Mouse Events](https://reactjs.org/docs/events.html#mouse-events)

# Notes
- The code in this lesson is just for syntax reference

## Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
````

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

## Supporting Scrimba

Since 2017, we have created over 20 free courses on Scrimba, and we're going to
continue launching free courses. But to pay our bills, we have to charge once
in a while. So if you've ever wanted to "give back" to Scrimba, you can do that by buying
	one of our paid courses

- [Become a professional React developer](https://scrimba.com/course/greact)
- [The Responsive Web Design Bootcamp](https://scrimba.com/course/gresponsive)
- [The Ultimate JavaScript Bootcamp](https://scrimba.com/course/gjavascript)

	It would also mean the world to us if you share the courses.  

Happy Coding!

# Prop Quiz!
1. What do props help us accomplish?
- Make a component more reusable.

2. How do you pass a prop into a component?
- Example:
```
<MyAwesomeHeader title="???" />
```

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
- No, because the JSX we use to describe native DOM elements will be turned into REAL DOM elements by React. And real DOM elements only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
- Here is how:
```
function Navbar(props) {
	console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}
```

5. What data type is `props` when the component receives it?
- An object!

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

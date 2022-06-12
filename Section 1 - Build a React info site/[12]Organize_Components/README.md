# Organize_Components
- Instead of defining all components in 1 file, we can put each component in a separate file. The name of each component file is exactly the same as the name of that component itself.
- Once you have created a component in a separate file, you need to export it so that it will be accessible somewhere else in the project. Often time, you'll use ```export default``` in this case.
- Next, outside of that component file, wherever you want to use that component, you need to ```import``` it with its relative path. When importing, it's not necessary to write the extension of the file component.

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

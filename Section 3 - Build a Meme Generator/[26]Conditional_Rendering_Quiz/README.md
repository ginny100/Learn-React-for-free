# Conditional Rendering Quiz

1. What is `conditional rendering`?
- When we want to only sometimes display something on the page based on a condition of some sort

2. When would you use `&&`?
- When you want to either display something or NOT display it

3. When would you use a `ternary`?
- When you need to decide which thing among 2 options to display

4. What if you need to decide between > 2 options on
   what to display?
- Use an `if...else if... else` conditional or a `switch` statement
- The different between using `if...else if... else` conditional or a `switch` statement and using `&&` or `ternary` is that:
    - `&&` and `ternary` can happen directly `inline` inside of the `returned element` of the function.
    ```
    function App() {
        return (
            <div>{____ && <SomeJSXElement />}</div>
        )
    }
    ```
    ```
    function App() {
        return (
            <div>{____ ? <SomeJSXElement /> : <SomeOtherElement>}</div>
        )
    }
    ```
    - `if...else if... else` conditional and a `switch` statement have to happen outside of the `returned element` of the function.
    ```
    function App() {
        let someVar
        if () {
            someVar = <SomeJSX />
        } else if() {
            ...
        } else {
            ...
        }
        return (
            <div>{someVar}</div>
        )
    }
    ```
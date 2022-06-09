/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// Imperative way to program using vanilla JavaScript
const h1 = document.createElement('h1');
h1.textContent = "Imperative way to program";
h1.className = "header"
document.getElementById("root").append(h1);

// Declarative way to program using React
ReactDOM.render(<h1 className="header">Declarative way to program</h1>, document.getElementById("root"));
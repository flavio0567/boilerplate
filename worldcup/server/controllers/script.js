// const x = 'Hello';
// console.log(x);

// const jsContainer = document.getElementById("js");

var time = new Date();
console.log(
  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
); 


const render = () => {
// jsContainer.innerHTML = `
//   <div class="demo">
//     Hello JS
//     <input />
//     <p>${new Date()}</p>
//   </div>
// `;

const reactContainer = document.getElementById("react");
const hour = new Date()
var time = hour.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
ReactDOM.render(
    React.createElement(
        "h1",
        { className: "demo" },
        "The time is: ",
        time
    ),
    reactContainer
  );
}
  setInterval(render, 1000);
// creating nested structur
// <div id="child">
//  <div id="child">
    //   <h1>hello</h1>
    //   <h2></h2>
    // </div>
    // </div>



const parent =React.createElement(
    "div", 
    {id:"parent"},[
    React.createElement(
        "div", 
        {id:"child"}, 
        // if we have sibling like two h1 tags then we have to put it into array
       [React.createElement("h1",{},("I am h1 tag")),
        React.createElement("h2",{},("I am h2 tag"))
    ]
    ),
    React.createElement(
        "div", 
        {id:"child"}, 
       [React.createElement("h1",{},("I am h1 tag")),
        React.createElement("h2",{},("I am h2 tag"))
    ]
    )
    ]
    )   

const heading=React.createElement("h1",{id:"heading"},"hello world from React");
const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);

console.log(parent);


import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));


// JSX---> is not an html in javascript ( html like syntax)
// JSX => React.createElement() => ReactJs Element- JS object => Html element(render) Babel is doing all this job

// React Element
// const jsxheading =( 
//     <h1 className="head">
//         Namaste React using Jsx 🚀
//     </h1>
//     );

const Jsxheading =()=>( 
<h1 className="head">
    Namaste React using Jsx 🚀
</h1>
);
// console.log(Jsxheading);


// React Component
// Classbased component and Functional components


const number=1000;



// Functional Component 
// Component Composition
const HeadingComponent=()=>(
    <div id="container">
    <Jsxheading/>
    {/* this is way of injecting js  */}
    <h1>{number}</h1>
    {heading}
    <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

// root.render(heading);
// root.render(Jsxheading);
root.render(<HeadingComponent/>);



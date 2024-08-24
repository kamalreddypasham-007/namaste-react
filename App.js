//creating nested elements or siblings
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading1"},"this is heading 1 of child 1"),
        React.createElement("h2",{id:"heading2"},"this is heading 2 of child 1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading1"},"this is heading 1 of child 2"),
        React.createElement("h2",{id:"heading2"},"this is heading 2 of child 2")
    ])
])









/*const heading=React.createElement("h1",{id:"heading"},"Hello Kamalakar this is react");*/
    const root=ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);
   // console.log(heading);
   root.render(parent);
   console.log(parent);

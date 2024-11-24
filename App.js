const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement('div', {id: 'child'},
        // to create siblings, two children, add them in an array
        [React.createElement("h1", {id: 'h1'}, 'This is hierarchical H1 Tag inside div'),
         React.createElement("h2", {id: 'h2'}, 'This is hierarchical H2 Tag inside div')  
        ]
    ),
    React.createElement('div', {id: 'child2'},
        // to create siblings, two children, add them in an array
        [React.createElement("h1", {id: 'h1'}, 'This is hierarchical H1 Tag inside div'),
         React.createElement("h2", {id: 'h2'}, 'This is hierarchical H2 Tag inside div')  
        ]
    ),
]
)

// Error on Browser console - Each child in a list should have a unique "key" prop
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
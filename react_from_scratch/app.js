const React = {
    createElement: (...args) => {
        console.log(args);
    },
};
const App = (React.createElement("div", { draggable: true },
    React.createElement("h2", null, "Hello React!"),
    React.createElement("p", null, "I am a paragraph."),
    React.createElement("input", { type: "text" })));
export {};
//# sourceMappingURL=app.js.map
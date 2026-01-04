const React = {
  createElement: (...args: any[]) => {
    console.log(args);
  },
};
const App = (
  <div draggable>
    <h2>Hello React!</h2>
    <p>I am a paragraph.</p>
    <input type="text" />
  </div>
);

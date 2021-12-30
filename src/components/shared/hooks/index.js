import { useState } from "react";

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);

  return [
    value,
    {
      set: setValue,
      toggle: () => setValue(val => !val)
    }
  ];
};

// function App() {
//   const [isOpen, isOpenActions] = useToggle(true);

//   return (
//     <div className="App">
//       <button onClick={isOpenActions.toggle}>{isOpen ? "-" : "+"}</button>
//       {isOpen ? <h1>Hello CodeSandbox</h1> : null}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

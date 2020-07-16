import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [nativeModule, setNativeModule] = React.useState(null);
  React.useEffect(() => {
    import("./native").then((native) => {
      console.log({ native });
      setNativeModule(native);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            nativeModule.greet("Alena");
          }}
        >
          Greet Me!
        </button>
      </header>
    </div>
  );
}

export default App;

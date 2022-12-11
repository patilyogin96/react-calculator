import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const [handlePercent, setHandlePercent] = useState(false);

  const handleclick = (e) => {
    console.log(e);

    // perecntage case is handled diffecrently
    if (e === "%") {
      setDisplay(display * 100 + "/");
      setHandlePercent(true);

      return;
    }

    setDisplay(display + e);
  };
  console.log("state", display);

  const result = () => {
    console.log("result", display);

    // if(display.includes("/") && handlePercent == true)
    // {
    //   console.log("true");
    //   return
    // }

    //  eval methode used to compute values

    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const clearScreen = () => {
    setDisplay("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="calculator">
          <div className="title">
            <h2>Calculator</h2>
          </div>
          <div className="input-buttons">
            <input type="text" name="screen" id="screen" value={display} />

            {/* table is used to create calculator skeleton */}

            <table>
              <tr>
                <td>
                  <button className="btn" onClick={() => handleclick("(")}>
                    (
                  </button>
                </td>
                <td>
                  <button onClick={() => handleclick(")")}>)</button>
                </td>
                <td>
                  <button onClick={clearScreen}>AC</button>
                </td>
                <td>
                  <button onClick={() => handleclick("%")}>%</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={() => handleclick(7)}>7</button>
                </td>
                <td>
                  <button onClick={() => handleclick(8)}>8</button>
                </td>
                <td>
                  <button onClick={() => handleclick(9)}>9</button>
                </td>
                <td>
                  <button onClick={() => handleclick("*")}> &times; </button>
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={() => handleclick(4)}>4</button>
                </td>
                <td>
                  <button onClick={() => handleclick(5)}>5</button>
                </td>
                <td>
                  <button onClick={() => handleclick(6)}>6</button>
                </td>
                <td>
                  <button onClick={() => handleclick("-")}>-</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={() => handleclick(1)}>1</button>
                </td>
                <td>
                  <button onClick={() => handleclick(2)}>2</button>
                </td>
                <td>
                  <button onClick={() => handleclick(3)}>3</button>
                </td>
                <td>
                  <button onClick={() => handleclick("+")}>+</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={() => handleclick(0)}>0</button>
                </td>
                <td>
                  <button onClick={() => handleclick(".")}>.</button>
                </td>
                <td>
                  <button onClick={() => handleclick("/")}>&divide;</button>
                </td>
                <td>
                  <button onClick={result}>=</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

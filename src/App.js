// import react from "react";

import { useState } from "react";
import "/home/ency/Desktop/ReactCalculator/reactcalculator/src/index.css";

const App = () => {
  const [keyedin, setKeyedin] = useState("");
  const [keyedin2, setKeyedin2] = useState("");
  const [op, setOp] = useState("");

  const [result, setResult] = useState();

  const clear = () => {
    setResult("");
    setKeyedin("");
    setKeyedin2("");
    setOp("");
  };

  const calculate = () => {
    let number1 = parseInt(keyedin.toString().replace(/,/g, ""));
    let number2 = parseInt(keyedin2.toString().replace(/,/g, ""));

    if (keyedin.length >= 1) {
      if (op == "/") {
        setResult(number1 / number2);
        setKeyedin("");
        setKeyedin2("");
        setOp("");
      }
      if (op == "+") {
        setResult(number1 + number2);
        setKeyedin("");
        setKeyedin2("");
        setOp("");
      }

      if (op == "-") {
        setResult(number1 - number2);
        setKeyedin("");
        setKeyedin2("");
        setOp("");
      }
      if (op == "*") {
        setResult(number1 * number2);
        setKeyedin("");
        setKeyedin2("");
        setOp("");
      }
    } else {
      return;
    }
  };

  const getNumbers = (number) => {
    setResult("");
    setKeyedin((x) => {
      return [...x, number];
    });
  };

  const getNumbers2 = (number) => {
    setResult("");
    setKeyedin2((z) => {
      return [...z, number];
    });
  };

  const getOp = (operatorpara) => {
    if (keyedin.length == 0) {
      return;
    }
    setOp((j) => {
      return [...j, operatorpara];
    });
  };

  return (
    <div className="calculator">
      <div className="results-calculation-space">
        {keyedin}
        {op}
        {keyedin2}
        <br></br>
        <br></br>={result}
      </div>
      <div class="operators">
        <button
          onClick={() => {
            if (op.length == 1) {
              return;
            } else {
              getOp("/");
            }
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            if (op.length == 1) {
              return;
            } else {
              getOp("+");
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (op.length == 1) {
              return;
            } else {
              getOp("*");
            }
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            if (op.length == 1) {
              return;
            } else {
              getOp("-");
            }
          }}
        >
          -
        </button>
      </div>
      <br></br>
      <div className="numbers">
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(1);
            } else {
              getNumbers(1);
            }
          }}
        >
          1
        </button>

        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(2);
            } else {
              getNumbers(2);
            }
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(3);
            } else {
              getNumbers(3);
            }
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(4);
            } else {
              getNumbers(4);
            }
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(5);
            } else {
              getNumbers(5);
            }
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(6);
            } else {
              getNumbers(6);
            }
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(7);
            } else {
              getNumbers(7);
            }
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(8);
            } else {
              getNumbers(8);
            }
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(9);
            } else {
              getNumbers(9);
            }
          }}
        >
          9
        </button>
      </div>
      <br></br>
      <div className="equals">
        <button
          onClick={() => {
            if (op.length === 1) {
              getNumbers2(0);
            } else {
              getNumbers(0);
            }
          }}
        >
          0
        </button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => clear()}>Clear</button>
      </div>
    </div>

    //what do you need for acalculator/
    //operators -, +, *, /, =,. Delete
    //numbers - to 9
    //result input
    //
  );
};

export default App;

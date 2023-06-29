import { useState } from "react";
import {
  addition,
  division,
  multiplication,
  randomString,
  squareRoot,
  subtraction,
} from "../../../services/arithmetic-operation.service";

export default function NewOperationForm() {
  const handleOperation = (event: any) => setOperation(event?.target?.value);
  const [operation, setOperation] = useState(null as any);
  const [error, setError] = useState(null as any);
  const [operands, setOperands] = useState([0]);
  const [result, setResult] = useState(null as any);
  const [lock, setLock] = useState(false);

  const performOperation = () => {
    if (lock) {
      return;
    }
    setLock(true);
    setError(null);
    let promise;
    switch (operation) {
      case "ADDITION":
        promise = addition(operands);
        break;
      case "SUBTRACTION":
        promise = subtraction(operands);
        break;
      case "MULTIPLICATION":
        promise = multiplication(operands);
        break;
      case "DIVISION":
        promise = division(operands);
        break;
      case "SQUARE_ROOT":
        promise = squareRoot(operands[0]);
        break;
      case "RANDOM_STRING":
        promise = randomString(operands[0]);
        break;
      default:
        break;
    }
    promise?.then((data) => {
      if (data.error) {
        setError(data.message);
      } else {
        setResult({
          operation: operation,
          operands: operands,
          value: data.value,
          balanceLeft: data.balanceLeft,
        });
      }
      setLock(false);
    });
  };

  return (
    <div className="col-sm-12 col-md-10 col-lg-8">
      <div className="card bg-body-secondary">
        <div className="card-body">
          <form>
            {/* operation */}
            <div className="row justify-content-center">
              <div className="col-md-6">
                <label htmlFor="operation" className="form-label"></label>
                <select
                  id="operation"
                  className="form-select border-secondary-subtle"
                  onChange={handleOperation}
                >
                  <option value="">- Choose an operation -</option>
                  <option value="ADDITION">Addition</option>
                  <option value="SUBTRACTION">Subtraction</option>
                  <option value="MULTIPLICATION">Multiplication</option>
                  <option value="DIVISION">Division</option>
                  <option value="SQUARE_ROOT">Square Root</option>
                  <option value="RANDOM_STRING">Random String</option>
                </select>
              </div>
            </div>

            {/* operands */}
            {operands.map((_, index) => (
              <div className="row justify-content-center">
                <div className="pt-3 col-sm-5 col-10">
                  <input
                    type="number"
                    className="form-control border-secondary-subtle"
                    id={"operand-" + index}
                    onChange={(event) => {
                      let newOperands = [...operands];
                      newOperands[index] = parseInt(event.target.value);
                      setOperands(newOperands);
                    }}
                    value={operands[index]}
                  />
                </div>
                <div className="pt-3 col-sm-1 col-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setOperands([
                        ...operands.slice(0, index),
                        ...operands.slice(index + 1),
                      ]);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}

            {/* add operand */}
            <div className="row justify-content-center">
              <div className="p-3 col-md-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setOperands([...operands, 0])}
                >
                  Add operand
                </button>
              </div>
            </div>

            {/* perform operation button */}
            <div className="row justify-content-center">
              <div className="p-3 col-md-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={performOperation}
                >
                  Perform operation
                </button>
              </div>
            </div>

            {/* result */}
            {result && (
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Operation</th>
                        <th scope="col">Operands</th>
                        <th scope="col">Result</th>
                        <th scope="col">Balance left</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <p className="text-capitalize">
                            {result?.operation.toLowerCase()}
                          </p>
                        </th>
                        <td>{result?.operands.join(",")}</td>
                        <td>{result?.value}</td>
                        <td>{result?.balanceLeft}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {/* error */}
            {error && (
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

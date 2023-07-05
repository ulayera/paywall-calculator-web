import { fireEvent, render } from "@testing-library/react";
import { MockInstance } from "jest-mock";
import NewOperationForm from "./NewOperationForm";
import { addition, division, multiplication, randomString, squareRoot, subtraction } from "../../../services/arithmetic-operation.service";
import { act } from "react-dom/test-utils";

jest.mock("../../../services/arithmetic-operation.service", () => ({
  addition: jest.fn(),
  subtraction: jest.fn(),
  multiplication: jest.fn(),
  division: jest.fn(),
  squareRoot: jest.fn(),
  randomString: jest.fn(),
}));

describe("NewOperationForm_function", () => {
  // Tests that selecting the addition operation and providing operands updates the state accordingly
  it("test_addition_happy_path", async () => {
    const { container, getByText } = render(<NewOperationForm />);
    const operationSelect = container.querySelector("#operation");
    fireEvent.change(operationSelect as Element, { target: { value: "ADDITION" } });

    const addOperandButton = getByText("Add operand");
    act(() => {
      fireEvent.click(addOperandButton);
    });

    const operand1Input = container.querySelector("#operand-0");
    fireEvent.change(operand1Input as Element, { target: { value: "2" } });
    const operand2Input = container.querySelector("#operand-1");
    fireEvent.change(operand2Input as Element, { target: { value: "3" } });
    const performOperationButton = getByText("Perform operation");
    await act(async () => {
      (addition as any).mockResolvedValueOnce({ value: "5", balanceLeft: "0" });
      fireEvent.click(performOperationButton);

      await Promise.resolve();
    });
    expect(getByText("5")).toBeInTheDocument();
  });

  // Tests that clicking on 'Add operand' adds a new input field for an operand
  it("test_add_operand_happy_path", () => {
    const { getByText, container } = render(<NewOperationForm />);
    const addOperandButton = getByText("Add operand");
    fireEvent.click(addOperandButton);
    expect(container.querySelector("#operand-1")).toBeInTheDocument();
  });

});

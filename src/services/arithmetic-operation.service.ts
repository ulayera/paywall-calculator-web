const baseArithmeticOperationsUrl = `${process.env.REACT_APP_BASE_URL}/v1/arithmetic-operations`;

const headers = (): HeadersInit => ({
  "Content-Type": "application/json",
  "Authorization": `Bearer ${localStorage.getItem("token")?.trim()}`,
});
export const addition = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/addition`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const subtraction = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/subtraction`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => {
      return response.json();
    });
};

export const multiplication = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/multiplication`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const division = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/division`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const squareRoot = (a: number): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/square-root`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ value: a }),
  })
    .then((response) => response.json());
}

export const randomString = (length: number): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/random-string`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ value: length }),
  })
    .then((response) => response.json());
};
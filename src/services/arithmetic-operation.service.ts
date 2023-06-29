const baseUrl = "http://localhost:3000";
const baseArithmeticOperationsUrl = `${baseUrl}/v1/arithmetic-operations`;

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVsYXllcmEiLCJpYXQiOjE2ODc5NjEwMzksImV4cCI6MTY5MzE0NTAzOX0.VuZN5jVOgbhOmrqncSlbH9XNQYphdnSn5T7WHbqmeZE"

  //"Authorization": `Bearer ${localStorage.getItem("token")?.trim()}`,
};
export const addition = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/addition`, {
    method: "POST",
    headers,
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const subtraction = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/subtraction`, {
    method: "POST",
    headers,
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => {
      return response.json();
    });
};

export const multiplication = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/multiplication`, {
    method: "POST",
    headers,
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const division = (operands: Array<number>): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/division`, {
    method: "POST",
    headers,
    body: JSON.stringify({ values: operands }),
  })
    .then((response) => response.json());
};

export const squareRoot = (a: number): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/square-root`, {
    method: "POST",
    headers,
    body: JSON.stringify({ value: a }),
  })
    .then((response) => response.json());
}

export const randomString = (length: number): Promise<any> => {
  return fetch(`${baseArithmeticOperationsUrl}/random-string`, {
    method: "POST",
    headers,
    body: JSON.stringify({ value: length }),
  })
    .then((response) => response.json());
};
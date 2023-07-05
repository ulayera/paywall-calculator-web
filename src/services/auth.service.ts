
const baseAuthUrl = `${process.env.REACT_APP_BASE_URL}/v1/auth`;

export const login = (username: string, password: string): Promise<any> => {
  return fetch(`${baseAuthUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to login, please try again later.");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};

export const register = (email: string, pass: string) => {
  return fetch(`${baseAuthUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, pass }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

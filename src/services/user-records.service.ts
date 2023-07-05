const baseUserRecUrl = `${process.env.REACT_APP_BASE_URL}/v1/records`;

export const getUserRecords = (): Promise<any> => {
  return fetch(`${baseUserRecUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")?.trim()}`,
    },
  })
    .then((response) => response.json());
}
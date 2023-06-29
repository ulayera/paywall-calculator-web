const baseUrl = "http://localhost:3000";
const baseUserRecUrl = `${baseUrl}/v1/records`;

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
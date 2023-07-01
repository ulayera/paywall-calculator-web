import { BASE_URL } from "./constants";

const baseUserRecUrl = `${BASE_URL}/v1/records`;

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
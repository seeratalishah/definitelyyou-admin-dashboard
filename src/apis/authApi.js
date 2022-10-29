import { apiBaseUrl } from "./settings";

export function loginUser(data) {
    return fetch(
      `${apiBaseUrl}/api/user_auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  }
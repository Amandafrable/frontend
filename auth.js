export function isLoggedIn() {
  return localStorage.getItem("authToken") !== null;
}

export function logout() {
  localStorage.removeItem("authToken");
}

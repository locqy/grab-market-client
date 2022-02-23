export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://sangwoo-market-server.herokuapp.com"
    : "http://localhost:8080";

export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://git.heroku.com/sangwoo-market-server.git"
    : "http://localhost:8080";

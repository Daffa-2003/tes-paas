const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, "src")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

// API endpoint sederhana
app.get("/api/info", (req, res) => {
  res.json({
    app: "CICD DevSecOps",
    version: "1.0.0",
    pages: ["Home", "About"],
    serverTime: new Date().toISOString(),
  });
});

// Route untuk halaman 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "src", "index.html"));
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server berjalan di http://${HOST}:${PORT}`);
});

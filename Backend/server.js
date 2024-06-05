const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

//미들웨어: 정적 파일제공
app.use(express.static(path.join(__dirname, "..", "Frontend/vue", "dist")));

//API routes
app.use("/api", apiRoutes);

// 프론트엔드의 루트 설정
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "Frontend/vue", "dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
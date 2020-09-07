app.use(express.static("./dist/market-place"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/market-place" });
});

app.listen(process.env.PORT || 8081);
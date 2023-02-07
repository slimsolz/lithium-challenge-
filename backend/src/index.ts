import app from "./app";

require("dotenv").config();

const port = process.env.PORT || 3002;
app.set("port", port);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

export default app;

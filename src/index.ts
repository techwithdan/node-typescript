import express, { Request, Response } from "express";
const app = express();
app.use(express.json());

app.get("/", (_: Request, res: Response) => {
  res.send("hello from express and typescript").status(200);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

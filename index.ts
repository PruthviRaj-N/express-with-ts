import express, { Express, Request, Response } from "express";

const port = 5000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from express with typescript");
});
app.get("/hi", (req: Request, res: Response) => {
  res.send("BYe");
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});

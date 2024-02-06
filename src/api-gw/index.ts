import express, { Express, Request, Response } from "express";
import { Observable } from "rxjs"
import { setupLogin } from "./logging.js";

const _app: Express = express();

setupLogin(_app)

const NUM = 41

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const handler = new Observable((observer) => {
  const result = fibonacci(NUM);
  observer.next(result);
});

_app.get("/rxjs", (req: Request, res: Response) => {
  const _h = handler.subscribe({
    next: (data) => {
      res.json({
        data
      });
    },
    error: (err) => {
      res.json({ error: err });
    },
    complete: () => {
      _h.unsubscribe()
    },
  });
});

_app.get("/", (req: Request, res: Response) => {
  const result = fibonacci(NUM)
  res.json({
    data: result
  });
});

export const app = _app
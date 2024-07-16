import express, { Request, Response } from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    message: "SamuBank API"
  })
})

server.listen(5000, () => console.log("ligado"));
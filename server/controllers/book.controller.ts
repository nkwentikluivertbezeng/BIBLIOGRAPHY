import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface";
import { PrismaClient } from "@prisma/client";


class BookController implements IControllerBase {
  public path = "/books";
  public router = express.Router();
  private prisma = new PrismaClient();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.getBooks);
    this.router.post(this.path, this.postBook);
  }

  postBook = (req: Request, res: Response) => {
    const book = this.prisma.book.create({
      data: {
        author: req.body.author,
        title: req.body.title,
        year: req.body.year,
        publisher: req.body.publisher,
        volume: Math.floor(parseInt(req.body.volume_number)),
      },
    });
    res.json(book);
  };

  getBooks = async (req: Request, res: Response) => {
    const books = await this.prisma.book.findMany();
    res.send(books);
  };
}

export default BookController;

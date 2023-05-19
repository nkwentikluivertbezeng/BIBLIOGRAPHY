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
    this.router.post(this.path + "/many", this.postBooks);
  }

  postBooks = async (req: Request, res: Response) => {
    const gottenBooks = req.body.books;
    res.status(200).send(
      await this.prisma.book.createMany({
        data: gottenBooks,
      })
    );
  };

  postBook = async (req: Request, res: Response) => {
    const book = await this.prisma.book
      .create({
        data: {
          ...req.body.book,
        },
      })
      .then((re) => {
        res.status(200).send(re);
      });
  };

  getBooks = async (req: Request, res: Response) => {
    const books = await this.prisma.book.findMany();
    res.send(books);
  };
}

export default BookController;

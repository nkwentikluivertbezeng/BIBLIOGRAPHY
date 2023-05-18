import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface";
import { PrismaClient } from "@prisma/client";

class JournalController implements IControllerBase {
  public path = "/journals";
  public router = express.Router();
  private prisma = new PrismaClient();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.getJournal);
    this.router.post(this.path + "/many", this.postJournals);
  }

  postJournal = async (req: Request, res: Response) => {
    const book = await this.prisma.journal_article.create({
      data: {
      ...req.body.journal
      },
    });
    res.json(book);
  };


  postJournals = (req: Request, res: Response) => {
    const journal = this.prisma.journal_article.createMany({
      data: req.body.journals,
    });
    res.status(200).send(journal);
  };

  getJournal = async (req: Request, res: Response) => {
    const journals = await this.prisma.journal_article.findMany();
    res.send(journals);
  };
}

export default JournalController;

import * as express from "express";
import { Request, Response } from "express";
import IControllerBase from "../interfaces/IControllerBase.interface";
import { PrismaClient } from "@prisma/client";

class ConferenceController implements IControllerBase {
  public path = "/conferences";
  public router = express.Router();
  private prisma = new PrismaClient();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get(this.path, this.getConferences);
    this.router.post(this.path + "/many", this.postConferences);
  }

  postConference = async (req: Request, res: Response) => {
    const conference = await this.prisma.journal_article.create({
      data: {
      ...req.body.conference
      },
    });
    res.status(200).send(conference);
  };


  postConferences = (req: Request, res: Response) => {
    const conference = this.prisma.conference_paper.createMany({
      data: req.body.conferences,
    });
    res.status(200).send(conference);
  };

  getConferences = async (req: Request, res: Response) => {
    const conference = await this.prisma.conference_paper.findMany();
    res.status(200).send(conference);
  };
}

export default ConferenceController;

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
    res.status(200).send(
      await this.prisma.conference_paper.create({
        data: {
          ...req.body.conference,
        },
      })
    );
  };

  postConferences = async (req: Request, res: Response) => {
    res.status(200).send(
      await this.prisma.conference_paper.createMany({
        data: req.body.conferences,
      })
    );
  };

  getConferences = async (req: Request, res: Response) => {
    const conference = await this.prisma.conference_paper.findMany();
    res.status(200).send(conference);
  };
}

export default ConferenceController;

import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { PrismaClient } from '@prisma/client'


enum Style {
    IEEE,
  CHICARGO,
  APA,
}

class HomeController implements IControllerBase {
    public path = '/book'
    public router = express.Router()
    private prisma = new PrismaClient()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.getBooks);
        this.router.post(this.path, this.postBook);

    }

   

    postBook = (req: Request, res: Response) => {
        
          const book = this.prisma.book.create({
            data: {
              id: Math.floor(parseInt(req.body.id)),
              
              title: req.body.title,
              publication_year: req.body.publication_year,
              publisher_name: req.body.publisher_name,
              volume_number: Math.floor(parseInt(req.body.volume_number)),
              style: req.body.style,
            },
          });
          res.json(book);
        }
      
      getBooks =  async (req: Request, res: Response) => {
       
        const style : Style = req.query.style == 'IEEE' ? Style.IEEE : req.query.style == 'APA' ? Style.APA : Style.CHICARGO
          const books = await this.prisma.book.findMany({
            where: {
              style: style
            }, 
          });
      
          const referenceInfoArray = [
            // {
            //   type: 'book',
            //   title: 'How to kill a dragon',
            // author: [
            //   { given: 'nkwenti', family: 'kluivert' },
            //   { given: 'lambiv', family: 'gills' }
            // ],
            //   publisher: 'brother bernard',
            //   volume: '23',
            //   year: '2023',
            // },
            // {
            // type: 'book',
            // title: 'this is the second book Title',
            // author: [
            //   { given: 'peter', family: 'frank' },
            //   { given: 'james', family: 'smith' }
            // ],
            // publisher: 'Example Book two Publisher',
            // volume: '25',
            // year: '2000',
            // }
          ];
          for (const book of books) {
            referenceInfoArray.push(
              {
                type: "book",
                title: book.title,
                
                publisher: book.publisher_name,
                volume: book.volume_number,
                year: "2002",
                style: book.style,
              },
              {
                type: "book",
                title: "This is the Second Book Title",
                author: [
                  { given: "Peter", family: "Frank" },
                  { given: "James", family: "Smith" },
                ],
                publisher: "Example Book Two Publisher",
                volume: "25",
                year: "2000",
              },
              {
                type: "book",
                title: "How to kill a dragon",
                author: [
                  { given: "simon", family: "peter" },
                  { given: "lambiv", family: "gills" },
                ],
                publisher: "brother bernard",
                volume: "2",
                year: "2023",
              }
            );
          }
          //   // create a citation object from database information
          const formattedCitationsArray = [];
          // loop through reference information array and create citation objects
          for (const referenceInfo of referenceInfoArray) {
            // const citation = new Cite(referenceInfo);
            // // convert the citation to a formatted citation string
            // const formattedCitation = citation.format("bibliography", {
            //   format: "html",
            //   template: "apa",
            // });
            formattedCitationsArray.push(referenceInfo); // push formatted citation into array
          }
          console.log(formattedCitationsArray);
          res.json(formattedCitationsArray);
        }
      
    
}

export default HomeController
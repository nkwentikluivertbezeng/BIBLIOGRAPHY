
const {PrismaClient}= require('@prisma/client')
const prisma = new PrismaClient()
const Cite = require('citation-js')
const express= require('express')
const cors=require('cors')
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.listen(port, () =>
  console.log(`Listening on port ${port}`)
)
app.post('/book',async (req,res)=>{

//   const cite = new Cite('<div class="csl-bib-body">\n' +
//   '  <div data-csl-entry-id="temp_id_597253564808907" class="csl-entry"><i>the best book ever</i> (Vol. 20). (n.d.). spomking.</div>\n' +
//   '</div>');

//   const citationData = Cite.data[0];
//   const author = citationData.author[0].family;
//   const title = citationData.title;
//   const year = citationData['issued']['date-parts'][0][0];
// console.log(author+title+year)
// const formattedCitation = Cite.format('bibliography', {
//   format: 'html',
//   template: 'auto',
// });
  const book =  await prisma.book.create({
    data:{
      id :Math.floor(parseInt(req.body.id)),
      author_name :req.body.author_name,
      title   :req.body.title,
      publication_year :new Date(req.body.publication_year),
      info     :req.body.info,
      volume_number :Math.floor(parseInt(req.body.volume_number)),
      style :req.body.style
    }
  })
  res.json(book)
})
app.get('/book', async (req,res)=>{
  const books = await prisma.book.findMany({
    where:{
      style:req.query.style
    }
  })

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
for (const book of books){
 referenceInfoArray.push(
  {
    type: 'book',
    title: book.title,
    author: [
      {given:book.author_name}
    ],
    publisher:book.publisher_name,
    volume: book.volume_number,
    year:'2002',
    style:book.style

  },
  {
    type: 'book',
    title: 'This is the Second Book Title',
    author: [
      { given: 'Peter', family: 'Frank' },
      { given: 'James', family: 'Smith' },
    ],
    publisher: 'Example Book Two Publisher',
    volume: '25',
    year: '2000', 
  },
    {
    type: 'book',
    title: 'How to kill a dragon',
    author: [
      { given: 'simon', family: 'peter' },
      { given: 'lambiv', family: 'gills' }
    ], 
    publisher: 'brother bernard',
    volume: '2',
    year: '2023',
  },
 )
}
//   // create a citation object from database information
  const formattedCitationsArray = [];
  // loop through reference information array and create citation objects
  for (const referenceInfo of referenceInfoArray) {
    const citation = new Cite(referenceInfo);
    // convert the citation to a formatted citation string
    const formattedCitation = citation.format('bibliography', {
      format: 'html',
      template: 'apa'
    });
    formattedCitationsArray.push(formattedCitation); // push formatted citation into array
  }
  console.log(formattedCitationsArray)
  res.json(formattedCitationsArray)
})

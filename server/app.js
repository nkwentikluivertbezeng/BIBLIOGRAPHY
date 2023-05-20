
const {PrismaClient, style, journal_article_style}= require('@prisma/client')
const prisma = new PrismaClient()
const  fs =require('fs');
const jsdom=require("jsdom")
const {JSDOM} =jsdom
const bibliography = require('bibliography')
const cheerio = require('cheerio');
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

let Data;
app.get('/books',async (req,res)=>{
  const books= await prisma.book.findMany()
res.send(books)
})
app.get('/conferences',async (req,res)=>{
  const conferences= await prisma.conference_paper.findMany()
res.send(conferences)
})
app.get('/journals',async (req,res)=>{
  const journal= await prisma.journal_article.findMany()
res.send(journal)
})


fs.readFile('./references.html', (err, data) => {
  if (err) throw err;

   Data=data.toString('utf8')
  
});
app.get('/add_reference',async (req,res)=>{
  let reference
  if (!Data){
    res.send('error reading file')
  }
 
  const type = req.query.type
  const style = req.query.style
console.log
  const dom=new JSDOM(Data,{
    contentType:"text/html",
    parsingMode:"Lxml"
  });

const references=dom.window.document.querySelector('p').textContent

if(type=='book'){
 reference= get_book_reference(references,style)

 await prisma.book.create({
    data: reference
  })

}
else if(type=='conference'){
  reference= get_conference_paper_reference(references,style)
console.log(reference)
await prisma.conference_paper.create({
      data:reference
    })
}
else{
  reference= get_journal_reference(references,style)
  await prisma.journal_article.create({
    data: reference
  })
}
})


function get_conference_paper_reference(text,style) {

  if(style=='chicago'){
// const html='  <p class="references">Johnson, Mary. 2019 "The Importance of Research in Science Education." In <i>Proceedings of the International Conference on Science Education</i>, 123-135.</p>'


const authorData = text.match(/^(.*?)\./)[0]
const author=authorData.split('.')[0]

const pages = text.split(',')[2].split('.')[0];
const year = text.match(/\s*(\d+)/)[0].trim();

const information = text.match(/In.*?\,/)[0].split(',')[0]
const title = text.match(/"([^"]*)"/)[0].split('.')[0].split('"')[1];

const match = {
  "author": author,
  "year": year,
  "title": title,
  "pages": pages,
  "information": information
};
return match
  }
  if(style=='APA'){
    // const html='<p class="references">Johnson, M. (2019). The importance of research in science education. , <i>Proceedings of the International Conference on Science Education</i> ,123-135.</p>'
    
    const authorData = text.match(/^(.*?)\./)[0]
    const author=authorData.split('.')[0]
    
    const pages = text.split(',')[3].split('.')[0];
    const year = text.split('(')[1].split(')')[0].trim();
    
    const information = text.split(',')[2].split('(')[0]
    const title = text.split(',')[2];
    
    const match = {
      "author": author,
      "year": year,
      "title": title,
      "pages": pages,
      "information": information
    };
   return match
      }
}

function get_book_reference(html,style) {
  const dom=new JSDOM(html,{
    contentType:"text/html",
    parsingMode:"Lxml"
  });
const reference=dom.window.document.querySelector('.references')
const ref=String(reference.textContent)
const text=ref
  if(style=='apa'){
   const author= text.match(/[^(]*/)[0]
const year = text.match(/\s*(\d+)/)[0].trim();
const volume = text.match(/vol.*?\)/)[0].split(')')[0].split('.')[1];
const publisher = text.match(/(?<=\.)([^.]+)(?=\.)/g)[1];
const title = text.match(/(?<=\.)([^.]+)(?=\.)/g)[0];
const match = {
  "author": author,
  "year": year,
  "title": title,
  "volume": volume,
  "publisher": publisher
};
return match
  }
  if(style=='IEEE'){
    const authorData = text.match(/^(.*?),/g)[0]
    const author=authorData.split(',')[0]
    const volume = text.match(/\s*(\d+)/)[0];
    const year = text.slice(-5).split('.')[0].trim();
    const publisher = text.match(/.(.*?)\,/g)[1].split('.')[3].split(',')[0];
    const title = text.match(/,(.*?)\./g)[0].split(',')[1];
const match = {
  "author": author,
  "year": year,
  "title": title,
  "volume": volume,
  "publisher": publisher
};
return match
  }
}







function get_journal_reference(html,style) {
  const dom=new JSDOM(html,{
    contentType:"text/html",
    parsingMode:"Lxml"
  });
const reference=dom.window.document.querySelector('.references')
const ref=String(reference.textContent)
const text=ref
  if(style=='apa'){
    const authorData = text.match(/[^(]*/)[0]
const author=authorData.split('.')[0]
const yearData = text.match(/(?<year>\((\d{4})\))/)[1];
const year = yearData.substring(1,yearData.length-1).trim()
  const title = text.match(/(?<=\.)([^.]+)(?=\.)/g)[1];
 const journal =  text.match(/(?<=\.)([^.]+)(?=\,)/)[0].split(',')[0].trim()
const volume = text.match(/,\s*(\d+)/)[1];
const issueData = text.match(/\((.*?)\)/g)[1]
const issue = issueData.substring(1, issueData.length-1);
const pages = text.match(/\d+-\d+/g)[0];

const match = {
  "author": author,
  "year": year,
  "title": title,
  "journal": journal,
  "volume": volume,
  "issue": issue,
  "pages": pages
};
return match
  }
  else if (style=='chicago'){
const authorData =text.match( /^.*?\./)[0]
const author=authorData.split('.')[0]
const year= text.match( /\((.*?)\)/g)[0].slice(1, -1).trim()
const journalData =  text.match(/"([^"]+)"/g)[0].split(',')[0].trim()
const journal =journalData.substring(1,journalData.length-1)
const title=text.match(/(?<=")[^"]+(?=\s*,)/)[0]
const volume = text.match(/,\s*(\d+)/)[1];
const issueData = text.match(/\((.*?)\)/g)[1]
const issue = issueData.substring(1, issueData.length-1);
const pages = text.match(/\d+-\d+/g)[0];
 
  const match = {
    "author": author,
    "year": year,
    "title": title,
    "journal": journal,
    "volume": volume,
    "issue": issue,
    "pages": pages
  };
  return match
}
else if (style=='IEEE'){
  const authorData = text.match(/^(.*?),/g)[0]
  const author=authorData.split(',')[0]
  
  const journalData =  text.match(/"([^"]+)"/g)[0].split(',')[0].trim()
  const journal =journalData.substring(1,journalData.length-1)
  const titleData=text.match(/(?<=")[^"]+(?=\s*vol)/)[0]
  const title =titleData.split(',')[0]+ ", " +titleData.split(',')[1]
  const volumeData=text.match(/vol.*?,/)[0]
  const volume =volumeData.split(',')[0]
  const issueData=text.match(/.(.*?),/g)[4].split('.')[1]
  const issue=issueData.split(',')[0]
  const pageData= text.match(/.(.*?),/g)[5].split('.')[1]
  const pages= pageData.split(',')[0]
  const yearData= text.match(/.(.*?),/g)[6]
  const year=yearData.split(',')[0].trim()
  
  const match = {
    "author": author,
    "year": year,
    "title": title,
    "journal": journal,
    "volume": volume,
    "issue": issue,
    "pages": pages
  };
  return match
}

}
app.post('/journal',async (req,res)=>{
  
const journal=await prisma.journal_article.create({
  data:req.body.params.journal
})
res.send(journal)
//apa
// const html ='<div class="references"> <p> Smith, peter griggen. (2001).<i> Sample reference<i> .          Journal of bibliographic studies                 ,   1(1), 1-10.<p><div>'

  //IEEE
  // const html = `<p class="references"> D. Lyon, "Everyday surveillance: Personal data and social classifications." <i>informationrmation, Communication & Society</i>, vol. 5, no. 2, pp. 242-257, 2002,</p>`;

//journal_article   chicago
// const html = `<p class="references"> Smith, J. (2023). "The use of artificial intelligence in medicine."<i> Journal of the American Medical Association</i>, 320(8): 789-797.</p>`;


})

app.post('/book',async (req,res)=>{
  const book=await prisma.book.create({
    data:req.body.params.book
  })
  res.send(book)

})



  app.post('/conference',async (req,res)=>{
  
    const conference=await prisma.conference_paper.create({
      data:req.body.params.conference
    })
    res.send(conference)
  })
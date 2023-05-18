import { PrismaClient } from "@prisma/client"



const prisma = new PrismaClient()

const seedBooks = prisma.book .createMany({
    data : [
        
            {
              "title": "The Book of Secrets",
              "author": "John Smith",
              "year": '2023',
              "publisher": "Random House",
              "volume": 1
            },
            {
              "title": "The Science of Happiness",
              "author": "David Jones and Emily Brown",
              "year": "2022",
              "publisher": "HarperCollins",
              "volume": 1
            },
            {
              "title": "The Future of Work",
              "author": "William Williams, John Smith, David Jones, et al.",
              "year": "2021",
              "publisher": "Oxford University Press",
              "volume": 1
            },
            {
              "title": "The Best American Poetry 2020",
              "author": "Emily Brown",
              "year": "2020",
              "publisher": "Simon & Schuster",
              "volume": 1
            },
            {
              "title": "The Stranger",
              "author": "Albert Camus",
            
              "year": "2021",
              "publisher": "Hackett Publishing",
              "volume": 1
            },
            {
              "title": "Crime and Punishment",
              "author": "Fyodor Dostoevsky",
              "year": "2022",
              "publisher": "Penguin Classics",
              "volume": 1
            },
            {
              "title": "The Stranger",
              "author": "Albert Camus",
              
              "year": "2021",
              "publisher": "Hackett Publishing",
              "volume": 1
            },
            {
              "title": "Hamlet",
              "author": "William Shakespeare",
              "year": "1603",
              "publisher": "First Folio",
              "volume": 1
            },
            {
              "title": "Pride and Prejudice",
              "author": "Jane Austen",
              "year": "1813",
              "publisher": "John Murray",
              "volume": 1
            },
            {
              "title": "A Tale of Two Cities",
              "author": "Charles Dickens",
              "year": "1859",
              "publisher": "Chapman and Hall",
              "volume": 1
            },
            {
              "title": "The Adventures of Tom Sawyer",
              "author": "Mark Twain",
              "year": "1876",
              "publisher": "American Publishing Company",
              "volume": 1
            },
            {
              "title": "The Great Gatsby",
              "author": "F. Scott Fitzgerald",
              "year": "1925",
              "publisher": "Scribner's",
              "volume": 1
            },
            {
              "title": "The Sun Also Rises",
              "author": "Ernest Hemingway",
              "year": "1926",
              "publisher": "Scribner's",
              "volume": 1
            },
            {
              "title": "The Grapes of Wrath",
              "author": "John Steinbeck",
              "year": "1939",
              "publisher": "Viking Press",
              "volume": 1
            },
            {
              "title": "Nineteen Eighty-Four",
              "author": "George Orwell",
              "year": "1949",
              "publisher": "Secker and Warburg",
              "volume": 1
            },
            {
              "title": "The Handmaid's Tale",
              "author":  "Secker and Warburg",
              "year": "1985",
              "publisher": "Houghton Mifflin",
              "volume": 1
            },
            {
              "title": "Beloved",
              "author": "Toni Morrison",
              "year": "1987",
              "publisher": "Alfred A. Knopf",
              "volume": 1
            },
            {
              "title": "Disgrace",
              "author": "J. M. Coetzee",
              "year": "1997",
              "publisher": "Viking"
           ,
              "volume": 1 },
            {
              "title": "Never Let Me Go",
              "author": "Kazuo Ishiguro",
              "year": "2005",
              "publisher": "Alfred A. Knopf"
           ,
              "volume": 1 },
            {
              "title": "The Blind Assassin",
              "author": "Margaret Atwood",
              "year": "2008",
              "publisher": "McClelland & Stewart"
           ,
              "volume": 1 }
          ]
    
  })

  export default seedBooks
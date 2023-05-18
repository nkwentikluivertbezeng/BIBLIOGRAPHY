
import { PrismaClient } from '@prisma/client'
import  seedBooks from './books'
const prisma = new PrismaClient()

async function main() {
await seedBooks

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
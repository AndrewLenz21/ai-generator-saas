import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb

console.log(`This is prisma db subs: ${prismadb.userSubscription}`)
console.log(`This is prisma db limit: ${prismadb.userApiLimit}`)

export default prismadb;
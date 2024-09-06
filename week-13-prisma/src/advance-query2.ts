import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
  const res = await prisma.post.findMany({
    take: 1, //limit
    skip: 0 //offset
  })
  console.log(res);
}
main()
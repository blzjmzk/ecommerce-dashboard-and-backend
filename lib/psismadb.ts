import { PrismaClient } from "@prisma/client";

declare global {
  //dodajemy prismę do globalThis
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
//zapobiegamy tworzeniu wielu instancji prisma

export default prismadb;

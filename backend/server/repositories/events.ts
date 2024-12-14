import prisma from "../prismaClient";

const { event: db } = prisma;

export const list = async () => {
  return await db.findMany({});
};

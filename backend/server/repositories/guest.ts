import prisma from "../prismaClient";

const { guest: db } = prisma;

export const list = async (
  perPage: number,
  skip: number,
  search: string,
  event: string,
  status: string
) => {
  console.log("rep: ", status);
  console.log("rep: ", status === "true" ? true : false);
  const guests = await db.findMany({
    skip: perPage * skip,
    take: perPage,
    where: {
      OR: [
        {
          firstName: { contains: search },
        },
        {
          companyName: { contains: search },
        },
        {
          lastName: { contains: search },
        },
        {
          role: { contains: search },
        },
        {
          check: { equals: status === "true" ? true : false },
        },
      ],
      AND: [
        {
          invitation: { contains: event },
        },
      ],
    },
  });
  const totalGuests = await db.count();
  return [guests, totalGuests];
};

export const updateGuest = async (id: number, time: string) => {
  const guestData = await db.findUnique({
    where: {
      id,
    },
  });
  console.log(guestData?.check);
  return await db.update({
    data: {
      time,
      check: !guestData?.check,
    },
    where: {
      id: guestData?.id,
    },
    select: {
      check: true,
    },
  });
};

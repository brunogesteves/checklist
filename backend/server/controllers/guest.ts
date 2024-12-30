import * as GuestsRepository from "../repositories/guest";
import { Request, Response } from "express";

export const list = async (req: Request, res: Response): Promise<void> => {
  const { perPage, skip, search, searchByEvent } = req.query;
  console.log("api list");
  try {
    const [guests, totalGuests] = await GuestsRepository.list(
      Number(perPage),
      Number(skip),
      search as string,
      searchByEvent as string
    );
    res.json({ guests, totalGuests });
  } catch (e) {
    res.status(500).send("Erro");
  }
};

export const updateGuest = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { time, id } = req.body;

  try {
    const data = await GuestsRepository.updateGuest(Number(id), time);
    res.json({ status: true, data });
  } catch (error) {
    res.status(500).send("Erro");
  }
};

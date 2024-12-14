import * as EventsRepository from "../repositories/events";
import { Request, Response } from "express";

export const list = async (req: Request, res: Response): Promise<void> => {
  try {
    const getEvents = await EventsRepository.list();
    res.json({ getEvents });
  } catch (e) {
    res.status(500).send("Erro");
  }
};

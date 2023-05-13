import { Mutation, Query, Resolver } from 'type-graphql';

import { PrismaClient } from '@prisma/client';
import { EventsResults, GuestResults } from '../Dtos/models/results-models';
const prisma = new PrismaClient();

@Resolver()
export class GuestListResolver {
  @Query(() => [EventsResults])
  async getEvents() {
    try {
      let eventsResults = await prisma.event.findMany({});

      if (eventsResults) {
        return eventsResults;
      }
    } catch (error) {
      console.log(error);
    }
  }
  @Query(() => [GuestResults])
  async getGuests() {
    try {
      let guestResults = await prisma.guest.findMany({});

      if (guestResults) {
        return guestResults;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

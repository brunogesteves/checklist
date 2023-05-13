import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class EventsResults {
  @Field()
  name!: string;

  @Field()
  id!: number;

  @Field()
  invitationId!: string;
}

@ObjectType()
export class GuestResults {
  @Field()
  firstName!: string;

  @Field()
  lastName!: string;

  @Field()
  role?: string;

  @Field()
  companyName!: string;

  @Field()
  invitationId!: string;

  @Field()
  id!: number;
}

import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class EventsResults {
  @Field(() => String)
  name!: string;

  @Field(() => Number)
  id!: number;

  @Field(() => String)
  invitationId!: string;
}

@ObjectType()
export class GuestResults {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;

  @Field(() => String)
  role?: string;

  @Field(() => String)
  companyName!: string;

  @Field(() => String)
  invitationId!: string;

  @Field(() => Number)
  id!: number;
}

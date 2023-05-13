import { gql } from '@apollo/client';

export const GET_ALL_EVENTS = gql`
  query GetEvents {
    getEvents {
      invitationId
      name
    }
  }
`;

export const GET_ALL_GUESTS = gql`
  query GetEvents {
    getGuests {
      firstName
      lastName
      role
      companyName
      invitationId
      id
    }
  }
`;

export interface ItemCompanyProps {
  companyName: string;
  checkedInGuest: number;
}

export interface ListEventsProps {
  id: number;
  name: string;
  invitationCode: string;
}

export interface GuestProps {
  firstName: string;
  id: number;
  lastName: string;
  role: string;
  companyName: string;
  check: boolean;
  time: string;
  invitation: string;
}

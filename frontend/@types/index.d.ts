export interface ItemCompanyProps {
  companyName: string;
  checkedInGuest: number;
}

export interface ListEventsProps {
  name: string;
  invitationCode: string;
}

export interface ListGuestProps {
  firstName: string;
  id: number;
  lastName: string;
  role: string;
  companyName: string;
  check: boolean;
  time: string;
  invitation: string;
}

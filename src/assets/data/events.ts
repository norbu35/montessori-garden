enum Category {
  BH = "Bank Holiday",
  OD = "Open Day",
  ID = "Inset Day",
  PS = "Parents Social",
  PTC = "Parent Teacher Chats",
  SC = "Seasonal Closure",
}

interface Event {
  id: Number;
  type: Category;
  desc?: String;
  startDate: Date;
  endDate: Date;
}

const currentYear = new Date().getFullYear();

export const events: Event[] = [
  {
    id: 0,
    type: Category.BH,
    startDate: new Date(currentYear, 1, 1),
    endDate: new Date(currentYear, 1, 2),
  },
  {
    id: 1,
    type: Category.SC,
    startDate: new Date(currentYear, 1, 3),
    endDate: new Date(currentYear, 1, 4),
  },
  {
    id: 2,
    type: Category.OD,
    startDate: new Date(currentYear, 1, 28),
    endDate: new Date(currentYear, 1, 28),
  },
  {
    id: 3,
    type: Category.PS,
    startDate: new Date(currentYear, 2, 16),
    endDate: new Date(currentYear, 2, 16),
  },
  {
    id: 4,
    type: Category.ID,
    startDate: new Date(currentYear, 2, 17),
    endDate: new Date(currentYear, 2, 17),
  },
  {
    id: 5,
    type: Category.BH,
    startDate: new Date(currentYear, 4, 7),
    endDate: new Date(currentYear, 4, 7),
  },
  {
    id: 6,
    type: Category.BH,
    startDate: new Date(currentYear, 4, 10),
    endDate: new Date(currentYear, 4, 10),
  },
  {
    id: 7,
    type: Category.PTC,
    startDate: new Date(currentYear, 4, 24),
    endDate: new Date(currentYear, 4, 28),
  },
  {
    id: 8,
    type: Category.BH,
    startDate: new Date(currentYear, 5, 1),
    endDate: new Date(currentYear, 5, 1),
  },
];

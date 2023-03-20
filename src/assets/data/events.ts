const days = {
  BH: {
    type: "BH",
    name: "Bank Holiday",
    color: "#393c99",
  },
  OD: {
    type: "OD",
    name: "Open Day",
    color: "#bf60bf",
  },
  ID: {
    type: "ID",
    name: "Inset Day",
    color: "#2086ab",
  },
  PS: {
    type: "PS",
    name: "Parent's Social",
    color: "#ab3018",
  },
  PTC: {
    type: "PTC",
    name: "Parent Teacher Chats",
    color: "#849110",
  },
  SC: {
    type: "SC",
    name: "Seasonal Closure",
    color: "#808080",
  },
};

interface Event {
  id: number;
  name: string;
  color: string;
  startDate: Date;
  endDate: Date;
}

const currentYear = new Date().getFullYear();

export const events: Event[] = [
  {
    id: 0,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 0, 2),
    endDate: new Date(currentYear, 0, 2),
  },
  {
    id: 1,
    name: days.SC.name,
    color: days.SC.color,
    startDate: new Date(currentYear, 0, 3),
    endDate: new Date(currentYear, 0, 4),
  },
  {
    id: 2,
    name: days.OD.name,
    color: days.OD.color,
    startDate: new Date(currentYear, 0, 28),
    endDate: new Date(currentYear, 0, 28),
  },
  {
    id: 3,
    name: days.PS.name,
    color: days.PS.color,
    startDate: new Date(currentYear, 1, 16),
    endDate: new Date(currentYear, 1, 16),
  },
  {
    id: 4,
    name: days.ID.name,
    color: days.ID.color,
    startDate: new Date(currentYear, 1, 17),
    endDate: new Date(currentYear, 1, 17),
  },
  {
    id: 5,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 3, 7),
    endDate: new Date(currentYear, 3, 7),
  },
  {
    id: 6,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 3, 10),
    endDate: new Date(currentYear, 3, 10),
  },
  {
    id: 7,
    name: days.PTC.name,
    color: days.PTC.color,
    startDate: new Date(currentYear, 3, 24),
    endDate: new Date(currentYear, 3, 28),
  },
  {
    id: 8,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 4, 1),
    endDate: new Date(currentYear, 4, 1),
  },
  {
    id: 9,
    name: days.ID.name,
    color: days.ID.color,
    startDate: new Date(currentYear, 4, 2),
    endDate: new Date(currentYear, 4, 2),
  },
  {
    id: 10,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 4, 8),
    endDate: new Date(currentYear, 4, 8),
  },
  {
    id: 11,
    name: days.OD.name,
    color: days.OD.color,
    startDate: new Date(currentYear, 4, 20),
    endDate: new Date(currentYear, 4, 20),
  },
  {
    id: 12,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 4, 29),
    endDate: new Date(currentYear, 4, 29),
  },
  {
    id: 13,
    name: days.PS.name,
    color: days.PS.color,
    startDate: new Date(currentYear, 6, 3),
    endDate: new Date(currentYear, 6, 3),
  },
  {
    id: 14,
    name: days.PTC.name,
    color: days.PTC.color,
    startDate: new Date(currentYear, 7, 14),
    endDate: new Date(currentYear, 7, 18),
  },
  {
    id: 15,
    name: days.SC.name,
    color: days.SC.color,
    startDate: new Date(currentYear, 7, 21),
    endDate: new Date(currentYear, 7, 25),
  },
  {
    id: 16,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 7, 28),
    endDate: new Date(currentYear, 7, 28),
  },
  {
    id: 17,
    name: days.ID.name,
    color: days.ID.color,
    startDate: new Date(currentYear, 7, 29),
    endDate: new Date(currentYear, 7, 29),
  },
  {
    id: 18,
    name: days.ID.name,
    color: days.ID.color,
    startDate: new Date(currentYear, 9, 30),
    endDate: new Date(currentYear, 9, 30),
  },
  {
    id: 19,
    name: days.PTC.name,
    color: days.PTC.color,
    startDate: new Date(currentYear, 10, 13),
    endDate: new Date(currentYear, 10, 17),
  },
  {
    id: 20,
    name: days.PS.name,
    color: days.PS.color,
    startDate: new Date(currentYear, 10, 23),
    endDate: new Date(currentYear, 10, 23),
  },
  {
    id: 21,
    name: days.ID.name,
    color: days.ID.color,
    startDate: new Date(currentYear, 11, 22),
    endDate: new Date(currentYear, 11, 22),
  },
  {
    id: 22,
    name: days.BH.name,
    color: days.BH.color,
    startDate: new Date(currentYear, 11, 25),
    endDate: new Date(currentYear, 11, 26),
  },
  {
    id: 23,
    name: days.SC.name,
    color: days.SC.color,
    startDate: new Date(currentYear, 11, 27),
    endDate: new Date(currentYear, 11, 29),
  },
];

import {
  AccountData,
  BalanceHistory,
  CreditCard,
  Transaction,
  WeeklyTransaction,
} from "./types";

export const dummyCards: CreditCard[] = [
  {
    id: 1,
    color: "black",
    balance: 1234.56,
    holder: "John Doe",
    expiryMonth: 5,
    expiryYear: 23,
    cardNumber: "1234 **** **** 5678",
    type: "mastercard",
  },
  {
    id: 2,
    color: "white",
    balance: 7890.12,
    holder: "Jane Smith",
    expiryMonth: 8,
    expiryYear: 22,
    cardNumber: "8765 **** **** 4321",
    type: "mastercard",
  },
  {
    id: 3,
    color: "black",
    balance: 3456.78,
    holder: "Alice Johnson",
    expiryMonth: 3,
    expiryYear: 24,
    cardNumber: "5678 **** **** 1234",
    type: "mastercard",
  },
];

export const dummyTransactions: Transaction[] = [
  {
    id: 1,
    type: "card",
    message: "Purchase at Grocery Store",
    value: -120,
    date: "10 October 2023",
  },
  {
    id: 2,
    type: "paypal",
    message: "Refund from Online Store",
    value: 300,
    date: "08 October 2023",
  },
  {
    id: 3,
    type: "direct",
    message: "Salary Payment",
    value: 5000,
    date: "01 October 2023",
  },
  {
    id: 4,
    type: "paypal",
    message: "Payment to Freelancer",
    value: -750,
    date: "05 October 2023",
  },
  {
    id: 5,
    type: "direct",
    message: "Rent Payment",
    value: -1500,
    date: "03 October 2023",
  },
  {
    id: 6,
    type: "card",
    message: "Dinner at Restaurant",
    value: -200,
    date: "02 October 2023",
  },
];

export const dummyWeeklyTransactions: WeeklyTransaction[] = [
  [500, 600],
  [400, 300],
  [350, 450],
  [200, 400],
  [600, 500],
  [450, 250],
  [300, 500],
];

export const dummyExpenseStatistics = [
  {
    name: "utilities",
    label: "Utilities",
    percentage: 20,
    fill: "#33FF57",
  },
  {
    name: "healthcare",
    label: "Healthcare",
    percentage: 10,
    fill: "#FF33A1",
  },
  {
    name: "education",
    label: "Education",
    percentage: 10,
    fill: "#A133FF",
  },
  {
    name: "entertainment",
    label: "Entertainment",
    percentage: 20,
    fill: "#FFC300",
  },
];

export const dummyQuickTransferPeople = [
  {
    id: 1,
    image: "/people1.jpg",
    name: "Michael Scott",
    role: "Regional Manager",
  },
  {
    id: 2,
    image: "/people2.jpg",
    name: "Dwight Schrute",
    role: "Assistant to the Regional Manager",
  },
  {
    id: 3,
    image: "/people3.jpg",
    name: "Jim Halpert",
    role: "Sales Representative",
  },
  {
    id: 4,
    image: "/people4.jpg",
    name: "Pam Beesly",
    role: "Receptionist",
  },
  {
    id: 5,
    image: "/people5.jpg",
    name: "Stanley Hudson",
    role: "Sales Representative",
  },
];

export const dummyBalanceHistory: BalanceHistory[] = [
  { month: "Jul", balance: 500 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 600 },
  { month: "Oct", balance: 900 },
  { month: "Nov", balance: 400 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 800 },
];

export const dummyAccount: AccountData = {
  name: "Amit Chhatbar",
  username: "amitchhatbar11",
  email: "amitchhatbar11@gmail.com",
};

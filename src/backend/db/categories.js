
   
import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tote",
    brandName: "Michael Kors",
  },
  {
    _id: uuid(),
    categoryName: "Wallet",
    brandName: "Coach",
  },
  {
    _id: uuid(),
    categoryName: "Watch",
    brandName: "Michael Kors",
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    brandName: "Jimmy Choo",
  },
];
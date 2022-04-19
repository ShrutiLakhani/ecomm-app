import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tote",
    categoryImage:
      "https://assets.tatacliq.com/medias/sys_master/images/32285859282974.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Wallet",
    categoryImage:
      "https://assets.tatacliq.com/medias/sys_master/images/32285859086366.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Watch",
    categoryImage:
      "https://assets.tatacliq.com/medias/sys_master/images/32285859217438.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Footwear",
    categoryImage:
      "https://assets.tatacliq.com/medias/sys_master/images/32285859414046.jpg",
  },
];

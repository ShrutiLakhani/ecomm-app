import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Michael Kors",
    description: "Marilyn Medium Logo Tote Bag",
    price: 100000,
    categoryName: "Tote",
    brandName: "Michael Kors",
    rating: 4,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000010664108_658Wx734H_202109211508401.jpeg",
  },
  {
    _id: uuid(),
    title: "Michael Kors",
    description: "Karlie Medium Leather Satchel",
    price: 36000,
    categoryName: "Tote",
    brandName: "Michael Kors",
    rating: 4.4,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000011399861_658Wx734H_202112091826371.jpeg",
  },
  {
    _id: uuid(),
    title: "Coach",
    price: 46000,
    description: "Freya Large Pebbled Leather Tote Bag",
    categoryName: "Tote",
    brandName: "Coach",
    rating: 3,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000008199471_658Wx734H_202011150127351.jpeg",
  },
  {
    _id: uuid(),
    title: "Coach",
    price: 34000,
    description: "Phoebe Large Logo and Pebbled Leather Tote Bag",
    categoryName: "Tote",
    brandName: "Coach",
    rating: 4,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000009368093_658Wx734H_202104171044401.jpeg",
  },
  {
    _id: uuid(),
    title: "Coach",
    price: 16500,
    description: "Crossgrain Leather Continental Wristlet",
    categoryName: "Wallet",
    brandName: "Coach",
    rating: 3,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000009368129_658Wx734H_202104171046101.jpeg",
  },
  {
    _id: uuid(),
    title: "Michael Kors",
    price: 24000,
    description: "Leather Continental Wristlet",
    categoryName: "Wallet",
    brandName: "Michael Kors",
    rating: 4,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i5/658Wx734H/MP000000006048417_658Wx734H_20191205035426.jpeg",
  },
  {
    _id: uuid(),
    title: "Coach",
    price: 22500,
    description: "Adele Pebbled Leather Smartphone Wallet",
    categoryName: "Watch",
    brandName: "Coach",
    rating: 2,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i4/658Wx734H/MP000000006768229_658Wx734H_20200325122144.jpeg",
  },
  {
    _id: uuid(),
    title: "Michael Kors",
    price: 14500,
    description: "Oversized Lennox Pavé Rose Gold-Tone Watch",
    categoryName: "Watch",
    brandName: "Michael Kors",
    rating: 4,
    inStock: true,
    badge: "New",
    image:
      "https://img.tatacliq.com/images/i7/658Wx734H/MP000000010121519_658Wx734H_202107301823331.jpeg",
  },
  {
    _id: uuid(),
    title: "Coach",
    price: 24000,
    description: "Mini Camille Pavé Two-Tone Watch",
    categoryName: "Footwear",
    brandName: "Coach",
    rating: 3,
    inStock: true,
    badge: "New",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220318/hfDu/623392f0aeb26921afe18dcc/-473Wx593H-410311256-rfw-MODEL3.jpg",
  },
  {
    _id: uuid(),
    title: "Michael Kors",
    price: 17000,
    description: "Alice Logo Ballet Flat",
    categoryName: "Footwear",
    brandName: "Michael Kors",
    rating: 2,
    inStock: true,
    badge: "New",
    image:
      "https://assets.ajio.com/medias/sys_master/root/h76/h90/14184011726878/-473Wx593H-410158870-vanilla-MODEL.jpg",
  },
  {
    _id: uuid(),
    title: "Jimmy Choo",
    description: " ",
    price: 90000,
    description: "Kelli Embellished Logo Sandal",
    categoryName: "Footwear",
    brandName: "Jimmy Choo",
    rating: 1,
    inStock: false,
    badge: "New",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20220211/mIvv/620682fef997dd03e2cc67f9/-473Wx593H-410298709-74-MODEL.jpg",
  },
  {
    _id: uuid(),
    title: "Gucci",
    price: 28000,
    description: "Dorothy Flex Leather Pump",
    categoryName: "Footwear",
    brandName: "Gucci",
    rating: 1,
    inStock: false,
    badge: "New",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20210921/1ojW/614a0235f997ddce89d493eb/-473Wx593H-410252210-72325-MODEL2.jpg",
  },
];

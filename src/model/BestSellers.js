import { v4 as uuidv4 } from "uuid";
import tumi from "../assets/imgs/tumi.jpg";
import tac from "../assets/imgs/tactical-series.jpg";
import lipault from "../assets/imgs/lipault.jpg";
import briggs from "../assets/imgs/briggs.jpg";
import calvin from "../assets/imgs/calvin.jpg";

const BestSellers = [
  {
    id: uuidv4(),
    title:
      "TUMI - Merge International Front Lid 4 Wheeled Carry-On Luggage - 22 Inch Rolling Suitcase for Men and Women - Black",
    price: "599",
    rate: "5",
    image: tumi,
  },
  {
    id: uuidv4(),
    title:
      "Lipault - Plume Avenue Spinner 55/20 Luggage - 22' Carry-On Rolling Bag for Women - Night Blue",
    price: "370",
    rate: "5",
    image: lipault,
  },
  {
    id: uuidv4(),
    title:
      "5.11 Tactical Series Load Up 22 Carry On Cabin Luggage, 56 cm, Volcanic (Grey)",
    price: "240",
    rate: "4",
    image: tac,
  },
  {
    id: uuidv4(),
    title:
      "Briggs & Riley Rhapsody-Softside Spinner Luggage, Plum, Tall Carry-On 22-Inch",
    price: "399",
    rate: "4",
    image: briggs,
  },
  {
    id: uuidv4(),
    title: "Calvin Klein Path Softside Spinner Luggage with TSA Lock, Black",
    price: "190",
    rate: "3",
    image: calvin,
  },
];

export default BestSellers;

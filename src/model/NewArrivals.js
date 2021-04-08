import { v4 as uuidv4 } from "uuid";
import dakine from "../assets/imgs/dakine.jpg";
import dakineCarry from "../assets/imgs/dakine2.jpg";
import claire from "../assets/imgs/claire.jpg";
import traveler from "../assets/imgs/traveler.jpg";
import itgirl from "../assets/imgs/itgirl.jpg";
import millennium from "../assets/imgs/millennium.jpg";

const NewArrivals = [
  {
    id: uuidv4(),
    title: "Dakine Split Roller Eq 100L (Dark Slate)",
    price: "170",
    rate: "5",
    image: dakine,
  },
  {
    id: uuidv4(),
    title: "Dakine Carry On Roller 40L",
    price: "490",
    rate: "5",
    image: dakineCarry,
  },
  {
    id: uuidv4(),
    title: "Claire Chase Classic 22 Inch Pullman, Saddle, One Size",
    price: "240",
    rate: "5",
    image: claire,
  },
  {
    id: uuidv4(),
    title:
      "Traveler's Choice Silverwood II Hardside Expandable Spinner Luggage, Gray , 30",
    price: "399",
    rate: "3",
    image: traveler,
  },
  {
    id: uuidv4(),
    title: "it Girl Women's Underseater (17'), Grey Shiny Gold",
    price: "200",
    rate: "4",
    image: itgirl,
  },
  {
    id: uuidv4(),
    title:
      "Millennium by Travelway Wheeled Suitcase - Rolling Carry-on (20 Inch, Black)",
    price: "250",
    rate: "5",
    image: millennium,
  },
];

export default NewArrivals;

import React from "react";
import { Coffee } from "../Coffee.model";

interface CoffeeListProps {
  coffees: Coffee[];
  deleteCoffee: (id: string) => void;
}

const CoffeeList: React.FC<CoffeeListProps> = ({ coffees, deleteCoffee }) => {
  return (
    <ul>
      {coffees.map((coffee) => (
        <li key={coffee.id}>
          {coffee.name}, {coffee.weight}g, hinta {coffee.price} euroa,
          paahtoaste {coffee.roast}/5.
          <button onClick={() => deleteCoffee(coffee.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default CoffeeList;

import React, { useState } from "react";
import { Coffee } from "../Coffee.model";

interface CreateCoffeeProps {
  handleNewCoffee: (coffee: Coffee) => Promise<void>;
}

const CreateCoffee: React.FC<CreateCoffeeProps> = ({ handleNewCoffee }) => {
  const [input, setInput] = useState({
    name: "",
    weight: "",
    price: "",
    roast: "3",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!input.name || !input.weight || !input.price || !input.roast) {
      return alert("Puutteelliset tiedot!");
    }
    const newCoffee = {
      id: "New Coffee",
      name: input.name,
      weight: +input.weight,
      price: +input.price,
      roast: +input.roast,
    };
    handleNewCoffee(newCoffee);

    setInput({
      name: "",
      weight: "",
      price: "",
      roast: "3",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="coffee-form">
        <label htmlFor="coffee-name">Kahvin nimi: </label>
        <input
          type="text"
          id="coffee-name"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="coffee-weight">Paketin paino grammoina: </label>
        <input
          type="number"
          min="0"
          step="1"
          id="coffee-weight"
          name="weight"
          value={input.weight}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="coffee-price">Paketin hinta: </label>
        <input
          type="number"
          min="0"
          step="0.01"
          id="coffee-price"
          name="price"
          value={input.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="coffee-name">Paahtoaste: </label>
        <select
          id="coffee-roast"
          value={input.roast}
          name="roast"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button type="submit">Lisää</button>
    </form>
  );
};

export default CreateCoffee;

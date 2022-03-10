import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Coffee } from "./Coffee.model";
import CoffeeList from "./components/CoffeeList";
import CreateCoffee from "./components/CreateCoffee";

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await Axios.get("http://localhost:3001/coffees/");
        setCoffees(response.data);
      } catch (err) {
        alert("Kahvitietojen lataus palvelimelta ei onnistunut");
      }
    };

    fetchCoffees();
  }, [coffees]);

  const handleNewCoffee = async (coffee: Coffee): Promise<void> => {
    const newCoffee = {
      name: coffee.name,
      weight: coffee.weight,
      price: coffee.price,
      roast: coffee.roast,
    };
    try {
      const response = await Axios.post(
        "http://localhost:3001/coffees/",
        newCoffee
      );
      setCoffees((prevCoffees) => [...prevCoffees, response.data.addedCoffee]);
    } catch (err) {
      alert("Tietojen tallennus palvelimelle epäonnistui");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await Axios.delete(`http://localhost:3001/coffees/${id}`);
      setCoffees((prevCoffees) => {
        return prevCoffees.filter((coffee) => coffee.id !== id);
      });
    } catch (error) {
      alert("Poisto palvelimelta ei onnistunut");
    }
  };

  if (!coffees) {
    return <div>Odotetaan kahveja...</div>;
  }
  return (
    <div className="container">
      <h1>Lempikahvit</h1>
      {coffees.length === 0 ? (
        <div>Ei yhtään kahveja...</div>
      ) : (
        <CoffeeList coffees={coffees} deleteCoffee={handleDelete} />
      )}
      <h2>Lisää uusi:</h2>
      <CreateCoffee handleNewCoffee={handleNewCoffee} />
    </div>
  );
}

export default App;

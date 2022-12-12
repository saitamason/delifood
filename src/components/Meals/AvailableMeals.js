import { useState, useEffect } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        "https://dawidlehai-delifood-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      const retrievedMeals = Object.entries(responseData).map(([key, meal]) => {
        return {
          id: key,
          name: meal.name,
          description: meal.description,
          price: meal.price,
        };
      });

      setMeals(retrievedMeals);
    };

    getMeals();
  }, []);

  const renderedMeals = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{renderedMeals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

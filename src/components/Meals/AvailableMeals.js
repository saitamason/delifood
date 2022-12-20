import { useState, useEffect } from "react";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import DUMMY_MEALS from "../../data/meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError] = useState(null);
  // const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const getMeals = () => {
      // const response = await fetch(
      //   "https://dawidlehai-delifood-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      // );

      // if (!response.ok) {
      //   throw new Error("Something went wrong:", response.message);
      // }

      // const responseData = await response.json();
      const responseData = DUMMY_MEALS;

      const retrievedMeals = Object.entries(responseData).map(([key, meal]) => {
        return {
          id: key,
          name: meal.name,
          description: meal.description,
          price: meal.price,
        };
      });

      setMeals(retrievedMeals);
      setIsLoading(false);
    };

    getMeals();

    // getMeals().catch((error) => {
    //   setIsLoading(false);
    //   setHttpError(error.message);
    // });
  }, []);

  if (isLoading)
    return (
      <section className={classes["meals__loader"]}>
        <p>Loading...</p>
      </section>
    );

  if (httpError) {
    return (
      <section className={classes["meals__error"]}>
        <p>{httpError}</p>
      </section>
    );
  }

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

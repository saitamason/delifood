import meals from "../../data/meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;

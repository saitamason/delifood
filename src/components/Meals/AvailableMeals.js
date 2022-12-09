import Card from "../UI/Card";
import meals from "../../data/meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

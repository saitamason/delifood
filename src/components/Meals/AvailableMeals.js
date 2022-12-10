import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
import meals from "../../data/meals";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => (
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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

import { Fragment, useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from './AvailableMeals.module.css';

function AvailableMeals() {
    const [mealss, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();
    useEffect(() => {
        const fetchedMeals = async() => {
            const res = await fetch('https://foodorder-1a6b0-default-rtdb.firebaseio.com/meals.json');
            //handle http error
            if (!res.ok) {
                throw new Error('Something went wrong!');
            }
        
            const resData = await res.json();
            console.log("resData", resData);
            const loadedMeals =[];
            //to turn data to array
            for(const key in resData) {
                loadedMeals.push({
                    id: key,
                    name: resData[key].name,
                    description: resData[key].description,
                    price: resData[key].price,
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
            console.log("loadedMeals", loadedMeals);
        }
        fetchedMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    },[]);

    //loading
    if(isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }
    //error
    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }
    const meals = mealss.map(meal => <MealItem meal={meal} key={meal.id} />)
    return ( 
        <Fragment>
            <Card> 
                <ul>{meals}</ul>
            </Card>
            
        </Fragment>
    );
}

export default AvailableMeals;
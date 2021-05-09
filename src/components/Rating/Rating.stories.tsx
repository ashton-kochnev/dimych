import React, {useState} from "react";
import Rating, {RatingValueType} from "./Rating";

export default {
    title: "Raring",
    component: Rating
}

export const EmptyRating = () => <Rating value={0} click={x => x}/>
export const Rating1 = () => <Rating value={1} click={x => x}/>
export const Rating2 = () => <Rating value={2} click={x => x}/>
export const Rating3 = () => <Rating value={3} click={x => x}/>
export const Rating4 = () => <Rating value={4} click={x => x}/>
export const Rating5 = () => <Rating value={5} click={x => x}/>
export const RatingChanging = ( ) => {
    const [rating, setRating] = useState<RatingValueType>(0)
    return <Rating value={rating} click={setRating}/>
}
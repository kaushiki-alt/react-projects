import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export type Reviews = {
    email: string;
    rating: string;
    text: string;
};

const Sandbox = () => {
    const [reviews, setReviews] = useState<Reviews[]>([]);

const addReview = (review : Reviews) => {
    setReviews([...reviews, review])
}
    return (
        <div className="max-w-xl mx-auto px-8">
            <h1 className='text-2xl font-bold mb-8'>Reviews App</h1>
            <Form onSubmit = {addReview}/>
            <List reviews = {reviews}/>
        </div>
    )
}

export default Sandbox

import React from 'react';
import { useQuery } from 'react-query';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const { data: reviews } = useQuery('reviews', () => fetch('http://localhost:5000/reviews',).then(res => res.json()))
    console.log(reviews);
    return (
        <div className='px-12'>
            <div class="card w-full mx-auto bg-base-100 shadow-xl mt-12  ">
            <h4 className=' text-3xl text-secondary text-center '>Customer reviews </h4>
            <div class="card-body grid lg:grid-cols-3 justify-center justify-items-center ">
                {
                    reviews?.map(review=> <ReviewCard
                    key={review._id}
                    review={review}
                    
                    ></ReviewCard>)
                }
                
            </div>
            <div className='mb-5'>
            <button className='btn btn-link text-secondary'>see more</button>
            </div>
        </div>
        </div>
    );
};

export default Reviews;
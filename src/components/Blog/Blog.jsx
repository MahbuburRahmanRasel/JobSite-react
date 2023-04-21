import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question';
import JobBanner from '../JobBanner/JobBanner';

const Blog = () => {

    const questions = useLoaderData()

    return (

        <div>
            <JobBanner
            
            text = {`Questions`}
            />
        <div className='my-container w-3/4 '>
            {
                questions.map(ques => (
                    <Question 
                    key= {ques.id}
                    ques = {ques}
                    id={ques.id}
                    />
                ))
            }
        </div>
        </div>
    );
};

export default Blog;
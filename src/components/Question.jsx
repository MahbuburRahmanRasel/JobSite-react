import React from 'react';

const Question = ({ques,id}) => {

    const {question, ans} = ques
    return (
        <div className='mt-5'>
            <div className="collapse">
         <input type="checkbox" className="peer" />
             <div className="flex items-center  gap-2 text-xl font-bold collapse-title bg-cyan-800 text-primary-content peer-checked:bg-cyan-800 peer-checked:text-secondary-content">
                <div>
                    {id}.
                </div>
                <div>
                {question}

                </div>
              </div>
              <div className="whitespace-pre-line collapse-content bg-cyan-800 text-primary-content peer-checked:bg-cyan-700 peer-checked:text-secondary-content">
                     <p>{ans}</p>
                 </div>
                </div>
        </div>
    );
};

export default Question;
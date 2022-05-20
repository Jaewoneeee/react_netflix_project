import React from 'react'

const Reviews = ({review}) => {
  return (
    <div>

        {
            review.map((item, index)=>{
                return <div key={index}>
                    <h5>{item.author}</h5>
                    <p>{item.content}</p>
                </div>
            })                   
        }
    </div>
  )
}

export default Reviews
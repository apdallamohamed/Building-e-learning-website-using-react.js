import React from 'react'

const CourseCard = (props) => {
  return (
    <div className='flex flex-col items-center justify-between bg-white border-2  border-lightText md:w-2/5 p-5 cursor-pointer md:border-none rounded-lg hover:shadow-[rgba(0,_0,_0,_0.240)_0px_3px_8px] transition-all'>
      <div className='w-3/5'>
        <img src={props.img} alt="" />
      </div>
      <div>
        <h3 className='font-semibold text-lg text-center my-5'>{props.title}</h3>
        <p className='text-lightText text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, libero?</p>
      </div>
    </div>
  )
}

export default CourseCard

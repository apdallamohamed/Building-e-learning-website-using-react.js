// import React from 'react'

const Button = (props) => {
  return (
    <div>
      <div>
        <button className='bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-rgba(_0,_0,_0,_0.24)_0px_3px_8px hover:bg-green-500 hover:text-white transition-all'>
            {props.title}
        </button>
      </div>
    </div>
  )
}

export default Button

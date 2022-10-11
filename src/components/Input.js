import React from 'react'

const Input = ({value, handleName, handleMessage}) => (
    <div className='inputName'>
        <form className='form' onSubmit={handleMessage} >
            <input value={value}  onChange={handleName} placeholder="Enter a name"></input>
            <button className='button' type='submit'>Click 👈</button>
        </form>
    </div>
)

export default Input
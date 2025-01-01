import React, { useState } from 'react';
import ArrowSubmit from "/assets/images/icon-arrow.svg";

const BirthForm = () => {
    const [formData, setFormData] = useState({
        day: "",
        month: "",
        year: ""
      })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
     }

      const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <form className='flex flex-col items-center lg:items-end justify-center'>
        <div className='flex flex-row pb-4'>
            <div className='flex flex-col pr-2'>
                <label className='labelText' htmlFor='day'>Day</label>
                <input
                className='inputDesign'
                onChange={changeHandler} 
                value={formData.day}
                placeholder='DD' 
                type="text" 
                id='day' 
                name='day'/>
            </div>

            <div className='flex flex-col pr-2'>
                <label className='labelText' htmlFor='month'>Month</label>
                <input
                className='inputDesign'
                onChange={changeHandler} 
                value={formData.month}
                placeholder='MM'  
                type="text" 
                id='month' 
                name='month'/>
            </div>

            <div className='flex flex-col pr-2'>
                <label className='labelText' htmlFor='year'>Year</label>
                <input
                className='inputDesign'
                onChange={changeHandler} 
                value={formData.year}
                placeholder='YYYY'  
                type="text" 
                id='year' 
                name='year'/>
            </div>
        </div>
        <button type='submit' 
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)} 
            className='bg-purple rounded-full p-2'>
            <img src={ArrowSubmit} alt="arrow" className='w-8' />
        </button>

    </form>
  )
}

export default BirthForm
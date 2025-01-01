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
    <form className='pb-8'>
        <div className='flex flex-row pb-4 pr-16 mb-12'>
            <div className='flex flex-col pr-6'>
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

            <div className='flex flex-col pr-6'>
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

            <div className='flex flex-col pr-4'>
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
        <div className='flex items-center justify-center lg:self-end lg:justify-end border-t border-t-lightGrey'>
            <button 
            type='submit' 
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)} 
            className='bg-purple rounded-full lg:p-4 p-3 hover:bg-offBlack lg:-mt-9 -mt-5 w-12 lg:w-16'>
                <img src={ArrowSubmit} alt="arrow" />
            </button>
        </div>

    </form>
  )
}

export default BirthForm
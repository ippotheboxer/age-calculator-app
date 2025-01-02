import React, { useState } from 'react';
import ArrowSubmit from "/assets/images/icon-arrow.svg";

interface BirthdateFormProps {
    onSubmit: (date: Date) => void;
  }

const BirthForm: React.FC<BirthdateFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        day: "",
        month: "",
        year: ""
      })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
     }

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        const date = new Date(`${formData.year}-${formData.month}-${formData.day}`);
        if (!isNaN(date.getTime())) {
        onSubmit(date); // Pass the date to the parent
    }
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className='flex flex-row pb-6 pr-16 mb-4 pt-1'>
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

            <div className='flex flex-col pr-6'>
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
            className='bg-purple rounded-full lg:p-5 p-3 hover:bg-offBlack lg:-mt-9 -mt-5 w-12 lg:w-20'>
                <img src={ArrowSubmit} alt="arrow" />
            </button>
        </div>

    </form>
  )
}

export default BirthForm
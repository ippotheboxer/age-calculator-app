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
    const [errors, setErrors] = useState<{ day?: string; month?: string; year?: string }>({});

    const validateInputs = (): boolean => {
        const currentDate = new Date();
        const parsedDay = Number(formData.day);
        const parsedMonth = Number(formData.month);
        const parsedYear = Number(formData.year);
        const newErrors: { day?: string; month?: string; year?: string } = {};
    
        // Validate Year
        if (!formData.year) {
          newErrors.year = 'This field is required';
        } 
        else if (isNaN(parsedYear)) {
          newErrors.year = 'Must be a number';
        }
        else if (parsedYear > currentDate.getFullYear()) {
          newErrors.year = 'Must be in the past';
        }
    
        // Validate Month
        if (!formData.month) {
          newErrors.month = 'This field is required';
        } else if (isNaN(parsedMonth)) {
          newErrors.month = 'Must be a number';
        } else if (parsedMonth < 1 || parsedMonth > 12) {
          newErrors.month = 'Must be a valid month'
        }
    
        // Validate Day
        if (!formData.day) {
          newErrors.day = 'This field is required';
        } 
        else if (isNaN(parsedDay)) {
          newErrors.day = 'Must be a number';
        }
        else if (parsedDay < 1 || parsedDay > 31) {
          newErrors.day = 'Must be a valid day';
        }
        else {
          // Ensure the day is valid for the month and year
          const maxDaysInMonth = new Date(parsedYear, parsedMonth, 0).getDate();
          if (parsedDay > maxDaysInMonth) {
            newErrors.day = `Must be a valid date`;
          }
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
     }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateInputs()) {
        console.log(formData);
        const date = new Date(`${formData.year}-${formData.month}-${formData.day}`);
        if (!isNaN(date.getTime())) {
        onSubmit(date); // Pass the date to the parent
        setErrors({}); }
    }
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <div className='flex flex-row pb-9 pr-16 mb-4 pt-1'>
            <div className='flex flex-col md:pr-8 pr-4'>
                <label className={`labelText ${
                  errors.day && 'text-lightRed'}`} 
                htmlFor='day'>Day</label>
                <input
                className={`inputDesign ${
                  errors.day && 'border-lightRed'}`}
                onChange={changeHandler} 
                value={formData.day}
                placeholder='DD' 
                type="text" 
                id='day' 
                name='day'/>
                {errors.day && <p className="poppins-regular-italic text-lightRed text-xs mt-1">{errors.day}</p>}
            </div>

            <div className='flex flex-col md:pr-8 pr-4'>
                <label className={`labelText ${
                  errors.month && 'text-lightRed'}`} 
                htmlFor='month'>Month</label>
                <input
                className={`inputDesign ${
                  errors.month && 'border-lightRed'}`}
                onChange={changeHandler} 
                value={formData.month}
                placeholder='MM'  
                type="text" 
                id='month' 
                name='month'/>
                {errors.month && <p className="poppins-regular-italic text-lightRed text-xs mt-1">{errors.month}</p>}
            </div>

            <div className='flex flex-col md:pr-6'>
                <label className={`labelText ${
                  errors.year && 'text-lightRed'}`} 
                htmlFor='year'>Year</label>
                <input
                className={`inputDesign ${
                  errors.year && 'border-lightRed'}`}
                onChange={changeHandler} 
                value={formData.year}
                placeholder='YYYY'  
                type="text" 
                id='year' 
                name='year'/>
                {errors.year && <p className="poppins-regular-italic text-lightRed text-xs mt-1">{errors.year}</p>}
            </div>

        </div>
        <div className='flex items-center justify-center md:self-end md:justify-end border-t border-t-lightGrey'>
            <button 
            type='submit'
            className='flex justify-center items-center bg-purple rounded-full md:p-5 p-3 hover:bg-offBlack md:-mt-12 -mt-5 w-12 md:w-24 md:h-24'>
                <img src={ArrowSubmit} alt="arrow" />
            </button>
        </div>

    </form>
  )
}

export default BirthForm
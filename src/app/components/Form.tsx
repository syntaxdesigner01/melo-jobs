import React from 'react'

export default function Form() {
  return (
    <form className='mt-20'>
        <div className=' flex justify-between'>
        <div className='border-2 border-black rounded-md bg-black'>
            <select name="" id="" className='bg-black text-white rounded-sm p-2' >
                <option value="None">Select Job Category</option>
                <option value="Agricultural">Agricultural</option>
                <option value="Housekeeping">Housekeeping </option>
                <option value="Restaurants">Restaurants</option>
                <option value="Construction">Construction</option>
                <option value="Caregiver">Caregiver</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Factory and Warehouse">Factory and Warehouse</option>
                <option value="Retail and Sales">Retail and Sales</option>
                <option value="Seasonal Event Staffing">Seasonal Event Staffing</option>
                <option value="Office Support">Office Support</option>
                <option value="Security Guard">Security Guard</option>
                <option value="Sanitation and Waste Management">Sanitation and Waste Management</option>
                <option value="Recreational Services">Recreational Services</option>
                <option value="Parking Attendants">Parking Attendants</option>
                <option value="Utility Services Support">Utility Services Support</option>
            </select>
        </div>

        <div className='border-2 border-black rounded-md bg-black'>
            <select name="" id="" className='bg-black text-white rounded-sm p-2'>
                <option value="None">Select Country</option>
                <option value="101165590">United Kingdom</option>
                <option value="101452733">Australia</option>
                <option value="103644278">United States</option>
                <option value="101174742">Canada</option>
                <option value="103883259">Austria</option>
            </select>
        </div>

        <div className='border-2 border-black rounded-md bg-black '>
            <select name="" id="" className='p-2 rounded-md bg-black text-white'>
                <option value="None">Sort By</option>
                <option value="mostRelevant">Most Relevant</option>
                <option value="mostResent">Most Resent</option>
                
            </select>
        </div>

        <div >
            <input type="number"  placeholder='0'  className='placeholder:text-black border-2 border-black p-2 rounded-md pr-4' />
        </div>
        </div>

        <div className='mt-10 flex justify-center'>
            <button type='submit' className='bg-blue-500 text-white px-8 py-2 rounded-md font-bold'>Fetch Jobs</button>
        </div> 
    </form>
  )
}

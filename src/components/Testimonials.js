import React, { useState } from  'react';
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
//import { useState } from 'react';

const Testimonials =(props) => {

    let reviews= props.reviews;
    const[index,setindex] = useState(0);

    function leftshifthandeler(){
        if(index-1 < 0){
            setindex(reviews.length -1);
        } 
        else{
            setindex(index-1);
        }
    }
    function rightshifthandeler(){
        if(index +1 >= reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }
    function surprisehandeler(){
        let randomidx= Math.floor(Math.random() * reviews.length);
        setindex(randomidx);
    }



    return (
        <div className='w-[55vw] md:[700px] bg-white flex flex-col 
        justify-center items-center  mt-10  p-10 transition-all
        duration-700 hover:shadow-l rounded-xl' >  
            <Card review={reviews[index]}></Card>


                <div className='flex text-3xl  mt-5  gap-3  
                text-violet-400 font-bold mx-auto'>
                <button
                onClick={leftshifthandeler}
                className='cursor-pointer hover:text-violet-500 '>
                <FiChevronLeft/>
                </button>

                <button 
                onClick={rightshifthandeler}
                className='cursor-pointer hover:text-violet-500 '>
                <FiChevronRight/>
                </button>
                </div>

                <div className='py-5'>
                <button 
                onClick={surprisehandeler}
                className='bg-violet-400 hover:bg-violet-500 
                transitiona-all duration-200
                cursor-pointer  px-10   rounded-md  font-bold 
                 text-white text-lg '>
                Surprise Me
                </button>
                </div>

        </div>
    )
}
export default Testimonials
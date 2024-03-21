"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';


 const PathwayGame: React.FC = () => {
 const [stage, setStage]= useState<number>(1);


  const handleOptionClick = (option: string) => {
     if (option === 'education') {
      setStage(stage + 1);
    }  else if(option === 'homeMaker'){
       setStage(1);
    } else if (option === 'career' || option === 'move') {
      setStage(stage + 1); 
    } else if (option === 'reset') {
      setStage(1);
    }  
  };

  
  const handleGoBackHome = () => { 
     const router=useRouter();
    router.push("/"); 
  };

  
  return (

    <div className='text-center  flex flex-col justify-center items-center mx-auto h-[100vh]   bg-white'> 
      {
      stage === 1 && (
        <>
        
  <h1 className="text-5xl mb-4  text-blue-950 px-10 py-2 font-bold border-b-4 border-blue-300  transform transition-transform duration-100 "><Typewriter
  options={{
    strings: ['PathWay Game'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>

          <div className='mb-6 h- mt-3 text-xl font-bold border-slate-200 border-1 p-5 py-7 w-[650px] rounded-md hover:bg-sky-500 bg-sky-400 text-slate-100'><p> Welcome !</p></div>
          <div className='flex justify-center items-center ml-[80px] gap-5 rounded-lg px-26'>
          <Image
              src="/startss.gif"
              alt="download Life"
              width={300}
              height={150}
              className='text-black z-30 mr-14 w-[400px]  '
            /> 
          </div>
          
          <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => setStage(2)}>Work hard</button>
        </>   
      )}

      {stage === 2 && (
        <>
        
          <h1 className="text-5xl mb-4 text-blue-950 px-10 py-1 font-bold border-b-4 border-blue-300 inline transform translate-x-16 transition-transform duration-100"><Typewriter
  options={{
    strings: ['PathWay Game'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      
          <p className='mb-6  text-xl font-bold border-slate-200 border-1 p-5 py-7 rounded-md bg-sky-400 hover:bg-sky-500 text-slate-100 w-[650px]'>What Was The Name Of Enemy</p>
          <div className='mx-auto flex justify-center'>
          <Image
            src="/EDUCA.gif"
            alt="Successful Life"
            width={350}
            height={100}
            className='mb-12 h-64 mr-4'
          />
          <Image
            src="/labour.png"
            alt="Successful Life"
            width={350}
            height={100}
            className='mb-12 h-64'
          />
          </div>

          <div className='flex gap-4'>
          
        <button className='bg-sky-400  mr-[100px] border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('education')}>
         Education
      </button>

      <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('reset')}>Child Labour</button>
          </div>
          
        </>
      )}
     

      {stage === 3 && (
  <>

  <h1 className="text-5xl mb-4 text-blue-950 px-10 py-1 font-bold border-b-4 border-blue-300 inline transform translate-x-16 transition-transform duration-100"><Typewriter
  options={{
    strings: ['PathWay Game'],
    autoStart: true,
    loop: true,
  }}
/></h1>

    <p className='mb-6 mt-3 text-xl font-bold border-slate-200 border-1 p-5 py-7 hover:bg-sky-500 rounded-md bg-sky-400 text-slate-100 w-[650px]'>Sneha has started a family. What's next?</p>
    <div className='mx-auto flex justify-center'>
      <Image
        src="/conversion.gif"
        alt="Family Life"
        width={300}
        height={200}
        className='mb-12 h-[250px]'
      />

<Image
        src="/graphics.gif"
        alt="Family Life"
        width={300}
        height={200}
        className='mb-12 '
      />
    </div>
    <div className='flex gap-4'>
    <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('career')}>Focus on career</button>
    <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('reset')}>House Wife</button>
    </div>  
  </>
)}


{stage === 4 && (
  <>
   
  <h1 className="text-5xl mb-4 text-blue-950 px-10 py-2 font-bold border-b-4 border-blue-300 inline transform transition-transform duration-100 "><Typewriter
  options={{  
    strings: ['PathWay Game'],
    autoStart: true,
    loop: true,
  }}
/></h1>

  
    <div className='mx-auto flex justify-center '>
      <Image
        src="/award2.gif"
        alt="Career Life"
        width={500}
        height={400}
        className='mb-6'
      />

    </div>
    <div className='flex gap-4'>
    <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('reset')}>Restart Game</button>
    <button className='bg-sky-400 border-sky-700/90 border-1 border-b-[4px] active:border-b-[2px] font-bold text-white p-2 px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('move')}>move </button>
    </div>
    
  </>
)}


{stage === 5 && (
  <>
  
  <h1 className="text-5xl mb-4 text-blue-950 px-10 py-1 font-bold border-b-4 border-blue-300 inline transform translate-x-16 transition-transform duration-100"><Typewriter
  options={{
    strings: ['PathWay Game'],
    autoStart: true,
    loop: true,
  }}
/></h1>


    <p className='mb-4 mt-3 text-xl font-bold border-slate-200 border-1  py-7 rounded-md bg-sky-400 hover:bg-sky-500 text-slate-100 w-[650px]'>Congratulations! Sneha has focused on her career.</p>
    <div className='mx-auto flex justify-center'>
      <Image
        src="/loaded.gif"
        alt="Career Life"
        width={400}
        height={400}
        className='mb-4'
      /> 
    </div>
    <button className='bg-sky-400 text-white border-sky-200/90 border-1 border-b-[4px] active:border-b-[2px] font-bold  p-2 transition duration-300 ease-in-out px-4 rounded-lg hover:bg-sky-500 hover:border-sky-500  min-w-[150px] m-8 tracking-wide' onClick={() => handleOptionClick('reset')}>Restart Game</button>
  </>
)}
    </div>
  );
};


export default PathwayGame;

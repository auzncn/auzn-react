import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center 
    max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO GET</p>
        <h1 className='uppercase font-bold text-5xl 
      sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowedgement that l may become
        <span className='text-blue-400 font-medium'> unbelievably swolenormous </span>
        and accept all risks of becoming the local
        <span className='text-blue-400 font-medium'> mass montrosity</span>
        , afflicted with severe bodydismorphia, unable to fit through doors</p>
      {/* <button className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid 
      bg-slate-950 blueShadow duration-200'><p>Accept & Begin</p></button> */}
      <Button title={'Accept & Begin'} func={() => {
        window.location.href = '#generate';
      }} />
    </div>
  )
}

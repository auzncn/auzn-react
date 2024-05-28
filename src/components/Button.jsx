import React from 'react'

export default function Button(props) {
  const { title, func } = props;
  return (
    <button className='px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid 
    bg-slate-950 blueShadow duration-200 mx-auto' onClick={func}><p>{title}</p></button>
  )
}

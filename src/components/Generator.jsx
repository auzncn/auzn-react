import React from 'react'
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import { useState } from 'react';
import Button from './Button';

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center items-center gap-2'>
        <p className='text-slate-400 text-3xl sm:text-4xl md:text-5xl font-semibold'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:texl-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  );
}


export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const { poison, goal, muscles, setPoison, setGoal, setMuscles, updateWorkout } = props;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {

    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup));
      return;
    }
    if (poison !== 'individual') {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }
    if (muscles.length >= 3) {
      return;
    }
    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }


  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']} id={'generate'} >
      <Header index={'01'} title={'Pick your posion'} description={'Select the workout you wish to endure.'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (<button key={typeIndex} className={`bg-slate-950 border py-3 rounded-lg duration-200 px-4
           hover:border-blue-600 ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}
            onClick={() => {
              setMuscles([]);
              setPoison(type);
            }}>
            <p className='capitalize'>{type.replace('_', ' ')}</p>
          </button>)
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'}
        description={'Select the muscles judged for annihilation'} />
      <div className=' bg-slate-950 border border-blue-400 rounded-lg flex flex-col'>
        <button className='relative flex items-center justify-center p-3'
          onClick={toggleModal}>
          <p className='uppercase'>{muscles.length > 0 ? muscles.join(' ') : 'Select muscle groups'}</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (<div className='flex flex-col px-3 pb-3'>
          {(poison === 'individual' ? WORKOUTS['individual'] : Object.keys(WORKOUTS[poison]))
            .map((muscleGroup, musclesGroupIndex) => {
              return (<button key={musclesGroupIndex}>
                <p className={'uppercase hover:text-blue-400 duration-200 px-4' +
                  (muscles.includes(muscleGroup) ? 'text-blue-400' : '')
                } onClick={() => {
                  updateMuscles(muscleGroup);
                }}>{muscleGroup}</p>
              </button>)
            })}
        </div>)}
      </div>

      <Header index={'03'} title={'Become Juggernaut'}
        description={'Select your ultimate objective'} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (<button key={schemeIndex} className={`bg-slate-950 border py-3 rounded-lg duration-200 px-4
           hover:border-blue-600 ${scheme === goal ? 'border-blue-600' : 'border-blue-400'}`}
            onClick={() => { setGoal(scheme) }}>
            <p className='capitalize'>{scheme.replace('_', ' ')}</p>
          </button>)
        })}
      </div>
      <Button title={'Formulate'} func={updateWorkout}></Button>
    </SectionWrapper>
  )
}

import React from 'react'

function About() {
  return (
    <div className='flex justify-center'>
      <div className='w-11/12 p-5 rounded-lg shadow-2xl border-solid border-gray-700 border-2'>
        <h1 className='text-5xl mb-5 text-white'>Github Profile Finder</h1>
        <p> This website basically finds the github profiles by searching with name. It will show many results according to the key word that user will enter.<br/> An user can navigate to particular profile by clicking on Visit Profile.<br/> In profile page user can find the details of visited profile like number of followers, followings, latest repos and can navigate to there Github page.</p>
        <p className='mt-5'>------------------------------</p>
        <p className=' text-gray-500'>Version :<span className='ml-3 text-white'>1.0.0</span></p>
      </div>
    </div>
  )
}

export default About;
import React from 'react'

const ShowReps = props => {
  return (
    <div className='show-reps'>
      <div>
        <div className='rep-names'>  <h4>{props.reps.offices[2].name}: </h4>
          {props.reps.officials[2].name}
          <p>Call:{' '}
            {props.reps.officials[2].phones[0]}</p></div>
      </div>
      <div>
        <div className='rep-names'> <h4>  {props.reps.offices[2].name}: </h4>
          {props.reps.officials[3].name}
          <p>Call:{' '}
            {props.reps.officials[3].phones[0]}</p></div>
      </div>
      <div>
        <div className='rep-names'>
          <h4> {props.reps.offices[3].name}: </h4>
          {props.reps.officials[4].name}
          <p>Call:{' '}
            {props.reps.officials[4].phones[0]}</p></div>
      </div>
      <div>
        <div className='rep-names'>
          <h4>{props.reps.offices[4].name}: </h4>
          {props.reps.officials[5].name}
          <p>Call:{' '}
            {props.reps.officials[5].phones[0]}</p></div>
      </div>
      <div>
        <div className='rep-names'>
          <h4> {props.reps.offices[5].name}: </h4>
          {props.reps.officials[6].name}
          <p>Call:{' '}
            {props.reps.officials[6].phones[0]}</p></div>
      </div>
      <div>Please note that information may not be accurate for U.S. territories or Washington, D.C.</div>
    </div >
  )
}

export default ShowReps

import React from 'react'

const ShowReps = props => {
  return (
    <div className='show-reps'>
      <div>
        {props.reps.offices[2].name}: {props.reps.officials[2].name} Call:{' '}
        {props.reps.officials[2].phones[0]}
      </div>
      <div>
        {props.reps.offices[2].name}:{props.reps.officials[3].name} Call:{' '}
        {props.reps.officials[3].phones[0]}
      </div>
      <div>
        {props.reps.offices[3].name}: {props.reps.officials[4].name} Call:{' '}
        {props.reps.officials[4].phones[0]}
      </div>
      <div>
        {props.reps.offices[4].name}: {props.reps.officials[5].name} Call:{' '}
        {props.reps.officials[5].phones[0]}
      </div>
      <div>
        {props.reps.offices[5].name}: {props.reps.officials[6].name} Call:{' '}
        {props.reps.officials[6].phones[0]}
      </div>
    </div>
  )
}

export default ShowReps

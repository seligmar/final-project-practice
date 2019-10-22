import React from 'react'

const ShowReps = props => {
  const reps = {
    margin: '0',
    'font-family': 'sans-serif',
    'text-align': 'left'
  }

  return (
    <div className='show-reps'>
      <div class="ui huge divided list">
        <div style={reps} class="item">
          <img class="ui avatar image" src="https://images.vexels.com/media/users/3/166118/isolated/lists/638362f71b50e384413f0959ef09d9ba-american-flag-elements-icon.png" />
          <div class="content">
            <h4 class='header'>{props.reps.offices[2].name}: </h4>
            <div class="description"> {props.reps.officials[2].name}
              <p>Call:{' '}
                {props.reps.officials[2].phones[0]}</p>
            </div>
          </div>
        </div>
        <div style={reps} class="item">
          <img class="ui avatar image" src="https://images.vexels.com/media/users/3/166118/isolated/lists/638362f71b50e384413f0959ef09d9ba-american-flag-elements-icon.png" />
          <div style={reps} class="content">
            <h4 class='header'>  {props.reps.offices[2].name}: </h4>
            <div class="description">  {props.reps.officials[3].name}
              <p>Call:{' '}
                {props.reps.officials[3].phones[0]}</p>
            </div>
          </div>
        </div>
        <div style={reps} class="item">
          <img class="ui avatar image" src="https://images.vexels.com/media/users/3/166118/isolated/lists/638362f71b50e384413f0959ef09d9ba-american-flag-elements-icon.png" />
          <div class="content">
            <h4 class='header'>  {props.reps.offices[3].name}: </h4>
            <div class="description"> {props.reps.officials[4].name}
              <p>Call:{' '}
                {props.reps.officials[4].phones[0]}</p>
            </div>
          </div>
        </div>
        <div style={reps} class="item">
          <img class="ui avatar image" src="https://images.vexels.com/media/users/3/166118/isolated/lists/638362f71b50e384413f0959ef09d9ba-american-flag-elements-icon.png" />
          <div class="content">
            <h4 class='header'>{props.reps.offices[4].name}: </h4>
            <div class="description"> {props.reps.officials[5].name}
              <p>Call:{' '}
                {props.reps.officials[5].phones[0]}</p>
            </div>
          </div>
        </div>
        <div style={reps} class="item">
          <img class="ui avatar image" src="https://images.vexels.com/media/users/3/166118/isolated/lists/638362f71b50e384413f0959ef09d9ba-american-flag-elements-icon.png" />
          <div class="content">
            <h4 class='header'> {props.reps.offices[5].name}: </h4>
            <div class="description">  {props.reps.officials[6].name}
              <p>Call:{' '}
                {props.reps.officials[6].phones[0]}</p>
            </div>
          </div>
        </div>
        <div style={{ margin: '2%' }}>Please note that information may not be accurate for U.S. territories or Washington, D.C.</div>
      </div >
    </div >
  )
}

export default ShowReps

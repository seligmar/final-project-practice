// https://elizabethwarren.com/plans/american-jobs

// https://elizabethwarren.com/plans/holding-wall-street-accountable

import React from 'react'
import { Link } from 'react-router-dom'


const Labor = () => {
  return (
    <div className='about-page-background'>
      <Link to="/donate/elizabethwarren2020" target="_top">
        <div className='donationsBar-new'>
          <h1 className="giving-text">Give Now</h1></div>
      </Link>
      <div>
        <div className='youtube-block-grid'>
          <div className='youtube'>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/2AYkoZG2Jp8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div className='about-page'>
          <h3>As published on Medium on June 4th, 2019:</h3>
          <h3>
            I come from a patriotic family. All three of my brothers joined the military.
            And I’m deeply grateful for the opportunities America has given me.
            But the giant “American” corporations who control our economy don’t seem to feel the same way.
            They certainly don’t act like it.
        </h3>
          <h3>Sure, these companies wave the flag — but they have no loyalty or allegiance to America.
            Levi’s is an iconic American brand, but the company operates only 2% of its factories here.
            Dixon Ticonderoga — maker of the famous №2 pencil — has “moved almost all of its pencil production to Mexico and China.”
            And General Electric recently shut down an industrial engine factory in Wisconsin and shipped the jobs to Canada.
            The list goes on and on.</h3>

          <h3 className="issue-page-highlights">
            These “American” companies show only one real loyalty:
            to the short-term interests of their shareholders, a third of whom are foreign investors.</h3>
          <h3>
            If they can close up an American factory and ship jobs overseas to save a nickel,
            that’s exactly what they will do — abandoning loyal American workers and hollowing out American cities along the way.
        </h3>
          <h3>Politicians love to say they care about American jobs.
            But for decades, those same politicians have cited “free market principles” and refused to intervene in markets on behalf of American workers.
            And of course, they ignore those same supposed principles and intervene regularly to protect the interests of multinational corporations and international capital.
        </h3>
          <h3 className="issue-page-highlights">The result? Millions of good jobs lost overseas and a generation of stagnant wages, growing inequality, and sluggish economic growth. </h3>
          <h3>
            If Washington wants to put a stop to this, it can.
            If we want faster growth, stronger American industry, and more good American jobs,
            then our government should do what other leading nations do and act aggressively to achieve those goals instead of catering to the financial interests of companies with no particular allegiance to America.
          </h3>
          <h3 className='issue-page-highlights'>
            It’s not a question of more government or less government. It’s about who government works for.
      </h3>
          <div style={{ 'padding-bottom': '5%' }}></div>
        </div>
      </div >
    </div >
  )
}

export default Labor
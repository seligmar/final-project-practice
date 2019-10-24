

import React from 'react'
import { Link } from 'react-router-dom'


const Healthcare = () => {
  const highlight = {
    'font-style': 'normal', 
    'text-align': 'center',
  }
  
  return (
    <div className='about-page-background'>
      <Link to="/donate/elizabethwarren2020" target="_top">
        <div className='donationsBar-new'>
          <h1 className="giving-text">Give Now</h1></div>
      </Link>
      <div className='image-box-green'>
        <img className='bio-img-1'
          src='https://d3i6fh83elv35t.cloudfront.net/static/2018/07/RTX3G410-1024x683.jpg'
          alt='Medicare for All' /></div>
      <div className='about-page'>
        <h1 style={highlight}>HEALTH CARE IS A BASIC HUMAN RIGHT</h1>
        <h3>
          When Elizabeth was in middle school, her father had a heart attack.
          He was out of work for a long time, and the bills piled up.
          They lost their family station wagon, and they came about an inch away from losing their house.</h3>
        <h3>Years later, as a bankruptcy law professor, Elizabeth studied why working families were going broke.
          Her research showed that most people who filed for bankruptcy looked a lot like her family – most were solidly middle class, and about half had filed for bankruptcy in the aftermath of a serious medical problem.
          And here was the kicker: about three-quarters of them had health insurance, but it just wasn’t enough.
        </h3>
        <h3>
          The Affordable Care Act made massive strides in expanding access to health insurance coverage, and we must defend Medicaid and the Affordable Care Act against Republican attempts to rip health care away from people.
          But it’s time for the next step.
        </h3>

        <h3>Elizabeth supports Medicare for All, which would provide all Americans with a public health care program. </h3>
        <h3 className="issue-page-highlights">
          Medicare for All is the best way to give every single person in this country a guarantee of high-quality health care. </h3>
        <h3>Everybody is covered. Nobody goes broke because of a medical bill. No more fighting with insurance companies. </h3>
        <h3>
          The basic business model of an insurance company is to take in as much money as you can in premiums and paying out as little as possible in health care coverage.
        </h3>
        <h3>
          That leaves families with rising premiums, high deductibles, and fighting with insurance companies to try to get the health care that their doctors say they and their children need.
        </h3>
        <h3>
        Insurers protecting their bottom lines restrict your networks of providers and stand in the way when you want to see your doctor or need to see a specialist without going broke. 
        
        </h3>
        <h3>Medicare for All solves these problems.</h3>
        <h3 className="issue-page-highlights">
        Everyone can see the doctor they need. Nobody goes broke.  </h3>
        <h3>
        And your doctor gets paid by Medicare instead of fighting with an insurance company. 
        </h3>
        <h3>
        Every American should be able to get the care they need when they need it. 
        This is a goal worth fighting for, and Elizabeth is in this fight all the way. 
        </h3>        
        <h3 style={{ 'padding-bottom': '5%' }}>Our democracy should not be held hostage by right-wing courts, and women should not have to hope that Brett Kavanaugh and Donald Trump’s Supreme Court will respect the law.
        </h3>
        <h3 className='issue-page-highlights'>
        That's why Elizabeth will fight for Medicare for All.      </h3>
      </div>
    </div >
  )
}

export default Healthcare 
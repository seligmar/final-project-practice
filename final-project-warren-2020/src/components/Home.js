import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.showDonationsBar ? (
          <div className='maybe-later' onClick={e => this.props.closeGive(e)}>Maybe Later</div>
        ) : null
        }
        {
          this.props.showDonationsBar ? (
            <Link to="/donate/elizabethwarren2020">
              <div className='donationsBar' onClick={e => this.props.resetDonationsBar(e)}>
                <h1 className="giving-text">Give Now</h1></div>
            </Link>
          ) : null
        }
        <div className='video-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://media.giphy.com/media/lPjvLFOfrS3QUudX6S/source.mp4'
            playing='true'
            loop='true'
            width='100%'
            height='80%'
          />
        </div>
        <div className='quote-grid'>
          <div className='quote-img'>
            <img className='img' alt="Elizabeth Warren in front of American flag"
              src='https://www.usnews.com/dims4/USNEWS/692809a/2147483647/crop/4050x2658%2B0%2B3/resize/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F94%2F29%2Fe66a0d5349cd8c3dbbce6ac04d92%2F190911-2020warren-editorial.warren.JPG' />
          </div>
          <div className='grid-quote'>
            <h2 className='quote-text'>
              <p>There's a lot at stake for our democracy.{' '}
                But we can't choose a candidate we don't believe in just because we're afraid.</p>
              <p>I'm not afraid.</p>
              <p>― Elizabeth Warren</p></h2>
            <h1></h1>
            <Link to="/getinvolved/elizabethwarren2020">
              <button className='button'>Get Involved Today</button>
            </Link>
            <h1></h1>
          </div>
        </div>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ewarren"
          options={{ height: 400 }}
         />
        // <blockquote class="twitter-tweet">
        //   <p lang="en" dir="ltr">Corruption in Washington is holding back progress—and much of it is perfectly legal thanks to the Supreme Court. It’s time to get big money out of politics and put power back in the hands of the people—and I&#39;ve got a plan for that. <a href="https://t.co/wtT7JacMpx">https://t.co/wtT7JacMpx</a>
        //   </p>&mdash; Elizabeth Warren (@ewarren)
        //   <a href="https://twitter.com/ewarren/status/1184106806999736322?ref_src=twsrc%5Etfw">October 15, 2019</a></blockquote>
        // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <div className='youtube-block-grid'>
          <div className='youtube'>
            <iframe title='Dream Big'
              width='100%' height='580' src="https://www.youtube.com/embed/uF3IjYG8eeY"
              frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
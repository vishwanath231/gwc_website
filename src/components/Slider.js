import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css'; // cubeAnimation
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css'; // scaleOutAnimation
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'; // fallAnimation
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css'; // foldOutAnimation
import 'react-awesome-slider/dist/custom-animations/open-animation.css'; // openAnimation
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <AutoplaySlider 
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={5000}
            // animation="scaleOutAnimation"
            style={{height:'100vh', color: '#fff', background: '#fff'}} 
            bullets={false}
            
        >
            <div className="bg_video_container">
                <video loop muted autoPlay className='bg_video'>
                    <source src={require('../assets/pexels-pressmaster-3141210-1920x1080-25fps.mp4')} type="video/mp4" />
                </video>
                <div className="bg_video_content ">
                    <div className="content_info">
                        <div className="flicker">
                            Changing the way you think about data
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg_video_container">
                <video loop muted autoPlay className='bg_video'>
                    <source src={require('../assets/technology_network21.mp4')} type="video/mp4" />
                </video>
                <div className="bg_video_content ">
                    <div className="content_info">
                        <div className="flicker">
                            The future belongs to Cloud and AI
                        </div>
                    </div>
                </div>
            </div>
        </AutoplaySlider>
    )
}

export default Slider


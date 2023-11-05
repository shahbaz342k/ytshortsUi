import { ArrowBack, InsertComment, MoreVert, NearMe, ThumbDown, ThumbUp } from '@material-ui/icons';
import './video.css';
import { Avatar } from '@material-ui/core';
import Marquee from 'react-fast-marquee';
import { useRef, useState } from 'react';
const Video = ({ id, src, channelName, channelDescription }) => {
    // console.log(id, src);
    const [playing, setPlaying] = useState(false);
    const [isChannelSubscribed, setIsChannelSubscribed] = useState(false);
    
    const videoRef = useRef(null);

    const handlePlayAndPause = (event) => {
        event.preventDefault();
        if (playing) {
            setPlaying(false);

            console.log('pause ');
            videoRef.current.pause();

        } else {
            console.log('play ');
            videoRef.current.play();
            setPlaying((state) => !state);

        }
    }
    const handleChannelSubscription = (event) => {
        event.preventDefault();
        console.log('click btn subscribe');
        setIsChannelSubscribed((state) => !state);
    }
    return (
        <div className="video">

            <video className='video_player' 
            id={id} 
            loop 
            src={src} 
            ref={videoRef} 
            onClick={handlePlayAndPause} />
            <div className='shortContainer'>
                <div className='shortVideoHeader'>
                    <div className='topIcon'>
                        <ArrowBack />
                    </div>
                    <div className='topIcon'>
                        <MoreVert />
                    </div>
                </div>

                <div className='shortVideoSideIcons'>
                    <div className='shortVideoSideIcon'>
                        <ThumbUp />
                        <p>200</p>
                    </div>

                    <div className='shortVideoSideIcon'>
                        <ThumbDown />
                        <p>100</p>
                    </div>

                    <div className='shortVideoSideIcon'>
                        <InsertComment />
                        <p>30</p>
                    </div>

                    <div className='shortVideoSideIcon'>
                        <NearMe />
                        <p>14</p>
                    </div>
                </div>

                <div className='shortsBottom'>
                    <div className='shortsDescription'>
                        <Marquee pauseOnHover>
                            <p className='desc'>
                                {channelDescription}
                            </p>
                        </Marquee>

                    </div>
                    <div className='details'>
                        <Avatar />
                        <p className=''>
                            {channelName}
                        </p>
                       
                        <button onClick={handleChannelSubscription} className={isChannelSubscribed ? 'Subcribe' : 'unSubcribe'}>
                            {
                                isChannelSubscribed ? 'Subscribed' : 'Subscribe'
                            }
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Video;
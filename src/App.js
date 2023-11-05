import { useEffect, useState } from 'react';
import './App.css';
import Video from './components/VideoComponent/Video';
import VideoList from './components/VideoComponent/videoList';
function App() {
  const [ videos, setVideos] = useState();

  useEffect(() => {
    // console.log('video list loaded', VideoList);
    setVideos(VideoList);
  }, [])
  return (
    <div className="App">
      <div className="app_videoContainer">
        {/* {
          videos ? videos.map((item, key) => <Video id={item.id} src={item.url} key={key}/> ) : 'No Data Found'
        } */}
         {videos ? videos.map((vid, key) => (
            <Video
              id={vid.id}
              src={vid.url}
              channelName={vid.name}
              channelDescription={vid.description}
              key={key}
            />
            )): 'No videos'}
            {/* <Video id="1" src = "https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4" /> */}
            {/* <Video id="2" src = "https://img23.ropose.com/video/mvid/bISCoHc/uBKy_315560961836500fdd44d11-be16-474e-aac5-620df3d3e96a_4275937a_a822.mp4" /> */}
      </div>
    </div>
  );
}

export default App;

import video from "../data/video.js";
import VideoGallery from "./VideoGallery.js";
import '../App.css';


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoGallery/>
    </div>
  );
}

export default App;

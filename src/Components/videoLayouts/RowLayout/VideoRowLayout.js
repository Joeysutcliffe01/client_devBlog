import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

export const VideoPlayer = ({videoData}) => {

  const videoTypes = videoData.video_type;

  console.log("videoTypes inside of VideoPlayer:", videoTypes)

  return (
    <div className="video_row_container">
    
      {videoTypes?.map((type, index) => (
      <>
          <h2 className="video_section_name">{type.name}</h2>
          <div className="video_row" key={index}>
              {type.video_urls.map((video, vidIndex) => (
              
                <div className="video">
                  <ReactPlayer 
                  className="videoPlayer" 
                  key={vidIndex} 
                  url={video.url} 
                  width="100%" 
                  height="12vw" 
                  controls={true}
                  style={{
                    overflow:"hidden", 
                    borderRadius:"1rem 1rem 0rem 0rem", 
                    }}/>

                    <div className="video_info_container">
                      <p className="video_name">{video.name}</p>
                      <p className="video_auther">{video.auther}</p>

                      <Link className="video_link" to={video.url} target="_blank">
                        See on youtube
                      </Link>
                    </div>
                </div>

              ))}
        </div>
     </>
      ))}
    </div>
  );
};

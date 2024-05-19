import React, { useEffect, useState } from 'react';
import data from "../../Data/JavaScript/guidInfoJs.json";
import videoUrl from "../../Data/JavaScript/videoGuidsJs.json"
import { SingleCheatSheet } from '../SingleCheatSheet/SingleCheatSheet';
import { ScrollToTheTop } from "../../utils/ScroolTo/ScrollToTheTop";

import blob5 from "../../Assets/Blobs/blob_5.svg";
import blob3 from "../../Assets/Blobs/blob_5.svg";
import { VideoPlayer } from '../../Components/videoLayouts/RowLayout/VideoRowLayout';

export const SingleGuids = () => {
    const [guidInfo, setGuidInfo] = useState(null);

    const showBtnAt = 800

    const renderDescription = (data) => {
        return data.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
        ));
    };

    useEffect(() => {

        // Scroll to top on page load
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <div className='single_guid_container'>
        <img src={blob3} alt="devVlog blob 5" className="section_blob_top" />
            <div className='single_guid_hero'>
                <div className='single_guid_title_container'>
                  <h1 className='single_guid_title'>{data.name}</h1>
                  <img src={blob5} alt="devVlog blob 5" className="single_guid_title_blob" />
                </div>
                <p className='single_guid_shortdec'>{renderDescription(data.shortDescription)}</p>
            </div>

            <div className='single_guid_longdec_container'>
                <div className='single_guid_longdec'>{renderDescription(data.longDescription)}</div>
            </div>

            <div className='single_guid_video_container'>
                <h1 className='video_guide_title'>{videoUrl.video_type[0].video_courses_type}</h1>
                <div>
                    <VideoPlayer videoData={videoUrl}/>
                </div>
            </div>  

            <div className='cheat_sheet_container'>
                <h1 className='cheat_sheet_title'>{`${data.name} cheat sheet`}</h1>
                <SingleCheatSheet />
            </div>
            <ScrollToTheTop showBtnAt={showBtnAt}/>
        </div>
    );
};


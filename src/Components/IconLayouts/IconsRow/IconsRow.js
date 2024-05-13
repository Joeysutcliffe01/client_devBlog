// import data from '../../../Data/DevGuids/cheatSheetJs.json';

import jsLogo from "../../../Assets/RowItemsIcons/js_icon.png"
import reactLogo from "../../../Assets/RowItemsIcons/React-icon.svg"
import gitHubLogo from "../../../Assets/RowItemsIcons/Octicons-mark-github.svg"


import { Link } from 'react-router-dom';

export const IconsRow = ({data, logos}) => {

  return (
    <div className='icon_row_container'>

      <div className='icon_row_icons'>
        <Link to="guids/js"> 
          <img src={jsLogo} alt="JavaScript Logo" className='logos'/>
        </Link>
      </div>

      <div className='icon_row_dec_container'>
      <h2 className="icon_row_dec_h2">Short on time? Our cheat sheet is your secret weapon.</h2>
        <p className='icon_row_dec_p'> Condensing key concepts and syntax into a single page, it's the perfect quick reference for when you need to jog your memory or brush up on a specific topic.
        </p>
        <Link className='icon_row_dec_link' to="guids/js"> 
          See more
        </Link>

        
      </div>

    </div>
  );
}



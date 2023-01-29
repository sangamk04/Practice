import React from "react";
import "../Style/Activity.css"
import { BsFillBellFill } from 'react-icons/bs';
const Activity = () => {
  return (
    <div className="ActivitySecContainer">
      <div className="ActivityData">
        <div className="ActivityImg">
          <img src="https://i.ibb.co/tKBCKRd/Group-1111.png" alt="" />
        </div>

        <div className="ActivityHead">
            <div><BsFillBellFill size="18px" color="#29375f"/> &nbsp; &nbsp;<span className="ActivityName">ACTIVITY</span></div>
        </div>

        <div className="ActivityIconData">
            <div className="ActivityIcons">
                <img className="imgactive" src="https://i.ibb.co/JRv9PSw/Group-1116.png" alt="" />
            </div>

            <div className="ActivityIconDatadiv">
                <div className="activedata1">
                    <span>User Activity </span> <span>12:32</span>
                </div>
                <div className="activedata2">
                   <p>ajsdksjakldjaksjdkasjdklsjdkasjdk</p>
                </div>
            </div>

        </div>

        <div className="ActivityIconData">
            <div className="ActivityIcons">
                <img className="imgactive" src="https://i.ibb.co/JRv9PSw/Group-1116.png" alt="" />
            </div>

            <div className="ActivityIconDatadiv">
                <div className="activedata1">
                    <span>User Activity </span> <span>12:32</span>
                </div>
                <div className="activedata2">
                   <p>ajsdksjakldjaksjdkasjdklsjdkasjdk</p>
                </div>
            </div>

        </div>

        <div className="ActivityIconData">
            <div className="ActivityIcons">
                <img className="imgactive" src="https://i.ibb.co/vwSKxQB/Group-1118.png" alt="" />
            </div>

            <div className="ActivityIconDatadiv">
                <div className="activedata1">
                    <span>Summary </span> <span>12:32</span>
                </div>
                <div className="activedata2">
                   <p>ajsdksjakldjaksjdkasjdklsjdkasjdk</p>
                </div>
            </div>

        </div>

        <div className="ActivityIconData">
            <div className="ActivityIcons">
                <img className="imgactive" src="https://i.ibb.co/25cdHGY/summary.png" alt="" />
            </div>

            <div className="ActivityIconDatadiv">
                <div className="activedata1">
                    <span>Application Upadate</span> <span>12:32</span>
                </div>
                <div className="activedata2">
                   <p>ajsdksjakldjaksjdkasjdklsjdkasjdk</p>
                </div>
            </div>

        </div>

        <div className="ActivityIconData">
            <div className="ActivityIcons">
                <img className="imgactive" src="https://i.ibb.co/JRv9PSw/Group-1116.png" alt="" />
            </div>

            <div className="ActivityIconDatadiv">
                <div className="activedata1">
                    <span>User Activity </span> <span>12:32</span>
                </div>
                <div className="activedata2">
                   <p>ajsdksjakldjaksjdkasjdklsjdkasjdk</p>
                </div>
            </div>

        </div>
      </div>

    
    </div>
  );
};


export default Activity;

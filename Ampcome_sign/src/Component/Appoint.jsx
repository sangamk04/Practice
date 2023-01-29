import React from "react";
import "../Style/Appoint.css";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import { FaSearch, FaUsers } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { IoMdAddCircle } from "react-icons/io";
import Appointment from "./Appointment";
const Appoint = () => {
  return (
    
      <div className="AppointSideBar">
        <div className="maindivApp">
            <div className="maindivApp1">
            <div>
            <AiFillAppstore className="LogosApp" size="30px" />
          </div>
          <div>
            <FaUsers className="LogosApp" size="30px" />
          </div>
          <div>
            <BsFillCalendar2CheckFill className="LogosApp" size="30px" />
          </div>
          <div>
            <HiCurrencyRupee className="LogosApp" size="30px" />
          </div>
          <div>
            <CgNotes className="LogosApp" size="30px" />
          </div>
          <div>
            <AiFillSetting className="LogosApp" size="30px" />
          </div>
          <section className="imgUserapp">
            <img
              className="Logosimgapp"
              src="https://avatars.githubusercontent.com/u/98679704?s=100&v=4"
              alt=""
            />
          </section>
            </div>
        </div>
        <div className="AppointMenttableSection">
            <div><h1>Appointments</h1></div>
            <div className="AppointMenttableSectiontop">   
                <div className="Appp">List of the Booked Appointments</div>
                <div className="btnAppoint">
                    <div>ADD</div>
                    <div><IoMdAddCircle/></div>
                </div>
               
            </div>
            <div className="hr"><hr /></div>

            <div className="inputAppointment">
                <div>
                    <input type="text" />
                    <FaSearch className="FaSearch" size="20px" />
                    
                </div>
                <div>
                   <select name="" id="">
                    <option value="">This week</option>
                    <option value="">ahsdjkash</option>
                   </select>
                </div>
                <div>
                   <select name="" id="">
                    <option value="">All</option>
                    <option value="">ahsdjkash</option>
                   </select>
                </div>
                <div>
                   <select name="" id="">
                    <option value="">All</option>
                    <option value="">ahsdjkash</option>
                   </select>
                </div>
                <div>
                   <select name="" id="">
                    <option value="">All</option>
                    <option value="">ahsdjkash</option>
                   </select>
                </div>
            </div>
            <div style={{margin:"80px"}}>
            <Appointment/>
            </div>
        </div>
      </div>
    
  );
};


export default Appoint;

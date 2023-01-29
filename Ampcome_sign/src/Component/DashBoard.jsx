import React from "react";
import "../Style/DashBoard.css";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { HiCurrencyRupee } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { FiArrowRight } from "react-icons/fi";
import { data1 } from "../Database/data1";
import Activity from "./Activity";
import { LineGraph } from "./LineGraph";
import {useNavigate} from "react-router-dom"


const DashBoard = () => {
const navigate = useNavigate()
  const navigatetoAppoint =()=>{
    navigate("/app")
  }

  const username = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="DashContainer">
      {/* header */}
      <div className="Namenav">
        <div className="NamenavData">
          <span className="Welcom">Welcome</span>&nbsp;{" "}
          <span className="Name"> {username.user}</span>
          <p>Cardiology</p>
        </div>
      </div>
      {/* sidebar or more sections */}

      <div className="MainDataContainer">
        <div className="sideBarar">
          <div>
            <AiFillAppstore className="Logos" size="30px" />
          </div>
          <div>
            <FaUsers className="Logos" size="30px" />
          </div>
          <div>
            <BsFillCalendar2CheckFill className="Logos" size="30px" />
          </div>
          <div>
            <HiCurrencyRupee className="Logos" size="30px" />
          </div>
          <div>
            <CgNotes className="Logos" size="30px" />
          </div>
          <div>
            <AiFillSetting className="Logos" size="30px" />
          </div>
          <section className="imgUser">
            <img
              className="Logosimg"
              src="https://avatars.githubusercontent.com/u/98679704?s=100&v=4"
              alt=""
            />
          </section>
        </div>
        <div className="MainDataContainerAll">
          <div className="TotalEarning">
            <div className="TotalEarningContainer">
              <div className="TotalEarningContainer1st">
                <div style={{ marginTop: "20px" }}>Logo</div>
                <div style={{ marginTop: "7px", color: "#203765" }}>
                  <p>Total Earning</p>
                  <h4 style={{ marginTop: "-14px", fontSize: "24px" }}>
                    ₹ 4000
                  </h4>
                </div>
              </div>
              <div className="TotalEarningContainer2nd">
                <div>
                  <select name="" id="">
                    <option value="">PRK Hospital</option>
                    <option value="">sdlks</option>
                  </select>
                </div>
                <div>
                  <select name="" id="">
                    <option value="">Last 7 days</option>
                    <option value="">Hospital pkr </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="DetailsDiv">
              <div>
                <p>Appointments</p>
                <h2>54</h2>
              </div>
              <div>
                <p>EMR Finalised</p>
                <h2>47</h2>
              </div>
              <div>
                <p>Patient Registration</p>
                <h2>120</h2>
              </div>
              <div>
                <p>KR4ALL Visits</p>
                <h2>30</h2>
              </div>
            </div>
          </div>

          <div className="AppSheCard">
            <div onClick={navigatetoAppoint} className="Appoinment">
              <div className="Appoinmenthead">
                <div>
                  <h2> APPOINMENT</h2>
                </div>
                <div>
                  <AiFillQuestionCircle size="24px" color="#29375f" />
                </div>
              </div>
              <div className="AppoinmentPeopeDetaills">
                <div className="Waitingqueue">
                  <div>
                    <p style={{ color: "#29375f" }}>Waiting queue [6]</p>
                  </div>
                  <div>
                    {" "}
                    <p style={{ color: "red" }}>View queue</p>
                  </div>
                </div>
                <div className="cardDatamap">
                  {data1.map(function (ele) {
                    return (
                      <>
                        <div className="AvatarInfo">
                          <div className="AvatarInfodata">
                            <div className="Avtarimg">
                              <img
                                style={{ marginTop: "14px" }}
                                src={ele.img_avtar}
                                alt=""
                              />
                            </div>
                            <div className="Avtarimginfo">
                              <p>{ele.name}</p>
                              <div style={{ marginTop: "-7px" }}>
                                <img src={ele.Logo1} alt="" />{" "}
                                <span>{ele.Logo1name}</span>&nbsp;
                                <span>{ele.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className="AvatarInfodata2">
                            <span>
                              <img src={ele.Logo2} alt="" />
                            </span>
                            &nbsp;
                            <span
                              style={{ fontWeight: "bold", color: "brown" }}
                            >
                              {ele.Logo2name}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="ViewBtn">
                <div>View all Appoinments</div> &nbsp;
                <div style={{ marginTop: "4px" }}>
                  <FiArrowRight />
                </div>
              </div>
            </div>
            <div className="schedule">
              <div className="Appoinmenthead">
                <div>
                  <h2> SCHEDULE</h2>
                </div>
                <div>
                  <AiFillQuestionCircle size="24px" color="#29375f" />
                </div>
              </div>
              {/* /////////////////////////// */}
              <div className="sheduleUndrData">
                <div className="AnytimeCunsult">
                  <div style={{ color: "#29375f" }}>Receive</div>
                  <div>
                    <img src="https://i.ibb.co/txdHwhC/icons.png" alt="" />
                  </div>
                  <div style={{ fontWeight: "bold", color: "#29375f" }}>
                    Anytime Consult
                  </div>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <div>
                    <label class="switch">
                      <input type="checkbox" checked />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="Green1">
                  <div style={{color:"#29375f",paddingLeft:"16px",fontWeight:"bold"}}>
                    <span>TODAY</span>&nbsp; &nbsp;&nbsp;<span>MONDAY</span>
                  </div>
                  <div style={{width:"93%",margin:"14px auto"}}>
                    <div className="greenData1">
                      <div>9 AM - 9:40 AM  40 Minutes</div>
                      <div><img src="https://i.ibb.co/txdHwhC/icons.png" alt="" /> Anytime</div>
                    </div>
                    <div className="greenData2">
                      <div>9 AM - 9:40 AM  40 Minutes</div>
                      <div><img src="https://i.ibb.co/WGM70Q6/Video.png" alt="" /> Video</div>
                    </div>
                  </div>
                </div>

                <div className="Green1">
                  <div style={{color:"#29375f",paddingLeft:"16px",fontWeight:"bold"}}>
                    <span>TODAY</span>&nbsp; &nbsp;&nbsp;<span>MONDAY</span>
                  </div>
                  <div style={{width:"93%",margin:"14px auto"}}>
                    <div className="greenData1">
                      <div>9 AM - 9:40 AM  40 Minutes</div>
                      <div><img src="https://i.ibb.co/MSYQJM4/icons-1.png" alt="" /> In-Person</div>
                    </div>
                    <div className="greenData2">
                      <div>9 AM - 9:40 AM  40 Minutes</div>
                      <div><img src="https://i.ibb.co/txdHwhC/icons.png" alt="" /> Anytime</div>
                    </div>
                    <div className="redData2">
                      <div>9 AM - 9:40 AM  40 Minutes</div>
                      <div><img src="https://i.ibb.co/9nyWP8W/Vector-1.png" alt="" /> Block</div>
                    </div>
                    <div style={{color:"#29375f",paddingLeft:"16px",marginTop:"10px",fontWeight:"bold"}}>
                    <span>WEDNESDAY</span>&nbsp; &nbsp;&nbsp;<span></span>
                  </div>
                  </div>
                </div>
              </div>
              {/* //////////////////////////// */}
              <div className="ViewBtn">
                <div>View all Schedules</div> &nbsp;
                <div style={{ marginTop: "4px" }}>
                  <FiArrowRight />
                </div>
              </div>
            </div>
          </div>

          <div><LineGraph/></div>
        </div>

        <div className="Activity"><Activity/></div>
      </div>
    </div>
  );
};

export default DashBoard;

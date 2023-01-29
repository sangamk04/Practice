import React from 'react'
import "../Style/Appoinment.css"
import {appointment} from "../Database/data"
import {BiDotsVerticalRounded} from "react-icons/bi"
import {FaVideo} from "react-icons/fa"
import {BsLightningCharge} from "react-icons/bs"
import {GiPerson} from "react-icons/gi"
  
const Appointment = () => {
  return (
    <>
    <div >
        <table id="customers">
            {/* <thead> */}
              <tr >
                <th>ORDER ID</th>
                <th >PATIENT</th>
                <th >CONSULTATION</th>
                <th >TEAM</th>
                <th >DOCTOR</th>
                <th >SLOT</th>
                <th>STATUS</th>
                <th >INVOICE</th>
                <th >ACTION</th>
              </tr>
            {/* </thead> */}
            {/* <tbody> */}
           {
            appointment.map(function(ele){
              return <tr>
                <td>{ele.order_id}</td>
                <td className='patient'>{ele.patient_name} <br/> {ele.patient_age} <br/> {ele.patient_gender}</td>
                <td>{ele.consultation_logo==""&& ele.consultation_name=="Video"?<FaVideo className='vedio'/> : ele.consultation_logo==""&& ele.consultation_name=="Anytime Consult"?<BsLightningCharge className='vedio'/>:<GiPerson className='vedio'/>} {ele.consultation_name} <br/> {ele.consultation_type}</td>
                <td>{ele.team_name}</td>
                <td>{ele.doctor_name}</td> 
                 <td>{ele.slot_date} <br/> {ele.slot_time}</td>
               <td>{ele.status_type} </td>
                <td className='invoice'>{ele.invoice_type} </td>
                <td>{ele.action_type===""?<BiDotsVerticalRounded className='dottt'/>:""} </td>  
              </tr>
            })
           }
            {/* </tbody> */}

        </table>
    </div>
    </>
  )
}


export default Appointment

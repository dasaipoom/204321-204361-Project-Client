import React from "react";
import { render } from "react-dom";
import "./Chat.scss";
import { connect } from "react-redux";
import { dateChat } from "../../Service/calc";

function Chatlist({ studentchat }) {
   onclick(){

   }
    studentbox(){
        <div className = "stdcontainer">
            <div>
            <p className="schar">{StudentID}</p>
            <p className="retire">{retirepercen}</p>
            </div>
            <div>
                <p className="lastmes">{"message"}</p>
                <p>{dateChat(mes.Time)}</p>
            </div>
        </div>
    return(
        <>
        //datacontaclist.map
            <studentbox{} />
        </>
    )

    }
 }
export default (Chatlist);

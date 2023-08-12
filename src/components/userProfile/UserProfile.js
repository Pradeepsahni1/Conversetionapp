import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXggZDDGTCCn61_IVUz5H5Cnm_tg8n9PP_xRjLLfAOIaupR92" />
          </div>
          <h4>Allu arjun</h4>
          <p>CEO & Founder at AA</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
           I am gud actor
          </div>
        </div>
      </div>
    );
  }
}

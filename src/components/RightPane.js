import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import "../assets/rightPane.css";

export const RightPane = () => {
  // State for modal visibility
  let [showModal, setShowModal] = useState(false);

  // Handler for opening modal
  let openModalHadler = () => {
    setShowModal(true);
  };

  // Handler for closing modal
  let closeModalHandler = () => {
    setShowModal(false);
  };
  // State for storing data from server
  let [data, setData] = useState([]);

  // Api calling using axios
  let dataURL = `https://api.facthunt.in/fostergem/v1/post/list/public`;
  useEffect(() => {
    axios(dataURL)
      .then((res) => {
        setData(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="rightPane">
      <div className="header_div">
        <p className="header_text">Discover</p>
        <button className="header_btn">+</button>
      </div>
      <div className="content_div">
        {data.length !== 0 ? (
          data.map((value, index) => {
            return (
              <div className="content_cards" key={index}>
                <h4>{value.date}</h4>
                <p>{value.title}</p>
                <img src={value.coverImageUrl} alt="cover img" />
                <p>{value.summary.replace(/<\/?p[^>]*>/g, "")}</p>
                <button
                  onClick={openModalHadler}
                  className="modalBtn"
                  title="Click to see publisher details"
                >
                  +
                </button>
                <ReactModal
                  isOpen={showModal}
                  onRequestClose={closeModalHandler}
                  shouldCloseOnOverlayClick={true}
                  className="modal"
                  overlayClassName="overlay"
                >
                  <>
                    <button
                      className="modalBtnOpen"
                      onClick={closeModalHandler}
                    >
                      x
                    </button>
                    <h3 className="modalHeading">Publisher</h3>
                    <div className="userDetails">
                      <div className="modalImgDiv">
                        <img
                          className="modalImg"
                          src={value.user.profilePic}
                          alt="profile pic"
                        />
                      </div>
                      <div className="userBio">
                        <p>Name: {value.user.fname + " " + value.user.lname}</p>
                        <p>Gender: {value.user.gender}</p>
                        <p>Qualification: {value.user.bio}</p>
                      </div>
                    </div>
                  </>
                </ReactModal>
              </div>
            );
          })
        ) : (
          <div>
            <h1>Error: 503 Service Unavailable</h1>
          </div>
        )}
      </div>
    </div>
  );
};

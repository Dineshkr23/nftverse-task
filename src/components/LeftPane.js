import React from "react";
import "../assets/leftPane.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const LeftPane = () => {
  return (
    <div className="leftPane">
      <div className="appName_div">
        <div className="commonIconName">
          <span className="iconsHover">
            <AccountCircleIcon />
          </span>
          <p className="iconsHover">App Name</p>
        </div>
        <span className="iconsHover">
          <MenuIcon />
        </span>
      </div>
      <div className="appDetails_div">
        <div className="profile_div">
          <div className="commonIconName">
            <span className="iconsHover">
              <AccountCircleIcon />
            </span>
            <h4 className="iconsHover">Profile</h4>
          </div>
        </div>
        <div className="discover_div">
          <div className="commonIconName">
            <span className="iconsHover">
              <GridViewIcon />
            </span>
            <p className="iconsHover">Discover</p>
          </div>
        </div>
      </div>
      <div className="appAbout_div">
        <p className="iconsHover">About App</p>
        <a href="">Send feedback</a>
        <a href="">Terms of use</a>
        <a href="">Privacy Policy</a>
        <div className="icons_div">
          <span className="iconsHover">
            <LinkedInIcon />
          </span>
          <span className="iconsHover">
            <FacebookIcon />
          </span>
          <span className="iconsHover">
            <TwitterIcon />
          </span>
        </div>
        <div className="copyright_div">&copy; 2022 App.web</div>
      </div>
    </div>
  );
};

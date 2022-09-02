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
          <span>
            <AccountCircleIcon />
          </span>
          <p>App Name</p>
        </div>
        <span>
          <MenuIcon />
        </span>
      </div>
      <div className="appDetails_div">
        <div className="profile_div">
          <div className="commonIconName">
            <span>
              <AccountCircleIcon />
            </span>
            <h4>Profile</h4>
          </div>
        </div>
        <div className="discover_div">
          <div className="commonIconName">
            <span>
              <GridViewIcon />
            </span>
            <p>Discover</p>
          </div>
        </div>
      </div>
      <div className="appAbout_div">
        <p>About App</p>
        <a>Send feedback</a>
        <a>Terms of use</a>
        <a>Privacy Policy</a>
        <div className="icons_div">
          <span>
            <LinkedInIcon />
          </span>
          <span>
            <FacebookIcon />
          </span>
          <span>
            <TwitterIcon />
          </span>
        </div>
        <div className="copyright_div">&copy; 2022 App.web</div>
      </div>
    </div>
  );
};

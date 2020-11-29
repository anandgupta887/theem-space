import "../Styles/Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import Play from "../Images/google-play.png";
import Apple from "../Images/apple.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__links">
          <a href="#" className="footer__left__anchor">
            About Us
          </a>
          <a href="#" className="footer__left__anchor">
            Terms Of Use
          </a>
          <a href="#" className="footer__left__anchor">
            Privacy Policy
          </a>
          <a href="#" className="footer__left__anchor">
            Feedback
          </a>
          <a href="/contact-us" className="footer__left__anchor">
            Contact US
          </a>
        </div>

        <div className="footer__left__para">
          <p>
            © 2020 STAR All Rights Reserved HBO,Home Box Office and all related
            channel and programming logos are service marks of, and all related
            programming visuals and elements are the property of, Home Box
            Office, Inc. All rights reserved.
          </p>
        </div>
      </div>

      <div className="footer__center">
        <p>Connect with us</p>

        <a
          href="https://www.facebook.com/Theem-College-Of-Engineering-Boisar-1976258729259079/"
          target="_blank"
        >
          {" "}
          <FacebookIcon fontSize="large" />{" "}
        </a>
        <a href="https://twitter.com/theemcoe_office" target="_blank">
          {" "}
          <TwitterIcon fontSize="large" />{" "}
        </a>
        <a href="#">
          {" "}
          <InstagramIcon fontSize="large" />{" "}
        </a>
        <br />
        <a href="#">
          {" "}
          <FacebookIcon fontSize="large" />{" "}
        </a>
      </div>

      <div className="footer__right">
        <p>App</p>
        <Button
          className="footer__right__btn1"
          size="large"
          variant="contained"
          color="primary"
        >
          <img src={Play} className="footer__play__logo" alt="" />
          <div className="footer__btn__p"> Google Play</div>
        </Button>
        <Button
          className="footer__right__btn2"
          size="large"
          variant="contained"
          color="primary"
        >
          <img src={Apple} className="footer__play__logo apple" alt="" />
          <div className="footer__btn__p">App Store</div>
        </Button>{" "}
      </div>
    </div>
  );
}

export default Footer;

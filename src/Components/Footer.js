import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Button } from "@material-ui/core";
import Play from "../Images/google-play.png";
import Apple from "../Images/apple.png";
import "../Styles/Foot.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__leftLink">
          <a href="#" className="footer__leftAnchor">
            About Us
          </a>
          <a href="#" className="footer__leftAnchor">
            Terms Of Use
          </a>
          <a href="#" className="footer__leftAnchor">
            Privacy Policy
          </a>
          <a href="#" className="footer__leftAnchor">
            Feedback
          </a>
          <a href="/contact-us" className="footer__leftAnchor">
            Contact Us
          </a>
        </div>

        <div className="footer__leftPara">
          <p>
            © 2020 Theem Space. Initiative by students of Theem College Of
            Engineering. All rights reserved.
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
      </div>

      {/* <div className="footer__right">
        <p>App</p>
        <Button
          className="footer__rightBtn1"
          size="large"
          variant="contained"
          color="primary"
        >
          <img src={Play} className="footer__playLogo" alt="" />
          <div className="footer__btnP"> Google Play</div>
        </Button>
        <Button
          className="footer__rightBtn2"
          size="large"
          variant="contained"
          color="primary"
        >
          <img src={Apple} className="footer__playLogo apple" alt="" />
          <div className="footer__btnP">App Store</div>
        </Button>
      </div> */}
    </div>
  );
}

export default Footer;

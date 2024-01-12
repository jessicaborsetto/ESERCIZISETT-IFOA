import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/esm/Button";

function Footer(){
    return(
        <footer className="container mb-0">
            <div className="row footer">
                <div className="col-12">

                    <div className="row">
                        <div className="col col-12 text-left mb-2 p-0">
                        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                        <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
                        </div>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                        <div className="col">
                        <div className="row">
                            <div className="col col-12 footer-links">  
                                <a href="#" alt="footer link">Audio and Subtitles</a>    
                                <a href="#" alt="footer link">Media Center</a>
                                <a href="#" alt="footer link">Privacy</a>
                                <a href="#" alt="footer link">Contact us</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row">
                            <div className="col col-12 footer-links">
                                <a href="#" alt="footer link">Audio Description</a>
                                <a href="#" alt="footer link">Investor Relations</a>
                                <a href="#" alt="footer link">Legal Notices</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row">
                            <div className="col col-12 footer-links">
                                <a href="#" alt="footer link">Help Center</a>
                                <a href="#" alt="footer link">Jobs</a>
                                <a href="#" alt="footer link">Cookie Preferences</a>
                            </div>
                        </div>
                        </div>
                        <div className="col">
                        <div className="row">
                            <div className="col col-12 footer-links">
                                <a href="#" alt="footer link">Gift Cards</a>
                                <a href="#" alt="footer link">Terms of Use</a>
                                <a href="#" alt="footer link">Corporate Information</a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-12 text-left my-4">
                            <Button variant="outline-light" >
                                <small>Service Code</small>
                            </Button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col col-12 text-left mb-2 mt-2 copyright">
                        	&#169; 1997-2022 Netflix, Inc.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
import React from "react";
import { Wrapper, Content } from "./FooterStyle";
import Iconfb from "../../images/icon_facebook.png"
import Iconig from "../../images/icon_instagram.png"
import Icontwitter from "../../images/icon_twitter.png"
import Iconmail from "../../images/icon_mail.png"
import Icontwitch from "../../images/icon_twitch.png"

const Footer = () => {
    return(
        <Wrapper className="main footer">
            <Content className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                     <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                     <p>binarcarrental@gmail.com</p>
                     <p>081-233-334-808</p>
                </div>
                <div className="col"style={{fontWeight: "400"}}>
                     <p>Our services</p>
                     <p href="#whyusid">Why Us</p>
                     <p>Testimonial</p>
                     <p>FAQ</p>
                </div>
                <div className="col">
                     <p>Connect with us</p>
                     <p>
                         <img src={Iconfb} className="card-img-top" alt="error" style={{width: "auto", paddingRight:"15px"}}/>
                         <img src={Iconig} className="card-img-top" alt="error" style={{width: "auto", paddingRight:"15px"}}/>
                         <img src={Icontwitter} className="card-img-top" alt="error" style={{width: "auto", paddingRight:"15px"}}/>
                         <img src={Iconmail} className="card-img-top" alt="error" style={{width: "auto", paddingRight:"15px"}}/>
                         <img src={Icontwitch} className="card-img-top" alt="error" style={{width: "auto"}}/>
                     </p>
                </div>
                <div className="col">
                     <p>Copyright Binar 2022</p>
                     <p style={{backgroundColor: "#0D28A6", width: "100px", height: "34px"}}> </p>
                </div>
            </Content>
        </Wrapper>
    )
}
export default Footer;
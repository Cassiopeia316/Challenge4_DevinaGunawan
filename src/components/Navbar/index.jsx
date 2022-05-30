import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./NavbarStyle";

const Navbar = () => {
    return(
        <Wrapper className="sticky-top container-fluid">
            <Content className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid d-flex">
                    <Link className="navbar-brand" style= {{backgroundColor: "var(--darkblue-04)", width: "100px", height: "34px"}} to="/rent"> </Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexGrow: "initial"}}>
                        <div className="navbar-nav" style={{width: "450px", justifyContent: "spaceBetween", fontSize:"14px", fontWeight:"400"}}>
                            <Link className="nav-link" to ="/rent" style={{color: "black", marginRight:"15px"}}>Our Services</Link>
                            <Link className="nav-link" to="/rent" style={{color: "black", marginRight:"15px"}}>Why Us</Link>
                            <Link className="nav-link" to="/rent" style={{color: "black", marginRight:"15px"}}>Testimonial</Link>
                            <Link className="nav-link" style={{width: "29px", paddingRight: "50px", color: "black", marginRight:"15px"}} to="/rent">FAQ</Link>
                            <button type="button" className="btn btn-success" style= {{width: "81px", height: "36px", backgroundColor: "var(--limegreen-04)", border: "0px", borderRadius: "0px"}}>Register</button>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}
export default Navbar;
import React from "react";
import { Wrapper, Content } from "./CardStyle";
import { Link } from "react-router-dom";

const Carcard = ({ data }) => {
    const { id, name, category, price, start_rent_at, image } = data //bagian yang ingin dipakai di card, data berasal dari RentCar.jsx, data disini itu props (yg kiri di bagian rentcar)
    // console.log(data)
    return(
        <Wrapper className="card">
            <Content className="cardcontent"> 
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6 className="card-title">{name} / {category}</h6>
                    <h5 className="card-text">Rp. {price.toLocaleString()}</h5>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p> <i className="fa-solid fa-user-group"></i> &nbsp;4 orang </p>
                    <p> <i className="fa-solid fa-gear"></i> &nbsp; Manual </p>
                    <p> <i className="fa-solid fa-calendar"></i> &nbsp; Tahun {start_rent_at ? start_rent_at.slice(0,4) : null} </p>
                    <Link to={`/detail/${id}`} className="btn btn-primary">Pilih mobil</Link>
                </div>                     
            </Content>
        </Wrapper>
    )
}
export default Carcard;
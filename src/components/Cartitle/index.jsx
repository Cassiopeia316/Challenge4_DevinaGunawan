import React from "react";
import { Wrapper, Content } from "./CartitleStyle";
import Carimage from "../../images/marcedes.png"

const Cartitle = () => {
    return(
        <Wrapper className="d-flex main">
            <Content className="row align-items-centre">
                <div className="col-lg-6 title">
                    <h1>Sewa &#38; Rental Mobil Terbaik di kawasan Tangerang</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <div className="col-lg-6 picture">
                    <div className="bluecar"></div>
                    <img src={Carimage} className="img-car" alt="imageerror"/>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Cartitle;
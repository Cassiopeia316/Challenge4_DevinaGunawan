import React from "react";
import { Wrapper, Content } from "./CardetailStyle";

const Cardetail = ({ data }) => {
    console.log(data)
    const { name, category, price, start_rent_at, image } = data //bagian yang mau digunakan di card detail, data berasal dari DetailCar.jsx, dalam kurung kurawal berasal dari array di API

    return(
        <>
        <Wrapper >
            <Content >
                <div className="right">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <strong>Tentang Paket</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                <p>Include</p>
                                <p>
                                        &#8226; Apa saja yang termasuk dalam paket misal durasi max 12 jam <br/>
                                        &#8226; Sudah termasuk bensin selama 12 jam <br/>
                                        &#8226; Sudah termasuk Tiket Wisata <br/>
                                        &#8226; Sudah termasuk pajak <br/>
                                </p>
                                <p>Exclude</p>
                                <p>
                                        &#8226; Tidak termasuk biaya makan sopir Rp 75.000/hari <br/>
                                        &#8226; Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam <br/>
                                        &#8226; Tidak termasuk akomodasi penginapan <br/>
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                    <strong>Refund, Reschedule, Overtime</strong>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    <p>
                                        &#8226; Tidak termasuk biaya makan sopir Rp 75.000/hari <br/>
                                        &#8226; Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam <br/>
                                        &#8226; Tidak termasuk akomodasi penginapan <br/>
                                        &#8226; Tidak termasuk biaya makan sopir Rp 75.000/hari <br/>
                                        &#8226; Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam <br/>
                                        &#8226; Tidak termasuk akomodasi penginapan<br/>
                                        &#8226; Tidak termasuk biaya makan sopir Rp 75.000/hari <br/>
                                        &#8226; Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam <br/>
                                        &#8226; Tidak termasuk akomodasi penginapan<br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#hreff" className="btn btn-primary payment">Lanjutkan Pembayaran</a>
                </div>
                <div className="left">
                    <div className="cardleft">
                        <div className="card">
                            <div className="cardcontent"> 
                                <img src={image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h6 className="card-title">{name} / {category}</h6>
                                    <p> <i className="fa-solid fa-user-group"></i> &nbsp;4 orang &nbsp; &nbsp;
                                        <i className="fa-solid fa-gear"></i> &nbsp; Manual &nbsp; &nbsp;
                                        <i className="fa-solid fa-calendar"></i> &nbsp; Tahun {start_rent_at ? start_rent_at.slice(0,4) : null} 
                                    </p>
                                    <h5 className="card-text"><p>Total</p> Rp. {price.toLocaleString()} </h5>
                                    <a href="#hreff" className="btn btn-primary cardpayment">Lanjutkan Pembayaran</a>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
        </>
    )
}

export default Cardetail
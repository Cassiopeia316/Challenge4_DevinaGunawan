import React, {useRef, useState, useEffect} from "react";
import { Wrapper, Content, Selection } from "./FilterStyle";

const Filter = ({filtered, setState, can_search}) => {
    const [ driver, setDriver ] = useState("")
    const [ tanggal, setTanggal ] = useState("")
    const [ waktu, setWaktu ] = useState("")
    const [ penumpang, setPenumpang ] = useState("")
    const [ searched, setSearched ] = useState(filtered) //ada di rentcar.jsx

    const container = useRef(null) // awalnya null karena belum ada yang di select
    const optionDriver = useRef(null) 
    const optionTanggal = useRef(null)
    const optionWaktu = useRef(null)
    const optionPenumpang = useRef(null)

    const openOptions = (e) => { //munculin dropdown
        closeOptions() // memanggil closeOptions
        const { name, htmlFor } = e.currentTarget // e.currentTarget lebih buat ke yang mau di klik (onCLick)

        if (name === "tipe-driver" || htmlFor === "tipe-driver"){ // kalo true, di klik muncul show, untuk menampilkan dropdown tipe driver
            optionDriver.current.classList.add("show")
        } else if (name === "tanggal" || htmlFor === "tanggal"){ // kalo true, di klik muncul showPicker, untuk menampilkan calendar
            optionTanggal.current.showPicker()
        } else if (name === "list-waktu" || htmlFor === "waktu-ambil"){ // kalo true, di klik muncul show, untuk menampilkan dropdown pilihan waktu
            optionWaktu.current.classList.add("show")
        } else if (name === "penumpang" || htmlFor === "jumlah-penumpang"){ // kalo true, di klik muncul show, untuk menampilkan dropdown jumlah penumpang
            optionPenumpang.current.classList.add("show")
        }
        container.current.classList.add("selected") // ketika salah satu dipencet, muncul shadow hitam
    }

    const saveState = (e, target) => { //ada di bagian jsx
        const value = e.currentTarget.textContent || e.currentTarget.value //textContent itu isi dalam tag html, text content buat yang selain tanggal, yang value buat yang tanggal
        if (target === "driver"){
            setDriver(value)  // diambil yang textContent karena ada isinya
        } else if (target === "tanggal"){
            setTanggal(value) // karena ga ada textContent, jadi diambil yang value
        } else if (target === "waktu"){
            setWaktu(value)  // diambil yang textContent
        } else if (target === "penumpang"){
            setPenumpang(value)  // diambil yang textContent
        }
        closeOptions() //memanggil function closeoptions
    }

    const closeOptions = () => { //tutup dropdown
        optionDriver.current.classList.remove("show") // untuk menghilangkan tampilan pilihan driver
        container.current.classList.remove("selected") // untuk menghilangkan tampilan shadow
        optionWaktu.current.classList.remove("show") // untuk menghilangkan tampilan pilihan waktu
        optionPenumpang.current.classList.remove("show") // untuk menghilangkan tampilan pilihan jumlah penumpang
    }

    useEffect(() => { //ketika pertama kali render, baru kasih tau kalo di klik di luar container, matiin shadow
        window.addEventListener("click", e => {
            if (container.current && // current itu ambil isi yang di dalam useReff
                optionDriver.current && // kalo salah satunya ga ada, gabakal nutup shadownya kalo udh dibuka,
                optionTanggal.current && // kalo semuanya ada baru bisa mati shadownya
                optionWaktu.current && // untuk memprotect
                optionPenumpang.current) {
                    if (!container.current.contains(e.target)){ //kalo ga klik di bagian input / kotak search, dia mati shadownya
                        closeOptions() 
                    }
                }     
        })
    }, []) 

    const searchButton = () => {
        if (driver) {
            setSearched(true) 
            setState(prev => ({
                ...prev,
                status: driver === "Dengan Driver" 
    
            }))     
        }

    }

    return(
        <Wrapper ref={container}>
            {
            searched && <h5>Pencarianmu</h5> //awalnya ga ada pencarianmu, ketika searchednya true, tulisan pencarianmu keluar
            // kalau yang kanan udh pasti true, kalau kiri bisa true bisa false
            // jadi pas searched nya dalam keadaan true, nanti muncul tulisan pencarianmu
            }
            <Content className="row">
                <div className="col-lg-2">
                    <label htmlFor="tipe-driver" onClick={can_search?openOptions : null}>Tipe Driver</label>
                    {
                        can_search ? (
                        <>
                            <label htmlFor="tipe-driver" onClick={openOptions}>
                                <i className="fa-solid fa-angle-down"></i>
                            </label>
                            <input type="text"
                                    name="tipe-driver"
                                    value={driver}
                                    placeholder="Pilih Tipe Driver"
                                    onClick={openOptions}
                                    readOnly/>
                            <Selection ref={optionDriver}>
                                <p onClick={(e) => saveState(e, "driver")}>Dengan Driver</p>
                                <p onClick={(e) => saveState(e, "driver")}>Tanpa Driver (Lepas Kunci)</p>
                            </Selection>
                        </> 
                        ) : (
                        <input type="text"
                                name="tipe-driver"
                                className="disabled"
                                readOnly 
                                disabled/>
                        )
                    }
                </div>

                <div className="col-lg-2">
                    <label htmlFor="tanggal" onClick={can_search?openOptions : null}>Tanggal</label>
                    {can_search ?
                        ( 
                            <>
                                <label htmlFor="tanggal" onClick={openOptions}>
                                <i className="fa-solid fa-calendar"></i>
                                </label>
                                <input type="text"
                                        name="tanggal"
                                        value={tanggal}
                                        placeholder="Pilih Tanggal"
                                        onClick={openOptions}
                                        readOnly/>
                                <input ref={optionTanggal}
                                    type="date"
                                    value={tanggal}
                                    onChange={(e) => saveState(e, "tanggal")}/>
                            </>
                        ) : (
                            <input type="text"
                            name="tanggal"
                            className="disabled"
                            readOnly
                            disabled/>
                        )
                    }
                </div>

                <div className="col-lg-2">
                    <label htmlFor="waktu-ambil" onClick={can_search?openOptions : null}>Waktu Jemput / Ambil</label>
                    {
                        can_search ? (
                            <>
                                <label htmlFor="waktu-ambil" onClick={openOptions}>
                                    <i className="fa-solid fa-clock"></i>
                                </label>
                                <input type="text"
                                        name="list-waktu"
                                        value={waktu}
                                        placeholder="Pilih Waktu"
                                        onClick={openOptions}
                                        readOnly/>
                                <Selection ref={optionWaktu}>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>08.00</p>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>09.00</p>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>10.00</p>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>11.00</p>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>12.00</p>
                                    <p data-attr="WIB" onClick={(e) => saveState(e, "waktu")}>13.00</p>
                                </Selection>
                            </>
                        ) : (
                            <input type="text"
                                    name="list-waktu"
                                    className="disabled"
                                    readOnly
                                    disabled/>
                        )
                    }

                </div>

                <div className="col-lg-2">
                    <label htmlFor="jumlah-penumpang" onClick={can_search?openOptions : null}>Jumlah Penumpang [optional]</label>
                    {
                        can_search ? (
                            <>
                                <label htmlFor="jumlah-penumpang" onClick={openOptions}>
                                    <i className="fa-solid fa-user-group"></i>
                                </label>
                                <input type="text"
                                        name="penumpang"
                                        value={penumpang}
                                        placeholder="Jumlah Penumpang"
                                        onClick={openOptions}
                                        readOnly/>
                                <Selection ref={optionPenumpang}>
                                    <p onClick={(e) => saveState(e, "penumpang")}>1 orang</p> {/* "penumpang" itu data untuk dikirim di savestate, namanya target */}
                                    <p onClick={(e) => saveState(e, "penumpang")}>2 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>3 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>4 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>5 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>6 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>7 orang</p>
                                    <p onClick={(e) => saveState(e, "penumpang")}>8 orang</p>
                                </Selection>
                             </>
                        ) : (
                            <input type="text"
                                    name="penumpang"
                                    className="disabled"
                                    readOnly
                                    disabled/>
                        )
                    }
                </div>
                {can_search &&
                    (<div className="col-lg-2">
                        <label> &nbsp;</label>
                        <button type="submit" className="btn btn-success" onClick={searchButton}>Cari Mobil</button>
                    </div>)
                }
            </Content>
        </Wrapper>
    )
}

export default Filter;
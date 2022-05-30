import React, {useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Cartitle from "./Cartitle";
import Footer from "./Footer";
import Filter from "./Filter";
import Carcard from "./Carcard";
import Grid from "./Grid";
import { CarContext } from "../Context"

const Rentcar = () => {
    const [ state, setState ] = useState({
        tipe:"",
        tanggal:"",
        waktu:"",
        penumpang:"",
        status:""
    }) //data awal filter berupa string kosong

    const initialData = useContext(CarContext) //ngambil data dari CarContext
    const [ renderData, setRenderData ] = useState([]) 
    
    useEffect(() => {
        setRenderData(initialData.filter(data => data.status === state.status))
        // setRenderData(initialData) 
        // setRenderData(initialData.filter(data => data.category === state.tipe)) //filter data berdasarkan tipe
    }, [initialData, state])
    
    console.log(initialData)

    return (
        <>
            <Navbar/>
            <Cartitle/>
            <Filter setState = {setState} can_search = {true} filtered={false}/> {/* muncul tulisan pencarianmu dari filtered true, can_search berarti input data nya bisa dipake, setstate buat update filter data mau yang mana*/}
            <Grid>
                {
                    renderData.map((data) => (
                        <Carcard key={data.id} data={data}/> //buat setiap json yang ke filter jadi card, data yang kiri namanya props, yang kanan isi props (value propsnya), kalo pake map harus ada key biar ga ada warning
                    ))
                }
            </Grid>
            <Footer/>
        </>
    )
}   
export default Rentcar;
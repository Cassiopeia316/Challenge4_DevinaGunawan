import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarContext } from "../Context";
import Cardetail from "./Cardetail";
import Cartitle from "./Cartitle";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Filter from "./Filter";

const DetailCar = () => {
    const initialData = useContext(CarContext) //initial data berasal dari car context
    const { id } = useParams() 
    const [ state, setState ] = useState({}) 

    useEffect(() => {
        if (initialData.length > 0){
            const filteredInitialData = initialData.filter(data => data.id === Number(id))[0] // number(id) yang ada di ujung link
            setState(filteredInitialData) //update data dari initial data setelah di filter berdasarkan link yang dituju
        }
    },[initialData, id]) //dependecy array, kalo ada salah satu yang keganti, bakal render ulang

    return (
        <>
            <Navbar/>
            <Cartitle/>
            <Filter can_search = {false} filtered={true}/> {/* can_search false sehingga muncul yang input disabled, filtered true muncul tulisan yang "pencarianmu" */}
            {Object.keys(state).length > 0 && <Cardetail data={state}/>}  {/* untuk mencegah ada error (diprotect), memanggil cardetail, asal data dari {state}*/}
            <Footer/>
        </>
    )
}
export default DetailCar
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CarContext = createContext() // react context API

const CarProvider = ({children}) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () =>{
            const response = await axios.get("https://rent-cars-api.herokuapp.com/admin/car") // ambil data dari API get admin car
            const datas = response.data //response itu bentuknya json, json ada key value pair
            console.log(datas)
            setState(datas)
            // setState(datas.filter(data => data.status === true)) // filter data yang punya status true
        }
        fetchData()
    }, [])

    return[
        <CarContext.Provider value = {state}> {/*mengambil value state*/}
            { children }
        </CarContext.Provider> //provider merupakan object context API, tempat menampung value , provider untuk dipakai global
    ]
}
export default CarProvider
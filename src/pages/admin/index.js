import {useState} from 'react'
import axios from 'axios';
import { api_url } from '../../modules/constants';

const Admin = () => {

    const [info, setInfo] = useState({
        name: "",
        description: "",
        vintage: 0,
        color: '', 
        fortified: false,
        sparkling: false,
        natural: false,
        country: "",
        region: "",
        alcohol: "",
        varieties0: "",
        varieties1: "",
        varieties2: ""
    })

    const insertWine = async () => {
        
        console.log('insertWine')
        console.log(info)

        try{

            const response = await axios.post(`${api_url}/add`, info)
            console.log(response)

        }catch (error){
            console.error(error);
        }
    }

    return (<>
        <h3>Admin</h3>

        <div>
            {"Wine Name : "}
            <input value={info.name} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        name: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"Description : "}
            <input value={info.description} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        description: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"Vintage : "}
            <input value={info.vintage} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        vintage: Number(e.target.value)
                    })
            }}/>
        </div>

        <div>
            {"Color : "}
            <label>
            <input type="radio"
                       name="color"
                       value="red"
                        checked={info.color === 'red'}
                        onChange={(e) => {
                            if (e.target.value === 'red'){
                                setInfo({
                                    ...info,
                                    color: 'red'
                                })
                            }
                        }}
                />
                Red
            </label>{' '}
            <label>
            <input type="radio"
                       name="color"
                       value="white"
                        checked={info.color === 'white'}
                        onChange={(e) => {
                            if (e.target.value === 'white'){
                                setInfo({
                                    ...info,
                                    color: 'white'
                                })
                            }
                        }}
                />
                White
            </label>{' '}
            <label>
                <input type="radio"
                       name="color"
                       value="rose"
                        checked={info.color === 'rose'}
                        onChange={(e) => {
                            if (e.target.value === 'rose'){
                                setInfo({
                                    ...info,
                                    color: 'rose'
                                })
                            }
                        }}
                />
                Rose
            </label>
        </div>

        <div>
            {"Fortified : "}
            <label>
                <input type="radio"
                       name="fortified"
                       value="fortified"
                       checked={info.fortified === true}
                       onChange={(e) => {
                            if (e.target.value === "fortified"){
                                setInfo({
                                    ...info,
                                    fortified: true
                                })
                            }
                       }}
                />
                O
            </label>{' '}
            <label>
                <input type="radio"
                       name="fortified"
                       value="unfortified"
                       checked={info.fortified === false}
                       onChange={(e) => {
                            if (e.target.value === "unfortified"){
                                setInfo({
                                    ...info,
                                    fortified: false
                                })
                            }
                       }}
                />
                X
            </label>
        </div>

        <div>
            {"Sparkling : "}
            <label>
                <input type="radio"
                       name="sparkling"
                       value="sparkling"
                       checked={info.sparkling === true}
                       onChange={(e) => {
                            if (e.target.value === "sparkling"){
                                setInfo({
                                    ...info,
                                    sparkling: true
                                })
                            }
                       }}
                />
                O
            </label>{' '}
            <label>
                <input type="radio"
                       name="sparkling"
                       value="steel"
                       checked={info.sparkling === false}
                       onChange={(e) => {
                            if (e.target.value === "steel"){
                                setInfo({
                                    ...info,
                                    sparkling: false
                                })
                            }
                       }}
                />
                X
            </label>
        </div>

        <div>
            {"Natural : "}
            <label>
                <input type="radio"
                       name="natural"
                       value="natural"
                       checked={info.natural === true}
                       onChange={(e) => {
                            if (e.target.value === "natural"){
                                setInfo({
                                    ...info,
                                    natural: true
                                })
                            }
                       }}
                />
                O
            </label>{' '}
            <label>
                <input type="radio"
                       name="natural"
                       value="normal"
                       checked={info.natural === false}
                       onChange={(e) => {
                            if (e.target.value === "normal"){
                                setInfo({
                                    ...info,
                                    natural: false
                                })
                            }
                       }}
                />
                X
            </label>
        </div>

        <div>
            {"Varieties 1 : "}
            <input value={info.varieties0} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        varieties0: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"Varieties 2 : "}
            <input value={info.varieties1} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        varieties1: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"Varieties 3 : "}
            <input value={info.varieties2} 
                    onChange={(e)=>{
                    setInfo({
                        ...info,
                        varieties2: e.target.value
                    })
            }}/>
        </div>

        <button onClick={insertWine}>Confirm</button>
    </>)
}

export default Admin
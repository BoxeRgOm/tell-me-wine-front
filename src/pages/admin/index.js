import { useState } from 'react'
import axios from 'axios';
import { api_url } from '../../modules/constants';

const Admin = () => {

    const [info, setInfo] = useState({
        name: "",
        description: null,
        vintage: null,
        color: 'red',
        fortified: false,
        sparkling: false,
        natural: false,
        country: "",
        region: null,
        varieties0: null,
        varieties1: null,
        varieties2: null,
        price: null
    })

    const insertWine = async () => {

        console.log('insertWine')
        console.log(info)

        try {

            const response = await axios.post(`${api_url}/add`, info)
            console.log(response)

        } catch (error) {
            console.error(error);
        }
    }


    const awakeServer = async () => {

        try {

            const response = await axios.post(`${api_url}/awake`)
            console.log(response)

            alert(response.data.message);

        } catch (error) {
            console.error(error);
        }
    }

    const sleepServer = async () => {

        try {

            const response = await axios.post(`${api_url}/sleep`)
            alert(response.data.message);

        } catch (error) {
            console.error(error);
        }
    }

    return (<>
        <h2>Admin</h2>

        <div>
            <h3>Admin Server</h3>
            <button onClick={awakeServer}>Awake</button>
            <button onClick={sleepServer}>Sleep</button>
        </div>

        <div>
            <h3>Add Wine</h3>
            <div>
                {"Wine Name : "}
                <input value={info.name}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            name: e.target.value
                        })
                    }} />
            </div>

            <div>
                {"Description : "}
                <input value={info.description}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            description: e.target.value
                        })
                    }} />
            </div>

            <div>
                {"Vintage : "}
                <input value={info.vintage}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            vintage: Number(e.target.value)
                        })
                    }} />
            </div>

            <div>
                {"Price : "}
                <input value={info.price}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            vintage: Number(e.target.value)
                        })
                    }} />
            </div>

            <div>
                {"Color : "}
                <label>
                    <input type="radio"
                        name="color"
                        value="red"
                        checked={info.color === 'red'}
                        onChange={(e) => {
                            if (e.target.value === 'red') {
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
                            if (e.target.value === 'white') {
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
                            if (e.target.value === 'rose') {
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
                            if (e.target.value === "fortified") {
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
                            if (e.target.value === "unfortified") {
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
                            if (e.target.value === "sparkling") {
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
                            if (e.target.value === "steel") {
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
                            if (e.target.value === "natural") {
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
                            if (e.target.value === "normal") {
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
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            varieties0: e.target.value
                        })
                    }} />
            </div>

            <div>
                {"Varieties 2 : "}
                <input value={info.varieties1}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            varieties1: e.target.value
                        })
                    }} />
            </div>

            <div>
                {"Varieties 3 : "}
                <input value={info.varieties2}
                    onChange={(e) => {
                        setInfo({
                            ...info,
                            varieties2: e.target.value
                        })
                    }} />
            </div>
            <button onClick={insertWine}>Confirm</button>
        </div>
    </>)
}

export default Admin
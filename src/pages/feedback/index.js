import {useState, useEffect} from 'react'
import axios from 'axios';
import { api_url } from '../../modules/constants';


const FeedBack = () => {

    const [wineList, setWineList] = useState([])
    const [selectedWine, setSelectedWine] = useState(undefined)
    const [feedback, setFeedback] = useState({
        wine: 0,
        rating: 0,
        pairing: '',
        color: '',
        aroma: '',
        acidity: '',
        sweet: '',
        tannin: '',
        flavor: '',
        finish: '',
        overall: ""
    })

    useEffect(()=>{
        getWineList()
    },[])

    const getWineList = async () => {

        try{
            const response = await axios.get(`${api_url}/wineList`)
            console.log('getWineList')
            console.log(response)
            setWineList(response.data.wineList)
        }catch (error){
            console.error(error);
        }
    }

    const insertFeedback = async () => {
        console.log('insertFeedback')
        console.log(feedback)

        if(!selectedWine){
            return;
        }

        try{
            const response = await axios.post(`${api_url}/feedback`, {
                ...feedback,
                wine: selectedWine.id
            })
            console.log(response)

        }catch (error){
            console.error(error);
        }
    }

    return (<>
        <h3>Feedback</h3>
        <WineListComponent wineList={wineList}
                selectedWine={selectedWine}
                setSelectedWine={setSelectedWine}/> <br/>
        <FeedbackComponent selectedWine={selectedWine}
            feedback={feedback} 
            setFeedback={setFeedback}/>

        <button onClick={insertFeedback}>Confirm</button>
    </>)
}


const WineListComponent = ({wineList, selectedWine, setSelectedWine} ) => {
    return (<>
        {"Wine List"}
        {wineList.map((wine, index)=>{

            return (<div key={index}
                        onClick={(e)=>{
                            e.preventDefault();
                            setSelectedWine(wine)
                        }}>
                            {`Name : ${wine.name}, Vintage : ${wine.vintage}, Type : ${wine.color}`}
                </div>)
        })}
    </>)
}

const FeedbackComponent = ({selectedWine, feedback, setFeedback}) => {
    return (<>

        <div>
            {"Wine : "}
            {selectedWine && (selectedWine.name)}
        </div>

        <div>
            {"Rating(1-10까지 입력) : "}
            <input  value={feedback.rating} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        rating: Number(e.target.value)
                    })
            }}/>
        </div>

        <div>
            {"함께 먹은 음식 : "}
            <input  value={feedback.pairing} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        pairing: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"색 : "}
            <input  value={feedback.color} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        color: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"향 : "}
            <input  value={feedback.aroma} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        aroma: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"산도 : "}
            <input  value={feedback.acidity} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        acidity: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"당도 : "}
            <input  value={feedback.sweet} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        sweet: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"탄닌 : "}
            <input  value={feedback.tannin} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        tannin: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"풍미 : "}
            <input  value={feedback.flavor} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        flavor: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"여운 : "}
            <input  value={feedback.finish} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        finish: e.target.value
                    })
            }}/>
        </div>

        <div>
            {"총평 : "}
            <input  value={feedback.overall} 
                    onChange={(e)=>{
                        setFeedback({
                        ...feedback,
                        overall: e.target.value
                    })
            }}/>
        </div>
    </>)
}

export default FeedBack
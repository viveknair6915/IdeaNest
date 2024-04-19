import axios from "axios"
import { useContext } from "react";
import { stateContext } from '../Subscription/Subscription'






// interface responseType{
//     url: String
// }


export default function Payments(){
    const id = useContext(stateContext);
    console.log("The id recieved by useContext is: " + id)
    const subscriptionData = {
        items: [
            { id: id, quantity: 1 },
            
        ]
    };

    async function onClickHandler(){
        try{
            console.log("The id recieved is: " + id)
           const response: any = await axios.post("http://localhost:3000/paymenthandler", subscriptionData)
           console.log("Response recieved is " + JSON.stringify(response))
           console.log("Response.data recieved is " + JSON.stringify(response.data))
           if(response.data.url){
            const res = response.data;
            const {url} = res;
            window.location.href = url
           }
            
        }catch(e){
            console.log("E: " + e)
        }
        
    }

    return(
        <div className="flex justify-center items-center mt-5">

            <div className="mx-5">
                <button className="px-6 py-2 text-white bg-bgPrimary" onClick={onClickHandler}>Web 2 Payment</button>
            </div>

            <div>
            <button className="px-6 py-2 text-white bg-bgPrimary" onClick={onClickHandler}>Web 3 Payment</button>
            </div>
        
        </div>
    )
}
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Payments(props: any) {
    const navigate = useNavigate()
    const id = props.id; // Accessing the id from props

    useEffect(() => {
        console.log("The id received in Payments is: " + id);
    }, [id]);

    const subscriptionData = {
        items: [{ id: 1, quantity: 1 }],
    };
    async function onClickHandlerW3(){
        navigate("/working")
    }

    async function onClickHandler() {
        try {
            console.log("The id received is: " + id);
            const response = await axios.post("http://localhost:3000/paymenthandler", subscriptionData);
            console.log("Response received is " + JSON.stringify(response));
            console.log("Response.data received is " + JSON.stringify(response.data));
            if (response.data.url) {
                const { url } = response.data;
                window.location.href = url;
            }
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    return (
        <div className="flex justify-center items-center flex-col h-screen" style={{ backgroundImage: 'url("https://source.lol/bot.gif")' }}>
            <h1 className="text-6xl font-bold font-primaryFont text-white"><i> Pay the way you like </i></h1>
            <div className="flex justify-center items-center mt-10">
                <div className="mx-5">
                    <button className="px-6 py-2 text-white bg-bgPrimary" onClick={onClickHandler}>Web 2 Payment</button>
                </div>
                <div>
                    <button className="px-6 py-2 text-white bg-bgPrimary" onClick={onClickHandlerW3}>Web 3 Payment</button>
                </div>
            </div>
        </div>
    );
}

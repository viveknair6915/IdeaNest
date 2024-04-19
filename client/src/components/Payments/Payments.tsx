import axios from "axios";
import { useEffect } from "react";

export default function Payments({ id }: any) {
    console.log("The id received in Payments is: " + id);

    useEffect(() => {
        console.log("The id received in Payments (useEffect) is: " + id);
    }, [id]); // Add id as a dependency here

    const subscriptionData = {
        items: [{ id: id, quantity: 1 }],
    };

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
                    <button className="px-6 py-2 text-white bg-bgPrimary" onClick={() => onClickHandler()}>Web 2 Payment</button>
                </div>
                <div>
                    <button className="px-6 py-2 text-white bg-bgPrimary" onClick={() => onClickHandler()}>Web 3 Payment</button>
                </div>
            </div>
        </div>
    );
}

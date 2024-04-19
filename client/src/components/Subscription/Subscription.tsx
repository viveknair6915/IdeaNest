import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Payments from "../Payments/Payments";

export default function Subscription() {
    const [selectedSubscription, setSelectedSubscription] = useState(null);
    const navigate = useNavigate();

    const handleSubscriptionClick = async ({subscriptionId}:any) => {
       await setSelectedSubscription(subscriptionId);
       setTimeout(()=>{

       },5000)
        console.log("The selected subscription id before navigating is: " + selectedSubscription)
        // Programmatically navigate to "/payments" route
        {selectedSubscription && <Payments id={selectedSubscription} />}

      
       
        
        
    };

    return (
        <div className="mt-8 mx-4">
            <div className="shadow-xl rounded-xl p-2 mb-6">
                <h1 className="font-primaryFont text-6xl font-bold"> <i> Monetize your expertise. </i></h1>
                <h1 className="font-primaryFont text-6xl"> <i> Subscribe for a constant stream of tailored ideas. </i></h1>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                    <button onClick={async () => await handleSubscriptionClick(1)}>
                        Weekly
                    </button>
                </div>
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                    <button onClick={() => handleSubscriptionClick(2)}>
                        Monthly
                    </button>
                </div>
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                    <button onClick={() => handleSubscriptionClick(3)}>
                        Annually
                    </button>
                </div>
            </div>

           
        </div>
    );
}

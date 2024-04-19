import { NavLink } from "react-router-dom"
import { useState, createContext } from "react"
import Payments from "../Payments/Payments"


// Create the context with the specified type
export const stateContext = createContext(1);
export default function Subscription() {
    const [idState, setIdState] = useState(1)

    return (
        <div className="mt-8 mx-4">
            <div className="shadow-xl rounded-xl p-2 mb-6">
                <h1 className="font-primaryFont text-6xl font-bold"> <i> Monetize your expertise. </i></h1>
                <h1 className="font-primaryFont text-6xl"> <i> Subscribe for a constant stream of tailored ideas. </i></h1>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                    <button onClick={async (e)=>{
                        e.preventDefault()
                        await setIdState(1)
                        
                    }}><NavLink to="/payments">Weekly</NavLink></button>
                </div>
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                <button onClick={async (e)=>{
                        e.preventDefault()
                        await setIdState(2)
                        
                    }}><NavLink to="/payments">Monthly</NavLink></button>
                </div>
                <div className="w-64 h-64 text-4xl bg-gray-100 rounded-lg shadow-lg mx-4 my-2 flex justify-center font-primaryFont font-bold text-bgPrimary">
                <button onClick={async (e)=>{
                        e.preventDefault()
                        await setIdState(3)
                        
                    }}><NavLink to="/payments">Annualy</NavLink></button>
                </div>
            </div>
                    {/* <stateContext.Provider value={idState}>
                    <Payments/>
                    </stateContext.Provider> */}
        </div>
    )
}

// import RenderPosts from "./RenderPosts/RenderPosts"
import { LampDemo } from "./Lamp/Lamp"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function(){
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/signup")
        },6000)
    },[])
return(
<div>
    {/* <h1 className="font-primaryFont font-bold text-6xl">
        <i>Idea-Mania: Where ideas matter</i>
    </h1> */}
    {/* <RenderPosts /> */}
   
    <LampDemo />
    


</div>
)
}
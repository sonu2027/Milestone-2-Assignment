import { useEffect } from "react"
import axios from "axios";
function HomePage(){
    async function downloadData(){
        const res=await axios.get("http://www.omdbapi.com/}")
        console.log(res.response.data);
    }
    useEffect(()=>{
        downloadData()
    }, [])
    return (
        <>
        <h1>Movie List</h1>
        <input type="text" />
        </>
    )
}
export default HomePage
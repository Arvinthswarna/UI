import { useEffect } from "react"

function Home(props){

    useEffect(() => {
        document.title = "My Home Page"
        console.log("welcome to Home Component !!! ");
    });    

    return(
        <h2> welcome {props.name} </h2>
    )
}

export default Home
import { useState, useEffect } from "react"


export default function Recipe() {
    let [data, setData] = useState();

    // quantity can now be changed
    useEffect(() => {
        fetch("http://localhost:3933/api/get?skip=1&quantity=1")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    console.log(data)

    return (
        <div>
            This is a recipe page
        </div>
    )
}
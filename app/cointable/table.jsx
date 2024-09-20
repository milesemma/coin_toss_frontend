"use client"
import { useEffect, useState } from "react"

function Coin_table() {

    const [stats, setStats] = useState([])

    async function getData() {
        const res = await fetch("http://localhost:1010/cointable", {method: "GET",})
        const resJSON = await res.json()
        setStats("Heads: " + resJSON[0]["Heads"] + " | Tails: " + resJSON[0]["Tails"])
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h>Total heads and tails</h>
            <p>{stats}</p>
        </div>

    )
}
export default Coin_table;


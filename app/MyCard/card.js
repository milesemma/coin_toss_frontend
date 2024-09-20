"use client"
import { useState } from "react"
import classes from "./card_styles.module.css"

function card(props) {
    const [coin_pic, updated_pic] = useState("https://miro.medium.com/v2/resize:fit:1148/0*K6IGVLI3EW_KLOJm.gif")
    const [result, updated_result] = useState("")
    const [image, updated_image] = useState(classes.gif)
    const [heads, setHeads] = useState(0)
    const [tails, setTails] = useState(0)

    // async function updateData(newData) {
    //     const res = await fetch("http://localhost:1010/cointable", {
    //         method: "POST",
    //         headers: {"content-type": "application/json"},
    //         body: JSON.stringify(newData)
    //     })

    // }

    function decide_toss() {
        if (Math.floor(Math.random() * 2) == 0) {
            updated_pic("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/488px-2006_Quarter_Proof.png")
            updated_result("You flipped heads!")
            updated_image(classes.image)
            setHeads(heads + 1)
        }
        else {
            updated_pic("https://www.littletoncoin.com/shop/api/assets/LCCCatalogAssetStore/images/catalog/products/600x600/4385.71_B.png")
            updated_result("You flipped tails!")
            updated_image(classes.image)
            setTails(tails + 1)
        }
        // updateData({heads, tails})
    }

    return (
    <div>
        <img className = {image} src={coin_pic}/>
        <p className = {classes.para}>{props.para}</p>
        <button onClick={decide_toss}>{props.buttontxt}</button>
        <p className = {classes.result}>
            {result}
        </p>
        </div>);
}

export default card;
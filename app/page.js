import MyCard from "./MyCard/card.js";

export default function Homepage() {
    return (
        <div>
            <h1>Welcome, toss the coin!</h1>
            <MyCard
            para="Press button to toss the coin"
            buttontxt="Flip!"
            ></MyCard>
        </div>

    );
}
import type { JSX } from "react";
import "../css/Favorites.css";

function Favorites(): JSX.Element {
    return (
        <div className="favorites-empty">
            <h1>No Favorite Movies yet</h1>
            <p>Start adding Movies to your Favorites and they will appear here!</p>
        </div>
    )
}

export default Favorites;

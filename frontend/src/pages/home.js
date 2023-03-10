import { Link } from "react-router-dom"
import "../css/home.css"

export default function Home() {
    return (
        <div className="mx-5 p-4">
            <div className="landing img-frame">
                <div className="site-headings">
                    <h3 className="creator-header">CoderTofu</h3>
                    <h1 className="brand-header">RecipeShare</h1>
                    <div className="slogan-container">
                        <p className="brand-slogan">Sharing recipes, sharing happiness</p>
                    </div>
                    <button><Link to='/recipes'>Learn more</Link></button>
                </div>
            </div>
        </div>
    )
}
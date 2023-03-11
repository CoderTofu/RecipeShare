import { Link } from "react-router-dom"
import "../css/home.css"

export default function Home() {
    return (
        <div className="mx-5 p-4 landing">
            <div className="img-frame"></div>
            <div className="site-headings">
                <h3 className="creator-header">CoderTofu</h3>
                <h1 className="brand-header">RecipeShare</h1>
                <div className="slogan-container">
                    <p className="brand-slogan">Sharing recipes, sharing happiness</p>
                </div>
                <Link to='/recipes' className="btn btn-primary btn-lg" role="button" >Learn more</Link>
            </div>
        </div>
    )
}
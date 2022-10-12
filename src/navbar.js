import { Children } from "react"
import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="nav">
            <Link to="/" className="site-title">site Name</Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>

            </ul>
        </nav>
    )
}

function CustomLink({ to,Children,...props}){
return (
    <li>
    <Link to={to} {...props}>Pricing{Children}</Link>
   </li>
)
}
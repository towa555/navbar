
import { Link } from "react-router-dom"
export default function Signin() {

    function CustomLink({ to,Children,...props}){
        return (
            <li>
            <Link to={to} {...props}>{Children}</Link>
           </li>
        )
        }
    return(
        <div className="container">
      <form>
        <h1>Sign up</h1>
      <div className="wrap">
        <p className="google"> <u>G</u>  sign up with google</p>
      </div>
        <label>Name</label>
        <input type="text" placeholder="Golah towa mark" />

        <label>Email</label>
        <input type="text" placeholder="example@mail.com" />

        <label>Password</label>
        <input type="text" placeholder="Golah towa mark" />


        <div className="term">
        <p> i agree with <b>terms</b> and <b>services</b></p>
        </div>

        <button><CustomLink to="/about" Children="Sign in"></CustomLink></button>
      </form>

</div>
    )
}
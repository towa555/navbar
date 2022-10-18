import { Link } from "react-router-dom"
export default function Login() {

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
        <h1>Log in</h1>
      <div className="wrap">
        <p className="google"> <u>G</u>  sign up with google</p>
      </div>
        <label>Email</label>
        <input type="text" placeholder="example@mail.com" />

        <label>Password</label>
        <input type="text" placeholder="Golah towa mark" />

<div className="check">
       <input type="checkbox" />
       <label className="checktext">Remmeber me</label>

</div>
        <button> <CustomLink to="/contact" Children="Log in">Contact</CustomLink></button>

         <div className="term">
        <p>  <b>Forget password?</b> </p>
        </div>
      </form>

</div>
    )
}
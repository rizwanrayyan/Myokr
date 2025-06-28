import { useState } from "react";
import "./login.css";
import axios from "axios";
const Login = () => {
    const [username, setusername] = useState("");
    const[password, setpassword] = useState("");
    const handleSubmit =async (e) => {   
    e.preventDefault()
    try{
 const data =await axios.post('http://localhost:8080/user/login', {
        username: username,
        pass: password
    })
    console.log(data.data)
    if(data.response.status === 200){
        console.log("success")
    }

   
    }
    catch(err){
        console.log(err)
    }
   
    }
    return ( 
  <div className="bg-overlay">
    <div className="login-box">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>username *</label>
        <input type="text" name="username" placeholder="Username" required onChange={(e)=>setusername(e.target.value)}/>

        <label for="password">Password *</label>
        <input type="password" id="password" placeholder="Password" required onChange={(e)=>setpassword(e.target.value)}/>

        <button type="submit" className="btn">Sign In</button>

        <div className="extra-links">
          <p>
            Don't have an Account? <a href="#">Sign Up</a><br />
            Lost Your Password? <a href="#">Forgot Password?</a>
          </p>
        </div>
      </form>
    </div>
  </div>

     );
}
 
export default Login;
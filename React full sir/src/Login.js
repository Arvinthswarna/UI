import { useState } from "react";
import  axios  from 'axios';

function Login(){

   
        const [email,setEmail] = useState('');
        const [pwd,setPwd] = useState('');
    
        const setUserName = (e) => {
            setEmail(e.target.value);        
        }
    
        const setPassword = (e) => {
            setPwd(e.target.value);
        }
    
        const validate = (e) => {
            e.preventDefault();
           //call signup API
           let data = {
            email: email,
            password: pwd
           }
      //Validate API thats SignIn API
        }
    return(
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={e => validate(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
                    <div className="text-center">
                        Already Registered?{" "}
                        <span className="link-primary">Sign Up</span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input type="email"
                               className="form-control mt-1"
                               placeholder="Email"
                               onChange={(e) => setUserName(e)}
                        />                        
                    </div>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password"
                               className="form-control mt-1"
                               placeholder="Password"
                               onChange={(e) => setPassword(e)}
                        />                        
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>                      
                    </div>
                    <p className="text-center mt-2">Forgot Password</p>

                </div>
            </form>
        </div>
    )
}

export default Login
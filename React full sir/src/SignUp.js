import { useState } from "react";
import  axios  from 'axios';

function SignUp(){
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');

    const setUserName = (e) => {
        setEmail(e.target.value);        
    }

    const setPassword = (e) => {
        setPwd(e.target.value);
    }

    const register = (e) => {
        e.preventDefault();
       //call signup API
       let data = {
        email: email,
        password: pwd
       }
       //console.log(JSON.stringify(data));
    //    fetch('http://localhost:8080/user/create',{
    //     method:"POST",
    //     body: JSON.stringify(data),
    //     headers : {
    //         "Content-Type":"application/json",
    //         "Access-Control-Allow-Origin":"*"
    //     }
    //    }).then(response => response.json())
    //      .then(json => console.log(json));
    axios.post('http://localhost:8080/user/create',data)
        .then(response => console.log(response.data))        
    }

    return(
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={e => register(e)}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="text-center">
                        Already Registered?{" "}
                        <span className="link-primary">Login</span>
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
                            Submit
                        </button>                      
                    </div>
                    <p className="text-center mt-2">Forgot Password</p>

                </div>
            </form>
        </div>
    //    <div>
    //      <h2> Sign Up </h2>
    //      Email: <input type="text" onChange={(e) => setUserName(e)} /> <br /> <br />
    //      Password: <input type="password" onChange={(e) => setPassword(e)}/> <br /> <br />
    //      <input type="submit" value="Sign Up"  onClick={register} />
    //    </div>
    )
}

export default SignUp
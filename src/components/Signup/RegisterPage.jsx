import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';
import http from "../../http-common.js"


const RegisterPage = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        broker_id: '',
        email:'',
        mobile:'',
        username: '',
        password: '',
        confirmpassword : ''
    });
    const [submitted, setSubmitted] = useState(false);


    function handleChange(e) {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
    }

    function createaccount(e){
        let details = {
            firstName: user.firstName,
            lastName: user.lastName,
            broker_id: user.broker_id,
            transactions: [],
            presentstocks: [],
            email: user.email,
            mobile: user.mobile,
            username: user.username,
            password: user.password,
          };
        
          http.post('/User', details)
            .then((response) => {
              const res = response.data.status;
              console.log(response.data.status);
        
              if (res !== "Succesful") {
                this.setState({ errorPhrase: res, noError: false });
              } else {
                this.setState({ created: true });
              }
            })
            .catch((error) => {
              console.log(error);
            });
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <div className='topbar'>
            <br></br>
            <br></br>
            <h1 className='ori'>Create an account</h1>
            <br></br>
            <h3 className='ori'>Let's get started</h3>
            </div>
            <span class="headline">Financial Bot</span>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className='align' placeholder='First Name' />
                    {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                    }
                </div>
                <div className="form-group">
                    
                    <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className='align' placeholder='Last Name'/>
                    {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                    }
                </div>
                <div className="form-group">
                    
                    <input type="text" name="email" value={user.email} onChange={handleChange} className='align' placeholder='Email' />
                    {submitted && !user.email &&
                        <div className="invalid-feedback">Email is required</div>
                    }
                </div>
                <div className="form-group">
                    <input type="text" name="mobile" value={user.mobile} onChange={handleChange} className='align' placeholder='Mobile Number'/>
                    {submitted && !user.mobile &&
                        <div className="invalid-feedback">Phone Number is required</div>
                    }
                </div>
                <div className="form-group">
                    
                    <input type="text" name="broker_id" value={user.broker_id} onChange={handleChange} className='align' placeholder='Broker Id' />
                    {submitted && !user.broker_id &&
                        <div className="invalid-feedback">Broker Id is required</div>
                    }
                </div>

                <div className="form-group">
                    
                    <input type="text" name="username" value={user.username} onChange={handleChange} className='align' placeholder='Username' />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>

                <div className="form-group">
                    <input type="password" name="password" value={user.password} onChange={handleChange} className='align' placeholder='Password' />
                    {submitted && !user.password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    
                    <input type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} className='align' placeholder='Confirm Password' />
                    {submitted && !user.confirmpassword &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="button" onClick={createaccount}>
                        {<span className="create"></span>}
                        Create an account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
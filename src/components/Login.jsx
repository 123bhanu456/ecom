import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setemail] = useState("");
    const [password, setpswd] = useState("");

    function handlesub(e) {
        e.preventDefault();
        fetch("https://d-back.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userlogged");
            if (data.status === "ok") {
                alert("Login successful");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("LoggedIn", true);
                window.location.href = "/UserHome";
            }
        });
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login" onSubmit={handlesub}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="login__input"
                                placeholder="User name / Email"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="login__input"
                                placeholder="Password"
                                onChange={(e) => setpswd(e.target.value)}
                            />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>

                        <Link to="/SignUp" className='sign'>SignUp</Link>
                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
}

export { Login };

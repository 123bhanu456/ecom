import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpswd] = useState("");

    function handlesub(e) {
        e.preventDefault();
        fetch("https://d-back.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname, lname, email, password,
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userregistered");
            if (data.status === "ok") {
                alert("Registration successful");
                window.location.href = "./Login";
            }
        });
    }

    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="signin" onSubmit={handlesub}>
                        <div className="signin__field">
                            <i className="signin__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="signin__input"
                                placeholder="First Name"
                                onChange={(e) => setfname(e.target.value)}
                            />
                        </div>
                        <div className="signin__field">
                            <i className="signin__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="signin__input"
                                placeholder="Last Name"
                                onChange={(e) => setlname(e.target.value)}
                            />
                        </div>
                        <div className="signin__field">
                            <i className="signin__icon fas fa-user"></i>
                            <input
                                type="text"
                                className="signin__input"
                                placeholder="User name / Email"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div className="signin__field">
                            <i className="signin__icon fas fa-lock"></i>
                            <input
                                type="password"
                                className="signin__input"
                                placeholder="Password"
                                onChange={(e) => setpswd(e.target.value)}
                            />
                        </div>
                        <button className="button signin__submit">
                            <span className="button__text">SIGN IN</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
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

export { Signup };

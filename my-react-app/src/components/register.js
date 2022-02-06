import React, { Component } from "react";
export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>
                <div className="form-group">
                    <label>username</label>
                    <input type="text" className="form-control" placeholder="username" />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        );
    }
}
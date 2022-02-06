import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
          this.setState({
              [event.target.name]: event.target.value
          });
      }

      handleSubmit(event) {
          const {
              username,
              password,
          } = this.state;


          axios.post("http://localhost:9000/api/auth", {
              user: {
                  username: username,
                  password: password,
            }
          },
          { withCredentials: true }
          )
          .then(response => {
              if (response.data.logged_in === true) {
                  this.props.handleSuccessfulAuth(response.data);
              }


          }).catch(error => {
              console.log("login error", error);
          });
          event.preventDefault();
      }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                name="username" 
                placeholder="username" 
                value ={this.state.username} 
                onChange={this.handleChange} 
                required 
             />

             <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value ={this.state.password} 
                onChange={this.handleChange} 
                required 
             />

             <button type="submit">login</button>       
            </form>
        </div>
        );
    }
}
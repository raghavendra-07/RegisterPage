import { Component } from "react"

import './index.css'

class LoginForm extends Component{
    
    state={username:'',password:'', confrim:""}

    onSubmitform=event=>{
        event.preventDefault()
    }

    onChangeUsername = event => {
        this.setState({username: event.target.value})
      }

onChangePassword=event=>{
    this.setState({password:event.target.value})
}


onChangeConfirmPassword=event=>{
    this.setState({confirm: event.target.value})
}


register=()=>{
    const {username,password,confirm} = this.state
    if(username!=='' && password!==''&& confirm!=='' && (password===confirm)){
    localStorage.setItem('usernameValue',username)
    localStorage.setItem('pass1Value', password)
    localStorage.setItem('confirmValue', confirm)
    this.setState({username:'',password:'',confirm:''})
    }  else{
        alert('Enter valid credentials')
    } 
}


    renderUserNameField=()=>{
        const {username} = this.state
        return(
            <diV className="label-container">
                <label className="label" htmlFor="username">USERNAME</label>
                <input onChange={this.onChangeUsername} className="input" value={username} id="username" placeholder="Enter Username"/>
            </diV>
        )
    }

    renderPasswordField=()=>{
        const {password} = this.state
        return(
            <div className="label-container">
                <label className="label" htmlFor="password">PASSWORD</label>
                <input onChange={this.onChangePassword} className="input" value={password} id="password" placeholder="Enter Password"/>
            </div>
        )
    }

    renderConfirmPasswordField=()=>{
        const {confirm} = this.state
        return(
            <div className="label-container">
                <label className="label" htmlFor="password">CONFIRM PASSWORD</label>
                <input onChange={this.onChangeConfirmPassword} className="input" value={confirm} id="password" placeholder="Enter Password"/>
            </div>
        )
    }

    renderButtonField=()=>{
        return(
            <div  className="button-container">
                <button type="submit" onClick={this.register}>Register</button>
            </div>
        )
    }



    render(){

    return(
        <div className="login-main-container">
            <form className="form-container" onSubmit={this.onSubmitform}>
                <div className="img-container">
                    <img className="image" src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" alt="img"/>
                    <h1 className="login-head">Login Form</h1>
                </div>
                <div>{this.renderUserNameField()}</div>
                <div>{this.renderPasswordField()}</div>
                <div>{this.renderConfirmPasswordField()}</div>
                <div>{this.renderButtonField()}</div>
            </form>
        </div>
    )
}
}
export default LoginForm
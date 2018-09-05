import React from 'react';
import axios from 'axios';
import InputText from '../Input/InputText';

class SignInForm extends React.Component {
  state = {
    user: "", 
    password: "",
    errors: {},
    isLoading: false
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  submit = () => {
    const { user, password } = this.state;
    const info = { user, password };

    this.setState({ isLoading: true, errors: {} });

    axios
      .post('/api/auth/signin', info)
      .then(res => {
        console.log(res.data);
        const newErrors = res.data.errors;

        this.setState({
          isLoading: false,
          errors: newErrors
        })
      });
  }

  render() {
    const { user, password, errors, isLoading } = this.state;

    return (
      <div className="sign-in-form">
        <InputText
          label="Username or email address"
          name="user"
          value={user}
          onChange={this.onChange}
          type="text"
          error={errors.user}
        />

        <InputText
          label="Password"
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          error={errors.password}
        />

        <button 
          className="sign-in-button" 
          onClick={this.submit}
          disabled={isLoading}
        > 
          Sign In 
        </button>
      </div>
    );
  }
}

export default SignInForm;
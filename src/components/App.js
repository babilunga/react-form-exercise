import React from 'react';

import Basic from './Basic.js';
import Contacts from './Contacts.js';
import Avatar from './Avatar.js';
import Overview from './Overview.js';

import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateMobile = (email) => {
  const re = /^(()?\d{3}())?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  return re.test(String(email).toLowerCase());
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // Basic step
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      gender: '',

      // Contacts step
      email: '',
      mobile: '',
      country: '1',
      city: '1',

      // Avatar step
      avatar: '',

      // Controlls
      errors: {},
      step: 1,
      isPassed: true,
    };
  }

  onBackward = (event) => {
    event.preventDefault();

    this.setState((prevState, _props) => ({
      step: prevState.step - 1,
    }));
  };

  onForward = (event) => {
    event.preventDefault();

    const errors = this.errorHandler();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
        isPassed: false,
      });
    } else {
      this.setState(
        (prevState, _props) => ({
          errors: {},
          step: prevState.step + 1,
          isPassed: true,
        }),
        () => {
          console.log('Validation succeed!');
        }
      );
    }
  };

  errorHandler = () => {
    const errors = {};

    // Basic
    if (this.state.step === 1) {
      if (!this.state.firstName) {
        errors.firstName = '*Required';
      } else if (this.state.firstName.length < 3) {
        errors.firstName = '*Must be 3 characters or more';
      }

      if (!this.state.lastName) {
        errors.lastName = '*Required';
      } else if (this.state.lastName.length < 3) {
        errors.lastName = '*Must be 3 characters or more';
      }

      if (!this.state.password) {
        errors.password = '*Required';
      } else if (this.state.password && this.state.password.length < 5) {
        errors.password = '*Must be 5 characters or more';
      }

      if (!this.state.gender) {
        errors.gender = '*Required';
      }
    }

    // Contacts
    if (this.state.step === 2) {
      if (!validateEmail(this.state.email)) {
        errors.email = '*Invalid email address';
      }
      if (!validateMobile(this.state.mobile)) {
        errors.mobile = '*Invalid mobile';
      }
    }

    // Avatar
    if (this.state.step === 3) {
      if (!this.state.avatar) {
        errors.avatar = '*Required';
      }
    }

    return errors;
  };

  onChangeInput = (event) => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({
        avatar: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  // getOptionItems = (items) => {
  //   return items.map((item) => (
  //     <option key={item.id} value={item.id}>
  //       {item.name}
  //     </option>
  //   ));
  // };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center  mt-5 mb-3">
          {this.state.step === 1 ? (
            <Basic
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              password={this.state.password}
              repeatPassword={this.state.repeatPassword}
              gender={this.state.gender}
              onChangeInput={this.onChangeInput}
              error={this.state.errors}
              isPassed={this.state.isPassed}
            />
          ) : this.state.step === 2 ? (
            <Contacts
              email={this.state.email}
              mobile={this.state.mobile}
              country={this.state.country}
              city={this.state.city}
              getOptionItems={this.getOptionItems}
              onChangeInput={this.onChangeInput}
              error={this.state.errors}
              isPassed={this.state.isPassed}
            />
          ) : this.state.step === 3 ? (
            <Avatar
              avatar={this.state.avatar}
              onChangeAvatar={this.onChangeAvatar}
              error={this.state.errors}
              isPassed={this.state.isPassed}
            />
          ) : (
            <Overview
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              password={this.state.password}
              repeatPassword={this.state.repeatPassword}
              gender={this.state.gender}
              email={this.state.email}
              mobile={this.state.mobile}
              country={this.state.country}
              city={this.state.city}
              avatar={this.state.avatar}
            />
          )}
        </div>

        <div className="row justify-content-between">
          <div className="btn-group">
            <button
              // {this.state.step === 0 ? disabled : null}
              type="submit"
              className={classnames('btn', 'btn-outline-primary', 'me-md-2', {
                disabled: this.state.step === 1,
              })}
              onClick={this.onBackward}
            >
              Назад
            </button>

            <button
              type="submit"
              className={classnames('btn', 'btn-outline-primary', {
                disabled: this.state.step === 4,
              })}
              onClick={this.onForward}
            >
              Вперед
            </button>
          </div>
        </div>
      </div>

      // <div className="form-container card">
      //   <div className="card-header p-3 h4">Registration form</div>
      //   <form className="form card-body ">
      //     <Field
      //       id="username"
      //       labelText="Username"
      //       type="text"
      //       placeholder="Enter username"
      //       name="username"
      //       value={this.state.username}
      //       onChange={this.onChangeInput}
      //       error={this.state.errors.username}
      //     />

      //     <Field
      //       id="password"
      //       labelText="Password"
      //       type="text"
      //       placeholder="Enter password"
      //       name="password"
      //       value={this.state.password}
      //       onChange={this.onChangeInput}
      //       error={this.state.errors.password}
      //     />

      //     <div className="form-group mb-3">
      //       <label>Repeat password</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         placeholder="Repeat password"
      //         name="repeatPassword"
      //         value={this.state.repeatPassword}
      //         onChange={this.onChangeInput}
      //       />
      //       <div className="invalid-feedback">
      //         {this.state.errors.repeatPassword
      //           ? this.state.errors.repeatPassword
      //           : null}
      //       </div>
      //     </div>

      //     <div className="form-group mb-3">
      //       <label htmlFor="countrySelect">Country</label>
      //       <select
      //         className="form-select"
      //         id="countrySelect"
      //         name="country"
      //         value={this.state.country}
      //         onChange={this.onChangeInput}
      //       >
      //         {this.getOptionItems(countries)}
      //       </select>
      //     </div>

      //     <GenderRadio
      //       isMale={this.state.gender === 'male'}
      //       isFemale={this.state.gender === 'female'}
      //       onChangeInput={this.onChangeInput}
      //     />

      //     <div className="form-group mb-3">
      //       <label htmlFor="formFile" className="form-label">
      //         Upload your avatar
      //       </label>
      //       <input
      //         className="form-control "
      //         type="file"
      //         id="avatar"
      //         name="avatar"
      //         onChange={this.onChangeAvatar}
      //       />
      //     </div>

      //     <div className="form-group mb-3">
      //       <div>
      //         <label>Age</label>
      //       </div>
      //       <div className="btn-group">
      //         <button
      //           type="button"
      //           className="btn btn-secondary"
      //           onClick={this.decrementAge}
      //         >
      //           -
      //         </button>
      //         <input
      //           type="number"
      //           className="form-control"
      //           placeholder="Enter age"
      //           name="age"
      //           value={this.state.age}
      //           onChange={this.onChangeInput}
      //         />
      //         <button
      //           type="button"
      //           className="btn btn-secondary"
      //           onClick={this.incrementAge}
      //         >
      //           +
      //         </button>
      //       </div>
      //       <div className="invalid-feedback">
      //         {this.state.errors.age ? this.state.errors.age : null}
      //       </div>
      //     </div>

      //     <div className="form-check mb-3">
      //       <input
      //         className="form-check-input"
      //         type="checkbox"
      //         id="agree"
      //         name="agree"
      //         value={this.state.agree}
      //         onChange={this.onChangeCheckbox}
      //         checked={this.state.agree}
      //       />
      //       <label className="form-check-label" htmlFor="agree">
      //         I agree with{' '}
      //         <span style={{ color: '#0d6efd' }}>Privacy Policy</span>
      //       </label>
      //       <div className="invalid-feedback">
      //         {this.state.errors.agree ? this.state.errors.agree : null}
      //       </div>
      //     </div>

      //     <button
      //       type="submit"
      //       className="btn btn-primary btn-block w-100"
      //       onClick={this.onSubmit}
      //     >
      //       Submit
      //     </button>
      //   </form>
      // </div>
    );
  }
}

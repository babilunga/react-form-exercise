import React from 'react';

import Basic from './Basic.js';
import Contacts from './Contacts.js';
import Avatar from './Avatar.js';
import Overview from './Overview.js';
import NavButton from './NavButton.js';

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
      // Values
      values: {
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
      },

      // Controlls
      errors: {},
      step: 1,
      stepNames: ['Basic Info', 'Contacts', 'Avatar', 'Account'],
    };
  }

  onBackward = (event) => {
    event.preventDefault();

    this.setState((state) => ({
      step: state.step === 1 ? 1 : state.step - 1,
    }));
  };

  onForward = (event) => {
    event.preventDefault();
    const errors = this.getErrors();
    const isPassed = !(Object.keys(errors).length > 0);

    this.setState(
      (state) => ({
        errors,
        step: isPassed ? state.step + 1 : state.step,
      }),
      () => {
        console.log('Validation succeed!');
      }
    );
  };

  getErrors = () => {
    const errors = {};
    const {
      values: {
        firstName,
        lastName,
        password,
        repeatPassword,
        gender,
        email,
        mobile,
        avatar,
      },
    } = this.state;

    // Basic
    if (this.state.step === 1) {
      if (!firstName) {
        errors.firstName = '*Required';
      } else if (firstName.length < 3) {
        errors.firstName = '*Must be 3 characters or more';
      }

      if (!lastName) {
        errors.lastName = '*Required';
      } else if (lastName.length < 3) {
        errors.lastName = '*Must be 3 characters or more';
      }

      if (!password || password.length < 5) {
        errors.password = '*Must be 5 characters or more';
      }
      if (!repeatPassword) {
        errors.repeatPassword = '*Required';
      } else if (repeatPassword !== password) {
        errors.repeatPassword = '*Must be equal to password';
      }

      if (!gender) {
        errors.gender = '*Required';
      }
    }

    // Contacts
    if (this.state.step === 2) {
      if (!validateEmail(email)) {
        errors.email = '*Invalid email address';
      }
      if (!validateMobile(mobile)) {
        errors.mobile = '*Invalid mobile';
      }
    }

    // Avatar
    if (this.state.step === 3) {
      if (!avatar) {
        errors.avatar = '*Required';
      }
    }

    // return {}; // For tests, disables validation.
    return errors;
  };

  onChangeInput = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.updateValues(name, value);
  };

  updateValues = (name, value) => {
    console.log(value);
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="card w-75 mx-auto mt-5">
          <div class="card-header h2 p-3">
            {this.state.stepNames[this.state.step - 1]}
          </div>
          <div className="card-body">
            <form>
              {this.state.step === 1 ? (
                <Basic
                  values={this.state.values}
                  onChangeInput={this.onChangeInput}
                  error={this.state.errors}
                />
              ) : null}
              {this.state.step === 2 ? (
                <Contacts
                  values={this.state.values}
                  onChangeInput={this.onChangeInput}
                  error={this.state.errors}
                />
              ) : null}
              {this.state.step === 3 ? (
                <Avatar
                  updateValues={this.updateValues}
                  error={this.state.errors}
                />
              ) : null}
              {this.state.step === 4 ? (
                <Overview values={this.state.values} />
              ) : null}

              <NavButton
                title="Назад"
                isDisabled={this.state.step === 1}
                onClick={this.onBackward}
                float="float-start"
              />

              <NavButton
                title="Вперед"
                isDisabled={this.state.step === 4}
                onClick={this.onForward}
                float="float-end"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

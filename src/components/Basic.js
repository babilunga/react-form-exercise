import Field from './Field.js';
import Gender from './Gender.js';
import classnames from 'classnames';

const Basic = (props) => {
  const {
    firstName,
    lastName,
    password,
    repeatPassword,
    gender,
    onChangeInput,
    error,
    isPassed,
  } = props;

  return (
    <div
      className={classnames('form-container', 'card', {
        'border-red': !isPassed,
      })}
    >
      <div className="card-header p-3 h4">Basic Info</div>
      <form className="form card-body ">
        <Field
          id="firstName"
          labelText="First name"
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={firstName}
          onChange={onChangeInput}
          error={error.firstName}
        />

        <Field
          id="lastName"
          labelText="Last name"
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={lastName}
          onChange={onChangeInput}
          error={error.lastName}
        />

        <Field
          id="password"
          labelText="Password"
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={onChangeInput}
          error={error.password}
        />

        <Field
          id="repeatPassword"
          labelText="Repeat password"
          type="password"
          placeholder="Enter password again"
          name="repeatPassword"
          value={repeatPassword}
          onChange={onChangeInput}
          error={error.repeatPassword}
        />

        <Gender
          isMale={gender === 'male'}
          isFemale={gender === 'female'}
          onChangeInput={onChangeInput}
          error={error.gender}
        />
      </form>
    </div>
  );
};

export default Basic;

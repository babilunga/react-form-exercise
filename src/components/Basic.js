import Field from './Field.js';
import Gender from './Gender.js';
import classnames from 'classnames';

const Basic = (props) => {
  const {
    values: { firstName, lastName, password, repeatPassword, gender },
    onChangeInput,
    error,
  } = props;

  return (
    <div
      className={classnames('form-container', 'p-3', 'mb-3', {
        'border-red': Object.keys(error).length !== 0,
      })}
    >
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
    </div>
  );
};

export default Basic;

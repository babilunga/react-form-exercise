import Field from './Field.js';
import classnames from 'classnames';

const Contacts = (props) => {
  const { email, mobile, country, error, onChangeInput, isPassed } = props;

  return (
    <div
      className={classnames('form-container', 'card', {
        'border-red': !isPassed,
      })}
    >
      <div className="card-header p-3 h4">Contacts Info</div>
      <form className="form card-body ">
        <Field
          id="email"
          labelText="Email"
          type="text"
          placeholder="Enter email"
          name="firstName"
          value={email}
          onChange={onChangeInput}
          error={error.email}
        />

        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile"
          name="mobile"
          value={mobile}
          onChange={onChangeInput}
          error={error.mobile}
        />

        <div className="form-group mb-3">
          <label htmlFor="countrySelect">Country</label>
          <select
            className="form-select"
            id="countrySelect"
            name="country"
            value={country}
            // onChange={this.onChangeInput}
          >
            {/* {this.getOptionItems(countries)} */}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Contacts;

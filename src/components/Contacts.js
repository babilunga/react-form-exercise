import Field from './Field.js';
import classnames from 'classnames';
import countries from '../data/countries.js';
import cities from '../data/cities.js';

const Contacts = (props) => {
  const { email, mobile, country, city, error, onChangeInput, isPassed } =
    props;

  const getOptionCities = () => {
    return Object.entries(cities)
      .filter(([_key, value]) => Number(value.country) === Number(country))
      .map(([id, city]) => (
        <option key={id} value={id}>
          {city.name}
        </option>
      ));
  };

  const getOptionCountries = () => {
    return countries.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

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
          name="email"
          value={email}
          onChange={onChangeInput}
          error={error.email}
        />

        <Field
          id="mobile"
          labelText="Mobile"
          type="text"
          placeholder="Enter mobile, example: 0XXXXXXXXX"
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
            onChange={onChangeInput}
          >
            {getOptionCountries()}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="citySelect">Country</label>
          <select
            className="form-select"
            id="citySelect"
            name="city"
            value={city}
            onChange={onChangeInput}
          >
            {getOptionCities()}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Contacts;

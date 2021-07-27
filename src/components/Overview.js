import countries from '../data/countries.js';
import cities from '../data/cities.js';

const Overview = (props) => {
  const {
    values: {
      firstName,
      lastName,
      password,
      gender,
      email,
      mobile,
      country,
      city,
      avatar,
    },
  } = props;
  return (
    <div className="form-container mb-3">
      <ul className="list-group list-group-flush mb-3">
        <li className="list-group-item">
          <div className="row">
            <div className="col-4 text-center">
              <div className="ratio ratio-1x1">
                <img
                  className="w-100 mx-auto d-block rounded-circle avatar-img"
                  alt=""
                  src={avatar}
                />
              </div>
              <a class="text-muted">{mobile}</a>
            </div>
            <div className="col align-self-center">
              <h2 className="display-1 m-0">{firstName}</h2>
              <h2 className="display-6 lh-1 m-0">{lastName}</h2>
            </div>
          </div>
        </li>
      </ul>
      <h3 className="">Personal Info</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row ">
            <div className="col-3">
              <p className="fs-6 lh-1 m-0">Gender:</p>
            </div>
            <div className="col">
              <p className="fs-5 lh-1 m-0">
                <span className="badge bg-secondary">{gender}</span>
              </p>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <p className="fs-6 lh-1 m-0">E-mail:</p>
            </div>
            <div className="col">
              <p className="fs-5 lh-1 m-0">
                <span className="badge bg-primary">{email}</span>
              </p>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <p className="fs-6 lh-2 m-0">Password:</p>
            </div>
            <div className="col">
              <p className="fs-5 lh-2 m-0">
                <span className="badge bg-primary">
                  {Array(password.length).fill('*')}
                </span>
              </p>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <p className="fs-6 lh-2 m-0">From:</p>
            </div>
            <div className="col">
              <div className="row">
                <p className="fs-5 lh-2 m-0">
                  <span className="badge bg-primary">
                    {countries[country - 1].name}
                  </span>
                </p>
              </div>
              <div className="row">
                <p className="fs-5 lh-2 m-0">
                  <span className="badge bg-primary">
                    {Object.values(cities)[parseInt(city, 10) - 1].name}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Overview;

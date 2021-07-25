const Overview = (props) => {
  const {
    firstName,
    lastName,
    password,
    repeatPassword,
    gender,
    email,
    mobile,
    country,
    city,
    avatar,
  } = props;
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Field</th>
          <th scope="col">Your data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>First name</td>
          <td>{firstName}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Last Name</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Password</td>
          <td>{password}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Repeat Password</td>
          <td>{repeatPassword}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Gender</td>
          <td>{gender}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>E-mail</td>
          <td>{email}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Mobile</td>
          <td>{mobile}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Country</td>
          <td>{country}</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>City</td>
          <td>{city}</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Avatar</td>
          <td>
            <img alt="avatar" src={avatar} className="avatar-img" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Overview;

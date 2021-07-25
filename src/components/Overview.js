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
    // avatar,
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
          <th scope="row">1</th>
          <td>Last Name</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Password</td>
          <td>{password}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Repeat Password</td>
          <td>{repeatPassword}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Gender</td>
          <td>{gender}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>E-mail</td>
          <td>{email}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mobile</td>
          <td>{mobile}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Country</td>
          <td>{country}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>City</td>
          <td>{city}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Overview;

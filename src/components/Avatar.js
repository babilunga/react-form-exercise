import classnames from 'classnames';

const Avatar = (props) => {
  const { updateValues, error } = props;

  const onChangeAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = (e) => updateValues('avatar', e.target.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div
      className={classnames('form-container', 'p-3', 'mb-3', {
        'border-red': Object.keys(error).length !== 0,
      })}
    >
      <label htmlFor="formFile" className="form-label">
        Upload avatar
      </label>
      <input
        className="form-control "
        type="file"
        id="avatar"
        name="avatar"
        onChange={onChangeAvatar}
      />
      {error.avatar ? (
        <div className="invalid-feedback">{error.avatar}</div>
      ) : null}
    </div>
  );
};

export default Avatar;

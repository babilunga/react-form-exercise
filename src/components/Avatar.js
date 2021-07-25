import classnames from 'classnames';

const Avatar = (props) => {
  const { avatar, onChangeAvatar, error, isPassed } = props;
  return (
    <div
      className={classnames('form-container', 'p-3', {
        'border-red': !isPassed,
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

import classnames from 'classnames';

const NavButton = (props) => {
  const { title, isDisabled, onClick, float } = props;
  return (
    <button
      type="submit"
      className={classnames(
        'btn',
        'btn-outline-primary',
        { float },
        {
          disabled: isDisabled,
        }
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default NavButton;

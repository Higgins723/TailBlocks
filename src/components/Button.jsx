import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';

function Button({ buttonColor, children, disabled, name, onClick, type }) {
  const textColor =
    buttonColor === 'secondary' ? tw`text-gray-800` : tw`text-white`;

  const buttonColorClasses = {
    danger: tw`bg-red-500 hover:bg-red-600`,
    primary: tw`bg-blue-500 hover:bg-blue-600`,
    secondary: tw`bg-gray-300 hover:bg-gray-400`,
    success: tw`bg-green-500 hover:bg-green-600`,
  };

  const buttonCss = css`
    ${textColor};
    ${buttonColorClasses[buttonColor]};
    ${tw`font-bold py-2 px-4 rounded inline-flex items-center`};
    ${tw`
      disabled:bg-slate-200
      disabled:text-slate-500
      disabled:border-slate-400
      disabled:shadow-none
      disabled:cursor-not-allowed
    `};
  `;

  const additionalProps = {};
  if (name) additionalProps.name = name;

  return (
    <button
      css={buttonCss}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...additionalProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  buttonColor: PropTypes.oneOf(['danger', 'primary', 'secondary', 'success']),
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  buttonColor: 'primary',
  disabled: false,
  name: null,
  type: 'button',
};

export default Button;

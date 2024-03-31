import PropTypes from 'prop-types';
import tw, { css } from 'twin.macro';

function Button({ children, onClick }) {
  const buttonCss = css`
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
    border: 1px solid black;
  `;

  return (
    <button type='button' css={buttonCss} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

import PropTypes from 'prop-types'
import tw, { css } from 'twin.macro'

const Button = ({ children, onClick }) => {
  return (
    <button css={buttonCss} onClick={onClick}>{children}</button>
  )
}

const buttonCss = css`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
  border: 1px solid black;
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button

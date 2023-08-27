// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {each, onClickArrowMark} = props

  const {id, suggestion} = each

  const onClickArrow = () => {
    onClickArrowMark(id)
  }

  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem

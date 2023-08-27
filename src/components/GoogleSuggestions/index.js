// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

let filteredList

class GoogleSuggestions extends Component {
  state = {suggestionsList: this.props, searchInput: '', checking: true}

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickArrowMark = id => {
    console.log('suggestion with this id is clicked', id)
    const {suggestionsList} = this.state

    const list = suggestionsList.suggestionsList
    const newList = list.filter(each => each.id === id)

    const inputElement = document.getElementById('inputElement')

    inputElement.value = newList[0].suggestion
    filteredList = newList
    this.setState({
      checking: false,
      searchInput: newList[0].suggestion,
    })
  }

  render() {
    const {suggestionsList, searchInput, checking} = this.state
    console.log('inpu text', searchInput)
    if (checking || searchInput === '') {
      filteredList = suggestionsList.suggestionsList.filter(eachsug =>
        eachsug.suggestion.includes(searchInput),
      )
    }
    return (
      <div className="bg-container">
        <div className="inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            alt="google logo"
            className="google-logo"
          />
          <div className="overall-container">
            <div className="search-bar-containers">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Goolge"
                className="inputelement"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                id="inputElement"
              />
            </div>
            <ul className="suggestion-list-items-container">
              {filteredList.map(eachSug => (
                <SuggestionItem
                  each={eachSug}
                  key={eachSug.id}
                  onClickArrowMark={this.onClickArrowMark}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions

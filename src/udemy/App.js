import React from "react"
import VisibilityToggle from "./VisibilityToggle"
import Indecision from "./Indecision"
import Counter from "./Counter"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      notesArr: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemoveAllNotes = this.handleRemoveAllNotes.bind(this)
    this.handleRandomNum = this.handleRandomNum.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.option.value

    if (value) {
      this.state.notesArr.push(value)
      event.target.elements.option.value = ""
      console.log(this.state.notesArr)
    }

    this.setState({
      notesArr: [...this.state.notesArr]
    })
  }

  handleRemoveAllNotes() {
    this.setState({
      notesArr: []
    })
    console.log(this.state.notesArr)
  }

  handleRandomNum() {
    const randNum = Math.floor(Math.random() * this.state.notesArr.length )
    const selector = this.state.notesArr[randNum]
    console.log(selector)
  }

  render() {
    return(
      <div>
        {/* <h1>Indecision App</h1>
        <p>Number of notes: {this.state.notesArr.length}</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="option"
            placeholder="Enter note value"
          />
          <button>Add note</button>
        </form>
        <button
          onClick={this.handleRemoveAllNotes}
        >Remove all notes</button>
        <button
          disabled={this.state.notesArr.length === 0}
          onClick={this.handleRandomNum}
        >Random number button</button>

        <ol>
          {
            this.state.notesArr.map((note, i) => {
              return(
                  <li key={i}>{note}</li>
              )
            })
          }
        </ol> */}

          {/* <VisibilityToggle /> */}

          {/* <Indecision /> */}

          <Counter />

      </div>
    )
  }
}

export default App 
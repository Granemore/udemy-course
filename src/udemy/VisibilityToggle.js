import React from "react"

class VisibilityToggle extends React.Component {
    constructor() {
        super()

        this.state = {
            isVisible: false
        }

        this.toggleDetails = this.toggleDetails.bind(this)
    }

    toggleDetails() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>

                <button
                    onClick={this.toggleDetails}
                >{this.state.isVisible ? "Click to hide details" : "Click to show details"}</button>

                <h3>{this.state.isVisible && "Hi! My visibility was toggled!"}</h3>
            </div>
        )
    }
}

export default VisibilityToggle
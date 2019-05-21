import React from "react"
import Validator from "validator"

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleResetCount = this.handleResetCount.bind(this)
    }

    componentDidMount() {
        const localCount = localStorage.getItem('count')
        const count = parseInt(localCount, 10)

        if (!isNaN(count)) {
            this.setState(() => ({
                count
            }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const count = this.state.count

        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', count)
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleResetCount() {
        this.setState({
            count: 0
        })
    }

    render() {
        return(
            <div>
                <h1>Counter App</h1>

                <h2>Count: {this.state.count}</h2>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleResetCount}>Reset count</button>
            </div>
        )
    }
}

export default Counter 
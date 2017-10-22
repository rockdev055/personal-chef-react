import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertLead } from '../redux/modules/Households/actions'

class LeadDetail extends Component {
  constructor() {
    super()

    this.state = {
      converting: false
    }
  }

  submit = (e) => {
    e.preventDefault()
    this.props.convertLead(this.props.lead.id, this.props.history)
  }

  handleConvert = () => {
    this.setState({
      converting: true
    })
  }

  render() {
    if (this.props.lead) {
      return (
        <div>
          <h1>Lead Details</h1>
          <h3>{this.props.lead.name}</h3>
          <button onClick={this.handleConvert}>Convert Client</button>
          {
            this.state.converting

              ?
              <form onSubmit={this.submit}>
                <h3>Monthly Rate</h3>
                <input type='text' />
                <input type="submit" />
              </form>

              :

              null
          }
        </div>
      )
    } else {
      return null
    }
  }
}

export default connect((state, ownProps) => {
  const id = parseInt(ownProps.match.params.id, 10)
  const lead = state.households.find(h => h.id === id)
  return {
    lead
  }
}, { convertLead })(LeadDetail)

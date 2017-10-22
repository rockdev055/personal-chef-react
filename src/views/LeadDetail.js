import React, { Component } from 'react'
import { connect } from 'react-redux'
import { convertLead } from '../redux/modules/Households/actions'
import numeral from 'numeral'

class LeadDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      converting: false,
      rate: 0
    }
  }

  submit = (e) => {
    e.preventDefault()
    const newRate = { monthly_rate: this.state.rate }

    this.props.convertLead(this.props.lead.id, newRate, this.props.history)
  }

  handleConvert = () => {
    this.setState({
      converting: true
    })
  }

  handleRateChange = (e) => {
    this.setState({
      rate: e.target.value
    })
  }

  render() {
    if (this.props.lead) {
      return (
        <div>
          <h1>Lead Details</h1>
          <h3>{this.props.lead.name} ({numeral(this.props.lead.monthly_rate).format('$0,0.00')})</h3>
          <button onClick={this.handleConvert}>Convert Client</button>
          {
            this.state.converting

              ?
              <form onSubmit={this.submit}>
                <h3>Monthly Rate</h3>
                <input onChange={this.handleRateChange} type='text' />
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

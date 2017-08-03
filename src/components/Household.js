import React, { Component } from 'react'
import HouseholdService from '../services/HouseholdService'

class Household extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }
  componentWillReceiveProps(nextProps) {
    const { id } = nextProps.match.params
    
    HouseholdService.fetchHousehold(id)
      .then(household => this.setState({
        name: household.name
      }))
  }

  componentDidMount() {
    const { id } = this.props.match.params
    HouseholdService.fetchHousehold(id)
      .then(household => this.setState({
        name: household.name
      }))
  }

  render() {
    const { name } = this.props
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )

  }
}

export default Household
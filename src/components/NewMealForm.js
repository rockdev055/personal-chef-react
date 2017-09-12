import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { css } from 'glamor'

class NewMealForm extends Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <ul {...ul}>
          <li {...styles}>
            <label {...styles2} htmlFor="name">Meal Name</label>
            <Field {...styles3} name="name" component="input" type="text" />
          </li>
          <li {...styles}>
            <button {...btnStyle} >Create Meal</button>
          </li>
        </ul>
      </form>
    )
  }
}

const styles3 = css({
  flex: '1 0 220px',
  padding: '15px',
  borderRadius: '15px',
  border: '2px solid gray',
  ':focus': {
    outline: 'none'
  }
})

const ul = css({
  maxWidth: '800px',
  margin: '0 auto'
})

const styles = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  // maxWidth: '800px',
  marginBottom: '20px'
})

const btnStyle = css({
  marginLeft: 'auto',
  padding: '8px 16px',
  border: 'none',
  background: '#333',
  color: '#f2f2f2',
  textTransform: 'uppercase',
  letterSpacing: '.09em',
  borderRadius: '2px'
})

const styles2 = css({
  flex: '1 0 120px',
  maxWidth: '220px'
})


export default reduxForm({
  form: 'newMeal'
})(NewMealForm)
import React from 'react'
import { Link } from 'react-router-dom'

const MealsList = ({ meals }) => {
  return (
    <div>
      <h1>All Meals</h1>
      <ul>
        {meals.map(m =>
          <Link key={m.id} to={`/meals/${m.id}`}>
            <h3 style={{ listStyleType: 'none' }}>
              {m.name}
            </h3>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default MealsList

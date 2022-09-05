import React, { useState } from 'react'
import Question from './Question'
import questions from './data'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState(questions)
  return (
    <main>
      <div className="container">
        <h3>Question And Answer about Login</h3>
        <section className="info">
          {question.map((frage) => {
            return <Question key={frage.id} {...frage} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App

import React from 'react'
const Hello = (props) => {
  return (
    <>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </>
  )
}

const Footer = ()=>{
  return (
    <div>
      <p>salut moi c'est Alain le plus beau</p>
    </div>
  )
}

const App = () => {

  const name = 'alain'
  const age = 24

  return (
    <div>
      <h1>Bonjour les jeunes !!! </h1>

      <Hello name="Maya" age={10 + 24} />
      <Hello name={name} age={age} />
      <Footer />
    </div>
  )
}
export default App

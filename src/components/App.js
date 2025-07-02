import React from 'react'
import UseCallbackComp from './UseCallbackComp.js'
import SkillList from './SkillList'

const App = () => {
  return (
    <div>
      <h1 id='heading'>SKILLS</h1>
      <UseCallbackComp/>
      <SkillList/>
    </div>
  )
}

export default App
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import RcCalendar from "./components/rc/RcCalendar"
import RcClass from "./components/rc/RcClass"
import RcUsage from "./components/rc/RcUsage"

// const App = () => <RcUsage />
const App = () => <>
  <RcCalendar />
  <RcClass />
</>

export default App

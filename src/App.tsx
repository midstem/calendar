import Calendar from './features/Calendar'

import './styles/index.css'
import './styles/font.css'

const App = (): JSX.Element => {
  return (
    <div className="paper">
      <Calendar
        onClickCell={console.log}
        onClickEvent={console.log}
        selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
      />
    </div>
  )
}

export default App

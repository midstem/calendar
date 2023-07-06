// import './styles/index.css'
// import Chronous from './Chronous'

// export default Chronous

import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Chronous from './Chronous'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="paper">
    <Chronous
      mode="Week"
      config={[{ maxWidth: 850, mode: 'Week' }]}
      onClickCell={console.log}
      onClickEvent={console.log}
      selectedEvent="98f6c30c-a95e-4794-b2ee-5c0143cbe0b5"
      eventModal={() => <button>ddddd</button>}
      newEventModal={() => <button>rrrrrr</button>}
    />
  </div>,
)

import ReactDOM from 'react-dom'
import { ReactPortal } from 'react'

import { useModal } from './useModal'

const Modal = (): ReactPortal | null => {
  const {
    calendarElement,
    getIndentLeft,
    showModal,
    indentTop,
    ref,
    modalWidth,
    modal,
  } = useModal()

  return (
    calendarElement &&
    ReactDOM.createPortal(
      <div
        ref={ref}
        className="modal"
        onClick={e => e.stopPropagation()}
        style={{
          position: 'fixed',
          top: indentTop,
          left: getIndentLeft(),
          zIndex: 10,
          display: showModal ? 'block' : 'none',
          opacity: modalWidth ? 1 : 0,
        }}
      >
        {modal}
      </div>,
      calendarElement,
    )
  )
}

export default Modal

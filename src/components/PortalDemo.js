import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            qwett
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo

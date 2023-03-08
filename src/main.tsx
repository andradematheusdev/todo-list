import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TaskContext } from './contexts/TaskContext'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskContext>
      <App />
    </TaskContext>
  </React.StrictMode>,
)

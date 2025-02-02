import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JsonPlaceholder from "./JsonPlaceholder.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JsonPlaceholder />
  </StrictMode>,
)

import { RouterProvider } from 'react-router-dom'
import routes from './routes/AppRouter'

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App

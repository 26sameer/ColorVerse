import Converter from './components/Generator'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <h1>⚡ColorWiz</h1>
      <Converter />
    </QueryClientProvider>
  )
}

export default App

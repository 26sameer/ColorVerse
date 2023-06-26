import Generator from './components/Generator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <Generator />
      </div>
    </QueryClientProvider>
  );
}

export default App;

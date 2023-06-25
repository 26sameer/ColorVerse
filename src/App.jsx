import Generator from './components/Generator';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <h1 className="main-heading">
          The Color<span className="main-heading-span">Verse</span>
        </h1>
        <Generator />
      </div>
    </QueryClientProvider>
  );
}

export default App;

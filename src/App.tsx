import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigForm, Footer, Header, SimuationPlots } from './components';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="main p-4">
        <div className="container mx-auto grid flex-1 grid-cols-1 gap-4 md:grid-cols-12">
          <ConfigForm />
          <SimuationPlots />
        </div>
      </main>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

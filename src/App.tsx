import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigForm, Footer, Header, SimuationPlots } from './components';

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="main container mx-auto p-4">
        <div className="my-10 text-center">
          <h1 className="my-8 text-5xl tracking-tighter">
            Plan Your EV Charging Setup Smartly
          </h1>
          <p className="mx-auto max-w-3xl">
            Simulate energy consumption, peak power demand, and charging events
            to optimize your charge point installation. Adjust parameters and
            visualize the impact effortlessly. 🚗⚡📊
          </p>
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-12">
          <ConfigForm />
          <SimuationPlots />
        </div>
      </main>
      <Footer />
    </QueryClientProvider>
  );
};

export default App;

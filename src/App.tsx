import { ConfigForm, Footer, Header, SimuationPlots } from './components';

const App = () => {
  return (
    <>
      <Header />
      <main className="main bg-gray-200 p-4">
        <div className="container mx-auto grid flex-1 grid-cols-1 gap-4 p-4 md:grid-cols-12">
          <ConfigForm />
          <SimuationPlots />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

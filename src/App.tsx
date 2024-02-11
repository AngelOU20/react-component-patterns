import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { Loader } from './components/Loader';

function App(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;

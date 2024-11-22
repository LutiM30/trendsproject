import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const errorHandler = (error) => {
      console.error('Uncaught error:', error);
      setHasError(true);
      setError(error);
    };

    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  if (hasError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <pre>{error.toString()}</pre>
      </div>
    );
  }

  return children;
}

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;

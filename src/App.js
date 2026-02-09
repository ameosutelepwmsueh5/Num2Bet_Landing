import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { store } from "store";
import "./App.css";

// Lazy load the landing page for better initial load performance
const LandingPage = lazy(() => import("views/Landing/Landing"));

// Loading fallback
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    backgroundColor: '#ffffff'
  }}>
    <div style={{ 
      width: '50px', 
      height: '50px', 
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #00d4ff',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Suspense fallback={<LoadingFallback />}>
                <LandingPage />
              </Suspense>
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;

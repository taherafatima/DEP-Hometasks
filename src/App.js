import RouterExample from './RouterExample';
import ErrorBoundary from './components/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <RouterExample/>
      </ErrorBoundary>  
    </div>
  );
}

export default App;

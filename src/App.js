import { AuthProvider } from './context/AuthContext';
import useAppEffects from './hooks/useAppEffects';
import { Navigation } from './routes';

function App() {
  useAppEffects();

  return (
    <AuthProvider>
      <Navigation />
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
    </AuthProvider>
  );
}

export default App;

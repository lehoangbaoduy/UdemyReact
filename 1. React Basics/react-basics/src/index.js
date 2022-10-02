import ReactDOM from 'react-dom/client';

import './index.css';

// App is a component
import App from './App';

// createRoot(): creates main entry point, the main hook of the overall user interface
// it tells where React application should be placed in the web page it is loaded
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

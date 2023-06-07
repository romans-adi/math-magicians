import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const linkHome = {
    color: 'orange',
    fontWeight: 'bold',
  };
  return (
    <div id="not-found">
      <div className="not-found-message">
        <h1>Error 404: Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <p>
          Go back to
          {' '}
          <Link style={linkHome} to="/">Home</Link>
          {' '}
          page
        </p>
      </div>
    </div>
  );
};

export default NotFound;

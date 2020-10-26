import {useEffect, useState} from 'react';


const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = (event) => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []); // only once

  return window.location.pathname === path ? children : null;
};

export default Route;
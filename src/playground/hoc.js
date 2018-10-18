// Hogher order component (HOC) - A component that renders another component
// Reuse code
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info </h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is Private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="these are the details" />,
  document.getElementById('app')
);

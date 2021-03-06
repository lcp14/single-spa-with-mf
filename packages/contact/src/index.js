import Contact from './Contact';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact, {SingleSpaContext} from 'single-spa-react';


const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Contact,
    errorBoundary(err, info, props) {
      // https://reactjs.org/docs/error-boundaries.html
      return (
        <div>This renders when a catastrophic error occurs</div>
      );
    },
  });

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;

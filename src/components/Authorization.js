/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';

import Router from 'next/router';
import { shouldHaveAuth, shouldNotHaveAuth } from '../utils/Authentication';

export default function withAuthorization(WrappedComponent, mustLogged = true) {
  const OuterComponent = ({ ...props }) => {
    const syncLogout = (event) => {
      if (mustLogged && event.key === 'logout') {
        Router.push('/login');
      }
      if (!mustLogged && event.key === 'login') {
        Router.push('/');
      }
    };
    useEffect(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  OuterComponent.getInitialProps = async (ctx) => {
    if (mustLogged) {
      const token = shouldHaveAuth(ctx);
      return { token };
    }

    const token = shouldNotHaveAuth(ctx);

    const componentProps = WrappedComponent.getInitialProps
            && (await WrappedComponent.getInitialProps(ctx));
    return {
      token,
      ...componentProps,
    };
  };
  return OuterComponent;
}

// const getDisplayName = Component =>
//   Component.displayName || Component.name || 'Component'

// export const withAuthorizations = (WrappedComponent, mustLogged) =>
//   class extends Component {
//     static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

//     static async getInitialProps (ctx) {

//      console.log("==mustLogged==", mustLogged)
//       const token = shouldHaveAuth(ctx)

//       const componentProps =
//         WrappedComponent.getInitialProps &&
//         (await WrappedComponent.getInitialProps(ctx))

//       return { ...componentProps, token }
//     }

//     // New: We bind our methods
//     constructor (props) {
//       super(props)

//       this.syncLogout = this.syncLogout.bind(this)
//     }

//     // New: Add event listener when a restricted Page Component mounts
//     componentDidMount () {
//       window.addEventListener('storage', this.syncLogout)
//     }

//     // New: Remove event listener when the Component unmount and
//     // delete all data
//     componentWillUnmount () {
//       window.removeEventListener('storage', this.syncLogout)
//       window.localStorage.removeItem('logout')
//     }

//     // New: Method to redirect the user when the event is called
//     syncLogout (event) {
//       if (event.key === 'logout') {
//         Router.push('/login')
//       }
//     }

//     render () {
//       console.log("============================")
//       return <WrappedComponent {...this.props} />
//     }
// }


// export const withOutAuth = (WrappedComponent =>
//   class extends Component {
//     static displayName = `withAuth(${getDisplayName(WrappedComponent)})`;

//     static async getInitialProps (ctx) {
//       const token = noAuth(ctx)

//       const componentProps =
//         WrappedComponent.getInitialProps &&
//         (await WrappedComponent.getInitialProps(ctx))

//       return { ...componentProps, token }
//     }

//     // New: We bind our methods
//     constructor (props) {
//       super(props)
//     }

//     render () {
//       return <WrappedComponent {...this.props} />
//     }
// }

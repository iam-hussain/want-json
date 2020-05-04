import Router from 'next/router';
import nextCookie from 'next-cookies';

// export default function auth(ctx) {
//   const { token } = nextCookie(ctx);

//   if (ctx.req && !token) {
//     ctx.res.writeHead(302, { Location: '/login' });
//     ctx.res.end();
//     return;
//   }

//   if (!token) {
//     Router.push('/login');
//   }
//   return token;
// };

export const auth = (ctx) => {
  const { token } = nextCookie(ctx);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return null;
  }

  if (!token) {
    Router.push('/login');
  }

  return token;
};


export const noAuth = (ctx) => {
  const { token } = nextCookie(ctx);

  if (ctx.req && token) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return null;
  }

  if (token) {
    Router.push('/');
  }

  return token;
};

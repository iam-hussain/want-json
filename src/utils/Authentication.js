import Router from 'next/router';
import nextCookie from 'next-cookies';

export const shouldHaveAuth = (ctx) => {
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

export const shouldNotHaveAuth = (ctx) => {
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

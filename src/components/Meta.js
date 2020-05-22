import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const stdMeta = {
  title: 'getJSON.io | Free online custom REST API for development and testing',
  description: 'Create a custom API in some seconds with GET, POST, PUT, DELETE methods, With static and dynamic API every developer and tester can do CURD (Create, Update, Read, Delete) operations.',
  site_name: 'getJSON.io',
  creator: 'ZaHuPro@GitHub',
  'image-1200x630': `${process.env.APP_URL}/static/metaImg-1200x630.png`,
  'image-600x314': `${process.env.APP_URL}/static/metaImg-600x314.png`,
  'image-180x110': `${process.env.APP_URL}/static/metaImg-180x100.png`,
};

const pathMetaData = {
  index: {
    title: 'getJSON.io | Free online custom REST API for development and testing',
  },
  dashboard: {
    payload: {
      index: {
        title: 'My Payloads | getJSON.io',
      },
      create: {
        title: 'New Payload | getJSON.io',
      },
      edit: {
        title: 'Edit Payload | getJSON.io',
      },
      view: {
        title: 'View My Payload | getJSON.io',
      },
    },
    settings: {
      index: {
        title: 'My Settings | getJSON.io',
      },
      change_password: {
        title: 'Change Password | getJSON.io',
      },
      deleted: {
        title: 'Deleted Payloads | getJSON.io',
      },
    },
    profile: {
      title: 'My Profile | getJSON.io',
    },
  },
  view: {
    title: 'View Payload | getJSON.io',
  },
  contact_us: {
    title: 'Contact Us | getJSON.io',
  },
  documentation: {
    title: 'Documentation | getJSON.io',
  },
  email_verify: {
    title: 'Email Verify | getJSON.io',
  },
  explore: {
    title: 'Explore Payloads | getJSON.io',
  },
  login: {
    title: 'Login | getJSON.io',
  },
  register: {
    title: 'Register | getJSON.io',
  },
  reset_password: {
    title: 'Reset password | getJSON.io',
  },
};

export default function Meta() {
  const router = useRouter();
  const [metaData, setMetaData] = useState({ ...stdMeta });
  useEffect(() => {
    if (router.pathname === '/dashboard/payload') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.payload.index });
    } else if (router.pathname === '/dashboard/payload/create') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.payload.create });
    } else if (router.pathname.match('/dashboard/payload/edit')) {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.payload.edit });
    } else if (router.pathname.match('/dashboard/payload/view')) {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.payload.view });
    } else if (router.pathname === '/dashboard/settings') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.settings.index });
    } else if (router.pathname === '/dashboard/settings/deleted') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.settings.deleted });
    } else if (router.pathname === '/dashboard/settings/change_password') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.settings.change_password });
    } else if (router.pathname === '/dashboard/profile') {
      setMetaData({ ...stdMeta, ...pathMetaData.dashboard.profile });
    } else if (router.pathname.match('/view')) {
      setMetaData({ ...stdMeta, ...pathMetaData.view });
    } else if (router.pathname === '/email_verify') {
      setMetaData({ ...stdMeta, ...pathMetaData.email_verify });
    } else if (router.pathname === '/contact_us') {
      setMetaData({ ...stdMeta, ...pathMetaData.contact_us });
    } else if (router.pathname === '/documentation') {
      setMetaData({ ...stdMeta, ...pathMetaData.documentation });
    } else if (router.pathname === '/explore') {
      setMetaData({ ...stdMeta, ...pathMetaData.explore });
    } else if (router.pathname === '/login') {
      setMetaData({ ...stdMeta, ...pathMetaData.login });
    } else if (router.pathname === '/register') {
      setMetaData({ ...stdMeta, ...pathMetaData.register });
    } else if (router.pathname === '/reset_password') {
      setMetaData({ ...stdMeta, ...pathMetaData.reset_password });
    } else {
      setMetaData({ ...stdMeta });
    }
  }, [router.pathname]);
  return (
    <Head>
      <title>{metaData.title}</title>
    </Head>
  );
}

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const stdMeta = {
  title: 'wantJSON | Free online custom REST API for development and testing',
  description: 'wantJSON.com provide you the service to create Rest APIs on the go for all practical and impractical purposes. We address our APIs as “Payload” since you can load it with as much data as you need!',
  site_name: 'wantJSON.com',
  creator: 'ZaHuPro@GitHub',
  'image-1200x630': `${process.env.APP_URL}/static/metaImg-1200x630.png`,
  'image-600x314': `${process.env.APP_URL}/static/metaImg-600x314.png`,
  'image-180x110': `${process.env.APP_URL}/static/metaImg-180x100.png`,
};

const pathMetaData = {
  index: {
    title: 'wantJSON | Free online custom REST API for development and testing',
  },
  dashboard: {
    payload: {
      index: {
        title: 'My Payloads | wantJSON',
      },
      create: {
        title: 'New Payload | wantJSON',
      },
      edit: {
        title: 'Edit Payload | wantJSON',
      },
      view: {
        title: 'View My Payload | wantJSON',
      },
    },
    settings: {
      index: {
        title: 'My Settings | wantJSON',
      },
      change_password: {
        title: 'Change Password | wantJSON',
      },
      deleted: {
        title: 'Deleted Payloads | wantJSON',
      },
    },
    profile: {
      title: 'My Profile | wantJSON',
    },
  },
  view: {
    title: 'View Payload | wantJSON',
  },
  contact_us: {
    title: 'Contact Us | wantJSON',
  },
  documentation: {
    title: 'Documentation | wantJSON',
  },
  email_verify: {
    title: 'Verify your Email | wantJSON',
  },
  explore: {
    title: 'Explore Payloads | wantJSON',
  },
  login: {
    title: 'Already a member? | Login | wantJSON',
  },
  register: {
    title: 'Register with us | wantJSON',
  },
  reset_password: {
    title: 'Forgotten Password | wantJSON',
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

import React, { Suspense } from 'react';
import { Spin } from 'antd';
const lazyLoad = (Comp) => (
  <Suspense
    fallback={
      <Spin
        size="large"
        stlye={{
          display: 'grid',
          placeItems: 'center',
        }}
      />
    }>
    <Comp />
  </Suspense>
);
export default [
  {
    path: '/',
    element: lazyLoad(React.lazy(() => import('../Layout'))),
  },
  {
    path: '/login',
    element: lazyLoad(React.lazy(() => import('../pages/User/Login'))),
  },
];

'use client';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';
// Import Framework7-React and components
import Framework7React, { App, View } from 'framework7-react';
// Next navigation (App Router)
import { usePathname } from 'next/navigation';

// Import icons and styles
import 'framework7/css/bundle';
import 'framework7-icons/css/framework7-icons.css';
import 'material-icons/iconfont/material-icons.css';

// Install Framework7 React plugin for Framework7
// eslint-disable-next-line react-hooks/rules-of-hooks
Framework7.use(Framework7React);

const routes = [
  {
    path: '/',
    asyncComponent: () => import('./page'),
  },
  {
    path: '/popup',
    asyncComponent: () => import('./popup/page'),
  },
  {
    path: '/swipeable-tabs',
    asyncComponent: () => import('./swipeable-tabs/page'),
  },
  {
    path: '/swipeable-segmented',
    asyncComponent: () => import('./swipeable-segmented/page'),
  },
];

export default function F7Provider({
  children,
}: {
  children: React.ReactNode;
}) {
  // current Next.js pathname
  const pathname = usePathname();
  /*
    Here we need to know (mostly on server-side) on what URL user opens our app
  */
  const url = `${process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'}${pathname}`;

  return (
    <App url={url} routes={routes}>
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryInitialMatch={true}
        browserHistoryStoreHistory={false}
        url={pathname || '/'}
      >
        {/* Initial Framework7 Page */}
        {children}
      </View>
    </App>
  );
}
'use client';

import dynamic from 'next/dynamic';
import { Navbar, Page, Block, Tabs, Tab, Segmented, Button } from 'framework7-react';

// docs:
//  - https://framework7.io/react/tabs#swipeable-tabs
//  - https://framework7.io/react/segmented

function SwipeableSegmentedPage() {
  return (
    <Page pageContent={false}>
      <Navbar title="Swipeable Tabs"></Navbar>
      <Block strong className='mt-16'>
        <Segmented strong>
          <Button tabLink="#tab-1" tabLinkActive>
            Tab 1
          </Button>
          <Button tabLink="#tab-2">Tab 2</Button>
          <Button tabLink="#tab-3">Tab 3</Button>
        </Segmented>
      </Block>
      <Tabs swipeable>
        <Tab id="tab-1" className="page-content" tabActive>
          <Block>
            <p>Tab 1 content</p>
          </Block>
        </Tab>
        <Tab id="tab-2" className="page-content">
          <Block>
            <p>Tab 2 content</p>
          </Block>
        </Tab>
        <Tab id="tab-3" className="page-content">
          <Block>
            <p>Tab 3 content</p>
          </Block>
        </Tab>
      </Tabs>
    </Page>
  );
}

export default dynamic(() => Promise.resolve(SwipeableSegmentedPage), { ssr: false });

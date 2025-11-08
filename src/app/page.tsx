'use client';

import dynamic from "next/dynamic";
import { Block, Button, Navbar, Page, PageContent } from "framework7-react";

function Home() {
  return (
    <Page pageContent={false}>
      <Navbar title="F7 tests"></Navbar>

      <PageContent>
        <Block className="flex flex-column gap-2">
          <Button href="/popup">Popup</Button>
          <Button href="/swipeable-tabs">Swipeable Tabs</Button>
          <Button href="/swipeable-segmented">Swipeable Segmented</Button>
        </Block>
      </PageContent>
    </Page>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
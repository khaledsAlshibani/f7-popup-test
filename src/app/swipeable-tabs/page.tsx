'use client';

import dynamic from 'next/dynamic';
import React, { useState, useRef, useEffect } from 'react';
import {
  Navbar,
  Page,
  Block,
  Tabs,
  Tab,
  Link,
  Toolbar,
  f7,
} from 'framework7-react';

const tabIds = ['tab-1', 'tab-2', 'tab-3',] as const;

// This code looks fine visually but on clicking tabs it causes side effects as both react state and F7 internal swiper manage active states. logs show on click:
/*** console logs:
[SwipeableTabs] swiper slideChange triggered: 0
[SwipeableTabs] tab click handler fired: 0
[SwipeableTabs] swiper slideTo called: 0
[SwipeableTabs] swiper slideChange triggered: 0
[SwipeableTabs] F7 tab show called: tab-1 
*****************/
// This proves both swiper and F7 trigger updates on each click, making activeIndex change twice and causing duplicate renders and overlapping animations

function SwipeableTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef<{ el: HTMLElement | null }>({ el: null });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const el = tabsRef.current?.el;
    if (!el) {
      return;
    }

    const init = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const swiper = (el as any).swiper;
      if (!swiper) {
        requestAnimationFrame(init);
        return;
      }

      swiperRef.current = swiper;

      swiper.on('slideChange', () => {
        console.log('[SwipeableTabs] swiper slideChange triggered:', swiper.activeIndex);
        setActiveIndex(swiper.activeIndex);
      });

      console.log('[SwipeableTabs] swiper initialized with activeIndex:', swiper.activeIndex);

      setActiveIndex(swiper.activeIndex);
    };

    requestAnimationFrame(init);

    return () => {
      swiperRef.current?.off?.('slideChange');
    };
  }, []);

  const handleTabClick = (index: number) => {
    console.log('[SwipeableTabs] tab click handler fired:', index);
    if (swiperRef.current) {
      console.log('[SwipeableTabs] swiper slideTo called:', index);
      swiperRef.current.slideTo(index);
    }
    setActiveIndex(index);
    console.log('[SwipeableTabs] F7 tab show called:', tabIds[index]);
    f7.tab.show(`#${tabIds[index]}`, true);
  };

  return (
    <Page pageContent={false}>
      <Navbar title="Swipeable Tabs" />
      <Toolbar bottom tabbar>
        {tabIds.map((tabId, i) => (
          <Link
            key={tabId}
            tabLink={`#${tabId}`}
            className={activeIndex === i ? 'tab-link-active' : ''}
            onClick={() => handleTabClick(i)}
          >
            Tab {i + 1}
          </Link>
        ))}
      </Toolbar>

      <Tabs swipeable ref={tabsRef}>
        {tabIds.map((tabId, i) => (
          <Tab
            key={tabId}
            id={tabId}
            className="page-content"
          >
            <Block>
              <p className='p-20 bg-gray-300'>Tab content {i + 1}</p>
            </Block>
          </Tab>
        ))}
      </Tabs>
    </Page>
  );
}

export default dynamic(() => Promise.resolve(SwipeableTabs), { ssr: false });
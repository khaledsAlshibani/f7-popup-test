'use client';

import { Link, Navbar, NavRight, Page, Popup } from "framework7-react";

// docs: https://framework7.io/react/popup

export default function PopupPage() {
  return (
    <Popup className="demo-popup-swipe" swipeToClose opened>
      <Page>
        <Navbar title="Swipe To Close">
          <NavRight>
            <Link popupClose>Close</Link>
          </NavRight>
        </Navbar>

        <div
          style={{ height: '100%' }}
          className="display-flex justify-content-center align-items-center"
        >
          <p>Swipe me up or down</p>
        </div>
      </Page>
    </Popup>
  );
}

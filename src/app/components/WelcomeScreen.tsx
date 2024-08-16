"use client";

import React from "react";
import Logo from "./Logo";

const ONE_DAY = 24 * 60 * 60 * 1000;

export type WelcomeScreenProps = { dismissed?: boolean };

export default function WelcomeScreen(props: WelcomeScreenProps) {
  const [dismissed, setDismissed] = React.useState(props.dismissed);

  if (dismissed) {
    return null;
  }

  const dismiss = () => {
    const expireDate = new Date(Date.now() + ONE_DAY);
    const expires = "expires=" + expireDate.toUTCString();
    document.cookie = `welcome-dismissed=true;${expires};path=/`;
    setDismissed(true);
  };

  return (
    <div className="text-white sm:hidden z-20 fixed inset-0 px-6 py-10 bg-green">
      <div className="flex flex-col h-full content-between justify-between">
        <Logo className="invert" />
        <div>
          <div className="huge mb-4">
            Treat
            <br />
            yourself.
          </div>
          <div className="title">
            Find the best restaurants in your city
            <br />
            and get it delivered to your place!
          </div>
        </div>
        <div className="w-full">
          <div
            onClick={dismiss}
            className="hover:scale-110 transition-all mx-auto text-base font-bold text-center w-80 h-14 shadow-2xl border-white border bg-green rounded-lg"
            role="button"
          >
            <div className="mt-4">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

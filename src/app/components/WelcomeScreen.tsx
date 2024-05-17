"use client";

import React from "react";
import Logo from "./Logo";

export default function WelcomeScreen() {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="text-white sm:hidden z-20 fixed inset-0 px-6 py-10 bg-green">
      <div className="flex flex-col h-full content-between justify-between">
        <Logo className="invert" />
        <div>
          <div className="very-big mb-4">
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
            onClick={() => setDismissed(true)}
            className="mx-auto text-base font-bold text-center w-80 h-14 hover:shadow-2xl border-white border bg-green rounded-lg"
            role="button"
          >
            <div className="mt-4">Continue</div>
          </div>
        </div>
      </div>
    </div>
  );
}

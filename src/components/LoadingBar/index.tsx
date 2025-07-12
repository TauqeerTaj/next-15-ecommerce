"use client";
import React, { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

export default function LoadingComponent() {
  const loadingBarRef = useRef<LoadingBarRef>(null);
  useEffect(() => {
    loadingBarRef.current?.continuousStart();
  }, []);
  return (
    <div className="App fixed inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-50 font-bold">
      <LoadingBar ref={loadingBarRef} height={5} color="#4BB543" />
    </div>
  );
}

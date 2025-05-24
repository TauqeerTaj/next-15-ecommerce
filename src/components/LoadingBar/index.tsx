import React, { useEffect, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

export default function LoadingComponent() {
  const loadingBarRef = useRef<LoadingBarRef>(null);
  useEffect(() => {
    loadingBarRef.current?.continuousStart();
  }, []);

  return (
    <div className="App">
      <LoadingBar ref={loadingBarRef} height={5} color="#4BB543" />
    </div>
  );
}

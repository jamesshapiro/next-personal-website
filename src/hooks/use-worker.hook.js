/*
  Spawns and terminates a Web Worker.
*/
import React from 'react';
const useWorker = (WorkerConstructor) => {
  // In SSR mode, just return a dummy object

  // Create a worker. This will be a long-lived worker, we use for all drawing.
  const worker = React.useRef(null);
  if (worker.current === null) {
    worker.current = new WorkerConstructor();
  }
  React.useEffect(() => {
    return () => {
      if (worker.current) {
        worker.current.terminate();
      }
    };
  }, []);
  if (typeof window === 'undefined') {
    return {};
  }
  return worker.current;
};
export default useWorker;

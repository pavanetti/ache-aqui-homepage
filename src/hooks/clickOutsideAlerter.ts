import { RefObject, useEffect } from "react";

function useClickOutsideAlerter(ref: RefObject<HTMLInputElement>, callback: (event: MouseEvent) => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick)
  }, [ref, callback])
}

export default useClickOutsideAlerter

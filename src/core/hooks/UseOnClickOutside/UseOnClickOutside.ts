import { useEffect, RefObject } from "react";

export const useOnClickOutside = (ref: RefObject<HTMLElement>, handler: Function) => {
  useEffect(
    () => {
      const listener = (event: Event) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          return;
        }
        return handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    [ref, handler]
  );
}
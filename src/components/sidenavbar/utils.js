import { useEffect } from 'react';

export const useOnClickOutsideMenu = (ref, handler) => {
    useEffect(() => {
        const listener = e => {
            if(!ref.current || ref.current.contains(e.target)){
                return;
            }
            handler(e);
        }
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        }
    })
};

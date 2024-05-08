import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(
        window.matchMedia(query).matches
    );
    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        function handleResize(event: MediaQueryListEvent): void {
            setMatches(event.matches);
        }

        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, [query]);
    return matches;
}

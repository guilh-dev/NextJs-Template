import { usePathname } from 'next/navigation';

/**
 * Helper to check whether a route is active.
 * Accepts exact or partial matches (for sub-routes).
 */
export const useActivePath = () => {
  const pathname = usePathname();

  const isActive = (path: string, exact = false): boolean => {
    if (exact) {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return isActive;
};
import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';

export const pathnames = {
  '/': '/',
  '/about': {
    pt: '/sobre',
    en: '/about'
  }
} as const;

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);


import { navItemsType } from "@/types/types";




export const navbarItemsAll: navItemsType[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Jobs',
    url: '/jobs',
  },
  {
    title: 'Workers',
    url: '/workers',
  },
  {
    title: 'About Us',
    url: '/about-us',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  },
];

export const navbarItemsEmployer: navItemsType[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Find A Worker',
    url: '/workers',
  },
  {
    title: 'About Us',
    url: '/about-us',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  },
];

export const navbarItemsWorker: navItemsType[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Find A Job',
    url: '/jobs',
  },
  {
    title: 'About Us',
    url: '/about-us',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  },
];

// employer menus
export const employerMenus: navItemsType[] = [
  {
    title: 'Profile',
    url: '/employer/profile',
  },
  {
    title: 'Posted Jobs',
    url: '/employer/posted-jobs?type=posted-job',
  },
  {
    title: 'My Bookings',
    url: '/employer/posted-jobs?type=booking-list',
  },
  {
    title: 'Inbox',
    url: '/inbox',
  },
  {
    title: 'Subscription',
    url: '/subscription',
  },
  {
    title: 'Logout',
    url: '/login',
  },
];

// worker menus
export const workerMenus: navItemsType[] = [
  {
    title: 'Profile',
    url: '/worker/profile',
  },
  {
    title: 'Applied Jobs',
    url: '/worker/applied-jobs?type=my-applied-list',
  },
  {
    title: 'My Offers',
    url: '/worker/applied-jobs?type=my-offers-list',
  },
  {
    title: 'Inbox',
    url: '/inbox',
  },
  {
    title: 'Logout',
    url: '/login',
  },
];
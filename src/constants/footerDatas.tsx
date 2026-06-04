
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
// import { LuPhoneCall } from "react-icons/lu";


export const quickLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About us',
    url: '/about-us',
  },
  {
    title: 'Contact us',
    url: '/contact-us',
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions"
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy"
  },
];

export const contactInfo = [
  {
    title: "admin@instantlabour.co.uk",
    icon: <FiMail />
  },
];

export const followUs = [
  {
    icon: <SlSocialFacebook />,
    url: "https://www.facebook.com/share/18aDTGKxxs"
  },
  {
    icon: <SlSocialInstagram />,
    url: "https://www.instagram.com/instantlabour?igsh=MW40dGVrNjdsbWoyYw"
  },
  {
    icon: <PiTiktokLogoThin />,
    url: "https://www.tiktok.com/@instantlabour?_r=1&_t=ZN-961NO8GiCNW"
  },
]
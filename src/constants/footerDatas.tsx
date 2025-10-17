
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

export const contactInfo= [
  {
    title: "shamimnadir@example.com",
    icon: <FiMail/>
  },
];

export const followUs = [
  {
    icon: <SlSocialFacebook/>,
    url: "https://www.facebook.com/share/19b3DdSvMx/?mibextid=wwXIfr"
  },
  {
    icon: <SlSocialInstagram/>,
    url: "https://www.instagram.com/thesocialchance?igsh=cW15MXhwZ21sOHFu&utm_source=qr"
  },
  {
    icon: <PiTiktokLogoThin />,
    url: "https://www.tiktok.com/@thesocialchance?_t=ZN-8yWcc2oq9LS&_r=1"
  },
]
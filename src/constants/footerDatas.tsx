
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";


export const quickLinks = [
  {
    title: "About Us",
    url: "/about-us"
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
    title: "+2123 654 7898",
    icon: <LuPhoneCall size={20} />
  },
  {
    title: "shamimnadir@example.com",
    icon: <FiMail size={20} />
  },
  {
    title: "Company Address",
    icon: <GrLocation size={20} />
  },
];

export const followUs = [
  {
    icon: <SlSocialFacebook size={20} />,
    url: "https://www.facebook.com/share/19b3DdSvMx/?mibextid=wwXIfr"
  },
  {
    icon: <SlSocialInstagram size={20} />,
    url: "https://www.instagram.com/thesocialchance?igsh=cW15MXhwZ21sOHFu&utm_source=qr"
  },
  {
    icon: <PiTiktokLogoThin size={20} />,
    url: "https://www.tiktok.com/@thesocialchance?_t=ZN-8yWcc2oq9LS&_r=1"
  },
]
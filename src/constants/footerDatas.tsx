
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoThin } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
// import { LuPhoneCall } from "react-icons/lu";


export const quickLinks = [
  {
    title: "Subscription",
    url: "/subscription"
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
  // {
  //   title: "+2123 654 7898",
  //   icon: <LuPhoneCall />
  // },
  {
    title: "shamimnadir@example.com",
    icon: <FiMail/>
  },
  // {
  //   title: "Company Address",
  //   icon: <GrLocation/>
  // },
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
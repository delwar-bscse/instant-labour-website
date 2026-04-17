//Navbar data types
export type navItemsType = {
  title: string;
  url: string;
};

export const EUserRole: { [key: string]: string } = {
  EMPLOYER: "employer",
  WORKER: "worker"
}

export const sectionTypeEnum = {
  HERO: "hero",
  HOW_IT_WORKS: "how-it-works",
  HOW_IT_WORKS_WORKER: "how-it-works-worker",
  WHY_US: "why-us",

  ABOUT_HERO: "about-hero",
  WHO_WE_ARE: "who-we-are",
  OUR_MISSION: "our-mission",
  OUR_VISION: "our-vision",
  WHERE_WE_OPERATE: "where-we-operate",
  ABOUT_WHY_US: "about-why-us",

  CONTACT_US: "contact-us",

  JOB_RESPONSE: "job-response",

  CUSTOM: "custom",
}

export const updateUserObject = {
  body: {
    name: undefined,
    phone: undefined,
    address: undefined,
    profile: undefined,
    cover: undefined,
    image: [],

    // Worker fields
    category: undefined,
    subCategory: undefined,
    availability: [], // values from AVAILABILITY enum

    salaryType: undefined, // value from SALARY_TYPE enum

    salary: undefined,
    about: undefined,
    workOverview: undefined,
    coreSkills: [],
    yearsOfExperience: undefined,
    workExperiences: [
      // objects matching workExperienceZodSchema
    ],

    // Employer fields
    nid: undefined,
    nidFront: undefined,
    nidBack: undefined,
    isAccountVerified: undefined,

    // Location
    location: {
      type: 'Point',
      coordinates: [0, 0], // [lng, lat]
    },

    appId: undefined,
    deviceToken: undefined,

    rating: undefined,
    reviewCount: undefined,
  },
};
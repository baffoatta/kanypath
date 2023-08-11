import { 
    facebook, instagram, linkedin, twitter,
       } from '../assets/AssetsIndex'
  
  export const navLinks = [
      {
          id: "home", // default page is home, so no need to specify it here.
          title: "Home",
          url: '/home',
      },
      {
        id: "about",
        title: "About",
        path: '/about-us'
      },
      {
        id: "blog",
        title: "blog",
        path : '/blog'
      },
      {
          id: "forEmployers",
          title: "For Employers",
          path : '/for-employers'
      },
      {
          id: "forWorkers",
          title: "For Workers",
          path : '/for-workers'
      },
      {
        id: "contact",
        title: "Contact",
        path : '/contact'
      },
    ];
    export const footerLinks = [
      {
        title: "Useful Links",
        links: [
          {
            name: "Content",
            link: "/content/",
          },
          {
            name: "How it Works",
            link: "/how-it-works/",
          },
          {
            name: "Create",
            link: "/create/",
          },
          {
            name: "Explore",
            link: "/explore/",
          },
          {
            name: "Terms & Services", 
            link: "/terms-and-services/",
          },
        ],
      },
      {
        title: "Community",
        links: [
          {
            name: "Help Center",
            link: "/help-center/",
          },
          {
            name: "Partners",
            link: "/partners/",
          },
          {
            name: "Suggestions",
            link: "/suggestions/",
          },
          {
            name: "Blog",
            link: "/blog/",
          },
          
        ],
      },
      {
        title: "Partner",
        links: [
          {
            name: "Our Partner",
            link: "/our-partner/",
          },
          {
            name: "Become a Partner",
            link: "/become-a-partner/",
          },
        ],
      },
    ];
    
    export const socialMedia = [
      {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
    ];
    
    export const steps = [
      {
        icon: 'fa fa-phone',
        title: 'step 1. get in touch',
        text: 'Get in touch to discuss how AGRI-HR can help your business to gain great people to harvest your crop and pack your produce efficiently.',
        imageSrc: 'https://example.com/image1.png'
      },
      // Additional steps can be added here
    ];
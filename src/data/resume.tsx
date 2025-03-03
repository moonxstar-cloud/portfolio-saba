import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saba Rafaqat",
  initials: "SR",
  url: "https://avatars.githubusercontent.com/u/178190699?v=4",
  location: "Lahore, Punjab",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Software developer who loves to build application that solves real world problems",
  summary:"I am a passionate Frontend Developer with expertise in React.js, Next.js, and modern UI frameworks. I specialize in building responsive, user-friendly, and high-performance web applications using JavaScript (ES6+), TypeScript, Tailwind CSS, and Redux. With a keen eye for design and a strong understanding of UI/UX principles, I focus on creating seamless user experiences. I am always eager to learn new technologies, optimize performance, and contribute to innovative projects. Let's build something amazing together! 🚀",
  avatarUrl: "https://avatars.githubusercontent.com/u/178190699?v=4",
  skills: [
    "React.js",
    "Javascript",
    "Node.js",
    "Express",
    "Restfull api",
    "python",
    "JWT",
    "CSS",
    "Modern UI",
    "Responsive Design"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sabarafaqatali47@gmail.com",
    tel: "+923057350185",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/moonxstar-cloud",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saba-noor-71317334b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "sabarafaqatali47@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bytewise Limited",
      href: "",
      badges: [],
      location: "Remote",
      title: "Intern Front-End Engineer",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgXQvqcLj9qMwozUh5GydXQt8BqVJDdV-Iw&s",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Developed responsive and interactive React.js applications using Tailwind CSS and JavaScript. Built and optimized UI components to enhance user experience and accessibility. Integrated APIs and managed state using React hooks and context. Collaborated with mentors and team members to improve code quality and performance. Worked on real-world projects, implementing best practices in web development.",
    },
    {
      company: "JH Setters",
      href: "",
      badges: [],
      location: "Remote",
      title: "Chat Support ",
      logoUrl: "data:image/png;base64,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",
      start: "May 2021",
      end: "Oct 2022",
      description: "worked with the ContactOut sales team to identify potential customers on LinkedIn. I reached out to these prospects on behalf of the sales team, introduced ContactOut’s products and services, and arranged meetings of sales team members with interested leads using Calendly.",
    },
  ],
  education: [
    {
      school: "Army Public School",
      href: "",
      degree: "Matriculation",
      logoUrl: "data:image/png;base64,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",
      start: "Jan 2007",
      end: "Jan 2018",
    },
    {
      school: "Federal Government College",
      href: "",
      degree: "Fsc Pre-Engineering",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ5UI2d4Ku6kL8dK7SgoL1UU2ulYMtoWXGVA&s",
      start: " April 2018 ",
      end: "March 2020",
    },
    {
      school: "University of Okara",
      href: "https://www.uo.edu.pk/",
      degree: "Bachelor's Degree in Applied Mathematics",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/4/4e/University_of_the_Okara_Logo.jpg",
      start: "Dec 2020",
      end: "Jun 2024",
    },
  ],
  certification: [
    {
      school: "Meta Developers",
      href: "https://coursera.org/share/bc4140b25c71b9f79bb1f5c6ff73923e",
      degree: "Meta Front-End Developer",
      logoUrl: "https://cdn.pixabay.com/photo/2021/11/01/15/20/meta-logo-6760788_1280.png",
      start: "Jan 2007",
      end: "February 27, 2025",
    },
 
  ],
  ///////////////////////////////////
  projects: [
    {
      title: "Luma - Event Management Web Application",
      href: "https://luma-event-webapp.vercel.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed a full-stack event management platform with a modern UI using React.js & Tailwind CSS. Implemented user authentication (JWT) and event creation. Built a scalable backend API with Node.js, Express, and MongoDB (Mongoose) for event creation and management.",
      technologies: [
        "React.js",
        "Tailwind css",
        "Javascript",
        "TanStack Query",
        "JWT Auth",
        "Shadcn UI",
        "MongoDB ",
        "Moongose ",
      ],
      links: [
        {
          type: "Website",
          href: "https://luma-event-webapp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/moonxstar-cloud/event-management-application",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/481051238_122151026030366558_6736628261814155704_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=q3YV8N4y3xAQ7kNvgEEWVL7&_nc_oc=Adg6HVcwOJlbs5Qgqm8YecEBdHnMlDwhmMPk4i87v-smY34qgJwqr_SI_YoMk4NrZKA&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&_nc_gid=AJFqcedETGW2vw-P7XRRhPT&oh=00_AYB4f51ega9xRaKYNO0rVXOm0Y1RFxkMqzauX_D17PVCoA&oe=67C7D84B",

    },
    {
      title: "ChatBot - Upload Multi Format Docs and Start Chatting",
      href: "https://rag-docs-chat.vercel.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Built a chatbot that allows users to upload multi-format documents (DOCX, PDF, TXT, etc.) and chat with them.Integrated Grok API & LLM for context-aware document interaction.",
      technologies: [
        "React.js",
        "deepseek R1 api",
        "Pinecone Database",
        "TanStack Query",
        "TailwindCSS",
        "Shadcn UI",
        "RAG ",
        "Inference api ",
       
      ],
      links: [
        {
          type: "Website",
          href: "https://rag-docs-chat.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/481819445_122151032030366558_7959703588915331989_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6RfkNrqSomsQ7kNvgFP4hxg&_nc_oc=AdiI011SA7laaJpLMQ9xN1cc2QLAEIeBGdtYyafjITQvDyzkJ35taWzirq6Faae4ja0&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&_nc_gid=AmqxzeNRpHVCMegONFbxdYo&oh=00_AYALLBw7plNT04sfu1czHOut-ct9hgnxduaNtZ7DaKpu7w&oe=67C7F915",

    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React.js",
        "Mongoose",
        "Responsive",
        "TanStack Query",
        "TailwindCSS",
        "Shadcn UI",
        "Third-Party API",
        "Vercel",
        "JWT Authentication",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
   
      ],
      image: "https://foundr.ai//static/poster/llm-report.png",
   
    },
    {
      title: "Game Explorer - Browse and Save Games",
      href: "https://game-shop-rho-khaki.vercel.app/",
      dates: "2024 - Present",
      active: true,
      description:
        "Developed a game search platform that queries a massive 800,000+ game database via a third-party API. Implemented user authentication for saving games to favorites and wishlists. Optimized API calls for fast searches and efficient data management.",
      technologies: [
        "React.js",
        "Mongoose",
        "Responsive",
        "TanStack Query",
        "TailwindCSS",
        "Shadcn UI",
        "Third-Party API",
        "Vercel",
        "JWT Authentication",
      ],
      links: [
        {
          type: "Website",
          href: "https://game-shop-rho-khaki.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/moonxstar-cloud/GAME-RAWG",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://scontent.flhe7-1.fna.fbcdn.net/v/t39.30808-6/481080200_122151031580366558_6550577008011655738_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4Htc1NN6j4wQ7kNvgE2UgEJ&_nc_oc=AdgtkpSNs8o9hSz7CQ8SUtQP8mCAtUAHHP_SHfCOXoNc0VOIBcyxJpHJy0pgoau2NHk&_nc_zt=23&_nc_ht=scontent.flhe7-1.fna&_nc_gid=A-RWlJXMi24cafpT1cnKKnc&oh=00_AYAbXBE72lTJcTbu7-ihDCFC_Kfy-wt52P1QqBG6cWwGYA&oe=67C7E7FE",
      
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;

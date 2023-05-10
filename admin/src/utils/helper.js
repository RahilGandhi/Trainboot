import { v4 as uid } from "uuid";
import { IoHomeOutline } from "react-icons/io5";
import { FiMessageCircle, FiSettings } from "react-icons/fi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineBars } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { GrTasks } from "react-icons/gr";
import { TfiAnnouncement } from "react-icons/tfi";

export const navLinks = [
  {
    id: uid(),
    name: "home",
    href: "/",
  },
  {
    id: uid(),
    name: "about",
    href: "/about",
  },
  {
    id: uid(),
    name: "product",
    href: "/product",
  },

  {
    id: uid(),
    name: "contact",
    href: "/contact",
  },
];

export const heroSidebarLinks = [
  {
    id: uid(),
    name: "home",
    icon: <IoHomeOutline />,
    href: "/",
  },
  {
    id: uid(),
    name: "Training",
    icon: <AiOutlineBars />,
    href: "/add-new-training",
  },
  {
    id: uid(),
    name: "Announcement",
    icon: <FiMessageCircle />,
    href: "/create-announcement",
  },
  {
    id: uid(),
    name: "tasks",
    icon: <TfiHeadphoneAlt />,
    href: "/assign-task",
  },
  {
    id: uid(),
    name: "settings",
    icon: <FiSettings />,
    href: "#",
  },
];

export const FooterLinks = [
  {
    id: uid(),
    title: "Features",
    links: [
      {
        id: uid(),
        name: "Video Training",
        href: "#",
      },
      {
        id: uid(),
        name: "Employee Management",
        href: "#",
      },
      {
        id: uid(),
        name: "Training Supervision",
        href: "#",
      },
      {
        id: uid(),
        name: "Free Tier Services",
        href: "#",
      },
    ],
  },
  {
    id: uid(),
    title: "Information",
    links: [
      {
        id: uid(),
        name: "Organization",
        href: "#",
      },
      {
        id: uid(),
        name: "Employees",
        href: "#",
      },
      {
        id: uid(),
        name: "Documentation",
        href: "#",
      },
    ],
  },
  {
    id: uid(),
    title: "Company",
    links: [
      {
        id: uid(),
        name: "Careers",
        href: "#",
      },
      {
        id: uid(),
        name: "Security",
        href: "#",
      },
      {
        id: uid(),
        name: "Contact Us",
        href: "#",
      },
      {
        id: uid(),
        name: "Report an Issue",
        href: "#",
      },
    ],
  },
];

export const videoCards = [
  {
    id: "1",
    name: "Python for Beginners",
    instructor: "Mosh Hamedani",
    duration: "01:00:06",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/fe1a521f-a334-476f-9775-03ba2a38a129/thumbnail_fb35178e.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/fe1a521f-a334-476f-9775-03ba2a38a129?autoplay=false&muted=false",
    summary: `"Python For Beginners" by Mosh Hamedani is a comprehensive guide to learning Python programming language. The book is structured in a way that is easy to follow and understand, even for beginners with no prior experience in programming. The author uses a practical approach to teaching Python, with lots of examples and exercises that allow readers to practice what they learn. The book covers essential Python concepts such as variables, data types, control flow, functions, and object-oriented programming. It also includes chapters on file handling, modules, and regular expressions. </br></br>

    In addition to the Course itself, comes with several helpful resources, including an online forum where readers can ask questions and interact with other learners. The book also includes links to video tutorials that supplement the content covered in the text. Overall, "Python Crash Course" is an excellent resource for anyone looking to learn Python quickly and efficiently. Whether you are a beginner or an experienced programmer looking to add Python to your skillset, this book is a must-read.`,
  },
  {
    id: "2",
    name: "MySQL Crash Course",
    instructor: "Mosh Hamedani",
    duration: "03:10:19",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/b0372b4a-253b-4a7e-acda-cb8460939fee/thumbnail_30f7a2ee.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/b0372b4a-253b-4a7e-acda-cb8460939fee?autoplay=false",
    summary: `The MySQL Crash Course is a short and intensive course designed to introduce students to the fundamentals of MySQL, the most widely used open-source relational database management system. The course is ideal for those who have little or no experience with MySQL and want to quickly learn how to create and manage databases, tables, and data using SQL commands. Throughout the course, students will gain a solid understanding of the core concepts of MySQL and learn how to use it effectively to store, manage, and retrieve data.</br></br>

    During the course, students will cover topics such as database design, creating and managing tables, inserting and retrieving data, querying data, and managing users and permissions. The course will also cover more advanced topics such as joins, subqueries, and transactions. By the end of the course, students will have the knowledge and skills required to create and manage their own databases using MySQL and will be able to use their newfound skills to develop applications that require a database backend.`,
  },
  {
    id: "3",
    name: "Javascript crash course",
    instructor: "Brad Traversy",
    duration: "01:40:30",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/cf39cb68-2263-4bc9-ab7b-6c5b6880d59b/thumbnail_fa5e36f5.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/cf39cb68-2263-4bc9-ab7b-6c5b6880d59b?autoplay=false",
    summary: `The Javascript Crash Course is an intensive course designed to introduce students to the core concepts of Javascript, one of the most popular programming languages in use today. The course is ideal for beginners who want to quickly learn how to write and execute Javascript code, as well as for experienced programmers who want to brush up on their skills. Throughout the course, students will gain a solid understanding of the Javascript language and will learn how to use it to create dynamic web applications.</br></br>

    During the course, students will cover topics such as variables, data types, control structures, functions, objects, arrays, and loops. They will also learn how to use Javascript to manipulate the Document Object Model (DOM) and to create interactive web pages with event handling. By the end of the course, students will be able to write basic Javascript code and will have the skills required to develop more complex applications using this powerful language. The Javascript Crash Course is an excellent starting point for anyone interested in web development, as it provides a solid foundation in one of the most essential programming languages used in this field.`,
  },
  {
    id: "4",
    name: "React Router v6",
    instructor: "John Smilga",
    duration: "01:40:30",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/f086752e-7d8d-4ac1-a1fb-88c867a2159f/thumbnail_81af2757.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/f086752e-7d8d-4ac1-a1fb-88c867a2159f?autoplay=false",
    summary: `The React Router v6 course is designed to provide students with a deep understanding of the latest version of React Router, a popular library for routing in React applications. The course is intended for experienced React developers who want to learn how to use the latest version of the library to build dynamic and responsive single-page applications. Students will learn how to use React Router v6 to handle client-side routing and navigation, as well as how to integrate it with other React libraries and frameworks.</br></br>

    During the course, students will cover a range of topics, including the core concepts of React Router v6, handling routes and nested routes, handling dynamic routes with parameters, using advanced features such as guards and redirects, and integrating with other React libraries such as Redux and React Query. By the end of the course, students will have the knowledge and skills required to build robust and scalable single-page applications using React Router v6. They will also have a deep understanding of the latest features of the library and will be able to apply this knowledge to develop cutting-edge web applications.`,
  },
  {
    id: "5",
    name: "ReactJs Crash Course",
    instructor: "Brad Traversy",
    duration: "01:17:14",
    thumbnail:
      "https://vz-4e750104-d0a.b-cdn.net/1a22ab74-ccf2-4428-88b4-14a32ea3cad7/thumbnail_ae700e87.jpg",
    src: "https://iframe.mediadelivery.net/embed/114226/1a22ab74-ccf2-4428-88b4-14a32ea3cad7?autoplay=false",
    summary: `The ReactJS Crash Course is designed to provide students with a comprehensive introduction to the ReactJS library, one of the most popular JavaScript libraries used for building user interfaces. The course is ideal for beginners who have a basic understanding of HTML, CSS, and JavaScript and want to quickly learn how to build web applications using ReactJS. Throughout the course, students will gain a solid understanding of the core concepts of ReactJS and will learn how to use it to create dynamic and interactive user interfaces.</br></br>

    During the course, students will cover topics such as JSX, components, props, state, events, and lifecycle methods. They will also learn how to use ReactJS to create reusable UI elements, handle user input, manage state, and work with external data sources. By the end of the course, students will have the knowledge and skills required to build their own web applications using ReactJS and will be able to use this powerful library to develop modern and responsive user interfaces. The ReactJS Crash Course is an excellent starting point for anyone interested in web development, as it provides a solid foundation in one of the most essential libraries used in this field.`,
  },
];

export const AnnouncementCards = [
  {
    id: uid(),
    name: "Team Stand-up",
    duration: "08:00 am - 10:00 am",
  },
  {
    id: uid(),
    name: "Discussion",
    duration: "11:30 am - 12:00 pm",
  },
  {
    id: uid(),
    name: "Task 1",
    duration: "03:00 pm - 03:45 pm",
  },
  {
    id: uid(),
    name: "Weekly report",
    duration: "04:30 pm - 05:00 pm",
  },
];

export const quickActionCards = [
  {
    id: uid(),
    name: "add new training",
    icon: <FiPlusSquare />,
    href: "/add-new-training",
  },
  {
    id: uid(),
    name: "create an announcement",
    icon: <GrTasks />,
    href: "/create-announcement",
  },
  {
    id: uid(),
    name: "Assign a Task",
    icon: <TfiAnnouncement />,
    href: "/assign-task",
  },
];

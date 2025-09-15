import { create } from "zustand"

export interface Course {
  id: string
  title: string
  description: string
  duration: string
  type: "crash-course" | "extended"
  price: number
  level: "beginner" | "intermediate" | "advanced"
  technologies: string[]
  syllabus: string[]
  instructor: string
  rating: number
  students: number
  image: string
}

export interface CourseFilters {
  type?: "crash-course" | "extended"
  level?: "beginner" | "intermediate" | "advanced"
  technology?: string
  priceRange?: { min: number; max: number }
}

interface CourseStore {
  courses: Course[]
  selectedCourse: Course | null
  isLoading: boolean
  error: string | null

  // Existing methods
  setSelectedCourse: (course: Course | null) => void
  getCourseById: (id: string) => Course | undefined

  searchCourses: (query: string) => Course[]
  filterCourses: (filters: CourseFilters) => Course[]
  getCoursesByInstructor: (instructor: string) => Course[]
  getCoursesByTechnology: (technology: string) => Course[]
  getPopularCourses: (limit?: number) => Course[]
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

const COURSES: Course[] = [
  {
    id: "smm",
    title: "Strategic Marketing Masterclass",
    description:
      "2-day program covering digital marketing, SEO, content strategy, and analytics.",
    duration: "2 days",
    type: "extended",
    price: 66,
    level: "intermediate",
    technologies: [ "Google Analytics",
  "Google Ads",
  "Facebook Ads Manager",
  "SEMrush",
  "Hootsuite",
  "Mailchimp",
  "HubSpot",
  "Tableau",
  "Google Tag Manager",
  "WordPress",
  "Canva",
  "Ahrefs"],
    syllabus: [
      "Fundamentals of Marketing Strategy",
      "Market Segmentation and Targeting",
      "Product and Service Strategy",
      "Distribution and Channel Strategy",
      "Integrated Marketing Communications",
      "Marketing Analytics and Data-Driven Decisions",
      "Strategic Marketing Planning",
      "International and Global Marketing",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.8,
    students: 157,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "sas",
    title: "Statistical Analysis with SAS",
    description: "Comprehensive 3-day program covering SAS programming fundamentals, data manipulation, statistical analysis, and advanced analytics including data mining and machine learning techniques.",
    duration: "3 days",
    type: "extended",
    price: 99,
    level: "beginner",
    technologies: ["SAS",
  "SAS Studio",
  "SAS Enterprise Guide",
  "SQL",
  "SAS/STAT",
  "SAS/GRAPH",
  "SAS Visual Analytics",
  "Base SAS",
  "SAS Macros",
  "SAS/ACCESS",
  "Data Step Programming",
  "PROC SQL"],
    syllabus: [
      "Introduction to SAS",
      "Data Manipulation with SAS",
      "Data Management in SAS",
      "Statistical Analysis with SAS",
      "Advanced SAS Programming",
      "SAS Graphics and Reporting",
      "SAS Procedures and Functions",
      "SAS Data Mining and Machine Learning",
      "SAS for Big Data Analytics",
      "SAS Integration and Automation",
      "SAS Deployment and Administration",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.9,
    students: 980,
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "react",
    title: "React Crash Course",
    description: "Intensive 5-day bootcamp to master React fundamentals and build your first application.",
    duration: "5 days",
    type: "crash-course",
    price: 299,
    level: "beginner",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    syllabus: [
      "Introduction to Web Development",
      "React Components",
      "React with JSX",
      "React Hooks",
      "Enhancing Components",
      "React Routers",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.7,
    students: 117,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "html-intro",
    title: "Introduction to HTML",
    description: "Intensive 3-day bootcamp to master HTML fundamentals and build your first application.",
    duration: "3 days",
    type: "crash-course",
    price: 199,
    level: "beginner",
    technologies: [ "HTML5",
  "CSS3",
  "Web Browsers",
  "Visual Studio Code",
  "Chrome DevTools",
  "Git",
  "Responsive Design",
  "Web Standards",
  "DOM",
  "Forms API",
  "Multimedia APIs"],
    syllabus: [
      "Introducing HTML",
      "Starting Up",
      "React with JSX",
      "Color",
      "HTML Forms",
      "Tables",
      "Images and Multimedia",
      "Hyperlinks",
      "HTML Email",
      "Introduction to Fluid Sites Tables",
      "Introduction to CSS",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.7,
    students: 117,
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "js-jq",
    title: "Javascript & jQuery Masterclass",
    description: "",
    duration: "3 days",
    type: "extended",
    price: 649,
    level: "advanced",
    technologies: ["JavaScript", "jQuery", "HTML5", "CSS3", "DOM API", "AJAX", "JSON", "ES6+", "Visual Studio Code", "Chrome DevTools"],
    syllabus: [
      "Introduction to JavaScript",
      "JavaScript Variables",
      "JavaScript Data Types",
      "JavaScript Operators",
      "JavaScript Functions",
      "Understanding Prototyping and Classes in JavaScript",
      "JavaScript Conditional and Looping Statements",
      "Error Handing in JavaScript",
      "Introduction to jQuery",
      "jQuery Effects",
      "jQuery HTML",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.8,
    students: 650,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "js",
    title: "JavaScript for Beginners",
    description: "Intensive 3-day course covering JavaScript essentials for absolute beginners.",
    duration: "3 days",
    type: "crash-course",
    price: 199,
    level: "beginner",
    technologies: ["JavaScript", "HTML", "CSS", "DOM"],
    syllabus: [
      "Introduction to JavaScript",
      "JavaScript Alert and Confirm Boxes",
      "JavaScript Variables",
      "JavaScript Operators",
      "Control Statements, Functions and Objects",
      "Date, Math and Cross-Browser Compatibility",
      "Libraries, Frameworks and Templates",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.5,
    students: 1800,
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "figma",
    title: "Figma for Beginners",
    description: "Master modern DevOps practices with Docker, Kubernetes, and AWS cloud services.",
    duration: "3 days",
    type: "crash-course",
    price: 99,
    level: "advanced",
    technologies: ["Figma", "VSCode"],
    syllabus: [
      "Introduction to Figma",
      "Create Designs",
      "Design Systems",
      "Build Prototypes",
      "Prepare for Handoff",
      "Dev Mode",
      "Figma for VS Code",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.8,
    students: 230,
    image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "react-native",
    title: "React Native Crash Course",
    description: "Build cross-platform mobile applications using React Native and deploy to both iOS and Android.",
    duration: "2 days",
    type: "crash-course",
    price: 69,
    level: "intermediate",
    technologies: ["React Native", "JavaScript", "Expo", "Firebase"],
    syllabus: [
      "Introduction to React Native",
      "Working with React Native",
      "Environment Setup",
      "Exploring Components",
      "Building Applications",
      "Working of Lists and Navigator",
      "Font Styling and Detectors",
      "Debugging and Developer Tools",
    ],
    instructor: "Osaro Onaiwu",
    rating: 4.6,
    students: 90,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  
]

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: COURSES,
  selectedCourse: null,
  isLoading: false,
  error: null,

  setSelectedCourse: (course) => set({ selectedCourse: course }),

  getCourseById: (id) => {
    const course = get().courses.find((course) => course.id === id)
    if (!course) {
      set({ error: `Course with id ${id} not found` })
    }
    return course
  },

  searchCourses: (query) => {
    const { courses } = get()
    const lowercaseQuery = query.toLowerCase()
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowercaseQuery) ||
        course.description.toLowerCase().includes(lowercaseQuery) ||
        course.technologies.some((tech) => tech.toLowerCase().includes(lowercaseQuery)) ||
        course.instructor.toLowerCase().includes(lowercaseQuery),
    )
  },

  filterCourses: (filters) => {
    const { courses } = get()
    return courses.filter((course) => {
      if (filters.type && course.type !== filters.type) return false
      if (filters.level && course.level !== filters.level) return false
      if (filters.technology && !course.technologies.includes(filters.technology)) return false
      if (filters.priceRange) {
        const { min, max } = filters.priceRange
        if (course.price < min || course.price > max) return false
      }
      return true
    })
  },

  getCoursesByInstructor: (instructor) => {
    const { courses } = get()
    return courses.filter((course) => course.instructor === instructor)
  },

  getCoursesByTechnology: (technology) => {
    const { courses } = get()
    return courses.filter((course) => course.technologies.includes(technology))
  },

  getPopularCourses: (limit = 3) => {
    const { courses } = get()
    return [...courses].sort((a, b) => b.students - a.students).slice(0, limit)
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),
}))

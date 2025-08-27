import { create } from 'zustand';

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  type: 'crash-course' | 'extended';
  price: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  syllabus: string[];
  instructor: string;
  rating: number;
  students: number;
  image: string;
}

interface CourseStore {
  courses: Course[];
  selectedCourse: Course | null;
  setSelectedCourse: (course: Course | null) => void;
  getCourseById: (id: string) => Course | undefined;
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.',
    duration: '12 weeks',
    type: 'extended',
    price: 899,
    level: 'intermediate',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
    syllabus: [
      'HTML5 & CSS3 Fundamentals',
      'JavaScript ES6+ Features',
      'React Components & Hooks',
      'State Management with Redux',
      'Node.js & Express Backend',
      'MongoDB Database Design',
      'Authentication & Authorization',
      'Deployment & DevOps'
    ],
    instructor: 'Sarah Johnson',
    rating: 4.8,
    students: 1250,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Python for Data Science',
    description: 'Learn Python programming and data analysis with pandas, NumPy, and machine learning fundamentals.',
    duration: '8 weeks',
    type: 'extended',
    price: 699,
    level: 'beginner',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    syllabus: [
      'Python Basics & Syntax',
      'Data Structures & Algorithms',
      'NumPy for Numerical Computing',
      'Pandas for Data Manipulation',
      'Data Visualization with Matplotlib',
      'Introduction to Machine Learning',
      'Statistical Analysis',
      'Real-world Data Projects'
    ],
    instructor: 'Dr. Michael Chen',
    rating: 4.9,
    students: 980,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'React Crash Course',
    description: 'Intensive 5-day bootcamp to master React fundamentals and build your first application.',
    duration: '5 days',
    type: 'crash-course',
    price: 299,
    level: 'beginner',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    syllabus: [
      'React Components & JSX',
      'Props & State Management',
      'Event Handling',
      'React Hooks',
      'API Integration',
      'Project: Todo Application'
    ],
    instructor: 'Alex Rodriguez',
    rating: 4.7,
    students: 2100,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native and deploy to both iOS and Android.',
    duration: '10 weeks',
    type: 'extended',
    price: 799,
    level: 'intermediate',
    technologies: ['React Native', 'JavaScript', 'Expo', 'Firebase'],
    syllabus: [
      'React Native Fundamentals',
      'Navigation & Routing',
      'Native Components',
      'State Management',
      'API Integration',
      'Push Notifications',
      'App Store Deployment',
      'Performance Optimization'
    ],
    instructor: 'Emma Thompson',
    rating: 4.6,
    students: 750,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'DevOps & Cloud Computing',
    description: 'Master modern DevOps practices with Docker, Kubernetes, and AWS cloud services.',
    duration: '6 weeks',
    type: 'extended',
    price: 649,
    level: 'advanced',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Terraform'],
    syllabus: [
      'Containerization with Docker',
      'Kubernetes Orchestration',
      'CI/CD Pipelines',
      'AWS Cloud Services',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security Best Practices',
      'Production Deployment'
    ],
    instructor: 'David Kim',
    rating: 4.8,
    students: 650,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'JavaScript Fundamentals Bootcamp',
    description: 'Intensive 3-day course covering JavaScript essentials for absolute beginners.',
    duration: '3 days',
    type: 'crash-course',
    price: 199,
    level: 'beginner',
    technologies: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    syllabus: [
      'Variables & Data Types',
      'Functions & Scope',
      'DOM Manipulation',
      'Event Handling',
      'Async Programming',
      'Project: Interactive Website'
    ],
    instructor: 'Lisa Wang',
    rating: 4.5,
    students: 1800,
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const useCourseStore = create<CourseStore>((set, get) => ({
  courses: mockCourses,
  selectedCourse: null,
  setSelectedCourse: (course) => set({ selectedCourse: course }),
  getCourseById: (id) => get().courses.find(course => course.id === id),
}));
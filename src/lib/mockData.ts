export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  introVideo: string;
  videos: string[];
  teacherId: string;
  teacherName: string;
  enrolledCount: number;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: 'student' | 'teacher' | 'admin';
  age?: number;
  phone?: string;
  gender?: string;
  address?: string;
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and build real-world projects',
    price: 2999,
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videos: ['video1.mp4', 'video2.mp4', 'video3.mp4'],
    teacherId: 't1',
    teacherName: 'Priya Sharma',
    enrolledCount: 1234,
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'Data Science with Python',
    description: 'Master Python, NumPy, Pandas, Machine Learning and Data Visualization',
    price: 3499,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videos: ['video1.mp4', 'video2.mp4'],
    teacherId: 't2',
    teacherName: 'Rahul Kumar',
    enrolledCount: 892,
    category: 'Data Science'
  },
  {
    id: '3',
    title: 'Digital Marketing Masterclass',
    description: 'SEO, Social Media Marketing, Google Ads, Content Marketing and Analytics',
    price: 1999,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videos: ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'],
    teacherId: 't3',
    teacherName: 'Anjali Verma',
    enrolledCount: 2341,
    category: 'Marketing'
  },
  {
    id: '4',
    title: 'UI/UX Design Complete Course',
    description: 'Figma, Adobe XD, User Research, Wireframing, Prototyping',
    price: 2499,
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    introVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videos: ['video1.mp4', 'video2.mp4'],
    teacherId: 't1',
    teacherName: 'Priya Sharma',
    enrolledCount: 567,
    category: 'Design'
  }
];

export const mockUsers: User[] = [
  {
    id: 's1',
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    role: 'student',
    age: 25,
    phone: '+91 9876543210',
    gender: 'Male',
    address: 'Mumbai, Maharashtra'
  },
  {
    id: 't1',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    role: 'teacher',
    age: 32,
    phone: '+91 9876543211',
    gender: 'Female',
    address: 'Bangalore, Karnataka'
  }
];

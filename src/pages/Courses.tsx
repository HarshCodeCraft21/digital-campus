import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CourseCard } from '@/components/CourseCard';
import { mockCourses } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function Courses() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  
  const filteredCourses = mockCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) setSearchQuery(query);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-gradient-to-r from-primary to-secondary py-12">
        <div className="container px-4 text-white">
          <h1 className="text-4xl font-bold mb-4">Explore Courses</h1>
          <p className="text-lg mb-6">Discover the perfect course for you</p>
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'} found
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No courses found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

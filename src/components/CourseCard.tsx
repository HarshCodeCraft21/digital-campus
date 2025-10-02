import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Course } from '@/lib/mockData';

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          ₹{course.price.toLocaleString('en-IN')}
        </div>
      </div>
      <CardHeader>
        <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground">{course.teacherName}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
          <Users className="h-3 w-3" />
          <span>{course.enrolledCount.toLocaleString()} students</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/course/${course.id}`}>Know More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

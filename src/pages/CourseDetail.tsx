import { useParams, Navigate } from 'react-router-dom';
import { Users, Play, Lock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockCourses } from '@/lib/mockData';
import { getCurrentUser, enrollInCourse, isEnrolled } from '@/lib/auth';
import { useState } from 'react';
import { toast } from 'sonner';

export default function CourseDetail() {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id === id);
  const user = getCurrentUser();
  const [enrolled, setEnrolled] = useState(isEnrolled(id || ''));

  if (!course) {
    return <Navigate to="/courses" />;
  }

  const handleEnroll = () => {
    if (!user) {
      toast.error('Please login to enroll in this course');
      return;
    }
    
    enrollInCourse(course.id);
    setEnrolled(true);
    toast.success('Successfully enrolled! Payment processed (mock).');
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${course.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
          <div className="container px-4 h-full flex items-center">
            <div className="text-white max-w-3xl space-y-4">
              <Badge className="mb-2">{course.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
              <p className="text-xl">{course.description}</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.enrolledCount.toLocaleString()} students</span>
                </div>
                <span>By {course.teacherName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Intro Video */}
            <Card>
              <CardHeader>
                <CardTitle>Course Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={course.introVideo}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {course.videos.length} lectures
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {course.videos.map((video, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {enrolled ? (
                        <Play className="h-5 w-5 text-primary" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="font-medium">Lecture {index + 1}</span>
                    </div>
                    {enrolled && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">
                    ₹{course.price.toLocaleString('en-IN')}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
                </div>

                {enrolled ? (
                  <Button className="w-full" size="lg" disabled>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Enrolled
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" onClick={handleEnroll}>
                    Enroll Now
                  </Button>
                )}

                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold">This course includes:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-primary" />
                      <span>{course.videos.length} video lectures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

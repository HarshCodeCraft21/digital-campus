import { Target, Heart, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Mission() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container px-4 text-white text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering learners worldwide with accessible, high-quality education
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To create a world where anyone, anywhere can transform their life through learning. 
                We envision a future where quality education is not a privilege but a fundamental right 
                accessible to all, regardless of geography, background, or economic status.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To democratize education by connecting learners with expert instructors from around 
                the world. We strive to provide affordable, flexible, and engaging learning experiences 
                that help individuals achieve their personal and professional goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <p className="text-muted-foreground">
                Making quality education accessible to everyone, everywhere, at any time.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards in course quality and learning outcomes.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-muted-foreground">
                Building a supportive learning community where everyone can thrive.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm opacity-90">Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

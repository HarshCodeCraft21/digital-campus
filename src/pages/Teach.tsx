import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Teach() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    expertise: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', expertise: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Teach With Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Share your knowledge and inspire thousands of students worldwide
          </p>
        </div>
      </div>

      <div className="container px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Why Teach on EduLearn?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Reach Global Students</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with millions of students from around the world who are eager to learn from experts like you.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Earn Money</h3>
                  <p className="text-sm text-muted-foreground">
                    Set your own prices and earn revenue from every course enrollment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy Course Creation</h3>
                  <p className="text-sm text-muted-foreground">
                    Our platform makes it simple to upload and manage your course content.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Marketing Support</h3>
                  <p className="text-sm text-muted-foreground">
                    We help promote your courses to reach the right audience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p><strong>Email:</strong> teach@edulearn.com</p>
                <p><strong>Phone:</strong> +91 1800 123 4567</p>
                <p><strong>Support Hours:</strong> Mon-Fri, 9AM-6PM IST</p>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <Card>
            <CardHeader>
              <CardTitle>Apply to Teach</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expertise">Area of Expertise *</Label>
                  <Input
                    id="expertise"
                    placeholder="e.g., Web Development, Data Science"
                    value={formData.expertise}
                    onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about yourself *</Label>
                  <Textarea
                    id="message"
                    placeholder="Share your teaching experience and what you'd like to teach..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Upload, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCurrentUser } from '@/lib/auth';
import { toast } from 'sonner';

export default function CreateCourse() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [videos, setVideos] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    introVideo: '',
  });

  if (!user || user.role !== 'teacher') {
    return <Navigate to="/" />;
  }

  const handleThumbnailUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddVideo = () => {
    setVideos([...videos, '']);
  };

  const handleRemoveVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Course created successfully! (Mock - not saved)');
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container px-4 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Create New Course</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Thumbnail */}
              <div className="space-y-2">
                <Label>Course Thumbnail *</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  {thumbnailPreview ? (
                    <div className="relative">
                      <img src={thumbnailPreview} alt="Thumbnail" className="max-h-48 mx-auto rounded" />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="mt-2"
                        onClick={() => setThumbnailPreview('')}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <Label htmlFor="thumbnail" className="cursor-pointer">
                      <Upload className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Click to upload thumbnail</p>
                      <Input
                        id="thumbnail"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleThumbnailUpload}
                      />
                    </Label>
                  )}
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Course Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Complete Web Development Bootcamp"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what students will learn..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Input
                  id="category"
                  placeholder="e.g., Web Development, Data Science"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price">Price (₹) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="2999"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                />
              </div>

              {/* Intro Video */}
              <div className="space-y-2">
                <Label htmlFor="intro-video">Intro Video URL *</Label>
                <Input
                  id="intro-video"
                  type="url"
                  placeholder="https://youtube.com/embed/..."
                  value={formData.introVideo}
                  onChange={(e) => setFormData({ ...formData, introVideo: e.target.value })}
                  required
                />
              </div>

              {/* Course Videos */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Course Videos</Label>
                  <Button type="button" variant="outline" size="sm" onClick={handleAddVideo}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add Video
                  </Button>
                </div>

                {videos.map((_, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="flex-1">
                      <Label htmlFor={`video-${index}`} className="sr-only">
                        Video {index + 1}
                      </Label>
                      <Input
                        id={`video-${index}`}
                        type="file"
                        accept="video/*"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => handleRemoveVideo(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-semibold">📝 Demo Mode</p>
                <p className="text-xs mt-1">In production, videos would be uploaded to cloud storage. This is a mock interface.</p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Course
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, ThumbsUp, Search, PlusCircle, Users } from 'lucide-react';

export default function Forum() {
  const { language } = useLanguage();

  const discussions = [
    {
      title: 'Help with Data Structures Assignment',
      author: 'Priya Sharma',
      category: 'Academic',
      replies: 12,
      likes: 24,
      time: '2 hours ago',
    },
    {
      title: 'Study Group for Database Exam',
      author: 'Rahul Kumar',
      category: 'Study Groups',
      replies: 8,
      likes: 15,
      time: '5 hours ago',
    },
    {
      title: 'Looking for Hackathon Team Members',
      author: 'Ananya Patel',
      category: 'Projects',
      replies: 20,
      likes: 45,
      time: '1 day ago',
    },
    {
      title: 'Web Development Resources',
      author: 'Arjun Singh',
      category: 'Resources',
      replies: 35,
      likes: 67,
      time: '2 days ago',
    },
  ];

  const studyGroups = [
    { name: 'AI & ML Study Circle', members: 45, active: true },
    { name: 'Web Dev Warriors', members: 32, active: true },
    { name: 'DSA Problem Solvers', members: 67, active: true },
    { name: 'Competitive Programming', members: 28, active: false },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {language === 'en' ? 'Discussion Forum' : 'चर्चा मंच'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en'
            ? 'Connect, collaborate, and learn together'
            : 'कनेक्ट करें, सहयोग करें और एक साथ सीखें'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Discussion Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Create */}
          <Card className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input placeholder="Search discussions..." className="pl-10" />
              </div>
              <Button className="whitespace-nowrap">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>
          </Card>

          {/* Discussions */}
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <Card key={index} className="p-6 card-hover cursor-pointer">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                        {discussion.title}
                      </h3>
                      <Badge variant="outline">{discussion.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      by {discussion.author} • {discussion.time}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{discussion.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Study Groups */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              {language === 'en' ? 'Study Groups' : 'अध्ययन समूह'}
            </h3>
            <div className="space-y-3">
              {studyGroups.map((group, index) => (
                <div
                  key={index}
                  className="p-3 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-sm">{group.name}</h4>
                    {group.active && (
                      <Badge variant="outline" className="text-xs bg-green-50">
                        Active
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {group.members} members
                  </p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Groups
            </Button>
          </Card>

          {/* Categories */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">
              {language === 'en' ? 'Categories' : 'श्रेणियाँ'}
            </h3>
            <div className="space-y-2">
              {['Academic', 'Study Groups', 'Projects', 'Resources', 'Events', 'General'].map(
                (category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Your Activity</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Posts</span>
                <span className="font-semibold">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Replies</span>
                <span className="font-semibold">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Likes Received</span>
                <span className="font-semibold">156</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Calendar,
  BookOpen,
  Trophy,
  Users,
  Map,
  MessageSquare,
  Clock,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { t } = useLanguage();

  const quickActions = [
    { icon: <Map className="h-5 w-5" />, label: t('campusMap'), link: '/campus-map', color: 'bg-blue-500' },
    { icon: <BookOpen className="h-5 w-5" />, label: t('library'), link: '/library', color: 'bg-purple-500' },
    { icon: <Trophy className="h-5 w-5" />, label: t('sports'), link: '/sports', color: 'bg-green-500' },
    { icon: <Users className="h-5 w-5" />, label: t('mentor'), link: '/mentor', color: 'bg-orange-500' },
    { icon: <Calendar className="h-5 w-5" />, label: t('calendar'), link: '/calendar', color: 'bg-red-500' },
    { icon: <MessageSquare className="h-5 w-5" />, label: t('forum'), link: '/forum', color: 'bg-cyan-500' },
  ];

  const recentActivity = [
    { title: 'Assignment submitted', course: 'Data Structures', time: '2 hours ago' },
    { title: 'New announcement', course: 'Web Development', time: '5 hours ago' },
    { title: 'Book issued', course: 'Introduction to AI', time: '1 day ago' },
  ];

  const upcomingEvents = [
    { title: 'Mid-term Exam', subject: 'Database Systems', date: 'Nov 30, 2025', time: '10:00 AM' },
    { title: 'Assignment Due', subject: 'Computer Networks', date: 'Dec 2, 2025', time: '11:59 PM' },
    { title: 'Basketball Tournament', subject: 'Sports Complex', date: 'Dec 5, 2025', time: '4:00 PM' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Welcome Banner */}
      <Card className="p-6 mb-8 gradient-primary text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
            <p className="text-white/90">Here's what's happening with your campus today</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Badge className="bg-white/20 text-white hover:bg-white/30">
              <Clock className="h-3 w-3 mr-1" />
              Last login: 2 hours ago
            </Badge>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('quickActions')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <Link key={index} to={action.link}>
              <Card className="p-6 text-center card-hover cursor-pointer">
                <div className={`${action.color} text-white p-3 rounded-lg inline-flex mb-3`}>
                  {action.icon}
                </div>
                <p className="text-sm font-medium">{action.label}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{t('recentActivity')}</h3>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.course}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">{t('upcomingEvents')}</h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-primary pl-3 py-2">
                <p className="font-medium text-sm">{event.title}</p>
                <p className="text-xs text-muted-foreground mb-1">{event.subject}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {event.date} • {event.time}
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            <Link to="/calendar">View Full Calendar</Link>
          </Button>
        </Card>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Books Issued</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <BookOpen className="h-8 w-8 text-purple-500" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Attendance</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Assignments Due</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <Clock className="h-8 w-8 text-orange-500" />
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Forum Posts</p>
              <p className="text-2xl font-bold">15</p>
            </div>
            <MessageSquare className="h-8 w-8 text-cyan-500" />
          </div>
        </Card>
      </div>
    </div>
  );
}
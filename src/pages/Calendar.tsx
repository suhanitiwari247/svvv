import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar as CalendarIcon, Clock, BookOpen, FileText, AlertCircle } from 'lucide-react';

export default function Calendar() {
  const { t, language } = useLanguage();

  const todayClasses = [
    { subject: 'Data Structures', time: '9:00 AM - 10:00 AM', room: 'Room 201', type: 'lecture' },
    { subject: 'Web Development', time: '11:00 AM - 12:00 PM', room: 'Lab 3', type: 'practical' },
    { subject: 'Database Systems', time: '2:00 PM - 3:00 PM', room: 'Room 305', type: 'lecture' },
  ];

  const assignments = [
    { title: 'Data Structures Assignment', subject: 'Data Structures', dueDate: 'Dec 2, 2025', priority: 'high' },
    { title: 'Web Project Submission', subject: 'Web Development', dueDate: 'Dec 5, 2025', priority: 'medium' },
    { title: 'Database Lab Report', subject: 'Database Systems', dueDate: 'Dec 8, 2025', priority: 'low' },
  ];

  const exams = [
    { subject: 'Data Structures', date: 'Dec 15, 2025', time: '10:00 AM - 1:00 PM', venue: 'Main Hall' },
    { subject: 'Web Development', date: 'Dec 18, 2025', time: '2:00 PM - 5:00 PM', venue: 'Exam Hall 2' },
    { subject: 'Database Systems', date: 'Dec 20, 2025', time: '10:00 AM - 1:00 PM', venue: 'Main Hall' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">{t('calendar')}</h1>
          <p className="text-muted-foreground">
            {language === 'en' ? 'Manage your academic schedule' : 'अपने शैक्षणिक कार्यक्रम को प्रबंधित करें'}
          </p>
        </div>
        <Button>{t('addEvent')}</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{t('todayClasses')}</h2>
            <Badge>{todayClasses.length} classes</Badge>
          </div>
          <div className="space-y-3">
            {todayClasses.map((cls, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold">{cls.subject}</h3>
                  <Badge variant="outline" className="text-xs">
                    {cls.type}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-2" />
                    {cls.time}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-3 w-3 mr-2" />
                    {cls.room}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Assignments */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{t('assignments')}</h2>
            <Badge>{assignments.length} pending</Badge>
          </div>
          <div className="space-y-3">
            {assignments.map((assignment, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                <div className="flex items-start space-x-3">
                  <div className={`w-1 h-full rounded ${getPriorityColor(assignment.priority)}`} />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{assignment.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{assignment.subject}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FileText className="h-3 w-3 mr-1" />
                      Due: {assignment.dueDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Exams */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{t('exams')}</h2>
            <Badge variant="destructive">{exams.length} upcoming</Badge>
          </div>
          <div className="space-y-3">
            {exams.map((exam, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:border-destructive transition-colors">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-red-100 rounded">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{exam.subject}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-2" />
                        {exam.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-2" />
                        {exam.time}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-2" />
                        {exam.venue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Weekly Overview */}
      <Card className="p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? 'Weekly Overview' : 'साप्ताहिक अवलोकन'}
        </h2>
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
            <div key={index} className="text-center">
              <div className="font-semibold text-sm mb-2">{day}</div>
              <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary/10 transition-colors cursor-pointer">
                <span className="text-2xl font-bold text-muted-foreground">{25 + index}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
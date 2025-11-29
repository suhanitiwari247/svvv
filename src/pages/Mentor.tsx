import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, Calendar, FileText, MessageCircle, Shield, Clock } from 'lucide-react';
import mentorImage from '@/assets/mentor.jpg';

export default function Mentor() {
  const { language } = useLanguage();

  const mentor = {
    name: 'Dr. Rajesh Kumar',
    designation: 'Associate Professor',
    department: 'Computer Science',
    email: 'rajesh.kumar@college.edu',
    phone: '+91 98765 43210',
    officeHours: 'Mon, Wed, Fri: 2:00 PM - 4:00 PM',
  };

  const sessions = [
    { title: 'Career Guidance Session', date: 'Dec 1, 2025', time: '3:00 PM', status: 'upcoming' },
    { title: 'Academic Progress Review', date: 'Nov 25, 2025', time: '2:30 PM', status: 'completed' },
    { title: 'Project Discussion', date: 'Nov 15, 2025', time: '4:00 PM', status: 'completed' },
  ];

  const notes = [
    { title: 'Focus on Data Structures', date: 'Nov 20, 2025', content: 'Recommended to practice more tree and graph algorithms' },
    { title: 'Internship Opportunities', date: 'Nov 10, 2025', content: 'Discussed various companies for summer internships' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {language === 'en' ? 'Personal Mentor' : 'व्यक्तिगत मेंटर'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en'
            ? 'Your dedicated faculty guide for academic and personal growth'
            : 'शैक्षणिक और व्यक्तिगत विकास के लिए आपके समर्पित संकाय गाइड'}
        </p>
      </div>

      {/* Privacy Notice */}
      <Card className="p-4 mb-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
              {language === 'en' ? 'Privacy & Confidentiality' : 'गोपनीयता और गोपनीयता'}
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {language === 'en'
                ? 'All conversations and notes shared with your mentor are confidential and secure. Your personal information is protected.'
                : 'आपके मेंटर के साथ साझा की गई सभी बातचीत और नोट्स गोपनीय और सुरक्षित हैं। आपकी व्यक्तिगत जानकारी सुरक्षित है।'}
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mentor Profile */}
        <Card className="p-6">
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
              <img src={mentorImage} alt="Mentor" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{mentor.name}</h2>
            <p className="text-muted-foreground text-sm mb-2">{mentor.designation}</p>
            <Badge>{mentor.department}</Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{mentor.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{mentor.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">{mentor.officeHours}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button className="w-full">
              <MessageCircle className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Send Message' : 'संदेश भेजें'}
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Book Session' : 'सत्र बुक करें'}
            </Button>
          </div>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="sessions" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="sessions">
                {language === 'en' ? 'Sessions' : 'सत्र'}
              </TabsTrigger>
              <TabsTrigger value="notes">
                {language === 'en' ? 'Guidance Notes' : 'मार्गदर्शन नोट्स'}
              </TabsTrigger>
            </TabsList>

            {/* Sessions */}
            <TabsContent value="sessions" className="space-y-4">
              {sessions.map((session, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {session.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {session.time}
                        </div>
                      </div>
                    </div>
                    <Badge
                      className={
                        session.status === 'upcoming'
                          ? 'bg-blue-500'
                          : 'bg-success'
                      }
                    >
                      {session.status}
                    </Badge>
                  </div>
                  {session.status === 'upcoming' && (
                    <div className="flex gap-2">
                      <Button size="sm">Join Now</Button>
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </TabsContent>

            {/* Notes */}
            <TabsContent value="notes" className="space-y-4">
              {notes.map((note, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <FileText className="h-5 w-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{note.title}</h3>
                        <span className="text-xs text-muted-foreground">{note.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{note.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Total Sessions</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-success">8</p>
              <p className="text-xs text-muted-foreground">Guidance Notes</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-orange-500">3</p>
              <p className="text-xs text-muted-foreground">Upcoming</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
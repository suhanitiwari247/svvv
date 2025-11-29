import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Trophy, Clock, MapPin, Users, Calendar } from 'lucide-react';
import sportsImage from '@/assets/sports.jpg';

export default function Sports() {
  const { t, language } = useLanguage();

  const facilities = [
    { name: language === 'en' ? 'Basketball Court' : 'बास्केटबॉल कोर्ट', availability: 'Available', timings: '6:00 AM - 9:00 PM', capacity: '10 players' },
    { name: language === 'en' ? 'Tennis Court' : 'टेनिस कोर्ट', availability: 'Booked until 5 PM', timings: '6:00 AM - 9:00 PM', capacity: '4 players' },
    { name: language === 'en' ? 'Swimming Pool' : 'स्विमिंग पूल', availability: 'Available', timings: '6:00 AM - 8:00 PM', capacity: '30 people' },
    { name: language === 'en' ? 'Gym' : 'जिम', availability: 'Available', timings: '5:00 AM - 10:00 PM', capacity: '40 people' },
    { name: language === 'en' ? 'Football Ground' : 'फुटबॉल मैदान', availability: 'Available', timings: '6:00 AM - 8:00 PM', capacity: '22 players' },
    { name: language === 'en' ? 'Badminton Court' : 'बैडमिंटन कोर्ट', availability: 'Booked until 7 PM', timings: '6:00 AM - 9:00 PM', capacity: '4 players' },
  ];

  const tournaments = [
    { name: 'Inter-College Basketball Championship', date: 'Dec 5-8, 2025', venue: 'Main Sports Complex', prize: '₹50,000' },
    { name: 'Annual Cricket Tournament', date: 'Dec 15-20, 2025', venue: 'Cricket Ground', prize: '₹1,00,000' },
    { name: 'Table Tennis Championship', date: 'Jan 10-12, 2026', venue: 'Indoor Stadium', prize: '₹25,000' },
  ];

  const myBookings = [
    { facility: 'Basketball Court', date: 'Nov 30, 2025', time: '5:00 PM - 6:00 PM', status: 'confirmed' },
    { facility: 'Swimming Pool', date: 'Dec 2, 2025', time: '7:00 AM - 8:00 AM', status: 'confirmed' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img src={sportsImage} alt="Sports" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 to-emerald-600/50 flex items-center justify-center">
          <div className="text-center text-white">
            <Trophy className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">{t('sports')}</h1>
            <p className="text-xl">{language === 'en' ? 'Stay Active, Stay Healthy' : 'सक्रिय रहें, स्वस्थ रहें'}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="facilities" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">{t('availableFacilities')}</TabsTrigger>
          <TabsTrigger value="tournaments">{t('upcomingTournaments')}</TabsTrigger>
          <TabsTrigger value="my-bookings">{t('myBookings')}</TabsTrigger>
        </TabsList>

        {/* Facilities */}
        <TabsContent value="facilities">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{facility.name}</h3>
                  <Badge
                    className={
                      facility.availability === 'Available' || facility.availability.includes('उपलब्ध')
                        ? 'bg-success'
                        : 'bg-warning'
                    }
                  >
                    {facility.availability}
                  </Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {facility.timings}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {facility.capacity}
                  </div>
                </div>
                <Button className="w-full">{t('bookFacility')}</Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tournaments */}
        <TabsContent value="tournaments" className="space-y-4">
          {tournaments.map((tournament, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{tournament.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {tournament.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {tournament.venue}
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2" />
                        Prize: {tournament.prize}
                      </div>
                    </div>
                  </div>
                </div>
                <Button>Register Now</Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* My Bookings */}
        <TabsContent value="my-bookings" className="space-y-4">
          {myBookings.map((booking, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{booking.facility}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {booking.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {booking.time}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge className="bg-success">Confirmed</Badge>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-muted-foreground mt-1">Total Facilities</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">2</p>
          <p className="text-sm text-muted-foreground mt-1">Active Bookings</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-orange-600">5</p>
          <p className="text-sm text-muted-foreground mt-1">Tournaments Joined</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-purple-600">3</p>
          <p className="text-sm text-muted-foreground mt-1">Awards Won</p>
        </Card>
      </div>
    </div>
  );
}
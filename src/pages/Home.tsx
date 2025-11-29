import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Map, BookOpen, Trophy, Users, Calendar, MessageSquare } from 'lucide-react';
import heroImage from '@/assets/hero-campus.jpg';
import libraryImage from '@/assets/library.jpg';
import sportsImage from '@/assets/sports.jpg';
import mentorImage from '@/assets/mentor.jpg';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Map className="h-8 w-8" />,
      title: t('campusMapTitle'),
      description: t('campusMapDesc'),
      image: null,
      link: '/campus-map',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t('libraryTitle'),
      description: t('libraryDesc'),
      image: libraryImage,
      link: '/library',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: t('sportsTitle'),
      description: t('sportsDesc'),
      image: sportsImage,
      link: '/sports',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('mentorTitle'),
      description: t('mentorDesc'),
      image: mentorImage,
      link: '/mentor',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/0" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1
  className="
    text-5xl md:text-6xl font-bold text-white mb-6
    overflow-hidden whitespace-nowrap border-r-4 border-white
    animate-typingInfinite animate-blink
  "
>
  {t('welcomeTitle')}
</h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t('welcomeSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/50 shadow-lg"
            >
              <Link to="/dashboard">
                {t('getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/50 shadow-lg"
            >
              <Link to="/campus-map">{t('Campus Tour')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('featuresTitle')}</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for a connected campus experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group overflow-hidden card-hover cursor-pointer"
                onClick={() => window.location.href = feature.link}
              >
                {feature.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} text-white mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <Link
                    to={feature.link}
                    className="text-primary hover:text-primary-glow text-sm font-medium inline-flex items-center"
                  >
                    Explore <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Academic Calendar</h3>
              <p className="text-muted-foreground text-sm">
                Never miss classes, exams, or assignment deadlines
              </p>
              
              
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Discussion Forum</h3>
              <p className="text-muted-foreground text-sm">
                Collaborate with peers on projects and assignments
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-warning/10 mb-4">
                <BookOpen className="h-8 w-8 text-warning" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Resource Booking</h3>
              <p className="text-muted-foreground text-sm">
                Book labs, equipment, and study rooms easily
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students already using Campus Connect
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg"
          >
            <Link to="/dashboard">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
          </Button>
          <div className='my-3'>made with ❤️ by <strong>hackvoid</strong> for students @2025</div>
        </div>
      </section>
    </div>
  );
}
import { useState } from 'react';
import { MessageCircle, X, HelpCircle, MapPin, AlertCircle, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhatsAppAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const quickActions = [
    {
      icon: <HelpCircle className="h-5 w-5" />,
      title: language === 'en' ? 'Academic Help' : 'शैक्षणिक सहायता',
      description: language === 'en' ? 'Get help with courses' : 'पाठ्यक्रमों में सहायता प्राप्त करें',
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: language === 'en' ? 'Campus Info' : 'कैंपस जानकारी',
      description: language === 'en' ? 'Find locations & timings' : 'स्थान और समय खोजें',
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: language === 'en' ? 'Emergency' : 'आपातकाल',
      description: language === 'en' ? 'Emergency contacts' : 'आपातकालीन संपर्क',
    },
    {
      icon: <Book className="h-5 w-5" />,
      title: language === 'en' ? 'Library Support' : 'पुस्तकालय सहायता',
      description: language === 'en' ? 'Book queries' : 'पुस्तक पूछताछ',
    },
  ];

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg gradient-primary hover:shadow-xl transition-all animate-float z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Quick Actions Menu */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 p-4 shadow-xl animate-slide-in-right z-50">
          <h3 className="font-semibold mb-3 text-lg">
            {language === 'en' ? 'Quick Assistance' : 'त्वरित सहायता'}
          </h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors text-left"
              >
                <div className="text-primary mt-0.5">{action.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-sm">{action.title}</div>
                  <div className="text-xs text-muted-foreground">{action.description}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t">
            <p className="text-xs text-muted-foreground text-center">
              {language === 'en'
                ? 'Available 24/7 for your assistance'
                : 'आपकी सहायता के लिए 24/7 उपलब्ध'}
            </p>
          </div>
        </Card>
      )}
    </>
  );
};
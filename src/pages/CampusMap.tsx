import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, MapPin, Clock, Phone } from 'lucide-react';
import campusMapImage from '@/assets/campus-map.png';

export default function CampusMap() {
  const { language } = useLanguage();
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);

  const buildings = [
    {
      id: 'library',
      name: language === 'en' ? 'Central Library' : 'केंद्रीय पुस्तकालय',
      description: language === 'en' ? 'Main library with 50,000+ books' : '50,000+ पुस्तकों के साथ मुख्य पुस्तकालय',
      timings: '8:00 AM - 10:00 PM',
      contact: '+91 98765 43210',
      color: 'bg-purple-500',
    },
    {
      id: 'academic',
      name: language === 'en' ? 'Academic Block A' : 'शैक्षणिक ब्लॉक A',
      description: language === 'en' ? 'Main classrooms and lecture halls' : 'मुख्य कक्षाएं और व्याख्यान कक्ष',
      timings: '7:00 AM - 6:00 PM',
      contact: '+91 98765 43211',
      color: 'bg-blue-500',
    },
    {
      id: 'sports',
      name: language === 'en' ? 'Sports Complex' : 'खेल परिसर',
      description: language === 'en' ? 'Indoor and outdoor sports facilities' : 'इनडोर और आउटडोर खेल सुविधाएं',
      timings: '6:00 AM - 9:00 PM',
      contact: '+91 98765 43212',
      color: 'bg-green-500',
    },
    {
      id: 'hostel',
      name: language === 'en' ? 'Student Hostel' : 'छात्र छात्रावास',
      description: language === 'en' ? 'Residential accommodation for students' : 'छात्रों के लिए आवासीय आवास',
      timings: '24/7',
      contact: '+91 98765 43213',
      color: 'bg-orange-500',
    },
    {
      id: 'cafeteria',
      name: language === 'en' ? 'Cafeteria' : 'कैफेटेरिया',
      description: language === 'en' ? 'Food court and dining area' : 'फूड कोर्ट और भोजन क्षेत्र',
      timings: '7:00 AM - 10:00 PM',
      contact: '+91 98765 43214',
      color: 'bg-red-500',
    },
    {
      id: 'labs',
      name: language === 'en' ? 'Computer Labs' : 'कंप्यूटर लैब',
      description: language === 'en' ? 'State-of-the-art computer laboratories' : 'अत्याधुनिक कंप्यूटर प्रयोगशालाएं',
      timings: '8:00 AM - 8:00 PM',
      contact: '+91 98765 43215',
      color: 'bg-cyan-500',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {language === 'en' ? 'Interactive Campus Map' : 'इंटरैक्टिव कैंपस मैप'}
        </h1>
        <p className="text-muted-foreground">
          {language === 'en'
            ? 'Click on any building to view details'
            : 'विवरण देखने के लिए किसी भी इमारत पर क्लिक करें'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <Card className="lg:col-span-2 p-6">
          <div className="relative">
            <img
              src={campusMapImage}
              alt="Campus Map"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-white text-foreground shadow-lg">
                <MapPin className="h-3 w-3 mr-1" />
                {language === 'en' ? 'Interactive Map' : 'इंटरैक्टिव मैप'}
              </Badge>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              {language === 'en'
                ? '💡 Tip: Select a building from the list to see its location and details'
                : '💡 टिप: उसकी स्थिति और विवरण देखने के लिए सूची से एक इमारत चुनें'}
            </p>
          </div>
        </Card>

        {/* Buildings List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {language === 'en' ? 'Campus Buildings' : 'कैंपस भवन'}
          </h2>
          <div className="space-y-3">
            {buildings.map((building) => (
              <Card
                key={building.id}
                className={`p-4 cursor-pointer card-hover ${
                  selectedBuilding === building.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedBuilding(building.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`${building.color} text-white p-2 rounded-lg`}>
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{building.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{building.description}</p>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {building.timings}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Phone className="h-3 w-3 mr-1" />
                        {building.contact}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <Card className="mt-8 p-6">
        <h3 className="font-semibold mb-4">
          {language === 'en' ? 'Map Legend' : 'मानचित्र किंवदंती'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {buildings.map((building) => (
            <div key={building.id} className="flex items-center space-x-2">
              <div className={`${building.color} w-4 h-4 rounded`} />
              <span className="text-sm">{building.name.split(' ')[0]}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
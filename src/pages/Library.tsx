import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, BookOpen, Clock, Star, CheckCircle } from 'lucide-react';
import libraryImage from '@/assets/library.jpg';

export default function Library() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const availableBooks = [
    { title: 'Data Structures and Algorithms', author: 'Thomas H. Cormen', isbn: '978-0-262-03384-8', status: 'available', rating: 4.8 },
    { title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0-132-35088-4', status: 'available', rating: 4.7 },
    { title: 'Design Patterns', author: 'Gang of Four', isbn: '978-0-201-63361-0', status: 'available', rating: 4.6 },
    { title: 'Introduction to Algorithms', author: 'CLRS', isbn: '978-0-262-03293-3', status: 'issued', rating: 4.9 },
  ];

  const myBooks = [
    { title: 'Operating System Concepts', author: 'Silberschatz', dueDate: 'Dec 5, 2025', daysLeft: 7 },
    { title: 'Computer Networks', author: 'Tanenbaum', dueDate: 'Dec 8, 2025', daysLeft: 10 },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img src={libraryImage} alt="Library" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{t('library')}</h1>
            <p className="text-xl">{language === 'en' ? 'Your Digital Knowledge Hub' : 'आपका डिजिटल ज्ञान केंद्र'}</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <Card className="p-6 mb-8">
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder={t('searchBooks')}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>{t('search')}</Button>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="available">{t('availableBooks')}</TabsTrigger>
          <TabsTrigger value="my-books">{t('myBooks')}</TabsTrigger>
          <TabsTrigger value="recommend">{t('recommendBook')}</TabsTrigger>
        </TabsList>

        {/* Available Books */}
        <TabsContent value="available" className="space-y-4">
          {availableBooks.map((book, index) => (
            <Card key={index} className="p-6 card-hover">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>ISBN: {book.isbn}</span>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1 fill-current" />
                        {book.rating}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {book.status === 'available' ? (
                    <>
                      <Badge className="bg-success text-white">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                      <Button>{t('issueBook')}</Button>
                    </>
                  ) : (
                    <Badge variant="secondary">Issued</Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* My Books */}
        <TabsContent value="my-books" className="space-y-4">
          {myBooks.map((book, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Due: {book.dueDate} ({book.daysLeft} days left)
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">{t('returnBook')}</Button>
                  <Button>Renew</Button>
                </div>
              </div>
            </Card>
          ))}
          {myBooks.length === 0 && (
            <Card className="p-12 text-center">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">{t('noData')}</p>
            </Card>
          )}
        </TabsContent>

        {/* Recommend a Book */}
        <TabsContent value="recommend">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">{t('recommendBook')}</h3>
            <div className="space-y-4">
              <Input placeholder={language === 'en' ? 'Book Title' : 'पुस्तक शीर्षक'} />
              <Input placeholder={language === 'en' ? 'Author Name' : 'लेखक का नाम'} />
              <Input placeholder={language === 'en' ? 'ISBN (Optional)' : 'ISBN (वैकल्पिक)'} />
              <Input placeholder={language === 'en' ? 'Why recommend this book?' : 'इस पुस्तक की सिफारिश क्यों करें?'} />
              <Button className="w-full">{t('submit')}</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-purple-600">50,000+</p>
          <p className="text-sm text-muted-foreground mt-1">Total Books</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">2</p>
          <p className="text-sm text-muted-foreground mt-1">Books Issued</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-muted-foreground mt-1">Books Read</p>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-3xl font-bold text-orange-600">5</p>
          <p className="text-sm text-muted-foreground mt-1">Recommendations</p>
        </Card>
      </div>
    </div>
  );
}
export const translations = {
  en: {
    // Navigation
    home: "Home",
    dashboard: "Dashboard",
    campusMap: "Campus Map",
    library: "Library",
    sports: "Sports",
    calendar: "Calendar",
    forum: "Forum",
    mentor: "Mentor",
    bookings: "Bookings",
    notifications: "Notifications",
    
    // Home Page
    welcomeTitle: "Welcome to Campus Connect",
    welcomeSubtitle: "Your All-in-One Student Engagement Platform",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Features
    featuresTitle: "Everything You Need in One Place",
    campusMapTitle: "Interactive Campus Map",
    campusMapDesc: "Navigate your campus with ease using our interactive 2D map",
    libraryTitle: "Digital Library",
    libraryDesc: "Access thousands of books and resources online",
    sportsTitle: "Sports Facilities",
    sportsDesc: "Book grounds, view schedules, join tournaments",
    mentorTitle: "Personal Mentor",
    mentorDesc: "Get guidance from your assigned faculty mentor",
    
    // Dashboard
    quickActions: "Quick Actions",
    recentActivity: "Recent Activity",
    upcomingEvents: "Upcoming Events",
    
    // Library
    searchBooks: "Search Books",
    availableBooks: "Available Books",
    myBooks: "My Books",
    issueBook: "Issue Book",
    returnBook: "Return Book",
    recommendBook: "Recommend a Book",
    
    // Sports
    availableFacilities: "Available Facilities",
    bookFacility: "Book Facility",
    upcomingTournaments: "Upcoming Tournaments",
    myBookings: "My Bookings",
    
    // Calendar
    todayClasses: "Today's Classes",
    assignments: "Assignments",
    exams: "Exams",
    addEvent: "Add Event",
    
    // Common
    search: "Search",
    filter: "Filter",
    save: "Save",
    cancel: "Cancel",
    submit: "Submit",
    loading: "Loading...",
    noData: "No data available",
  },
  hi: {
    // Navigation
    home: "होम",
    dashboard: "डैशबोर्ड",
    campusMap: "कैंपस मैप",
    library: "पुस्तकालय",
    sports: "खेल",
    calendar: "कैलेंडर",
    forum: "फोरम",
    mentor: "मेंटर",
    bookings: "बुकिंग",
    notifications: "सूचनाएं",
    
    // Home Page
    welcomeTitle: "कैंपस कनेक्ट में आपका स्वागत है",
    welcomeSubtitle: "आपका ऑल-इन-वन छात्र सहभागिता मंच",
    getStarted: "शुरू करें",
    learnMore: "और जानें",
    
    // Features
    featuresTitle: "एक जगह पर सब कुछ",
    campusMapTitle: "इंटरैक्टिव कैंपस मैप",
    campusMapDesc: "हमारे इंटरैक्टिव 2D मैप से अपने कैंपस को आसानी से नेविगेट करें",
    libraryTitle: "डिजिटल पुस्तकालय",
    libraryDesc: "हजारों पुस्तकों और संसाधनों को ऑनलाइन एक्सेस करें",
    sportsTitle: "खेल सुविधाएं",
    sportsDesc: "मैदान बुक करें, शेड्यूल देखें, टूर्नामेंट में शामिल हों",
    mentorTitle: "व्यक्तिगत मेंटर",
    mentorDesc: "अपने नियुक्त संकाय मेंटर से मार्गदर्शन प्राप्त करें",
    
    // Dashboard
    quickActions: "त्वरित कार्य",
    recentActivity: "हाल की गतिविधि",
    upcomingEvents: "आगामी कार्यक्रम",
    
    // Library
    searchBooks: "पुस्तकें खोजें",
    availableBooks: "उपलब्ध पुस्तकें",
    myBooks: "मेरी पुस्तकें",
    issueBook: "पुस्तक जारी करें",
    returnBook: "पुस्तक वापस करें",
    recommendBook: "पुस्तक की सिफारिश करें",
    
    // Sports
    availableFacilities: "उपलब्ध सुविधाएं",
    bookFacility: "सुविधा बुक करें",
    upcomingTournaments: "आगामी टूर्नामेंट",
    myBookings: "मेरी बुकिंग",
    
    // Calendar
    todayClasses: "आज की कक्षाएं",
    assignments: "असाइनमेंट",
    exams: "परीक्षाएं",
    addEvent: "कार्यक्रम जोड़ें",
    
    // Common
    search: "खोजें",
    filter: "फ़िल्टर",
    save: "सहेजें",
    cancel: "रद्द करें",
    submit: "जमा करें",
    loading: "लोड हो रहा है...",
    noData: "कोई डेटा उपलब्ध नहीं",
  }
};

export type Language = 'en' | 'hi';
export type TranslationKey = keyof typeof translations.en;
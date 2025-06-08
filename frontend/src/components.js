import React, { useState, useEffect } from 'react';

// Mock news data for ERLC MVRP context
const mockNewsData = {
  breakingNews: [
    {
      id: 1,
      title: "BREAKING: Multi-Vehicle Accident Blocks I-95 Northbound",
      summary: "Emergency responders on scene of 5-car collision during rush hour traffic",
      time: "2 minutes ago",
      priority: "high"
    },
    {
      id: 2,
      title: "Armed Robbery Suspect Apprehended Downtown",
      summary: "Metro Police successfully arrest suspect after 3-hour manhunt",
      time: "15 minutes ago",
      priority: "high"
    },
    {
      id: 3,
      title: "Severe Weather Alert: Thunderstorms Expected",
      summary: "National Weather Service issues warning for Metro area through midnight",
      time: "32 minutes ago",
      priority: "medium"
    }
  ],
  featuredArticle: {
    id: 1,
    title: "Emergency Response Teams Deploy Advanced Technology in Metro Area",
    summary: "Local first responders implement new communication systems to improve response times across Liberty County",
    content: "In a significant step forward for public safety, Emergency Response teams across the Metro area have begun implementing cutting-edge technology...",
    image: "https://images.unsplash.com/photo-1589306284669-cacf4bdca4ce",
    author: "Sarah Mitchell",
    publishTime: "1 hour ago",
    category: "Emergency Response"
  },
  articles: [
    {
      id: 2,
      title: "Traffic Patterns Change Following Bridge Construction",
      summary: "New detour routes established on Route 15 affecting daily commuters",
      image: "https://images.pexels.com/photos/190448/pexels-photo-190448.jpeg",
      author: "Mike Rodriguez",
      publishTime: "2 hours ago",
      category: "Traffic"
    },
    {
      id: 3,
      title: "Crime Statistics Show 15% Decrease in Metro District",
      summary: "Enhanced patrol strategies contribute to safer neighborhoods",
      image: "https://images.unsplash.com/photo-1614977002641-be3a6158d136",
      author: "Jennifer Chen",
      publishTime: "4 hours ago",
      category: "Crime"
    },
    {
      id: 4,
      title: "New Ambulance Fleet Improves Response Times",
      summary: "Metro EMS introduces 8 new vehicles with latest medical equipment",
      image: "https://images.unsplash.com/photo-1537149436249-b065c9f0950e",
      author: "David Park",
      publishTime: "6 hours ago",
      category: "Emergency Response"
    },
    {
      id: 5,
      title: "Highway 101 Construction Phase 2 Begins Monday",
      summary: "Expect delays during peak hours as road improvements continue",
      image: "https://images.unsplash.com/photo-1464225951723-4cd81a298434",
      author: "Lisa Johnson",
      publishTime: "8 hours ago",
      category: "Traffic"
    },
    {
      id: 6,
      title: "Metro Police Department Receives National Recognition",
      summary: "Community policing program wins state excellence award",
      image: "https://images.pexels.com/photos/1635927/pexels-photo-1635927.jpeg",
      author: "Robert Kim",
      publishTime: "12 hours ago",
      category: "Crime"
    }
  ]
};

const categories = [
  { id: 'all', name: 'All News', icon: '📰' },
  { id: 'breaking', name: 'Breaking News', icon: '🚨' },
  { id: 'traffic', name: 'Traffic', icon: '🚗' },
  { id: 'crime', name: 'Crime', icon: '👮' },
  { id: 'emergency', name: 'Emergency Response', icon: '🚑' },
  { id: 'weather', name: 'Weather', icon: '🌤️' },
  { id: 'community', name: 'Community', icon: '🏘️' }
];

// Breaking News Ticker Component
const BreakingNewsTicker = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="bg-red-600 text-white py-2 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <div className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm mr-4 flex-shrink-0">
          BREAKING
        </div>
        <div className="flex-1 overflow-hidden">
          <div 
            className="whitespace-nowrap transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {news.map((item, index) => (
              <span key={item.id} className="inline-block w-full">
                <span className="font-semibold">{item.title}</span>
                <span className="mx-4 text-red-200">•</span>
                <span className="text-sm">{item.time}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b-4 border-blue-600">
      <div className="container mx-auto px-4">
        {/* Top bar with weather and time */}
        <div className="flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex space-x-6">
            <span>📍 Metro Area, Liberty County</span>
            <span>🌤️ 72°F Partly Cloudy</span>
          </div>
          <div className="flex space-x-4">
            <span>{new Date().toLocaleDateString()}</span>
            <span>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
          </div>
        </div>

        {/* Main header */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-blue-600">MNN</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Metro News Network</h1>
                <p className="text-sm text-gray-600">Liberty County's Trusted Source</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Live</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium">Weather</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium">Traffic</button>
              <button className="text-gray-700 hover:text-blue-600 font-medium">Contact</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-3 border-t">
          <div className="flex space-x-8 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 whitespace-nowrap font-medium py-2 transition-colors"
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

// Featured Article Component
const FeaturedArticle = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            FEATURED
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="text-white">
            <div className="flex items-center space-x-4 mb-2">
              <span className="bg-blue-600 px-2 py-1 rounded text-xs font-bold">
                {article.category}
              </span>
              <span className="text-sm">{article.publishTime}</span>
            </div>
            <h2 className="text-3xl font-bold mb-2 leading-tight">{article.title}</h2>
            <p className="text-lg text-gray-200">{article.summary}</p>
            <div className="flex items-center space-x-2 mt-3">
              <span className="text-sm">By {article.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// News Card Component
const NewsCard = ({ article }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Traffic': 'bg-orange-600',
      'Crime': 'bg-red-600',
      'Emergency Response': 'bg-green-600',
      'Weather': 'bg-blue-600',
      'Community': 'bg-purple-600'
    };
    return colors[category] || 'bg-gray-600';
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className={`${getCategoryColor(article.category)} text-white px-2 py-1 rounded text-xs font-bold`}>
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>By {article.author}</span>
          <span>{article.publishTime}</span>
        </div>
      </div>
    </article>
  );
};

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Emergency Alerts */}
      <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
        <h3 className="font-bold text-red-800 mb-2 flex items-center">
          🚨 Emergency Alerts
        </h3>
        <div className="space-y-2 text-sm">
          <div className="text-red-700">
            <strong>Traffic Alert:</strong> I-95 North blocked at Exit 12
          </div>
          <div className="text-red-700">
            <strong>Weather:</strong> Severe thunderstorm warning until 11 PM
          </div>
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-3">🌤️ Current Weather</h3>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-800">72°F</div>
          <div className="text-blue-600">Partly Cloudy</div>
          <div className="text-sm text-blue-500 mt-2">
            High: 78°F • Low: 65°F
          </div>
          <div className="text-xs text-blue-400 mt-1">
            Humidity: 65% • Wind: 8 mph
          </div>
        </div>
      </div>

      {/* Traffic Updates */}
      <div className="bg-orange-50 p-4 rounded-lg">
        <h3 className="font-bold text-orange-800 mb-3">🚗 Traffic Updates</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-orange-700">I-95 North</span>
            <span className="text-red-600 font-bold">BLOCKED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-700">Route 15</span>
            <span className="text-yellow-600 font-bold">SLOW</span>
          </div>
          <div className="flex justify-between">
            <span className="text-orange-700">Highway 101</span>
            <span className="text-green-600 font-bold">CLEAR</span>
          </div>
        </div>
      </div>

      {/* Most Read */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-gray-800 mb-3">📈 Most Read</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-start space-x-3">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">
                {num}
              </span>
              <div className="text-sm">
                <p className="text-gray-800 hover:text-blue-600 cursor-pointer">
                  {num === 1 && "Emergency Response Times Improve 20% This Quarter"}
                  {num === 2 && "New Traffic Management System Reduces Congestion"}
                  {num === 3 && "Metro Police Chief Announces Community Safety Initiative"}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  {num === 1 && "12,450 views"}
                  {num === 2 && "8,230 views"}
                  {num === 3 && "6,890 views"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MNN</h3>
            <p className="text-gray-300 text-sm">
              Metro News Network - Your trusted source for breaking news, 
              traffic updates, and emergency response coverage in Liberty County.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-white">Breaking News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Traffic Updates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Crime Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Weather</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Emergency Contacts</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Police: 911</li>
              <li className="text-gray-300">Fire Dept: 911</li>
              <li className="text-gray-300">Medical: 911</li>
              <li className="text-gray-300">Non-Emergency: (555) 123-4567</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact MNN</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">📧 news@mnn.liberty</li>
              <li className="text-gray-300">📞 (555) NEWS-MNN</li>
              <li className="text-gray-300">📍 Metro Center, Liberty County</li>
              <li className="text-gray-300">🕒 24/7 News Coverage</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Metro News Network. All rights reserved. | ERLC MVRP</p>
        </div>
      </div>
    </footer>
  );
};

// Main News Website Component
const NewsWebsite = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredArticles, setFilteredArticles] = useState(mockNewsData.articles);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredArticles(mockNewsData.articles);
    } else {
      const filtered = mockNewsData.articles.filter(article => 
        article.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'breaking' && article.category === 'Emergency Response')
      );
      setFilteredArticles(filtered);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breaking News Ticker */}
      <BreakingNewsTicker news={mockNewsData.breakingNews} />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Article */}
            <FeaturedArticle article={mockNewsData.featuredArticle} />
            
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export const Components = {
  NewsWebsite,
  Header,
  BreakingNewsTicker,
  FeaturedArticle,
  NewsCard,
  Sidebar,
  Footer
};
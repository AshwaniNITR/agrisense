'use client';

import { useState } from 'react';
import { 
  Camera, 
  Sprout, 
  TrendingUp, 
  Droplets, 
  Sun, 
  Thermometer,
  Activity,
  Upload,
  Brain,
  BarChart3,
  MapPin,
  AlertCircle,
  CheckCircle,
  Home,
  Settings,
  HelpCircle,
  LogOut,
  User,
  Bell,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Mock user data - replace with actual user data from your auth system
  const user = {
    name: "John Smith",
    email: "john.smith@farm.com",
    avatar: userImage
  };

  const handleUserImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Camera, label: 'AI Analysis' },
    { icon: MapPin, label: 'Fields' },
    { icon: Calendar, label: 'Schedule' },
    { icon: FileText, label: 'Reports' },
    { icon: Bell, label: 'Alerts' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 flex">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-2">
                <Sprout className="w-8 h-8 text-green-600" />
                <span className="text-xl font-bold text-gray-800">AgriSense AI</span>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-200"
                />
              ) : (
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleUserImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                title="Change profile picture"
              />
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">Hi,</p>
                <p className="font-semibold text-gray-800 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  item.active
                    ? 'bg-green-100 text-green-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}>
                  <item.icon className="w-5 h-5" />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors">
              <HelpCircle className="w-5 h-5" />
              {!sidebarCollapsed && <span>Help & Support</span>}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors">
              <LogOut className="w-5 h-5" />
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
                <Sprout className="w-10 h-10" />
                AgriSense AI
              </h1>
              <p className="text-green-100 text-lg">
                Intelligent farming solutions powered by AI analysis
              </p>
            </div>
            <div className="hidden md:block">
              <Brain className="w-20 h-20 opacity-20" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 rounded-lg p-3">
                <Activity className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">87%</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Crop Health</h3>
            <p className="text-sm text-gray-500">Overall field condition</p>
            <div className="w-full bg-green-100 rounded-full h-2 mt-3">
              <div className="bg-green-500 h-2 rounded-full w-[87%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">65%</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Soil Moisture</h3>
            <p className="text-sm text-gray-500">Current hydration level</p>
            <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
              <div className="bg-blue-500 h-2 rounded-full w-[65%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 rounded-lg p-3">
                <Thermometer className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-yellow-600">24°C</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Temperature</h3>
            <p className="text-sm text-gray-500">Average field temp</p>
            <div className="flex items-center mt-3 text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              Optimal range
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-orange-100 rounded-lg p-3">
                <Sun className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-orange-600">8.5h</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Sunlight</h3>
            <p className="text-sm text-gray-500">Daily exposure</p>
            <div className="flex items-center mt-3 text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Good exposure
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Image Analysis Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg border border-green-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 rounded-lg p-2">
                  <Camera className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">AI Crop Analysis</h2>
              </div>
              
              <div className="border-2 border-dashed border-green-300 rounded-xl p-12 text-center mb-6 hover:border-green-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <div className="bg-green-100 rounded-full p-6">
                    <Upload className="w-12 h-12 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-700 mb-2">
                      Upload Crop Image
                    </p>
                    <p className="text-gray-500">
                      Get instant AI-powered analysis and recommendations
                    </p>
                  </div>
                </label>
              </div>

              {selectedImage && (
                <div className="bg-green-50 rounded-lg p-4 mb-6">
                  <p className="text-green-700 font-medium">
                    📸 Image selected: {selectedImage.name}
                  </p>
                  <button className="mt-3 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Analyze Image
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-700">AI Features</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Disease detection</li>
                    <li>• Pest identification</li>
                    <li>• Growth stage analysis</li>
                    <li>• Nutrient deficiency</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-700">Analysis</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Detailed reports</li>
                    <li>• Treatment suggestions</li>
                    <li>• Growth predictions</li>
                    <li>• Yield optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Recent Activity & Alerts */}
          <div className="space-y-6">
            {/* Field Overview */}
            <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold text-gray-800">Field Status</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">North Field</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">South Field</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                    Monitor
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">East Field</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Excellent
                  </span>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-xl shadow-lg border border-orange-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-800">Active Alerts</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                  <p className="text-sm font-medium text-yellow-800">
                    Irrigation Reminder
                  </p>
                  <p className="text-xs text-yellow-600">
                    South field moisture below optimal
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                  <p className="text-sm font-medium text-blue-800">
                    Weather Update
                  </p>
                  <p className="text-xs text-blue-600">
                    Rain expected tomorrow afternoon
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                  Schedule Irrigation
                </button>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Weather Forecast
                </button>
                <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Analyses */}
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-green-100 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent AI Analyses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Tomato Field A</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Healthy growth detected. No diseases found.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Wheat Field B</p>
                  <p className="text-sm text-gray-500">5 hours ago</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Minor nutrient deficiency detected. Treatment recommended.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Corn Field C</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Excellent growth rate. Harvest prediction: 3 weeks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
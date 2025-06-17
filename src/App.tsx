import React, { useState, useEffect } from 'react';
import { RotateCcw, Lock } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    applicationNumber: '',
    password: '',
    captcha: ''
  });

  const [captchaText, setCaptchaText] = useState('');

  // Generate random CAPTCHA text
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setFormData(prev => ({ ...prev, captcha: '' }));
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to backend authentication service
    // Example: await authenticateUser(formData.applicationNumber, formData.password);
    
    console.log('Login attempt:', {
      applicationNumber: formData.applicationNumber,
      password: '***hidden***',
      captcha: formData.captcha,
      expectedCaptcha: captchaText
    });
    
    // TODO: Handle authentication logic
    // - Verify CAPTCHA matches
    // - Authenticate with backend
    // - Redirect to result page on success
    // - Show error messages on failure
    
    alert('Login functionality would be implemented here with backend integration');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Government logo and text */}
            <div className="flex items-center">
              <img 
                src="/mhrdNewNeet.png" 
                alt="Department of Higher Education, Ministry of Education, Government of India"
                className="h-16 w-auto mr-4"
              />
            </div>

            {/* Center - Main title */}
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">
                National Eligibility Cum Entrance Test (UG) - 2025
              </h1>
              <h2 className="text-lg font-semibold text-gray-700">Score Card</h2>
            </div>

            {/* Right side - NTA and NMC logos */}
            <div className="flex items-center">
              <img 
                src="/NeetLogo.png" 
                alt="National Testing Agency and National Medical Commission"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dark blue separator */}
      <div className="bg-blue-900 h-8"></div>

      {/* Main Content */}
      <div className="flex justify-center py-12">
        <div className="w-full max-w-lg">
          {/* Login Form Card */}
          <div className="bg-white border border-gray-300 shadow-sm">
            {/* Header with lock icon */}
            <div className="bg-blue-900 text-white px-4 py-3 flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              <span className="font-semibold">View Result</span>
            </div>

            {/* Form Body */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Application Number */}
                <div className="flex items-center">
                  <label className="w-40 text-sm text-gray-700 font-medium">
                    Application Number :
                  </label>
                  <input
                    type="text"
                    value={formData.applicationNumber}
                    onChange={(e) => handleInputChange('applicationNumber', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 bg-blue-50 focus:outline-none focus:border-blue-500"
                    placeholder="250410611921"
                  />
                </div>

                {/* Password */}
                <div className="flex items-center">
                  <label className="w-40 text-sm text-gray-700 font-medium">
                    Password :
                  </label>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 bg-blue-50 focus:outline-none focus:border-blue-500"
                    placeholder="••••••••••••"
                  />
                </div>

                {/* CAPTCHA Label */}
                <div className="flex items-center">
                  <label className="w-40 text-sm text-gray-700 font-medium">
                    Enter CAPTCHA<span className="text-green-600">(case sensitive)</span> :
                  </label>
                  <input
                    type="text"
                    value={formData.captcha}
                    onChange={(e) => handleInputChange('captcha', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 bg-blue-50 focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* CAPTCHA Display */}
                <div className="flex items-center">
                  <label className="w-40 text-sm text-gray-700 font-medium">
                    CAPTCHA :
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-800 text-white px-4 py-2 font-mono text-lg font-bold tracking-wider">
                      {captchaText}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="p-2 text-green-600 hover:text-green-700 transition-colors"
                      title="Refresh CAPTCHA"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Login Button and Forgot Password */}
                <div className="flex items-center justify-between pt-4">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 font-semibold transition-colors"
                  >
                    LOGIN
                  </button>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Implement forgot password functionality
                      alert('Forgot password functionality would be implemented here');
                    }}
                  >
                    Forgot Password ?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
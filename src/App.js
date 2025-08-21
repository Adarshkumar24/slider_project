import React, { useState } from "react";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaBell, FaCheck } from "react-icons/fa";

const App = () => {
  const [formdata, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "US",
    streetAddress: "",
    city: "",
    state: "",
    postalcode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changehandeler(event) {
    const { name, value, checked, type } = event.target;
    setformData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submithandeler(event) {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form Data Submitted:", formdata);
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setformData({
          firstname: "",
          lastname: "",
          email: "",
          country: "US",
          streetAddress: "",
          city: "",
          state: "",
          postalcode: "",
          comments: false,
          candidates: false,
          offers: false,
          pushnotification: "",
        });
      }, 3000);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Success Message */}
        {isSubmitted && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/30 shadow-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
              <p className="text-gray-300">Your form has been submitted successfully.</p>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              User Registration
            </span>
          </h1>
          <p className="text-xl text-gray-300">Join our community with this beautiful form</p>
        </div>

        {/* Form Container */}
        <form onSubmit={submithandeler} className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Name */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-semibold text-lg">
                <FaUser className="mr-3 text-blue-400" />
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Adarsh"
                value={formdata.firstname}
                onChange={changehandeler}
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-semibold text-lg">
                <FaUser className="mr-3 text-blue-400" />
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Pradhan"
                value={formdata.lastname}
                onChange={changehandeler}
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2 mb-8">
            <label className="flex items-center text-white font-semibold text-lg">
              <FaEnvelope className="mr-3 text-purple-400" />
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="adarsh@example.com"
              value={formdata.email}
              onChange={changehandeler}
              className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              required
            />
          </div>

          {/* Country */}
          <div className="space-y-2 mb-8">
            <label className="flex items-center text-white font-semibold text-lg">
              <FaMapMarkerAlt className="mr-3 text-pink-400" />
              Country
            </label>
            <select
              name="country"
              value={formdata.country}
              onChange={changehandeler}
              className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            >
              <option value="India" className="bg-gray-800">India</option>
              <option value="Canada" className="bg-gray-800">Canada</option>
              <option value="Mexico" className="bg-gray-800">Mexico</option>
              <option value="US" className="bg-gray-800">United States</option>
            </select>
          </div>

          {/* Address Section */}
          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-bold text-white border-b border-white/20 pb-2">Address Details</h3>
            
            {/* Street Address */}
            <div className="space-y-2">
              <label className="flex items-center text-white font-semibold">
                <FaMapMarkerAlt className="mr-3 text-green-400" />
                Street Address
              </label>
              <input
                type="text"
                name="streetAddress"
                placeholder="B-25C, Sector 12"
                value={formdata.streetAddress}
                onChange={changehandeler}
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white font-semibold">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formdata.city}
                  onChange={changehandeler}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white font-semibold">State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Bihar"
                  value={formdata.state}
                  onChange={changehandeler}
                  className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Postal Code */}
            <div className="space-y-2">
              <label className="text-white font-semibold">Postal Code</label>
              <input
                type="text"
                name="postalcode"
                placeholder="110001"
                value={formdata.postalcode}
                onChange={changehandeler}
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Email Preferences */}
          <div className="space-y-6 mb-8">
            <h3 className="flex items-center text-xl font-bold text-white border-b border-white/20 pb-2">
              <FaEnvelope className="mr-3 text-blue-400" />
              Email Preferences
            </h3>
            
            <div className="space-y-4">
              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="checkbox"
                  name="comments"
                  checked={formdata.comments}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 rounded focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">Get notified about comments</span>
              </label>

              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="checkbox"
                  name="candidates"
                  checked={formdata.candidates}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 rounded focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">Get notified about new candidates</span>
              </label>

              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="checkbox"
                  name="offers"
                  checked={formdata.offers}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 rounded focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">Receive special offers</span>
              </label>
            </div>
          </div>

          {/* Push Notifications */}
          <div className="space-y-6 mb-8">
            <h3 className="flex items-center text-xl font-bold text-white border-b border-white/20 pb-2">
              <FaBell className="mr-3 text-yellow-400" />
              Push Notifications
            </h3>
            <p className="text-gray-300 text-sm">These are delivered via SMS to your mobile phone.</p>

            <div className="space-y-4">
              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="radio"
                  name="pushnotification"
                  value="everything"
                  checked={formdata.pushnotification === "everything"}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">Everything</span>
              </label>

              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="radio"
                  name="pushnotification"
                  value="same as email"
                  checked={formdata.pushnotification === "same as email"}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">Same as Email</span>
              </label>

              <label className="flex items-center text-white cursor-pointer group">
                <input
                  type="radio"
                  name="pushnotification"
                  value="no push"
                  checked={formdata.pushnotification === "no push"}
                  onChange={changehandeler}
                  className="w-5 h-5 text-purple-400 bg-white/10 border-white/20 focus:ring-purple-400 focus:ring-2 mr-4"
                />
                <span className="group-hover:text-purple-300 transition-colors">No Push Notifications</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Saving...
              </div>
            ) : (
              'Save Information'
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Your information is secure and will never be shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

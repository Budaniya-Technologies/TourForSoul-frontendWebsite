import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required!';
      isValid = false;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Valid email is required!';
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required!';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulating form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setLoading(false);
        
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 2000); // Simulated delay
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Contact Us</h2>

        {isSubmitted && (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
            <p>Your message has been sent successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="peer block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
            >
              Your Name
            </label>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="peer block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
            >
              Your Email
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="peer block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500"
            >
              Your Message
            </label>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-all ${
                loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

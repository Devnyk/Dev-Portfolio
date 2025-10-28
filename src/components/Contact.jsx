import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme(); // Use the theme context
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Copy to clipboard function
  const copyToClipboard = async (text, itemType) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedItem(itemType);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  // Redirect to LinkedIn
  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/debasish-nayak1/', '_blank');
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setShowSuccessModal(false);
  };



  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: 'Email',
      value: 'debasishnayak3110@gmail.com',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7008029540',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Location',
      value: 'Odisha, India',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'debasish-nayak1',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600 dark:text-blue-400'
    }
  ];

  // Theme-based styles using Tailwind's dark: prefix for consistency
  const themeClasses = {
    section: "py-8 lg:py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-all duration-500",
    title: "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white",
    accent: "w-24 h-1 mx-auto rounded bg-blue-600 dark:bg-blue-400",
    subtitle: "text-xl lg:text-2xl font-semibold mb-8 lg:mb-12 text-gray-900 dark:text-white",
    iconBg: "w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm dark:shadow-none",
    iconColor: "text-gray-600 dark:text-gray-400",
    labelText: "text-xs font-medium text-gray-500 dark:text-gray-400 mb-0.5 leading-tight",
    valueText: "text-sm lg:text-base text-gray-900 dark:text-white font-medium",
    formBg: "p-6 lg:p-8 rounded-xl shadow-lg dark:shadow-2xl bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 relative",
    formTitle: "text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-gray-900 dark:text-white",
    label: "block text-sm mb-2 text-gray-700 dark:text-gray-300 font-medium",
    input: "w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-gray-800 transition-colors duration-300",
    submitBtn: isSubmitting 
      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed text-gray-600 dark:text-gray-300' 
      : 'bg-blue-600 text-white hover:bg-blue-700',
    successModal: "absolute inset-0 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-600/30 rounded-xl p-8 flex flex-col items-center justify-center text-center backdrop-blur-sm animate-fade-in",
    successTitle: "text-xl font-semibold text-gray-900 dark:text-white mb-2",
    successText: "text-gray-600 dark:text-gray-300 mb-6"
  };

  return (
    <section id="contact" className={themeClasses.section}>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className={themeClasses.title}>Contact Me</h2>
          <div className={themeClasses.accent}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-start max-w-5xl mx-auto">
          {/* Left Side - Contact Details */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <h3 className={themeClasses.subtitle}>Get In Touch</h3>
            </div>
            
            <div className="space-y-6 lg:space-y-8">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 lg:space-x-6">
                  {/* Icon Circle with colored background */}
                  <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className={themeClasses.labelText}>{item.label}</h4>
                    {item.label === 'Location' ? (
                      <p className={`${themeClasses.valueText}`}>
                        {item.value}
                      </p>
                    ) : (
                      <div className="flex items-center gap-1">
                        <p className={`${themeClasses.valueText} ${item.label === 'LinkedIn' ? '' : 'break-all'}`}>
                          {item.value}
                        </p>
                        
                        {/* Action Icon - positioned right after text */}
                        {item.label === 'LinkedIn' ? (
                          <button
                            onClick={redirectToLinkedIn}
                            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group flex-shrink-0"
                            title="Visit LinkedIn Profile"
                          >
                            <i className="ri-external-link-line text-gray-400 dark:text-gray-500 text-base group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200"></i>
                          </button>
                        ) : (
                          <button
                            onClick={() => copyToClipboard(item.value, item.label)}
                            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group flex-shrink-0"
                            title={copiedItem === item.label ? "Copied!" : `Copy ${item.label}`}
                          >
                            <i className={`${copiedItem === item.label ? 'ri-check-line text-green-500' : 'ri-file-copy-line text-gray-400 dark:text-gray-500'} text-base group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200`}></i>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className={themeClasses.formBg}>
              {/* Form Content */}
              <div className={`transition-opacity duration-300 ${showSuccessModal ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <h3 className={themeClasses.formTitle}>Send Me a Message</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={themeClasses.label}>
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} py-2.5`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={themeClasses.label}>
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`${themeClasses.input} py-2.5`}
                        placeholder="Your email"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={themeClasses.label}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${themeClasses.input} resize-none py-2.5`}
                      rows="3"
                      placeholder="Your message"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full py-2.5 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${themeClasses.submitBtn}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-gray-300"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Submit Message</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Success Modal */}
              {showSuccessModal && (
                <div className={themeClasses.successModal}>
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  
                  <h4 className={themeClasses.successTitle}>Message Sent Successfully!</h4>
                  <p className={themeClasses.successText}>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  
                  <button
                    onClick={handleSendAnother}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
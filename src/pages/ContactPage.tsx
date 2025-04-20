import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage({ type: 'error', text: 'Please fill out all required fields.' });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // In a real implementation, you would send the form data to a server
      // For this demo, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitMessage({ 
        type: 'success', 
        text: 'Thank you for your message! I\'ll get back to you soon.' 
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'There was a problem sending your message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Contact Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-700"
            >
              Have a question or want to work together? I'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-1"
              >
                <div className="bg-blue-600 text-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <p className="mb-8">Feel free to reach out through any of these channels. I'm always interested in new opportunities and connections.</p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="p-3 bg-blue-500 rounded-full mr-4">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm mb-1">Email</p>
                          <a 
                            href="mailto:contact@sandeeppolsani.online" 
                            className="text-white hover:underline"
                          >
                            contact@sandeeppolsani.online
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-3 bg-blue-500 rounded-full mr-4">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm mb-1">Phone</p>
                          <a 
                            href="tel:+11234567890" 
                            className="text-white hover:underline"
                          >
                            +1 (123) 456-7890
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="p-3 bg-blue-500 rounded-full mr-4">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-blue-200 text-sm mb-1">Location</p>
                          <p className="text-white">San Francisco, CA</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-blue-500">
                      <p className="text-blue-200 mb-4">Connect with me</p>
                      <div className="flex space-x-4">
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300"
                        >
                          <Linkedin className="h-6 w-6" />
                        </a>
                        <a 
                          href="https://twitter.com" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="p-3 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors duration-300"
                        >
                          <Twitter className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                  
                  {submitMessage && (
                    <div 
                      className={`p-4 mb-6 rounded-lg ${
                        submitMessage.type === 'success' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {submitMessage.text}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                variants={fadeIn}
                className="text-lg text-gray-700"
              >
                Here are answers to some common questions about my services and experience.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">What services do you offer?</h3>
                <p className="text-gray-700">I specialize in cloud architecture, DevOps implementation, data engineering, and full-stack development. My services include cloud migration, infrastructure design, CI/CD pipeline setup, and custom application development.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with clients remotely?</h3>
                <p className="text-gray-700">Yes, I work with clients globally. Remote collaboration has been a core part of my process for years, and I have established effective communication and project management practices for remote work.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">What is your typical project process?</h3>
                <p className="text-gray-700">My process typically begins with a thorough discovery session to understand your requirements, followed by planning, design, implementation, and testing phases. I emphasize clear communication throughout and provide regular updates on progress.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">How do you handle project pricing?</h3>
                <p className="text-gray-700">Project pricing depends on scope, complexity, and timeline. I offer both fixed-price projects and hourly-based consulting. After our initial consultation, I'll provide a detailed proposal with transparent pricing.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
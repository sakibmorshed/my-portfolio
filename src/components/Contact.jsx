import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation - check for empty fields
    if (!formData.name.trim()) {
      toast.error('❌ Please enter your name', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        progressStyle: {
          background: 'rgba(255, 255, 255, 0.3)',
        }
      });
      return;
    }

    if (!formData.email.trim()) {
      toast.error('❌ Please enter your email address', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        progressStyle: {
          background: 'rgba(255, 255, 255, 0.3)',
        }
      });
      return;
    }

    if (!formData.message.trim()) {
      toast.error('❌ Please write a message', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        progressStyle: {
          background: 'rgba(255, 255, 255, 0.3)',
        }
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('❌ Please enter a valid email address', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
          color: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        progressStyle: {
          background: 'rgba(255, 255, 255, 0.3)',
        }
      });
      return;
    }

    emailjs.send(
  'service_5bt0fzh',
  'template_xxvp69s',
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
 '6xyVducOgdJRfXlGf'
)

      .then(() => {
        // Show success toast with custom styling
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          progressStyle: {
            background: 'rgba(255, 255, 255, 0.3)',
          }
        });
        
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        toast.error('❌ Failed to send message. Please try again or contact me directly.', {
          position: "top-right",
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(255, 107, 107, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          progressStyle: {
            background: 'rgba(255, 255, 255, 0.3)',
          }
        });
      });
  };

  return (
    <section
      className="py-24 px-6 relative bg-white/50 dark:bg-[#0a0a0a]"
      id="contacts"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-16 group">
          <div className="w-12 h-[2px] bg-primary group-hover:w-20 transition-all duration-300"></div>
          <span className="font-mono text-primary text-lg font-bold">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's work together
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 text-primary">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email me at
                  </p>
                  <a
                    href="mailto:sakibmorshed69@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    sakibmorshed69@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-white/5 text-primary">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Call me at
                  </p>
                  <a
                    href="tel:+8801979761691"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    +880 197 9761691
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-8 border-t border-gray-200 dark:border-white/10">
              <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4">
                Social Profiles
              </p>
              <div className="flex items-center gap-4">
              
                 <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all" href="https://www.facebook.com/sakib.morshed.5/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all" href="https://github.com/sakibmorshed" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all" href="https://www.linkedin.com/in/sakibmorshed/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name...."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1"
              >
                Send Message
                <i className="fa-solid fa-paper-plane ml-2"></i>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

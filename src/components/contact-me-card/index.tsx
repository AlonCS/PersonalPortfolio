import { Fragment, useState, FormEvent, ChangeEvent } from 'react';
import { skeleton } from '../../utils';

const ContactMeCard = ({
  loading,
}: {
  loading: boolean;
}): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Add proper type for the change event
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Add proper type for the form event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setFormStatus('Sending...');
    
    try {
      // Replace this URL with your actual Formspree form ID
      // Visit https://formspree.io/ to sign up for a free account
      // and create a form to get your unique form ID
      const formspreeUrl = 'https://formspree.io/f/movdjbdb';
      
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
      
      console.log('Message sent successfully!');
      setFormStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
      
    } catch (error: unknown) {
      console.error('Failed to send message:', error);
      // Properly handle the error type
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setFormStatus(`Failed to send message: ${errorMessage}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Contact me
                      </span>
                    )}
                  </h5>
                </div>
                
                <div className="col-span-2">
                  <p className="mb-5 text-base-content opacity-60">
                    If you have any questions, feel free to provide your information.
                  </p>
                  
                  {formStatus && (
                    <div className={`alert ${formStatus.includes('success') ? 'alert-success' : 'alert-error'} mb-5`}>
                      {formStatus}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="first name"
                          className="w-full p-2 border-b border-base-300 bg-transparent focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="last name"
                          className="w-full p-2 border-b border-base-300 bg-transparent focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        className="w-full p-2 border-b border-base-300 bg-transparent focus:outline-none"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message.."
                        rows={4}
                        className="w-full p-2 border-b border-base-300 bg-transparent focus:outline-none resize-none"
                        required
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        className="btn bg-neutral text-neutral-content"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactMeCard;
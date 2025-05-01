import { useState, FormEvent, ChangeEvent } from 'react';

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
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setFormStatus('Sending...');
    
    try {
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
      
      setFormStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormStatus('');
      }, 5000);
      
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setFormStatus(`Failed to send message: ${errorMessage}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              <div className="w-32 h-8 bg-base-300 animate-pulse rounded"></div>
            ) : (
              <span className="text-base-content opacity-70">Contact me</span>
            )}
          </h5>
        </div>
        <div className="text-base-content text-opacity-60">
          <div className="my-2 mx-4">
            <p className="mb-4">
              If you have any questions, feel free to provide your information.
            </p>
            
            {formStatus && (
              <div className={`alert ${formStatus.includes('success') ? 'alert-success' : 'alert-error'} mb-4`}>
                {formStatus}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
              
              <div className="mb-4">
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
              
              <div className="mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
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
  );
};

export default ContactMeCard;
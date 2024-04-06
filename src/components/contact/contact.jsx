
import BannerImage from '../../../images/education-4796952_1280.jpg'; // Import your banner image


const ContactUs = () => {
    return (
      <div className="bg-gray-100">
        {/* Banner Section */}
        <div
          className="bg-cover bg-center h-96 flex items-center justify-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <h1 className="text-4xl text-white font-bold">Contact Us</h1>
        </div>
  
        {/* Contact Information Section */}
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            For inquiries or assistance, please feel free to reach out to us through the following channels:
          </p>
          <p className="text-lg text-gray-700">Email: contact@example.com</p>
          <p className="text-lg text-gray-700">Phone: +1234567890</p>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
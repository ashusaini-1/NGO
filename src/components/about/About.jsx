// AboutUsPage.js

import BannerImage from '../../../images/education-4796952_1280.jpg'; // Import your banner image

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <h1 className="text-4xl text-white font-bold">About Us</h1>
      </div>

      {/* About Content Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt feugiat nulla, nec rhoncus lacus consequat sed. Integer congue tortor at libero convallis venenatis. Proin suscipit, ex vel luctus laoreet, magna magna facilisis dui, non ultricies odio turpis vel risus.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

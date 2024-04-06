
const socialMediaLinks = [
  { id: 1, icon: 'fab fa-facebook', url: '#' },
  { id: 2, icon: 'fab fa-twitter', url: '#' },
  { id: 3, icon: 'fab fa-instagram', url: '#' },
  { id: 4, icon: 'fab fa-linkedin', url: '#' },
];

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Section */}
          <div className="text-center md:text-left mb-4">
            <h3 className="text-xl font-semibold mb-2">Company Name</h3>
            <p className="mb-4">A brief description of the company goes here.</p>
            <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
              {/* {dummyLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="text-white hover:text-gray-400">{link.label}</a>
                </li>
              ))} */}
            </ul>
          </div>

          {/* Middle Section */}
          <div className="text-center md:text-left mb-4">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">City, Country</p>
            <p className="mb-2">Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-left mb-4">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <ul className="flex justify-center md:justify-start space-x-4">
              {socialMediaLinks.map((social) => (
                <li key={social.id}>
                  <a href={social.url} className="text-white hover:text-gray-400">
                    <i className={social.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

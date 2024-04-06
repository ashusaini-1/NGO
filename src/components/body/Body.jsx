import Footer from "../footer/Footer";
import Header from "../header/Header";

const authors = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Alice Smith",
    avatar: "https://via.placeholder.com/150",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];


const Body = () => {
  return (
    <div>
    <Header/>
      <div className="container-body bg-cover bg-center sm:bg-cover h-screen">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-7xl font-bold mb-4 text-white">Astha</h1>
          <h3 className="text-5xl mb-2 text-white">Charity Bootstrap 5 Template</h3>
          <p className="text-center mb-4 text-white text-3xl">
            Astha is the name of a million of helping hands. It is an excellent
            design for charity, fundraising, social welfare, and crowdfunding.
          </p>
          <button className="bg-white-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            View Demo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 top-10">
      {authors.map((author,index) => (
      <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mb-8" key={index}>
      <img
        className="w-32 h-32 mx-auto mt-4 rounded-full"
        src={author.avatar}
        alt={author.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{author.name}</div>
        <p className="text-gray-700 text-base">{author.bio}</p>
      </div>
    </div>


      </>
      ))}
    </div>
      <Footer />
    </div>
  );
};

export default Body;

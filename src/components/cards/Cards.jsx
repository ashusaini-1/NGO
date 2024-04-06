import data from "../data.json";

const Cards = () => {

  console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {data.data.map((item, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={item.img_src} alt="img" className="w-full h-48 object-cover object-center" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
          <p className="text-gray-700">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default Cards;

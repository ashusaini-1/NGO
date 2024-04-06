// BlogDetail.js

const DetailBlog = () => {
  const post = {
    id: 1,
    title: "Addressing Hunger Crisis: A Global Challenge",
    author: "John Doe",
    date: "March 27, 2024",
    content: `
        Hunger is a pressing issue affecting millions of people around the world. It is not just about the lack of food; it's a complex phenomenon driven by various factors such as poverty, conflict, climate change, and inequalities.
  
        According to the latest reports from the World Food Programme (WFP), more than 820 million people globally suffer from chronic undernourishment. This means that one in every nine people does not have enough food to lead a healthy, active life. The majority of these individuals live in developing countries, particularly in sub-Saharan Africa and South Asia.
  
        Hunger not only leads to physical health problems but also has profound social and economic consequences. Malnutrition, especially in children, can result in stunted growth, impaired cognitive development, and increased susceptibility to diseases. In addition, hunger perpetuates the cycle of poverty by hindering education and productivity, trapping individuals and communities in a cycle of deprivation.
  
        Addressing the hunger crisis requires a multifaceted approach that combines immediate food assistance with long-term strategies for sustainable development. Organizations like the WFP play a crucial role in providing emergency food aid to vulnerable populations affected by conflicts, natural disasters, and other crises. However, sustainable solutions also involve empowering communities through education, improving agricultural practices, and promoting inclusive economic growth.
  
        Moreover, tackling hunger requires addressing its root causes, such as poverty and inequality. This entails implementing policies that promote social protection, access to resources, and equitable distribution of wealth. It also involves addressing structural issues such as land rights, gender inequality, and lack of access to basic services.
  
        In recent years, there have been promising initiatives aimed at ending hunger and achieving food security for all, such as the United Nations Sustainable Development Goals (SDGs). Goal 2 of the SDGs aims to "end hunger, achieve food security and improved nutrition, and promote sustainable agriculture" by 2030. However, achieving this goal requires concerted efforts from governments, international organizations, civil society, and the private sector.
  
        As individuals, we can also contribute to addressing the hunger crisis by raising awareness, supporting organizations working in the field, and advocating for policies that prioritize food security and nutrition. By coming together and taking collective action, we can work towards a world where no one goes to bed hungry.
      `,
    // User logo image URL
    userLogo: "https://via.placeholder.com/150",
  };

  // Check if the received ID matches the ID of the blog post

  return (
    <div className="container mx-auto py-12">
      <div className="bg-white shadow rounded-md p-6">
        <div className="flex items-center mb-6">
          <img
            src={post.userLogo}
            alt="User Logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
            <p className="text-gray-600 mb-1">
              {post.author} - {post.date}
            </p>
            {/* Add like, dislike, and share buttons here */}
            <div className="flex space-x-4">
              <button className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10">
                <i className="far fa-thumbs-up text-gray-600"></i>
              </button>
              <button className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10">
                <i className="far fa-thumbs-down text-gray-600"></i>
              </button>
              <button className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10">
                <i className="far fa-share-square text-gray-600"></i>
              </button>
            </div>
          </div>
        </div>
        <p className="text-gray-800">{post.content}</p>
      </div>
    </div>
  );
};

export default DetailBlog;

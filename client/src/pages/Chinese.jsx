import { Link } from 'react-router-dom';


const jobs = [
    { 
      id: 1, 
      title: "出纳员 / cashier",
      description: "我们正在寻找一位可靠且友好的收银员加入我们的团队。职责： 处理交易，提供优质的客户服务。灵活可变的时间表。不需要以前的经验。请致电：999-999-9999 询问马克。 / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, ask Mark."
   },
  
    { 
      id: 2, 
      title: "厨房帮手 / helper on the kitchen",
      description: '高档餐厅寻找全职洗碗机。打电话或发短信：***，询问戴安娜 / Upscale restaurant looking for a dishwasher, full time. Call or text: ***, ask Diana'
    },
    { 
      id: 3, 
      title: '保姆 / babysitter',
      description: "寻找有经验和推荐的住家保姆。两个孩子：2岁和5岁。曼哈顿。问莉娜：**** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan. Ask Lina: ****"
    }
  ];
  
  const Chinese = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600"> 工作 / Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          回去 / Go back
          </button>
        </Link>
      </div>
        {jobs.map(job => (
          <div key={job.id} className="my-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-lg text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Chinese;
  
import { Link } from 'react-router-dom';
import Job from "../components/Job"

const jobs = [
  { 
    id: 1, 
    title: "thu ngân / cashier",
    description: "Chúng tôi đang tìm kiếm một Nhân viên thu ngân đáng tin cậy và thân thiện để tham gia vào nhóm của chúng tôi. Trách nhiệm: Xử lý các giao dịch, cung cấp dịch vụ khách hàng xuất sắc. Kế hoạch linh hoạt. Kinh nghiệm trước đây không cần thiết. Vui lòng gọi: 999-999-9999 và hỏi Mark. / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, ask Mark."
  },
  { 
    id: 2, 
    title: "người rửa bát/ dishwasher",
    description: 'Nhà hàng pscale đang tìm nhân viên rửa chén, làm việc toàn thời gian. Gọi hoặc nhắn tin: ***, hỏi Diana / Upscale restaurant looking for a dishwasher, full time. Call or text: ***, ask Diana'
  },
  { 
    id: 3, 
    title: 'người trông trẻ / babysitter',
    description: "đang tìm người giữ trẻ tại nhà có kinh nghiệm và giới thiệu. Hai đứa trẻ: 2 và 5 tuổi. Manhattan / Hỏi Lina: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan / Ask Lina: ****"
  }
];

const Vietnamese = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600">Việc làm/ Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Quay lại / Go back
          </button>
        </Link>
      </div>
      {jobs.map(job => (
        <Job key={job.id} title={job.title} description={job.description} />
      ))}
    </div>
  );
};

export default Vietnamese;


const jobs = [
    { 
      id: 1, 
      title: "thu ngân / cashier",
      description: "Chúng tôi đang tìm kiếm một Nhân viên thu ngân đáng tin cậy và thân thiện để tham gia vào nhóm của chúng tôi. Trách nhiệm: Xử lý các giao dịch, cung cấp dịch vụ khách hàng xuất sắc. Kế hoạch linh hoạt. Kinh nghiệm trước đây không cần thiết. Vui lòng gọi: 999-999-9999 và hỏi Mark. / We are looking for a reliable and friendly Cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience not required. Please call: 999-999-9999 and ask Mark."
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
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Jobs / Việc làm</h2>
        {jobs.map(job => (
          <div key={job.id} className="my-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-lg text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Vietnamese;
  
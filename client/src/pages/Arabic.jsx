import { Link } from 'react-router-dom';

const jobs = [
  { 
    id: 1, 
    title: "أمين الصندوق / cashier",
    description: "نحن نبحث عن أمين صندوق موثوق وودود للانضمام إلى فريقنا. المسؤوليات: التعامل مع المعاملات وتقديم خدمة عملاء ممتازة. جدول مرن. الخبرة السابقة غير مطلوبة. من فضلك اتصل بالرقم: 999-999-9999 واسأل مارك. / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, ask Mark."
  },
  { 
    id: 2, 
    title: 'مساعد في المطبخ/ helper on the kitchen',
    description: '  / مطعم راقي يبحث عن مساعد في المطبخ، دوام كامل. اتصل أو أرسل رسالة نصية: ***، اسأل ديانا/ Upscale restaurant looking for a helper on the kitchen, full time. Call or text: ***, ask Diana'
  },
  { 
    id: 3, 
    title: 'جليسه/ babysitter',
    description: 'مطلوب جليسة أطفال مقيمة لديها الخبرة والتوصيات. طفلين: 2 و 5 سنوات. مانهاتن / اسأل لينا: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan. Ask Lina: ****'
  }
];

const Arabic = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600"> وظائف / Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          عُد / Go back
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

export default Arabic;

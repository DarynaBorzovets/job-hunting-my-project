
const jobs = [
  { 
    id: 1, 
    title: "أمين الصندوق / cashier",
    description: "نحن نبحث عن أمين صندوق موثوق وودود للانضمام إلى فريقنا. المسؤوليات: التعامل مع المعاملات وتقديم خدمة عملاء ممتازة. جدول مرن. الخبرة السابقة غير مطلوبة. من فضلك اتصل بالرقم: 999-999-9999 واسأل مارك. / We are looking for a reliable and friendly Cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience not required. Please call: 999-999-9999 and ask Mark."
 },

  { 
    id: 2, 
    title: 'غسالة الأواني / dishwasher',
    description: ' مطعم راقي يبحث عن غسالة أطباق بدوام كامل. اتصل أو أرسل رسالة نصية: ***، اسأل ديانا / Upscale restaurant looking for a dishwasher, full time. Call or text: ***, ask Diana'
  },
  { 
    id: 3, 
    title: 'جليسه/ babysitter',
    description: 'مطلوب جليسة أطفال مقيمة لديها الخبرة والتوصيات. طفلين: 2 و 5 سنوات. مانهاتن / اسأل لينا: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan / Ask Lina: ****'
  }
];

const Arabic = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-purple-400">Jobs / وظائف</h2>
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

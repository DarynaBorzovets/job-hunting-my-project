
const jobs = [
    { 
      id: 1, 
      title: "кассир / cashier",
      description: " Мы ищем надежного и дружелюбного кассира в нашу команду. Обязанности: Проводить транзакции, обеспечивать высокий уровень обслуживания клиентов. Гибкий график. Предыдущий опыт не обязателен. Пожалуйста, звоните: 999-999-9999, Марк. / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, Mark."
   },
  
    { 
      id: 2, 
      title: "помощник на кухне /  helper on the kitchen",
      description: 'Престижный ресторан ищет помощника на кухню, полную занятость. Звоните или пишите по номеру: ****, спросите Диану. / Upscale restaurant looking for a helper on the kitchen, full time. Call or text: ***, ask Diana'
    },
    { 
      id: 3, 
      title: 'няня / babysitter',
      description: "Ищем няню с проживанием, опытом и рекомендациями. Двое детей: 2 и 5 лет. Манхэттен. Спросите Лину: *** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan. Ask Lina: ****"
    }
  ];
  
  const Russian = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Вакансии / Jobs</h2>
        {jobs.map(job => (
          <div key={job.id} className="my-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-lg text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Russian;
  
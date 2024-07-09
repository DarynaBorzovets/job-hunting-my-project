import { Link } from 'react-router-dom';
import Job from "../components/Job"
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600">Вакансии / Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Bернуться назад / Go back
          </button>
        </Link>
      </div>
      {jobs.map(job => (
        <Job key={job.id} title={job.title} description={job.description} />
      ))}
    </div>
  );
};

export default Russian;

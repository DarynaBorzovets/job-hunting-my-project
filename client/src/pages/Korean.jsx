import { Link } from 'react-router-dom';
import Job from "../components/Job"

const jobs = [
  { 
    id: 1, 
    title: "출납원 / cashier",
    description: "우리 팀에 합류할 믿을 수 있고 친절한 계산원을 찾고 있습니다. 책임: 거래를 처리하고 우수한 고객 서비스를 제공합니다. 유연한 일정. 이전 경험은 필요하지 않습니다. 999-999-9999로 전화하여 Mark에게 문의하세요. / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, ask Mark."
  },
  { 
    id: 2, 
    title: "부엌의 도우미 / helper on the kitchen ",
    description: '풀타임 주방 도우미를 찾는 고급 레스토랑입니다. 전화나 문자: ***, 다이애나에게 물어보세요 /  Upscale restaurant looking for a helper on the kitchen, full time. Call or text: ***, ask Diana'
  },
  { 
    id: 3, 
    title: '구축함 / babysitter',
    description: "경험과 추천이 있는 입주 베이비시터를 찾고 있습니다. 두 아이: 2세와 5세. 맨해튼 / 리나에게 물어보세요: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan. Ask Lina: ****"
  }
];

const Korean = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600">채용 정보 / Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            돌아가기 / Go back
          </button>
        </Link>
      </div>
      {jobs.map(job => (
        <Job key={job.id} title={job.title} description={job.description} />
      ))}
    </div>
  );
};

export default Korean;

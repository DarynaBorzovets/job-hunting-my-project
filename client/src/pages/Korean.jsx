
const jobs = [
    { 
      id: 1, 
      title: "출납원 / cashier",
      description: "우리 팀에 합류할 믿을 수 있고 친절한 계산원을 찾고 있습니다. 책임: 거래를 처리하고 우수한 고객 서비스를 제공합니다. 유연한 일정. 이전 경험은 필요하지 않습니다. 999-999-9999로 전화하여 Mark에게 문의하세요. / We are looking for a reliable and friendly Cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience not required. Please call: 999-999-9999 and ask Mark."
   },
  
    { 
      id: 2, 
      title: "식기 세척기 남자 / dishwasher",
      description: '풀타임 식기세척기를 찾는 고급 레스토랑. 전화나 문자: ***, 다이애나에게 물어보세요 / Upscale restaurant looking for a dishwasher, full time. Call or text: ***, ask Diana'
    },
    { 
      id: 3, 
      title: '구축함 / babysitter',
      description: "경험과 추천이 있는 입주 베이비시터를 찾고 있습니다. 두 아이: 2세와 5세. 맨해튼 / 리나에게 물어보세요: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan / Ask Lina: ****"
    }
  ];
  
  const Korean = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Jobs / 채용 정보</h2>
        {jobs.map(job => (
          <div key={job.id} className="my-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-lg text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Korean;
  
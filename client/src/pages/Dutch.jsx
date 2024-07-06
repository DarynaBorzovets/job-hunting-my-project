
const jobs = [
    { 
      id: 1, 
      title: "kassier / cashier",
      description: "Wij zijn op zoek naar een betrouwbare en vriendelijke kassamedewerker die ons team komt versterken. Verantwoordelijkheden: Transacties afhandelen, uitstekende klantenservice bieden. Flexibel rooster. Eerdere ervaring is niet vereist. Bel alstublieft: 999-999-9999 en vraag het aan Mark. / We are looking for a reliable and friendly cashier to join our team. Responsibilities: Handle transactions, provide excellent customer service. Flexible schedule. Previous experience is not required. Please, call: 999-999-9999, ask Mark."
   },
  
    { 
      id: 2, 
      title: "hulpje in de keuken / helper on the kitchen",
      description: 'Luxe restaurant op zoek naar een vaatwasser, fulltime. Bel of sms: ***, vraag Diana / Upscale restaurant looking for a dishwasher, full time. Call or text: ***, ask Diana'
    },
    { 
      id: 3, 
      title: 'oppas / babysitter',
      description: "Op zoek naar inwonende oppas met ervaring en aanbevelingen. Twee kinderen: 2 en 5 jaar oud. Manhattan. Vraag Lina: **** / Looking for live-in babysitter with experience and recommendations. Two kids: 2 and 5 years old. Manhattan / Ask Lina: ****"
    }
  ];
  
  const Dutch = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Banen / Jobs</h2>
        {jobs.map(job => (
          <div key={job.id} className="my-4 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-lg text-gray-800">{job.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Dutch;
  
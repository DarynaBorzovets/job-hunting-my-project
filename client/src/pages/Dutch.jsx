import { Link } from 'react-router-dom';
import Job from "../components/Job"

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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-sky-600">Banen / Jobs</h2>
        <Link to="/project">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Ga terug / Go back
          </button>
        </Link>
      </div>
      {jobs.map(job => (
        <Job key={job.id} title={job.title} description={job.description} />
      ))}
    </div>
  );
};

export default Dutch;


const Job = ({ title, description }) => (
  <div className="my-4 p-6 bg-white rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-lg text-gray-800">{description}</p>
  </div>
);

export default Job;

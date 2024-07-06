import { Link } from 'react-router-dom';

const LanguageButtons = () => {
  const languages = [
    { code: 'ar', name: 'Arabic / عربي', path: '/arabic' },
    { code: 'de', name: 'Dutch / Nederlandse', path: '/dutch' },
    { code: 'ko', name: 'Korean / 한국어', path: '/korean'},
    { code: 'ru', name: 'Russian / Русский', path: '/russian' },
    { code: 'vi', name: 'Vietnamese / Tiếng Việt', path: "/vietnamese" },
    { code: 'zh', name: 'Chinese / 中国人', path: "/chinese" },

    
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Choose your language</h2>
      <div className="grid grid-cols-2 gap-4">
        {languages.map((language) => (
          <Link
            key={language.code}
            to={language.path}
            className="bg-purple-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline"
          >
            {language.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageButtons;

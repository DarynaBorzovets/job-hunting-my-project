import { Link } from 'react-router-dom';

const LanguageButtons = () => {
  const languages = [
    { code: 'ar', name: 'Arabic / عربي', path: '/arabic' },
    { code: 'de', name: 'Dutch / Nederlands', path: '/dutch' },
    { code: 'hi', name: 'Hindi / हिन्दी' },
    { code: 'ko', name: 'Korean / 한국어' },
    { code: 'ru', name: 'Russian / Русский' },
    { code: 'vi', name: 'Vietnamese / Tiếng Việt' },
    { code: 'zh', name: 'Chinese / 中国人' },
    { code: 'fr', name: 'French / Français' },

    
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

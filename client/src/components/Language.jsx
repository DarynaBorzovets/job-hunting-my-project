
const LanguageButtons = () => {
  const languages = [
    'Arabic / عربي',
    'Chinese / 中国人',
    'French / Français',
    'German / Deutsch',
    'Korean / 한국인',
    'Punjabi / ਪੰਜਾਬੀ',
    'Russian / Русский',
    'Vietnamese / Tiếng Việt'
  ];

  const handleButtonClick = (language) => {
    // Handle button click event here
    console.log(`Selected language: ${language}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4 text-pink-400">Choose your language</h2>
      <div className="grid grid-cols-2 gap-4">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleButtonClick(language)}
            className="bg-purple-400 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline"
          >
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageButtons;

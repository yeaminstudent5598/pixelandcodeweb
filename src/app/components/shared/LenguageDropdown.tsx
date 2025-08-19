'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  console.log('len', language);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value === 'true'); // ✅ convert string to boolean
  };

  return (
    <select
      value={language.toString()} // boolean → string
      onChange={handleChange}
      className="border p-2 rounded">
      <option value="true">English</option>
      <option value="false">বাংলা</option>
    </select>
  );
}

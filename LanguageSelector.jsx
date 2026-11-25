import React, { useState } from 'react';

const languages = [
  { code: 'nl', label: 'Nederlands' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
  { code: 'pl', label: 'Polski' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'hi', label: 'हिन्दी' },
];

const translations = {
  nl: { label: 'Kies je taal:', greeting: 'Welkom!' },
  en: { label: 'Choose your language:', greeting: 'Welcome!' },
  de: { label: 'Wähle deine Sprache:', greeting: 'Willkommen!' },
  fr: { label: 'Choisissez votre langue :', greeting: 'Bienvenue !' },
  es: { label: 'Elige tu idioma:', greeting: '¡Bienvenido!' },
  pt: { label: 'Escolha o seu idioma:', greeting: 'Bem-vindo!' },
  it: { label: 'Scegli la tua lingua:', greeting: 'Benvenuto!' },
  pl: { label: 'Wybierz język:', greeting: 'Witamy!' },
  tr: { label: 'Dilinizi seçin:', greeting: 'Hoş geldiniz!' },
  ar: { label: ':اختر لغتك', greeting: '!أهلاً بك' },
  ru: { label: 'Выберите язык:', greeting: 'Добро пожаловать!' },
  uk: { label: 'Оберіть мову:', greeting: 'Ласкаво просимо!' },
  zh: { label: '选择您的语言：', greeting: '欢迎！' },
  ja: { label: '言語を選択してください：', greeting: 'ようこそ！' },
  ko: { label: '언어를 선택하세요:', greeting: '환영합니다!' },
  hi: { label: 'अपनी भाषा चुनें:', greeting: 'स्वागत है!' },
};

const styles = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    maxWidth: '400px',
    margin: '40px auto',
    padding: '24px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
  },
  selectorRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
  },
  select: {
    padding: '8px 14px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#111827',
    backgroundColor: '#f9fafb',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
  },
  title: {
    fontSize: '28px',
    color: '#111827',
    margin: 0,
  },
};

export default function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('appLanguage') || 'nl';
  });

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLang(newLang);
    localStorage.setItem('appLanguage', newLang);
  };

  const currentTranslation = translations[selectedLang] || translations.nl;

  return (
    <div style={styles.container} dir={selectedLang === 'ar' ? 'rtl' : 'ltr'}>
      <div style={styles.selectorRow}>
        <label htmlFor="language-select" style={styles.label}>
          {currentTranslation.label}
        </label>
        <select
          id="language-select"
          style={styles.select}
          value={selectedLang}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>

      <h1 style={styles.title}>{currentTranslation.greeting}</h1>
    </div>
  );
}
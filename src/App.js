import './App.css';
import Spaces from './components/Spaces';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rooms from './components/Rooms';
import DetailSpace from './components/DetailSpace';
import { IntlProvider } from 'react-intl';
import localeEsMessages from './locales/es.json';
import localeEnMessages from './locales/en.json';
import React, { useState, useEffect } from 'react';

function App() {
  const [locale, setLocale] = useState('en'); // Establece el idioma por defecto en inglés

  useEffect(() => {
    // Determina el idioma del navegador
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLocale = userLanguage.split('-')[0];
    setLocale(defaultLocale);
  }, []);

  const messages = locale === 'es' ? localeEsMessages : localeEnMessages;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Spaces />} />
            <Route path="/spaces" element={<Spaces />} />
            <Route path="/spaces/:spaceId" element={<Rooms />} />
            <Route path="/spaces/:spaceId/:deviceId" element={<DetailSpace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </IntlProvider>
  );
}

export default App;

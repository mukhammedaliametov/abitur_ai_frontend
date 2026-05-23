import React from 'react';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <MainLayout>
      {/* Bu yerda loyihangizning asosiy kontenti bo'ladi */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Dashboard Sahifasiga Xush Kelibsiz!</h1>
        <p className="text-gray-400">
          Bu yerda kelajakda fanlar, testlar va AI Tutor ma'lumotlari ko'rinadi.
        </p>
      </div>
    </MainLayout>
  );
}

export default App;
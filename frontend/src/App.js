import React, { useState, useEffect } from 'react';
import './App.css';
import { Components } from './components';

const App = () => {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Components.NewsWebsite />
    </div>
  );
};

export default App;
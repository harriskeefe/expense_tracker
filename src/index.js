import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const RootElement = document.getElementById('root');
const Root = createRoot(RootElement);

Root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
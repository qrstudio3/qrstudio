import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { PrivacyPolicy } from './pages/PrivacyPolicy/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService/TermsOfService';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
            </Routes>
        </Router>
    );
}

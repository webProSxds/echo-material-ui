// src/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import AddJobPage from './pages/AddJob';
import AddSkillsPage from './pages/AddSkills';
import AdvisoryProfilePage from './pages/AdvisoryProfile';
import DashBoardPage from './pages/Dashboard';
import DashBoardAdvisorPage from './pages/DashboardAdvisor';
import JobPostingPage from './pages/JobPosting';
import NotificationDetailsPage from './pages/NotificationDetails';
import NotificationPage from './pages/Notification';
import PaymentPage from './pages/Payment';
import PricingPage from './pages/Pricing';
import SearchDelegatorsPage from './pages/SearchDelegators';

const AppRoutes = () => {
  const baseRoute = process.env.REACT_APP_BASE_ROUTE || '/'; // Default to '/' if not defined
console.log("basepath 1.1",baseRoute);
  return (
    <>
      <Router basename='/echo-material-ui'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/add-job' element={<AddJobPage />} />
          <Route path='/add-skills' element={<AddSkillsPage />} />
          <Route path='/advisory-profile' element={<AdvisoryProfilePage />} />
          <Route path='/dashboard' element={<DashBoardPage />} />
          <Route path='/dashboard-advisor' element={<DashBoardAdvisorPage />} />
          <Route path='/job-posting' element={<JobPostingPage />} />
          <Route path='/notification-details' element={<NotificationDetailsPage />} />
          <Route path='/notification' element={<NotificationPage />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/pricing' element={<PricingPage />} />
          <Route path='/search-delegators' element={<SearchDelegatorsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;

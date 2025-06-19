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
  return (
    <>
      <Router>
        <Routes>
          <Route path='/echo-material-ui/' element={<LoginPage />} />
          <Route path='/echo-material-ui/signup' element={<SignupPage />} />
          <Route path='/echo-material-ui/home' element={<HomePage />} />
          <Route path='/echo-material-ui/add-job' element={<AddJobPage />} />
          <Route path='/echo-material-ui/add-skills' element={<AddSkillsPage />} />
          <Route path='/echo-material-ui/advisory-profile' element={<AdvisoryProfilePage />} />
          <Route path='/echo-material-ui/dashboard' element={<DashBoardPage />} />
          <Route path='/echo-material-ui/dashboard-advisor' element={<DashBoardAdvisorPage />} />
          <Route path='/echo-material-ui/job-posting' element={<JobPostingPage />} />
          <Route path='/echo-material-ui/notification-details' element={<NotificationDetailsPage />} />
          <Route path='/echo-material-ui/notification' element={<NotificationPage />} />
          <Route path='/echo-material-ui/payment' element={<PaymentPage />} />
          <Route path='/echo-material-ui/pricing' element={<PricingPage />} />
          <Route path='/echo-material-ui/search-delegators' element={<SearchDelegatorsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRoutes;

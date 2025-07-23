import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Technology from './Technology';
import AccountingFinanceInsurance from './AccountingFinanceInsurance';
import AdminContactCentre from './AdminContactCentre';
import Contact from './Contact';
import './App.css';
import CrosswordHero from './Cross';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industry/it-services/enterprise-transformation" element={<Technology />} />
          <Route path="/industry/accounting-finance-insurance" element={<AccountingFinanceInsurance />} />
          <Route path="/industry/admin-contact-centre" element={<AdminContactCentre />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/cross" element={<CrosswordHero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

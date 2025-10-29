import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ScrollToTop from './ScrollToTop';
import About from './About';
import Technology from './Technology';
import AccountingFinanceInsurance from './AccountingFinanceInsurance';
import AdminContactCentre from './AdminContactCentre';
import Healthcare from './Healthcare';
import Consulting from './Consulting';
import Manufacturing from './Manufacturing';
import Contact from './Contact';
import './App.css';
import CrosswordHero from './Cross';
import Careers from './Careers';
import ContingentStaffing from './ContingentStaffing';
import ContractualHiring from './ContractualHiring';
import PermanentHiring from './PermanentHiring';
import OnDemandRPO from './OnDemandRPO';
import ManagedServiceProvider from './ManagedServiceProvider';
import ProjectProgramManagement from './ProjectProgramManagement';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industry/it-services/enterprise-transformation" element={<Technology />} />
          <Route path="/industry/accounting-finance-insurance" element={<AccountingFinanceInsurance />} />
          <Route path="/industry/admin-contact-centre" element={<AdminContactCentre />} />
          <Route path="/industry/healthcare" element={<Healthcare />} />
          <Route path="/industry/consulting" element={<Consulting />} />
          <Route path="/industry/consulting/managed-service-provider" element={<ManagedServiceProvider />} />
          <Route path="/industry/consulting/project-program-management" element={<ProjectProgramManagement />} />
          <Route path="/industry/manufacturing" element={<Manufacturing />} />
          
          {/* Recruiting Services */}
          <Route path="/recruiting/contingent-staffing" element={<ContingentStaffing />} />
          <Route path="/recruiting/contractual-hiring" element={<ContractualHiring />} />
          <Route path="/recruiting/permanent-hiring" element={<PermanentHiring />} />
          <Route path="/recruiting/on-demand-rpo" element={<OnDemandRPO />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/cross" element={<CrosswordHero />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

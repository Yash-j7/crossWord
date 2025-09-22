import React, { useMemo, useState } from "react";
import { Filter, MapPin, Briefcase, FileDown, ExternalLink, Mail, Search, X, Clock, Building } from "lucide-react";
import samplePDF from "../src/assets/Sample.pdf";
export default function Careers() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const jobs = useMemo(
    () => [
      { 
        id: "CX-1001", 
        title: "Frontend Engineer", 
        type: "Full-time", 
        location: "Bengaluru, IN", 
        experienceYears: 3, 
        description: "Build and optimize React-based web applications with a focus on accessibility and performance.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Engineering",
        postedDate: "2 days ago"
      },
      { 
        id: "CX-1002", 
        title: "Backend Engineer", 
        type: "Full-time", 
        location: "Remote", 
        experienceYears: 4, 
        description: "Design REST APIs, microservices, and databases with Node.js and PostgreSQL.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Engineering",
        postedDate: "1 week ago"
      },
      { 
        id: "CX-1003", 
        title: "Data Analyst", 
        type: "Contract", 
        location: "Hyderabad, IN", 
        experienceYears: 2, 
        description: "Create dashboards, analyze datasets, and present insights to stakeholders.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Analytics",
        postedDate: "3 days ago"
      },
      { 
        id: "CX-1004", 
        title: "Project Manager", 
        type: "Full-time", 
        location: "New Delhi, IN", 
        experienceYears: 5, 
        description: "Lead cross-functional teams, manage timelines, and drive delivery.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Operations",
        postedDate: "5 days ago"
      },
      { 
        id: "CX-1005", 
        title: "QA Engineer", 
        type: "Contract", 
        location: "Remote", 
        experienceYears: 3, 
        description: "Author test plans, automate regression suites, ensure release quality.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Quality Assurance",
        postedDate: "1 week ago"
      },
      { 
        id: "CX-1006", 
        title: "Mobile Developer", 
        type: "Full-time", 
        location: "Pune, IN", 
        experienceYears: 4, 
        description: "Develop React Native apps and ship features rapidly.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Engineering",
        postedDate: "4 days ago"
      },
      { 
        id: "CX-1007", 
        title: "DevOps Engineer", 
        type: "Full-time", 
        location: "Remote", 
        experienceYears: 3, 
        description: "Own CI/CD, observability, and cloud infrastructure (AWS).", 
        pdfPath: "/assets/Sample.pdf",
        department: "Infrastructure",
        postedDate: "2 days ago"
      },
      { 
        id: "CX-1008", 
        title: "UI/UX Designer", 
        type: "Full-time", 
        location: "Kolkata, IN", 
        experienceYears: 2, 
        description: "Design delightful user experiences and maintain design systems.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Design",
        postedDate: "6 days ago"
      },
      { 
        id: "CX-1009", 
        title: "Business Analyst", 
        type: "Full-time", 
        location: "Gurugram, IN", 
        experienceYears: 3, 
        description: "Gather requirements, document processes, and support delivery teams.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Business",
        postedDate: "1 week ago"
      },
      { 
        id: "CX-1010", 
        title: "Healthcare Recruiter", 
        type: "Full-time", 
        location: "Remote", 
        experienceYears: 2, 
        description: "Source and screen candidates, manage pipelines, and coordinate interviews.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Human Resources",
        postedDate: "3 days ago"
      },
      { 
        id: "CX-1011", 
        title: "Manufacturing Consultant", 
        type: "Contract", 
        location: "Ahmedabad, IN", 
        experienceYears: 6, 
        description: "Advise manufacturing clients on process optimization.", 
        pdfPath: "/assets/Sample.pdf",
        department: "Consulting",
        postedDate: "5 days ago"
      },
      { 
        id: "CX-1012", 
        title: "IT Support Specialist", 
        type: "Full-time", 
        location: "Chennai, IN", 
        experienceYears: 1, 
        description: "Provide L1/L2 support and manage incident queues.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "IT Support",
        postedDate: "2 weeks ago"
      },
      // Fresher positions
      { 
        id: "CX-2001", 
        title: "Junior Frontend Developer", 
        type: "Full-time", 
        location: "Bengaluru, IN", 
        experienceYears: 0, 
        description: "Learn and develop modern web applications using React, HTML, CSS, and JavaScript. Perfect for recent graduates.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Engineering",
        postedDate: "1 day ago"
      },
      { 
        id: "CX-2002", 
        title: "Trainee Software Engineer", 
        type: "Full-time", 
        location: "Hyderabad, IN", 
        experienceYears: 0, 
        description: "Join our comprehensive training program and kickstart your career in software development.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Engineering",
        postedDate: "2 days ago"
      },
      { 
        id: "CX-2003", 
        title: "Associate Data Analyst", 
        type: "Full-time", 
        location: "Mumbai, IN", 
        experienceYears: 0, 
        description: "Entry-level position to learn data analysis, visualization, and business intelligence tools.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Analytics",
        postedDate: "1 day ago"
      },
      { 
        id: "CX-2004", 
        title: "Junior QA Tester", 
        type: "Full-time", 
        location: "Noida, IN", 
        experienceYears: 0, 
        description: "Learn software testing methodologies and quality assurance processes from experienced mentors.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Quality Assurance",
        postedDate: "3 days ago"
      },
      { 
        id: "CX-2005", 
        title: "Graduate Trainee - Business Analyst", 
        type: "Full-time", 
        location: "Chennai, IN", 
        experienceYears: 0, 
        description: "Start your career in business analysis with comprehensive training and mentorship.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Business",
        postedDate: "4 days ago"
      },
      { 
        id: "CX-2006", 
        title: "Junior UI/UX Designer", 
        type: "Full-time", 
        location: "Remote", 
        experienceYears: 0, 
        description: "Design beautiful and intuitive user interfaces while learning from senior designers.", 
        pdfPath: "/assets/EY India 2026 - Tech Risk - Assurance - Sr. Analyst - JD.pdf",
        department: "Design",
        postedDate: "1 day ago"
      }
    ],
    []
  );

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery = query
        ? `${job.title} ${job.id} ${job.description}`.toLowerCase().includes(query.toLowerCase())
        : true;
      const matchesLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
      const matchesType = jobType ? job.type === jobType : true;
      const matchesExperience = experience
        ? (() => {
            const exp = parseInt(experience, 10);
            if (Number.isNaN(exp)) return true;
            if (exp === 0) return job.experienceYears === 0;
            return job.experienceYears >= exp;
          })()
        : true;
      return matchesQuery && matchesLocation && matchesType && matchesExperience;
    });
  }, [jobs, query, location, jobType, experience]);

  const jobsToShow = showAll ? filteredJobs : filteredJobs.slice(0, 10);

  const handleView = (job) => {
    if (job.pdfPath) {
      window.open(samplePDF, "_blank");
    }
  };

  const handleDownload = (job) => {
    if (job.pdfPath) {
      const link = document.createElement("a");
      link.href = job.pdfPath;
      link.download = `${job.id}-${job.title.replace(/\s+/g, "-")}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleApply = (job) => {
    const subject = `Application for ${job.title} (ID ${job.id})`;
    const body = `Hello Crossword Staffing Team,
  
I would like to apply for the role ${job.title} (Job ID: ${job.id}).

Experience: ${job.experienceYears === 0 ? 'Fresher' : job.experienceYears + '+ years'}
Location preference: ${job.location}

Best regards,
[Your Name]
[Phone]
[LinkedIn]`;
  
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hr@crosswordstaffing.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  const clearFilters = () => {
    setQuery("");
    setLocation("");
    setExperience("");
    setJobType("");
  };

  const hasActiveFilters = query || location || experience || jobType;

  return (
    <div className="bg-gradient-to-br from-[#E4E0E1] via-[#E4E0E1] to-[#D6CFC9] min-h-screen py-4 px-3 sm:py-8 sm:px-4 lg:py-12 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with Enhanced Styling */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-darkbrown bg-clip-text bg-gradient-to-r from-[#8B4513] to-[#A0522D] mb-4 tracking-tight">
              Find Your Dream Career
            </h1>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#D2B48C] to-[#8B4513] rounded-full opacity-60"></div>
          </div>
          <p className="text-[#8B4513] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Join our growing team and make an impact. Explore opportunities that match your skills and aspirations.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 border border-[#D2B48C]/30">
              <span className="text-sm font-medium text-[#8B4513]">{filteredJobs.length} Open Positions</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#D2B48C]/20 overflow-hidden">
          {/* Enhanced Filter Section */}
          <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-white to-[#F5F5DC]/30">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 px-6 py-4 text-sm font-semibold hover:bg-[#F5DEB3]/20 transition-all duration-200 cursor-pointer hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 group"
                >
                  <Filter className="w-5 h-5 text-[#8B4513] group-hover:scale-110 transition-transform duration-200" />
                  <span>Filter Jobs</span>
                  {hasActiveFilters && (
                    <span className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      {[query, location, jobType, experience].filter(Boolean).length}
                    </span>
                  )}
                </button>
              </div>

              {/* Desktop Filters with Enhanced Design */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-4 flex-1 max-w-4xl">
                <div className="relative group">
                  <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 px-4 py-3 focus-within:ring-2 focus-within:ring-[#8B4513]/30 focus-within:border-[#8B4513]/50 transition-all duration-200 hover:shadow-md">
                    <Search className="w-5 h-5 text-[#8B4513] flex-shrink-0 group-focus-within:scale-110 transition-transform duration-200" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full outline-none text-sm placeholder:text-gray-500 bg-transparent"
                      placeholder="Search positions..."
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 px-4 py-3 text-sm placeholder:text-gray-500 outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30 transition-all duration-200 hover:shadow-md"
                    placeholder="Location"
                  />
                </div>
                
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 px-4 py-3 text-sm outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30 cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  <option value="">Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                </select>
                
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 px-4 py-3 text-sm outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30 cursor-pointer transition-all duration-200 hover:shadow-md"
                >
                  <option value="">Experience</option>
                  <option value="0">Fresher</option>
                  <option value="1">1+ years</option>
                  <option value="2">2+ years</option>
                  <option value="3">3+ years</option>
                  <option value="4">4+ years</option>
                  <option value="5">5+ years</option>
                </select>
              </div>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="hidden lg:flex items-center gap-2 px-4 py-3 text-sm text-[#8B4513] hover:text-[#5D2F0A] font-medium border border-[#8B4513]/30 rounded-xl hover:bg-[#F5DEB3]/20 transition-all duration-200 cursor-pointer active:scale-[0.98] group"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                  Clear
                </button>
              )}
            </div>

            {/* Mobile Filters Dropdown */}
            {showFilters && (
              <div className="lg:hidden mt-6 space-y-4 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-[#D2B48C]/30 shadow-lg animate-in slide-in-from-top-2 duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[#5D2F0A] text-lg">Filter Options</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="text-[#8B4513] hover:text-[#5D2F0A] cursor-pointer active:scale-95 transition-all duration-200 p-1 hover:bg-[#F5DEB3]/20 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200/50 px-4 py-3">
                    <Search className="w-5 h-5 text-[#8B4513] flex-shrink-0" />
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full outline-none text-sm bg-transparent placeholder:text-gray-500"
                      placeholder="Search positions..."
                    />
                  </div>
                  
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200/50 px-4 py-3 text-sm placeholder:text-gray-500 outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30"
                    placeholder="Location"
                  />
                  
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200/50 px-4 py-3 text-sm outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30 cursor-pointer"
                  >
                    <option value="">Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                  
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-200/50 px-4 py-3 text-sm outline-none focus:border-[#8B4513]/50 focus:ring-2 focus:ring-[#8B4513]/30 cursor-pointer"
                  >
                    <option value="">Experience</option>
                    <option value="0">Fresher</option>
                    <option value="1">1+ years</option>
                    <option value="2">2+ years</option>
                    <option value="3">3+ years</option>
                    <option value="4">4+ years</option>
                    <option value="5">5+ years</option>
                  </select>

                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="w-full px-4 py-3 text-sm text-[#8B4513] hover:text-[#5D2F0A] font-medium border border-[#8B4513]/30 rounded-xl hover:bg-[#F5DEB3]/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                    >
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Active Filters with Enhanced Pills */}
            {hasActiveFilters && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-gray-600">Active filters:</span>
                {query && (
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg">
                    <Search className="w-3 h-3" />
                    {query}
                    <button
                      onClick={() => setQuery("")}
                      className="hover:bg-white/20 rounded-full p-0.5 cursor-pointer active:scale-95 transition-all duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {location && (
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg">
                    <MapPin className="w-3 h-3" />
                    {location}
                    <button
                      onClick={() => setLocation("")}
                      className="hover:bg-white/20 rounded-full p-0.5 cursor-pointer active:scale-95 transition-all duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {jobType && (
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg">
                    <Briefcase className="w-3 h-3" />
                    {jobType}
                    <button
                      onClick={() => setJobType("")}
                      className="hover:bg-white/20 rounded-full p-0.5 cursor-pointer active:scale-95 transition-all duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {experience && (
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg">
                    <Clock className="w-3 h-3" />
                    {experience === "0" ? "Fresher" : `${experience}+ years`}
                    <button
                      onClick={() => setExperience("")}
                      className="hover:bg-white/20 rounded-full p-0.5 cursor-pointer active:scale-95 transition-all duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Results Counter with Enhanced Design */}
          <div className="px-6 sm:px-8 lg:px-10 pb-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-[#8B4513]">{jobsToShow.length}</span> of <span className="font-semibold text-[#8B4513]">{filteredJobs.length}</span> opportunities
              </p>
              {filteredJobs.length > 0 && (
                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  Updated recently
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Job Listings */}
          <div className="space-y-4 px-6 sm:px-8 lg:px-10">
            {jobsToShow.map((job, index) => (
              <div
                key={job.id}
                className="group relative p-6 lg:p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#D2B48C]/20 hover:border-[#8B4513]/30 hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-white/80"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: `fadeInUp 0.6s ease-out forwards ${index * 50}ms`
                }}
              >
                {/* Job Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Title and Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3">
                        <span className="inline-block text-xs font-bold text-white bg-gradient-to-r from-[#8B4513] to-[#A0522D] px-3 py-1.5 rounded-full shadow-md select-none">
                          {job.id}
                        </span>
                        {job.experienceYears === 0 && (
                          <span className="inline-block text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                            Fresher Friendly
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[#5D2F0A] group-hover:text-[#8B4513] transition-colors duration-200">
                        {job.title}
                      </h3>
                    </div>
                    
                    {/* Job Meta Information */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D2B48C] to-[#F5DEB3] flex items-center justify-center">
                          <Clock className="w-4 h-4 text-[#8B4513]" />
                        </div>
                        <span className="font-medium">
                          {job.experienceYears === 0 ? 'Entry Level' : `${job.experienceYears}+ yrs exp`}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D2B48C] to-[#F5DEB3] flex items-center justify-center">
                          <Building className="w-4 h-4 text-[#8B4513]" />
                        </div>
                        <span className="font-medium">{job.department}</span>
                      </div>
                      
                      <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        Posted {job.postedDate}
                      </div>
                    </div>
                    
                    {/* Job Description */}
                    <div className="relative">
                      <p className="text-gray-700 leading-relaxed max-w-4xl group-hover:text-gray-800 transition-colors duration-200">
                        {job.description}
                      </p>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 lg:w-auto">
                    <button
                      onClick={() => handleView(job)}
                      className="group/btn relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#D2B48C] bg-white/90 backdrop-blur-sm hover:bg-[#F5DEB3]/30 text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F5DEB3]/0 via-[#F5DEB3]/20 to-[#F5DEB3]/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="hidden sm:inline">View Details</span>
                      <span className="sm:hidden">View</span>
                    </button>
                    
                    {/* <button
                      onClick={() => handleDownload(job)}
                      className="group/btn relative inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#D2B48C] bg-white/90 backdrop-blur-sm hover:bg-[#F5DEB3]/30 text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#F5DEB3]/0 via-[#F5DEB3]/20 to-[#F5DEB3]/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <FileDown className="w-4 h-4 flex-shrink-0 group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="hidden sm:inline">Download</span>
                      <span className="sm:hidden">PDF</span>
                    </button> */}
                    
                    <button
                      onClick={() => handleApply(job)}
                      className="group/btn relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white text-sm font-semibold transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-[#8B4513]/25 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 overflow-hidden hover:from-[#A0522D] hover:to-[#8B4513]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                      <Mail className="w-4 h-4 flex-shrink-0 group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="font-bold">Apply Now</span>
                    </button>
                  </div>
                </div>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F5DEB3]/0 via-[#F5DEB3]/5 to-[#F5DEB3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Load More / No Results Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            {!showAll && filteredJobs.length > 10 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold bg-white/90 backdrop-blur-sm border border-[#D2B48C] hover:bg-[#F5DEB3]/30 transition-all duration-300 cursor-pointer hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5DEB3]/0 via-[#F5DEB3]/20 to-[#F5DEB3]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span>View All {filteredJobs.length - 10} More Opportunities</span>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                </button>
              </div>
            )}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#F5DEB3] to-[#D2B48C] rounded-full flex items-center justify-center shadow-lg">
                    <Filter className="w-12 h-12 text-[#8B4513] opacity-60" />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#F5DEB3]/30 to-[#D2B48C]/30 rounded-full animate-ping"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#5D2F0A] mb-3">No opportunities found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We couldn't find any positions matching your criteria. Try adjusting your filters or check back later for new openings.
                </p>
                
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-2xl hover:shadow-lg hover:shadow-[#8B4513]/25 transition-all duration-200 cursor-pointer active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40"
                  >
                    <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                    <span className="font-semibold">Clear All Filters</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer with Call-to-Action */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[#D2B48C]/20 p-8">
            <h3 className="text-2xl font-bold text-[#5D2F0A] mb-3">Don't see the perfect role?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              onClick={() => window.open('mailto:hr@crosswordstaffing.com?subject=General Application', '_blank')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white rounded-2xl hover:shadow-lg hover:shadow-[#8B4513]/25 transition-all duration-200 cursor-pointer active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#8B4513]/40 font-semibold"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Send General Application</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .slide-in-from-top-2 {
          animation: slideInFromTop 0.2s ease-out;
        }
        
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
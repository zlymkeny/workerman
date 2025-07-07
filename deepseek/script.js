// Sample job data (in a real app, you would fetch this from an API)
const jobsData = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "San Francisco, CA",
        type: "full-time",
        experience: "mid",
        description: "We're looking for a skilled Frontend Developer to join our team. You'll be responsible for building user interfaces using React and working closely with our design team.",
        salary: "$90,000 - $120,000",
        posted: "2 days ago"
    },
    {
        id: 2,
        title: "UX Designer",
        company: "Creative Solutions",
        location: "Remote",
        type: "remote",
        experience: "mid",
        description: "Join our design team to create beautiful, intuitive user experiences for our clients. Must have experience with Figma and user research.",
        salary: "$85,000 - $110,000",
        posted: "1 week ago"
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "Analytics Inc",
        location: "New York, NY",
        type: "full-time",
        experience: "senior",
        description: "Looking for an experienced Data Scientist to lead our analytics team. Python, SQL, and machine learning expertise required.",
        salary: "$130,000 - $160,000",
        posted: "3 days ago"
    },
    {
        id: 4,
        title: "Marketing Intern",
        company: "Growth Marketing",
        location: "Chicago, IL",
        type: "part-time",
        experience: "entry",
        description: "Great opportunity for marketing students to gain real-world experience. Assist with social media, content creation, and campaign analysis.",
        salary: "$20 - $25/hr",
        posted: "5 days ago"
    },
    {
        id: 5,
        title: "Backend Engineer",
        company: "API Masters",
        location: "Austin, TX",
        type: "full-time",
        experience: "senior",
        description: "Help us build scalable backend systems using Node.js and AWS. Experience with microservices architecture preferred.",
        salary: "$110,000 - $140,000",
        posted: "1 day ago"
    },
    {
        id: 6,
        title: "Product Manager",
        company: "Innovate Tech",
        location: "Boston, MA",
        type: "full-time",
        experience: "mid",
        description: "Lead product development from conception to launch. Work with engineering, design, and marketing teams to deliver great products.",
        salary: "$95,000 - $125,000",
        posted: "2 weeks ago"
    }
];

// DOM Elements
const jobsContainer = document.getElementById('jobs-container');
const jobTypeFilter = document.getElementById('job-type');
const experienceFilter = document.getElementById('experience-level');
const searchBtn = document.getElementById('search-btn');
const jobSearchInput = document.getElementById('job-search');
const locationInput = document.getElementById('location');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Pagination variables
let currentPage = 1;
const jobsPerPage = 6;
let filteredJobs = [...jobsData];

// Initialize the app
function init() {
    renderJobs();
    setupEventListeners();
}

// Render jobs based on current filters and page
function renderJobs() {
    jobsContainer.innerHTML = '';
    
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const jobsToDisplay = filteredJobs.slice(startIndex, endIndex);
    
    if (jobsToDisplay.length === 0) {
        jobsContainer.innerHTML = '<p class="no-jobs">No jobs found matching your criteria.</p>';
        return;
    }
    
    jobsToDisplay.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <span class="job-company">${job.company}</span>
            <div class="job-location">
                <i class="fas fa-map-marker-alt"></i>
                ${job.location}
            </div>
            <span class="job-type">${formatJobType(job.type)}</span>
            <p class="job-description">${job.description}</p>
            <div class="job-salary">${job.salary}</div>
            <div class="job-posted">${job.posted}</div>
            <button class="btn btn-primary apply-btn">Apply Now</button>
        `;
        jobsContainer.appendChild(jobCard);
    });
    
    updatePaginationInfo();
}

// Format job type for display
function formatJobType(type) {
    const types = {
        'full-time': 'Full-time',
        'part-time': 'Part-time',
        'remote': 'Remote',
        'contract': 'Contract'
    };
    return types[type] || type;
}

// Update pagination information
function updatePaginationInfo() {
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Filter jobs based on search criteria
function filterJobs() {
    const searchTerm = jobSearchInput.value.toLowerCase();
    const locationTerm = locationInput.value.toLowerCase();
    const typeFilter = jobTypeFilter.value;
    const experienceFilterValue = experienceFilter.value;
    
    filteredJobs = jobsData.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) || 
                             job.company.toLowerCase().includes(searchTerm) ||
                             job.description.toLowerCase().includes(searchTerm);
        
        const matchesLocation = job.location.toLowerCase().includes(locationTerm);
        
        const matchesType = typeFilter ? job.type === typeFilter : true;
        
        const matchesExperience = experienceFilterValue ? job.experience === experienceFilterValue : true;
        
        return matchesSearch && matchesLocation && matchesType && matchesExperience;
    });
    
    currentPage = 1;
    renderJobs();
}

// Set up event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterJobs);
    jobTypeFilter.addEventListener('change', filterJobs);
    experienceFilter.addEventListener('change', filterJobs);
    
    // Allow search on Enter key
    jobSearchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterJobs();
    });
    
    locationInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterJobs();
    });
    
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderJobs();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderJobs();
        }
    });
}

// Initialize the application
init();
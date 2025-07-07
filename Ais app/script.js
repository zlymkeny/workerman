const form = document.getElementById("jobForm");
const results = document.getElementById("results");

const sampleJobs = [
  {
    title: "Frontend Developer",
    company: "TechVerse",
    location: "Lagos, Nigeria",
    description: "Looking for a React/JavaScript developer with 2+ years of experience."
  },
  {
    title: "Backend Developer",
    company: "SoftWorks Ltd",
    location: "Abuja, Nigeria",
    description: "Seeking Node.js and MongoDB expert for microservices backend."
  },
  {
    title: "UI/UX Designer",
    company: "Creative Hub",
    location: "Remote",
    description: "Design intuitive mobile and web interfaces. Figma knowledge required."
  }
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const keyword = document.getElementById("keyword").value.toLowerCase();
  const location = document.getElementById("location").value.toLowerCase();
  const matchedJobs = sampleJobs.filter(job =>
    job.title.toLowerCase().includes(keyword) &&
    job.location.toLowerCase().includes(location)
  );

  displayJobs(matchedJobs);
});

function displayJobs(jobs) {
  results.innerHTML = "";
  if (jobs.length === 0) {
    results.innerHTML = "<p>No jobs found for this search.</p>";
    return;
  }

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
    `;
    results.appendChild(card);
  });
}

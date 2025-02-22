window.addEventListener('load', function () {
  // Automatically flip the tile when the page is loaded
  const tile = document.getElementById('tile-1');
  tile.classList.add('flipped');
});

document.addEventListener('DOMContentLoaded', function () {
  const projects = [
    {
      title: "Financial Time Series Forecasting using LSTM",
      description: "Predicts S&P 500 forecast using ML techniques",
      techStack: "Python, Scikit-Learn, Pandas, Matplotlib, LSTM",
      github: "https://github.com/jas07061002/financial_forecasting",
      demo: "https://financial-forecasting-sp500.streamlit.app/"
    },
    {
      title: "Is it Aesthetic?",
      description: "Predicts whether an image is aesthetic using ML techniques",
      techStack: "Python, Scikit-Learn, Pandas, Matplotlib",
      github: "https://github.com/jas07061002/is_it_aesthetic",
      demo: "https://is-it-aesthetic.streamlit.app/"
    }
    // More projects can be added easily here
  ];

  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project, index) => {
    const projectHTML = `
            <div class="project-tile hover-glow transition duration-300">
                <div class="project-tile-inner">
                    <div class="project-tile-front">
                        <h3 class="project-title glow-text">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                    </div>
                    <div class="project-tile-back">
                        <p class="highlight-tech-stack">Tech Stack: ${project.techStack}</p>
                        <a href="${project.github}" class="view-project-btn" target="_blank">GitHub</a>
                        ${project.demo ? `<a href="${project.demo}" class="view-project-btn" target="_blank">Live Demo</a>` : ""}
                    </div>
                </div>
            </div>
        `;

    projectsContainer.innerHTML += projectHTML;
  });

  // Add flip functionality to project tiles
  const projectTiles = document.querySelectorAll('.project-tile');
  projectTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      tile.classList.toggle('flipped');
    });
  });
});

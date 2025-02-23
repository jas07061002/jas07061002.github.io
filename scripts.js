document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      title: "Financial Market Prediction with LSTM",
      description: "AI-powered time-series forecasting for S&P 500 market trends.",
      techStack: "Python, TensorFlow, LSTM, Pandas, Streamlit",
      github: "https://github.com/jas07061002/financial_forecasting",
      demo: "https://financial-forecasting-sp500.streamlit.app/"
    },
    {
      title: "Aesthetic Image Classifier",
      description: "Deep Learning model for recognizing visually appealing images.",
      techStack: "Python, Scikit-Learn, Pandas, Matplotlib",
      github: "https://github.com/jas07061002/is_it_aesthetic",
      demo: "https://is-it-aesthetic.streamlit.app/"
    }
  ];
  
  const container = document.getElementById("projects-container");
  container.innerHTML = projects.map(project => `
    <div class="project-tile bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:scale-105 border border-gray-700">
      <h3 class="text-2xl font-semibold glow-text">${project.title}</h3>
      <p class="mt-2 text-gray-400">${project.description}</p>
      <p class="mt-3 text-sm text-gray-500"><strong>Tech Stack:</strong> ${project.techStack}</p>
      <div class="mt-4 flex space-x-4">
        <a href="${project.github}" class="bg-blue-600 px-4 py-2 rounded text-white font-semibold hover:bg-blue-700 transition" target="_blank">🔗 View Code</a>
        <a href="${project.demo}" class="bg-green-600 px-4 py-2 rounded text-white font-semibold hover:bg-green-700 transition" target="_blank">🚀 Try It Live</a>
      </div>
    </div>
  `).join("");
});


window.addEventListener('load', function () {
    // Automatically flip the tile when the page is loaded
    const tile = document.getElementById('tile-1');
    tile.classList.add('flipped');
  });
  
  // Optional: Add functionality to manually toggle flip
  const projectTiles = document.querySelectorAll('.project-tile');
  projectTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      tile.classList.toggle('flipped');
    });
  });
  
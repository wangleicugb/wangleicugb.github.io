// Shared footer for all pages. Edit footer text and links here.
(() => {
  const script = document.currentScript;
  const template = document.createElement('template');
  template.innerHTML = `
    <footer class="footer">
      <div class="wrap">
        <span>&copy; Sustainable and Resilient Geotechnical Infrastructure Laboratory</span>
        <span>Designed for GitHub Pages with UC red, black, and white styling.</span>
        <a href="index.html">Back to home</a>
      </div>
    </footer>`;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  if (page === 'index.html') template.content.querySelector('a').remove();
  script.replaceWith(template.content);
})();
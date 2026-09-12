// Shared header for all pages. Edit navigation and branding here.
(() => {
  const script = document.currentScript;
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="topbar">
      <div class="wrap">
        <span>University of Cincinnati &mdash; Civil &amp; Architectural Engineering and Construction Management</span>
        <span>Geotechnical Engineering</span>
      </div>
    </div>
    <header class="brandbar">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="index.html">
          <img class="brand-mark" src="assets/images/uc-profile.webp" alt="UC logo" width="48" height="48"
            style="object-fit:contain;background:transparent;padding:0;flex-shrink:0" />
          <span class="brand-text">
            <span>University of Cincinnati</span>
            <strong>Geotechnical Engineering Laboratory</strong>
          </span>
        </a>
        <div class="navlinks">
          <a href="index.html#about">About</a>
          <a href="index.html#research">Research</a>
          <a href="index.html#news">News</a>
          <a href="publications.html">Publications</a>
          <a href="members.html">Group Members</a>
          <a href="position.html">Open Position</a>
          <a href="index.html#contact" class="button">Contact</a>
        </div>
      </nav>
    </header>`;

  const page = window.location.pathname.split('/').pop() || 'index.html';
  template.content.querySelectorAll('.navlinks a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === page) link.setAttribute('aria-current', 'page');
    if (page === 'index.html' && href.startsWith('index.html#')) {
      link.setAttribute('href', href.slice('index.html'.length));
    }
  });
  script.replaceWith(template.content);
})();
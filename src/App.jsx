import './App.css'

export default function App() {
  return (
    <div>
      <h1>ADA Test App</h1>
      <p>A wider spread of deliberate accessibility issues, used to test the Auto-Fix pipeline across many rule types.</p>

      {/* button-name */}
      <button className="icon-btn" aria-label="Menu"><svg width="16" height="16"><rect width="16" height="16" /></svg></button>

      {/* image-alt */}
      <img className="banner-img" src="banner.svg" alt="Banner" />

      {/* label (has a placeholder, so the deterministic fallback can fix it) */}
      <input className="search-input" type="text" placeholder="Search products" />

      {/* link-name */}
      <a className="social-link" href="https://example.com"><svg width="16" height="16"><circle cx="8" cy="8" r="8" /></svg></a>

      {/* heading-order: skips h2 */}
      <h3 className="section-heading">Section heading</h3>

      {/* color-contrast */}
      <p className="muted-text">Muted text with insufficient contrast</p>

      {/* frame-title */}
      <iframe className="promo-frame" src="https://example.com/promo"></iframe>

      {/* select-name */}
      <select className="role-select">
        <option value="">Choose a role</option>
        <option value="dev">Developer</option>
        <option value="qa">QA</option>
      </select>
    </div>
  );
}

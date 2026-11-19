import { useState } from 'react';
import officialLogo from '../assets/official_logo.jpg';
import { NAV_TABS, type TabId } from '../data/navigation';
import { CloseIcon, MenuIcon } from './Icons';

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (tab: TabId) => {
    onSelectTab(tab);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <button
            type="button"
            className="brand-btn"
            onClick={() => handleSelect('home')}
            aria-label="oneVRNT Home"
          >
            <img
              src={officialLogo}
              alt="oneVRNT Official Logo"
              className="brand-logo"
            />
            <span className="brand-text">
              <span className="brand-name">oneVRNT</span>
              <span className="brand-sub">VARIANT COMMUNITY</span>
            </span>
          </button>

          <nav className="nav-tabs" aria-label="Primary navigation">
            {NAV_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelect(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        {NAV_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`mobile-nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelect(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

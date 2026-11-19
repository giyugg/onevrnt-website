import { useState } from 'react';
import { TalentCard } from '../components/TalentCard';
import { TALENT_ROLES, TALENT_ROSTER, type TalentRole } from '../data/talent';

export function TalentPage() {
  const [selectedRole, setSelectedRole] = useState<'All' | TalentRole>('All');

  const filteredRoster =
    selectedRole === 'All'
      ? TALENT_ROSTER
      : TALENT_ROSTER.filter((member) => member.roles.includes(selectedRole));

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ marginBottom: 24 }}>
            <div>
              <span className="section-label">
                <span className="section-label-dot" />
                CREATOR ROSTER
              </span>
              <h1
                className="display-title"
                style={{
                  fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                  marginTop: 16,
                }}
              >
                Meet the Talent
              </h1>
              <p className="section-subtitle">
                The creators, competitive players, and producers powering
                oneVRNT / VARIANT Community.
              </p>
            </div>
            <div className="mono-tag">
              SHOWING {filteredRoster.length} OF {TALENT_ROSTER.length} MEMBERS
            </div>
          </div>


          {/* Filter */}
          <div
            className="filter-bar"
            role="group"
            aria-label="Filter talent by role"
          >
            {TALENT_ROLES.map((role) => {
              const isActive = selectedRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                  aria-pressed={isActive}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </button>
              );
            })}
          </div>

          <div className="grid-3">
            {filteredRoster.map((member) => (
              <TalentCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

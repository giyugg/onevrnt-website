import { useState, type FormEvent } from 'react';
import {
  ArrowUpRightIcon,
  CheckIcon,
  DiscordIcon,
  InstagramIcon,
  YouTubeIcon,
} from '../components/Icons';

type InquiryCategory =
  | 'Sponsorships'
  | 'Collaborations'
  | 'Talent Application'
  | 'General';

interface FormState {
  name: string;
  email: string;
  category: InquiryCategory;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  category: 'Sponsorships',
  message: '',
};

export function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setError(null);
    setSubmitted(false);
  };

  return (
    <div className="page-enter">
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <span className="section-label">
              <span className="section-label-dot" />
              CONTACT US
            </span>
            <h1
              className="display-title"
              style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                marginTop: 16,
              }}
            >
              Let&apos;s Build Something Variant.
            </h1>
            <p className="section-subtitle">
              For brand sponsorships, creator collaborations, event invites, or
              talent inquiries, reach out to the oneVRNT team below.
            </p>
          </div>

          <div className="contact-grid">
            <div className="card form-card">
              {submitted ? (
                <div style={{ padding: '16px 0' }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#ffffff',
                      color: '#000000',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <CheckIcon />
                  </div>
                  <h2 className="display-title" style={{ fontSize: '1.6rem' }}>
                    Inquiry Received
                  </h2>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      margin: '10px 0 22px',
                    }}
                  >
                    Thanks, <strong>{form.name}</strong>. Your{' '}
                    <span className="mono-tag">{form.category}</span> message has
                    been logged. Our management team will reply to{' '}
                    <strong>{form.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleReset}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="Alex Reyes"
                      value={form.name}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-category" className="form-label">
                      Inquiry Type
                    </label>
                    <select
                      id="contact-category"
                      className="form-select"
                      value={form.category}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          category: e.target.value as InquiryCategory,
                        }))
                      }
                    >
                      <option value="Sponsorships">Sponsorships</option>
                      <option value="Collaborations">Collaborations</option>
                      <option value="Talent Application">
                        Talent Application
                      </option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-textarea"
                      placeholder="Tell us about your campaign, collab idea, or channel..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                    />
                  </div>

                  {error && (
                    <p className="form-error" role="alert" style={{ marginBottom: 14 }}>
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn btn-primary">
                    Send Inquiry
                    <ArrowUpRightIcon />
                  </button>
                </form>
              )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="card" style={{ padding: 24 }}>
                <span className="mono-tag">BUSINESS &amp; PRESS</span>
                <h2
                  className="display-title"
                  style={{ fontSize: '1.25rem', marginTop: 8, marginBottom: 8 }}
                >
                  Direct Email
                </h2>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    margin: '0 0 14px',
                  }}
                >
                  For brand partnerships, sponsored segments, and event
                  bookings.
                </p>
                <a
                  href="mailto:business@onevrnt.ph"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  business@onevrnt.ph
                  <ArrowUpRightIcon />
                </a>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <span className="mono-tag">COMMUNITY CHANNELS</span>
                <h2
                  className="display-title"
                  style={{ fontSize: '1.25rem', marginTop: 8, marginBottom: 14 }}
                >
                  Follow oneVRNT
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <YouTubeIcon />
                      YouTube · oneVRNT
                    </span>
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <DiscordIcon />
                      Discord · VARIANT Community
                    </span>
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <InstagramIcon />
                      Instagram · @onevrnt.ph
                    </span>
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Checkbox } from '../Checkbox/Checkbox';
import { Alert } from '../Alert/Alert';
import { Divider } from '../Divider/Divider';
import { Spin } from '../Spin/Spin';
import { Link } from '../Typography/Typography';

// ─────────────────────────────────────────────────────────────────
//  LoginPage — AestetiX 1.0
//
//  Use cases covered:
//    1. idle          — default empty form
//    2. typing        — user filling in fields
//    3. error-empty   — submitted with empty fields
//    4. error-email   — invalid email format
//    5. error-wrong   — wrong credentials (server)
//    6. error-locked  — account locked after too many attempts
//    7. loading       — request in flight
//    8. success       — logged in successfully
//    9. forgot        — forgot password view
//   10. forgot-sent   — forgot password email sent
// ─────────────────────────────────────────────────────────────────

export type LoginState =
  | 'idle'
  | 'typing'
  | 'error-empty'
  | 'error-email'
  | 'error-wrong'
  | 'error-locked'
  | 'loading'
  | 'success'
  | 'forgot'
  | 'forgot-sent';

export interface LoginPageProps {
  onSuccess?: (email: string) => void;
  logoSrc?: string;
  appName?: string;
  initialState?: LoginState;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="rgba(0,0,0,0.45)" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="8" r="2" stroke="rgba(0,0,0,0.45)" strokeWidth="1.2" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1 1l14 14M6.5 6.6A2 2 0 0010.4 9.5M4.3 4.4C2.5 5.6 1 8 1 8s2.5 5 7 5a7.2 7.2 0 003.7-1M6.8 3.1A7 7 0 0115 8s-.9 1.8-2.3 3" stroke="rgba(0,0,0,0.45)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#fff2f0" />
      <rect x="14" y="22" width="20" height="14" rx="3" fill="#ff4d4f" opacity="0.15" stroke="#ff4d4f" strokeWidth="1.5" />
      <path d="M18 22v-5a6 6 0 0112 0v5" stroke="#ff4d4f" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="29" r="2" fill="#ff4d4f" />
    </svg>
  );
}

function SuccessIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="32" fill="#f6ffed" />
      <circle cx="32" cy="32" r="20" fill="#52c41a" opacity="0.15" />
      <path d="M20 32l9 9 15-15" stroke="#52c41a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="24" fill="#e6f4ff" />
      <rect x="12" y="16" width="24" height="17" rx="2" stroke="#1677ff" strokeWidth="1.5" />
      <path d="M12 19l12 8 12-8" stroke="#1677ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Card wrapper ───────────────────────────────────────────────────
function LoginCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        width: 400,
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.04)',
        padding: '40px 40px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        fontFamily: '"Heebo", sans-serif',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Logo area ──────────────────────────────────────────────────────
function LogoArea({ logoSrc, appName }: { logoSrc?: string; appName?: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      {logoSrc ? (
        <img src={logoSrc} alt={appName} style={{ height: 48, objectFit: 'contain' }} />
      ) : (
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #1677ff 0%, #4096ff 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
      <span style={{ fontSize: '20px', fontWeight: 700, color: 'rgba(0,0,0,0.88)', lineHeight: '28px' }}>
        {appName ?? 'AestetiX'}
      </span>
    </div>
  );
}

// ── Main Login Form ────────────────────────────────────────────────
function LoginForm({
  appName,
  logoSrc,
  onSuccess,
  externalState,
}: {
  appName?: string;
  logoSrc?: string;
  onSuccess?: (email: string) => void;
  externalState?: LoginState;
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [state, setState] = React.useState<LoginState>(externalState ?? 'idle');
  const [attempts, setAttempts] = React.useState(0);

  // for demo: sync external state changes
  React.useEffect(() => {
    if (externalState) setState(externalState);
  }, [externalState]);

  const emailStatus: '' | 'error' | 'warning' =
    state === 'error-empty' && !email ? 'error' :
    state === 'error-email' ? 'error' :
    '';

  const passwordStatus: '' | 'error' | 'warning' =
    state === 'error-empty' && !password ? 'error' :
    state === 'error-wrong' ? 'error' :
    '';

  const handleSubmit = async () => {
    if (!email || !password) { setState('error-empty'); return; }
    if (!isValidEmail(email)) { setState('error-email'); return; }

    setState('loading');
    await new Promise((r) => setTimeout(r, 1400));

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (newAttempts >= 3) { setState('error-locked'); return; }
    if (email === 'demo@aesthetix.com' && password === 'demo1234') {
      setState('success');
      onSuccess?.(email);
    } else {
      setState('error-wrong');
    }
  };

  // ── Locked ────────────────────────────────────────────────────
  if (state === 'error-locked') {
    return (
      <LoginCard>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '8px 0' }}>
          <LockIcon />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,0,0,0.88)', lineHeight: '26px' }}>
              החשבון נעול זמנית
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', marginTop: '8px', lineHeight: '22px' }}>
              יותר מדי ניסיונות כושלים.<br />נסה שוב בעוד 15 דקות.
            </div>
          </div>
          <Alert type="error" message="יש לאפס סיסמה או לפנות לתמיכה" showIcon />
          <Button btnType="default" block onClick={() => { setState('forgot'); setAttempts(0); }}>
            אפס סיסמה
          </Button>
          <Link onClick={() => { setState('idle'); setAttempts(0); setEmail(''); setPassword(''); }}>
            חזור להתחברות
          </Link>
        </div>
      </LoginCard>
    );
  }

  // ── Success ───────────────────────────────────────────────────
  if (state === 'success') {
    return (
      <LoginCard>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
          <SuccessIcon />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,0,0,0.88)' }}>ברוך הבא!</div>
            <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', marginTop: '6px' }}>
              מתחבר ל-{appName ?? 'AestetiX'}…
            </div>
          </div>
          <Spin size="small" />
        </div>
      </LoginCard>
    );
  }

  // ── Main form ─────────────────────────────────────────────────
  return (
    <LoginCard>
      <LogoArea logoSrc={logoSrc} appName={appName} />

      <div style={{ textAlign: 'center', marginTop: '-8px' }}>
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: '22px' }}>
          התחבר להמשיך
        </div>
      </div>

      {/* Server errors */}
      {state === 'error-wrong' && (
        <Alert
          type="error"
          message="אימייל או סיסמה שגויים"
          description={`${3 - attempts} ניסיונות נותרו לפני נעילה`}
          showIcon
          closable
          onClose={() => setState('typing')}
        />
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Email */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(0,0,0,0.88)', lineHeight: '22px' }}>
            אימייל
          </label>
          <Input
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (state !== 'loading') setState('typing'); }}
            placeholder="name@company.com"
            status={emailStatus || undefined}
            size="large"
            type="email"
            autoComplete="email"
          />
          {state === 'error-empty' && !email && (
            <span style={{ fontSize: '12px', color: '#ff4d4f', lineHeight: '20px' }}>שדה חובה</span>
          )}
          {state === 'error-email' && (
            <span style={{ fontSize: '12px', color: '#ff4d4f', lineHeight: '20px' }}>כתובת אימייל לא תקינה</span>
          )}
        </div>

        {/* Password */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(0,0,0,0.88)', lineHeight: '22px' }}>
              סיסמה
            </label>
            <Link
              style={{ fontSize: '14px' }}
              onClick={() => setState('forgot')}
            >
              שכחת סיסמה?
            </Link>
          </div>
          <Input
            value={password}
            onChange={(e) => { setPassword(e.target.value); if (state !== 'loading') setState('typing'); }}
            placeholder="הכנס סיסמה"
            status={passwordStatus || undefined}
            size="large"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            suffix={
              <span
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '0 4px' }}
                onClick={() => setShowPassword((v) => !v)}
              >
                <EyeIcon open={showPassword} />
              </span>
            }
          />
          {state === 'error-empty' && !password && (
            <span style={{ fontSize: '12px', color: '#ff4d4f', lineHeight: '20px' }}>שדה חובה</span>
          )}
          {state === 'error-wrong' && password && (
            <span style={{ fontSize: '12px', color: '#ff4d4f', lineHeight: '20px' }}>סיסמה שגויה</span>
          )}
        </div>

        {/* Remember me */}
        <Checkbox
          checked={rememberMe}
          onChange={setRememberMe}
        >
          זכור אותי
        </Checkbox>

        {/* Submit */}
        <Button
          btnType="primary"
          size="large"
          block
          loading={state === 'loading'}
          onClick={handleSubmit}
          style={{ marginTop: '4px' }}
        >
          {state === 'loading' ? 'מתחבר…' : 'התחבר'}
        </Button>
      </div>

      <Divider plain>או</Divider>

      {/* Social logins */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button
          btnType="default"
          size="large"
          block
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z" fill="#4285F4" />
              <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853" />
              <path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05" />
              <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.48a4.77 4.77 0 014.48-3.3z" fill="#EA4335" />
            </svg>
          }
        >
          המשך עם Google
        </Button>

        <Button
          btnType="default"
          size="large"
          block
          icon={
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M9 1a8 8 0 100 16A8 8 0 009 1zm3.9 5H11c-.3 0-.6.4-.6.9v1.1H13l-.3 2H10.4V15H8.3v-5H7V8h1.3V6.9C8.3 5.3 9.3 4 11 4h1.9v2z" fill="#1877F2" />
            </svg>
          }
        >
          המשך עם Facebook
        </Button>
      </div>

      <div style={{ textAlign: 'center', fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: '22px' }}>
        אין לך חשבון?{' '}
        <Link style={{ fontSize: '14px' }}>הרשם עכשיו</Link>
      </div>
    </LoginCard>
  );
}

// ── Forgot Password Form ───────────────────────────────────────────
function ForgotForm({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');

  const handleSend = async () => {
    if (!email) { setEmailError('שדה חובה'); return; }
    if (!isValidEmail(email)) { setEmailError('כתובת אימייל לא תקינה'); return; }
    setEmailError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <LoginCard>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '8px 0' }}>
          <MailIcon />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,0,0,0.88)', lineHeight: '26px' }}>
              בדוק את האימייל
            </div>
            <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', marginTop: '8px', lineHeight: '22px' }}>
              שלחנו קישור לאיפוס סיסמה לכתובת
              <br />
              <strong style={{ color: 'rgba(0,0,0,0.88)' }}>{email}</strong>
            </div>
          </div>
          <Alert
            type="info"
            message="הקישור בתוקף ל-30 דקות"
            showIcon
          />
          <Button btnType="primary" block onClick={onBack}>
            חזור להתחברות
          </Button>
          <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)' }}>
            לא קיבלת?{' '}
            <Link
              style={{ fontSize: '14px' }}
              onClick={() => setSent(false)}
            >
              שלח שוב
            </Link>
          </div>
        </div>
      </LoginCard>
    );
  }

  return (
    <LoginCard>
      <LogoArea appName="שחזור סיסמה" />

      <div style={{ textAlign: 'center', marginTop: '-8px' }}>
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', lineHeight: '22px' }}>
          הזן את כתובת האימייל שלך ונשלח<br />קישור לאיפוס הסיסמה
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(0,0,0,0.88)', lineHeight: '22px' }}>
            אימייל
          </label>
          <Input
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
            placeholder="name@company.com"
            status={emailError ? 'error' : undefined}
            size="large"
            type="email"
          />
          {emailError && (
            <span style={{ fontSize: '12px', color: '#ff4d4f', lineHeight: '20px' }}>{emailError}</span>
          )}
        </div>

        <Button
          btnType="primary"
          size="large"
          block
          loading={loading}
          onClick={handleSend}
        >
          {loading ? 'שולח…' : 'שלח קישור לאיפוס'}
        </Button>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link onClick={onBack} style={{ fontSize: '14px' }}>
          ← חזור להתחברות
        </Link>
      </div>
    </LoginCard>
  );
}

// ── Root component ─────────────────────────────────────────────────
export function LoginPage({ onSuccess, logoSrc, appName, initialState }: LoginPageProps) {
  const [view, setView] = React.useState<'login' | 'forgot'>('login');
  const [loginState, setLoginState] = React.useState<LoginState>(initialState ?? 'idle');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e6f4ff 0%, #f0f5ff 50%, #fafafa 100%)',
        padding: '24px',
        fontFamily: '"Heebo", sans-serif',
        direction: 'rtl',
      }}
    >
      {view === 'forgot' ? (
        <ForgotForm onBack={() => { setView('login'); setLoginState('idle'); }} />
      ) : (
        <LoginForm
          appName={appName}
          logoSrc={logoSrc}
          onSuccess={onSuccess}
          externalState={loginState}
        />
      )}
    </div>
  );
}

// ── All use-cases gallery (for storybook / dev preview) ────────────
export function LoginPageGallery() {
  const states: { label: string; state: LoginState }[] = [
    { label: '1. ריק (idle)',              state: 'idle' },
    { label: '2. מילוי (typing)',           state: 'typing' },
    { label: '3. שדות ריקים',              state: 'error-empty' },
    { label: '4. אימייל לא תקין',          state: 'error-email' },
    { label: '5. פרטים שגויים',            state: 'error-wrong' },
    { label: '6. חשבון נעול',              state: 'error-locked' },
    { label: '7. טוען (loading)',           state: 'loading' },
    { label: '8. התחברות הצליחה (success)', state: 'success' },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f0f2f5',
        padding: '40px 24px',
        fontFamily: '"Heebo", sans-serif',
        direction: 'rtl',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: '28px', fontWeight: 700, color: 'rgba(0,0,0,0.88)', lineHeight: '36px' }}>
            Login Page — כל ה-Use Cases
          </div>
          <div style={{ fontSize: '16px', color: 'rgba(0,0,0,0.45)', marginTop: '8px' }}>
            AestetiX 1.0 Design System
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {states.map(({ label, state }) => (
            <div key={state} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(0,0,0,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                }}
              >
                {label}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LoginPageStatePreview state={state} />
              </div>
            </div>
          ))}

          {/* Forgot password states */}
          {[
            { label: '9. שכחת סיסמה (forgot)', isForgot: true, sent: false },
            { label: '10. אימייל נשלח (forgot-sent)', isForgot: true, sent: true },
          ].map(({ label, isForgot, sent }) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'rgba(0,0,0,0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  textAlign: 'center',
                }}
              >
                {label}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {sent ? <ForgotSentPreview /> : <ForgotFormPreview />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Static preview snapshots per state
function LoginPageStatePreview({ state }: { state: LoginState }) {
  return <LoginForm externalState={state} />;
}

function ForgotFormPreview() {
  return <ForgotForm onBack={() => {}} />;
}

function ForgotSentPreview() {
  const [, setSent] = React.useState(false);
  return (
    <LoginCard>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '8px 0' }}>
        <MailIcon />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,0,0,0.88)', lineHeight: '26px' }}>
            בדוק את האימייל
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)', marginTop: '8px', lineHeight: '22px' }}>
            שלחנו קישור לאיפוס סיסמה לכתובת<br />
            <strong style={{ color: 'rgba(0,0,0,0.88)' }}>demo@aesthetix.com</strong>
          </div>
        </div>
        <Alert type="info" message="הקישור בתוקף ל-30 דקות" showIcon />
        <Button btnType="primary" block>חזור להתחברות</Button>
        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.45)' }}>
          לא קיבלת? <Link style={{ fontSize: '14px' }} onClick={() => setSent(false)}>שלח שוב</Link>
        </div>
      </div>
    </LoginCard>
  );
}

export default LoginPage;

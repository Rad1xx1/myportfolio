import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Eye, EyeOff, Plus, ArrowUpRight, ArrowDownLeft, QrCode, CreditCard,
  Home, History, User, ChevronRight, ChevronLeft, X, Check, Fingerprint,
  Wallet, Bell, ShieldCheck, Coffee, ShoppingBag, Car, Send, Apple,
  Settings, Scan, RefreshCw, Snowflake, ArrowRight
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// ---------------------------------------------------------------------------
// Demo constants
// ---------------------------------------------------------------------------
const RATE = 540; // 1 USD = 540 KZT (fixed demo rate)
const CARD_LAST4 = "7749";

const fmtUSD = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtKZT = (n) => Math.round(n).toLocaleString("ru-RU") + " \u20B8";

const sparkData = [
  { v: 1080 }, { v: 1110 }, { v: 1095 }, { v: 1160 }, { v: 1140 },
  { v: 1205 }, { v: 1190 }, { v: 1240 }, { v: 1220 }, { v: 1265 },
  { v: 1240.5 },
];

const initialTx = [
  { id: 5, kind: "payment", merchant: "Sekta Bar", icon: Coffee, kzt: 8500, date: "Сегодня, 14:32" },
  { id: 4, kind: "payment", merchant: "Magnum", icon: ShoppingBag, kzt: 12400, date: "Сегодня, 10:15" },
  { id: 3, kind: "topup", merchant: "Пополнение с карты •• 4021", icon: Plus, usd: 300, date: "Вчера, 18:04" },
  { id: 2, kind: "payment", merchant: "Yandex Go", icon: Car, kzt: 1800, date: "Вчера, 09:20" },
  { id: 1, kind: "transfer", merchant: "Перевод — Асель Т.", icon: Send, usd: 50, date: "2 дня назад" },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------
function StatusBar() {
  return (
    <div className="statusbar">
      <span className="sb-time">9:41</span>
      <div className="sb-island" />
      <div className="sb-icons">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor" />
          <rect x="10" y="2" width="3" height="10" rx="0.5" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor" opacity="0.4" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 2.5C11 2.5 13.3 3.7 15 5.7L13.6 7.1C12.2 5.5 10.2 4.5 8 4.5C5.8 4.5 3.8 5.5 2.4 7.1L1 5.7C2.7 3.7 5 2.5 8 2.5Z" fill="currentColor" />
          <circle cx="8" cy="9.5" r="1.6" fill="currentColor" />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="16" height="8" rx="1.2" fill="currentColor" />
          <rect x="21.5" y="4" width="1.6" height="4" rx="0.8" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function TabBar({ tab, setTab }) {
  const items = [
    { id: "home", label: "Кошелёк", Icon: Home },
    { id: "card", label: "Карта", Icon: CreditCard },
    { id: "history", label: "История", Icon: History },
    { id: "profile", label: "Профиль", Icon: User },
  ];
  return (
    <div className="tabbar">
      {items.map(({ id, label, Icon }) => (
        <button key={id} className={"tab-btn" + (tab === id ? " active" : "")} onClick={() => setTab(id)}>
          <Icon size={22} strokeWidth={tab === id ? 2.4 : 1.8} />
          <span>{label}</span>
          {tab === id && <div className="tab-dot" />}
        </button>
      ))}
      <div className="home-indicator" />
    </div>
  );
}

function useCountUp(target, duration = 900, dep = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    let raf;
    const from = 0;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(from + (target - from) * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, dep]);
  return val;
}

// ---------------------------------------------------------------------------
// Splash & Lock
// ---------------------------------------------------------------------------
function Splash() {
  return (
    <div className="screen splash">
      <div className="splash-logo">
        <Wallet size={34} strokeWidth={2} />
      </div>
      <div className="splash-word">coinly</div>
      <div className="splash-sub">деньги без границ курса</div>
    </div>
  );
}

function LockScreen({ onUnlock }) {
  const [scanning, setScanning] = useState(false);
  const doUnlock = () => {
    if (scanning) return;
    setScanning(true);
    setTimeout(() => onUnlock(), 1100);
  };
  return (
    <div className="screen lock">
      <div className="lock-top">
        <div className="lock-brand">
          <Wallet size={20} />
          <span>coinly</span>
        </div>
        <div className="lock-time">9:41</div>
        <div className="lock-date">Пятница, 7 августа</div>
      </div>
      <div className="lock-mid">
        <div className={"faceid-ring" + (scanning ? " scanning" : "")} onClick={doUnlock}>
          <Fingerprint size={30} />
        </div>
        <div className="lock-caption">
          {scanning ? "Сканирование…" : "Нажмите, чтобы разблокировать"}
        </div>
      </div>
      <button className="lock-cta" onClick={doUnlock} disabled={scanning}>
        Войти с Face ID
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------
function TxRow({ tx }) {
  const Icon = tx.icon;
  const isIn = tx.kind === "topup";
  const amountUsd = tx.usd != null ? tx.usd : tx.kzt / RATE;
  return (
    <div className="tx-row">
      <div className={"tx-icon" + (isIn ? " in" : "")}>
        <Icon size={16} />
      </div>
      <div className="tx-mid">
        <div className="tx-title">{tx.merchant}</div>
        <div className="tx-sub">
          {tx.date}{tx.kzt ? ` · ${fmtKZT(tx.kzt)}` : ""}
        </div>
      </div>
      <div className={"tx-amount" + (isIn ? " pos" : "")}>
        {isIn ? "+" : "−"}{fmtUSD(amountUsd)}
      </div>
    </div>
  );
}

function HomeScreen({ balance, hidden, setHidden, txs, openPay, goCard, goHistory }) {
  const animated = useCountUp(balance, 900, balance);
  return (
    <div className="screen-content">
      <div className="home-header">
        <div>
          <div className="greeting">С возвращением</div>
          <div className="username">Рад1xx</div>
        </div>
        <div className="avatar">Р</div>
      </div>

      <div className="balance-card">
        <div className="balance-card-glow" />
        <div className="balance-row-top">
          <span className="balance-label">Баланс кошелька</span>
          <button className="eye-btn" onClick={() => setHidden(!hidden)}>
            {hidden ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="balance-value">
          {hidden ? "$ • • • • • •" : fmtUSD(animated)}
        </div>
        <div className="balance-sub">
          ≈ {hidden ? "• • • • • •" : fmtKZT(balance * RATE)} · курс 1$ = {RATE} ₸
        </div>
        <div className="spark">
          <ResponsiveContainer width="100%" height={46}>
            <AreaChart data={sparkData}>
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00E28A" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#00E28A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="#00E28A" strokeWidth={2} fill="url(#sg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="quick-actions">
        <button className="qa-btn" onClick={() => alert("Демо: экран пополнения")}>
          <div className="qa-ic"><Plus size={18} /></div>
          <span>Пополнить</span>
        </button>
        <button className="qa-btn" onClick={() => alert("Демо: экран перевода")}>
          <div className="qa-ic"><ArrowUpRight size={18} /></div>
          <span>Отправить</span>
        </button>
        <button className="qa-btn primary" onClick={openPay}>
          <div className="qa-ic"><QrCode size={18} /></div>
          <span>Оплатить</span>
        </button>
        <button className="qa-btn" onClick={goCard}>
          <div className="qa-ic"><CreditCard size={18} /></div>
          <span>Карта</span>
        </button>
      </div>

      <div className="section-head">
        <span>Последние операции</span>
        <button onClick={goHistory}>Все <ChevronRight size={13} /></button>
      </div>
      <div className="tx-list">
        {txs.slice(0, 4).map((tx) => <TxRow key={tx.id} tx={tx} />)}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------
function CardScreen({ balance, frozen, setFrozen }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="screen-content">
      <div className="page-title">Карта</div>

      <div className="card-flip-wrap" onClick={() => setFlipped(!flipped)}>
        <div className={"card3d" + (flipped ? " flipped" : "")}>
          <div className="card-face card-front">
            <div className="card-top-row">
              <Wallet size={20} />
              <span className="card-net">coinly</span>
            </div>
            <div className="card-chip" />
            <div className="card-number">•••• •••• •••• {CARD_LAST4}</div>
            <div className="card-bottom-row">
              <div>
                <div className="card-small-label">Владелец</div>
                <div className="card-holder">RAD1XX</div>
              </div>
              <div>
                <div className="card-small-label">Баланс</div>
                <div className="card-holder">{fmtUSD(balance)}</div>
              </div>
            </div>
          </div>
          <div className="card-face card-back">
            <div className="card-stripe" />
            <div className="card-cvv-row">
              <span>CVV</span>
              <div className="card-cvv">482</div>
            </div>
            <div className="card-back-note">Виртуальная карта · привязана к Apple Pay</div>
          </div>
        </div>
      </div>
      <div className="flip-hint">Нажмите на карту, чтобы увидеть CVV</div>

      <button className="applepay-btn wide">
        <Apple size={18} fill="currentColor" />
        <span>Добавить в Apple Wallet</span>
      </button>

      <div className="card-settings">
        <div className="settings-row">
          <div className="settings-row-left">
            <div className="settings-ic"><Snowflake size={16} /></div>
            <div>
              <div className="settings-title">Заморозить карту</div>
              <div className="settings-sub">Временно отключить платежи</div>
            </div>
          </div>
          <label className="switch">
            <input type="checkbox" checked={frozen} onChange={() => setFrozen(!frozen)} />
            <span className="slider" />
          </label>
        </div>
        <div className="settings-row">
          <div className="settings-row-left">
            <div className="settings-ic"><RefreshCw size={16} /></div>
            <div>
              <div className="settings-title">Списание без смены валюты</div>
              <div className="settings-sub">Оплата всегда в USD по курсу ЦБ</div>
            </div>
          </div>
          <ChevronRight size={16} className="chev" />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// History
// ---------------------------------------------------------------------------
function HistoryScreen({ txs }) {
  const [filter, setFilter] = useState("all");
  const filtered = txs.filter((t) => filter === "all" ? true : t.kind === filter);
  const filters = [
    { id: "all", label: "Все" },
    { id: "payment", label: "Покупки" },
    { id: "topup", label: "Пополнения" },
    { id: "transfer", label: "Переводы" },
  ];
  return (
    <div className="screen-content">
      <div className="page-title">История</div>
      <div className="chip-row">
        {filters.map((f) => (
          <button key={f.id} className={"chip" + (filter === f.id ? " active" : "")} onClick={() => setFilter(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="tx-list roomy">
        {filtered.length === 0 && <div className="empty">Пока пусто здесь</div>}
        {filtered.map((tx) => <TxRow key={tx.id} tx={tx} />)}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------
function ProfileScreen({ faceId, setFaceId }) {
  const rows = [
    { Icon: RefreshCw, title: "Курс валют", sub: `1 USD = ${RATE} ₸ · демо` },
    { Icon: ShieldCheck, title: "Безопасность", sub: "Face ID, пароль, устройства" },
    { Icon: Bell, title: "Уведомления", sub: "Push, email" },
    { Icon: Settings, title: "Настройки", sub: "Язык, тема, валюта отображения" },
  ];
  return (
    <div className="screen-content">
      <div className="page-title">Профиль</div>
      <div className="profile-card">
        <div className="avatar big">Р</div>
        <div>
          <div className="profile-name">Рад1xx</div>
          <div className="profile-sub">+7 •• ••• 74 21</div>
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-row-left">
          <div className="settings-ic"><Fingerprint size={16} /></div>
          <div>
            <div className="settings-title">Вход по Face ID</div>
            <div className="settings-sub">Быстрая разблокировка кошелька</div>
          </div>
        </div>
        <label className="switch">
          <input type="checkbox" checked={faceId} onChange={() => setFaceId(!faceId)} />
          <span className="slider" />
        </label>
      </div>

      {rows.map((r) => (
        <div className="settings-row" key={r.title}>
          <div className="settings-row-left">
            <div className="settings-ic"><r.Icon size={16} /></div>
            <div>
              <div className="settings-title">{r.title}</div>
              <div className="settings-sub">{r.sub}</div>
            </div>
          </div>
          <ChevronRight size={16} className="chev" />
        </div>
      ))}

      <button className="logout-btn">Выйти из аккаунта</button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Pay sheet (QR + Apple Pay flow)
// ---------------------------------------------------------------------------
const DEMO_MERCHANT = { name: "Coffee Boom", kzt: 5000 };

function PaySheet({ step, setStep, onClose, onPaid }) {
  const usd = DEMO_MERCHANT.kzt / RATE;

  useEffect(() => {
    if (step === "applepay-auth") {
      const t = setTimeout(() => setStep("success"), 1500);
      return () => clearTimeout(t);
    }
    if (step === "qr-scan") {
      const t = setTimeout(() => setStep("qr-confirm"), 1800);
      return () => clearTimeout(t);
    }
  }, [step, setStep]);

  if (step === "closed") return null;

  return (
    <div className="sheet-backdrop" onClick={step === "method" || step === "qr-confirm" ? onClose : undefined}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-handle" />

        {step === "method" && (
          <>
            <div className="sheet-head">
              <span>Оплата</span>
              <button className="icon-btn" onClick={onClose}><X size={16} /></button>
            </div>
            <button className="applepay-btn wide" onClick={() => setStep("applepay-auth")}>
              <Apple size={18} fill="currentColor" />
              <span>Pay</span>
            </button>
            <button className="qr-btn wide" onClick={() => setStep("qr-scan")}>
              <Scan size={18} />
              <span>Сканировать QR продавца</span>
            </button>
            <div className="sheet-note">Списание всегда в долларах — курс подставится автоматически</div>
          </>
        )}

        {step === "applepay-auth" && (
          <div className="ap-auth">
            <div className="ap-merchant">
              <div className="ap-merchant-name">{DEMO_MERCHANT.name}</div>
              <div className="ap-merchant-amt">{fmtKZT(DEMO_MERCHANT.kzt)}</div>
              <div className="ap-merchant-usd">спишется {fmtUSD(usd)}</div>
            </div>
            <div className="faceid-ring scanning small">
              <Fingerprint size={26} />
            </div>
            <div className="lock-caption">Подтвердите с Face ID</div>
          </div>
        )}

        {step === "qr-scan" && (
          <div className="qr-scan-box">
            <div className="qr-frame">
              <span className="qr-corner tl" /><span className="qr-corner tr" />
              <span className="qr-corner bl" /><span className="qr-corner br" />
              <div className="qr-line" />
            </div>
            <div className="lock-caption">Наведите камеру на QR-код продавца</div>
          </div>
        )}

        {step === "qr-confirm" && (
          <>
            <div className="sheet-head">
              <span>Подтверждение оплаты</span>
              <button className="icon-btn" onClick={onClose}><X size={16} /></button>
            </div>
            <div className="confirm-merchant">
              <div className="confirm-ic"><ShoppingBag size={18} /></div>
              <div>
                <div className="confirm-name">{DEMO_MERCHANT.name}</div>
                <div className="confirm-sub">QR-платёж продавцу</div>
              </div>
            </div>
            <div className="convert-box">
              <div className="convert-row">
                <span>Сумма к оплате</span>
                <span className="strong">{fmtKZT(DEMO_MERCHANT.kzt)}</span>
              </div>
              <div className="convert-row muted">
                <span>Курс обмена</span>
                <span>1$ = {RATE} ₸</span>
              </div>
              <div className="convert-arrow"><ArrowRight size={13} /></div>
              <div className="convert-row total">
                <span>Спишется с баланса</span>
                <span className="strong accent">{fmtUSD(usd)}</span>
              </div>
            </div>
            <button className="pay-confirm-btn" onClick={() => setStep("success")}>
              Оплатить {fmtUSD(usd)}
            </button>
          </>
        )}

        {step === "success" && (
          <div className="success-box">
            <div className="check-circle">
              <svg viewBox="0 0 52 52" width="52" height="52">
                <circle className="check-circle-bg" cx="26" cy="26" r="24" />
                <path className="check-mark" fill="none" d="M14 27l7 7 17-17" />
              </svg>
            </div>
            <div className="success-title">Оплата прошла</div>
            <div className="success-amt">{fmtUSD(usd)}</div>
            <div className="success-sub">{DEMO_MERCHANT.name} · {fmtKZT(DEMO_MERCHANT.kzt)}</div>
            <button className="pay-confirm-btn" onClick={() => onPaid(usd)}>Готово</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// App root
// ---------------------------------------------------------------------------
export default function CoinlyApp() {
  const [phase, setPhase] = useState("splash"); // splash -> lock -> app
  const [tab, setTab] = useState("home");
  const [hidden, setHidden] = useState(false);
  const [frozen, setFrozen] = useState(false);
  const [faceId, setFaceId] = useState(true);
  const [balance, setBalance] = useState(1240.5);
  const [txs, setTxs] = useState(initialTx);
  const [payStep, setPayStep] = useState("closed");
  const nextId = useRef(6);

  useEffect(() => {
    const t = setTimeout(() => setPhase("lock"), 1700);
    return () => clearTimeout(t);
  }, []);

  const handlePaid = useCallback((usd) => {
    setBalance((b) => +(b - usd).toFixed(2));
    setTxs((list) => [
      { id: nextId.current++, kind: "payment", merchant: DEMO_MERCHANT.name, icon: Coffee, kzt: DEMO_MERCHANT.kzt, date: "Только что" },
      ...list,
    ]);
    setPayStep("closed");
  }, []);

  return (
    <div className="app-wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; }
        .app-wrap {
          --bg: #060f0b;
          --bg-elev: #0c1d15;
          --card-a: #0f2c1e;
          --card-b: #071410;
          --accent: #00e28a;
          --accent-dim: #0b6b47;
          --accent-soft: rgba(0,226,138,0.14);
          --text-1: #eaf7f0;
          --text-2: #8fb3a1;
          --text-3: #4f6d5e;
          --danger: #ff6b6b;
          --divider: rgba(143,179,161,0.14);
          font-family: 'Manrope', -apple-system, sans-serif;
          width: 100%;
          min-height: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(60% 50% at 50% 0%, rgba(0,226,138,0.10), transparent 60%),
            #030807;
          padding: 28px 12px;
        }
        .phone {
          position: relative;
          width: 375px;
          height: 780px;
          background: var(--bg);
          border-radius: 52px;
          border: 10px solid #0a0a0a;
          box-shadow: 0 0 0 1px rgba(0,226,138,0.08), 0 40px 80px -30px rgba(0,0,0,0.8), 0 0 60px -10px rgba(0,226,138,0.08);
          overflow: hidden;
          color: var(--text-1);
          display: flex;
          flex-direction: column;
        }
        .statusbar {
          position: relative;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 26px 6px;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          color: var(--text-1);
          flex-shrink: 0;
        }
        .sb-icons { display: flex; align-items: center; gap: 5px; color: var(--text-1); }
        .sb-island {
          position: absolute; top: 8px; left: 50%; transform: translateX(-50%);
          width: 100px; height: 24px; background: #000; border-radius: 14px;
        }
        .screen { flex: 1; display: flex; flex-direction: column; }
        .screen-content {
          flex: 1; overflow-y: auto; padding: 8px 20px 100px;
        }
        .screen-content::-webkit-scrollbar { display: none; }

        /* Splash */
        .splash { align-items: center; justify-content: center; gap: 14px; background: var(--bg); }
        .splash-logo {
          width: 64px; height: 64px; border-radius: 20px;
          background: linear-gradient(135deg, var(--accent), var(--accent-dim));
          display: flex; align-items: center; justify-content: center;
          color: #04140d;
          animation: splashPop 0.7s cubic-bezier(.2,1.4,.4,1);
          box-shadow: 0 0 40px rgba(0,226,138,0.35);
        }
        @keyframes splashPop { from { transform: scale(0.3); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .splash-word {
          font-family: 'Space Mono', monospace; font-size: 26px; letter-spacing: 1px;
          font-weight: 700; color: var(--text-1);
          animation: fadeUp 0.6s ease 0.2s both;
        }
        .splash-sub { font-size: 12.5px; color: var(--text-3); animation: fadeUp 0.6s ease 0.4s both; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px);} to { opacity:1; transform:translateY(0);} }

        /* Lock */
        .lock { align-items: center; padding: 40px 24px; background: var(--bg); }
        .lock-top { text-align: center; margin-top: 20px; }
        .lock-brand { display: flex; align-items: center; justify-content: center; gap: 6px; color: var(--accent); font-family:'Space Mono',monospace; font-size: 13px; margin-bottom: 30px; }
        .lock-time { font-family: 'Space Mono', monospace; font-size: 52px; font-weight: 700; }
        .lock-date { color: var(--text-2); font-size: 13px; margin-top: 4px; }
        .lock-mid { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; }
        .faceid-ring {
          width: 74px; height: 74px; border-radius: 50%;
          border: 1.5px solid var(--divider);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent); cursor: pointer;
          transition: box-shadow .3s;
        }
        .faceid-ring.small { width: 56px; height: 56px; }
        .faceid-ring.scanning {
          border-color: var(--accent);
          animation: ringPulse 1.1s ease-in-out infinite;
        }
        @keyframes ringPulse {
          0% { box-shadow: 0 0 0 0 rgba(0,226,138,0.5); }
          70% { box-shadow: 0 0 0 16px rgba(0,226,138,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,226,138,0); }
        }
        .lock-caption { color: var(--text-2); font-size: 13px; }
        .lock-cta {
          width: 100%; padding: 15px; border-radius: 16px; border: none;
          background: var(--accent-soft); color: var(--accent);
          font-family: inherit; font-weight: 700; font-size: 14.5px; cursor: pointer;
        }
        .lock-cta:disabled { opacity: 0.6; }

        /* Home header */
        .home-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 2px 18px; }
        .greeting { font-size: 12.5px; color: var(--text-3); }
        .username { font-size: 19px; font-weight: 800; margin-top: 1px; }
        .avatar {
          width: 40px; height: 40px; border-radius: 13px;
          background: linear-gradient(135deg, var(--accent), var(--accent-dim));
          color: #04140d; font-weight: 800; font-size: 15px;
          display: flex; align-items: center; justify-content: center;
        }
        .avatar.big { width: 52px; height: 52px; border-radius: 16px; font-size: 19px; }

        /* Balance card */
        .balance-card {
          position: relative; overflow: hidden;
          border-radius: 26px; padding: 22px 22px 14px;
          background: linear-gradient(160deg, var(--card-a), var(--card-b) 70%);
          border: 1px solid rgba(0,226,138,0.16);
          margin-bottom: 20px;
        }
        .balance-card-glow {
          position: absolute; width: 220px; height: 220px; right: -70px; top: -90px;
          background: radial-gradient(circle, rgba(0,226,138,0.28), transparent 65%);
          pointer-events: none;
        }
        .balance-row-top { display: flex; align-items: center; justify-content: space-between; }
        .balance-label { font-size: 12.5px; color: var(--text-2); }
        .eye-btn { background: rgba(255,255,255,0.06); border: none; color: var(--text-2); width: 28px; height: 28px; border-radius: 9px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .balance-value { font-family: 'Space Mono', monospace; font-size: 36px; font-weight: 700; margin-top: 10px; letter-spacing: -0.5px; }
        .balance-sub { font-size: 12.5px; color: var(--text-2); margin-top: 4px; }
        .spark { margin-top: 6px; margin-left: -6px; }

        /* Quick actions */
        .quick-actions { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 22px; }
        .qa-btn {
          background: var(--bg-elev); border: 1px solid var(--divider); border-radius: 16px;
          padding: 12px 4px; display: flex; flex-direction: column; align-items: center; gap: 7px;
          color: var(--text-2); font-size: 10.8px; cursor: pointer; font-family: inherit;
          transition: transform .15s;
        }
        .qa-btn:active { transform: scale(0.94); }
        .qa-btn .qa-ic { width: 34px; height: 34px; border-radius: 11px; background: rgba(255,255,255,0.05); display:flex;align-items:center;justify-content:center; color: var(--text-1); }
        .qa-btn.primary { color: #04140d; }
        .qa-btn.primary .qa-ic { background: var(--accent); color: #04140d; }
        .qa-btn.primary { background: var(--accent-soft); border-color: rgba(0,226,138,0.3); color: var(--accent); }

        .section-head { display: flex; align-items: center; justify-content: space-between; font-size: 13px; font-weight: 700; color: var(--text-1); margin: 4px 2px 10px; }
        .section-head button { background: none; border: none; color: var(--text-3); font-size: 12px; display: flex; align-items: center; gap: 2px; cursor: pointer; font-family: inherit; }

        .tx-list { display: flex; flex-direction: column; gap: 2px; }
        .tx-list.roomy { gap: 4px; margin-top: 4px; }
        .tx-row { display: flex; align-items: center; gap: 12px; padding: 10px 4px; border-bottom: 1px solid var(--divider); }
        .tx-row:last-child { border-bottom: none; }
        .tx-icon { width: 36px; height: 36px; border-radius: 12px; background: var(--bg-elev); display: flex; align-items: center; justify-content: center; color: var(--text-2); flex-shrink: 0; }
        .tx-icon.in { color: var(--accent); background: var(--accent-soft); }
        .tx-mid { flex: 1; min-width: 0; }
        .tx-title { font-size: 13.5px; font-weight: 600; }
        .tx-sub { font-size: 11.5px; color: var(--text-3); margin-top: 1px; }
        .tx-amount { font-family: 'Space Mono', monospace; font-size: 13.5px; font-weight: 700; color: var(--text-1); }
        .tx-amount.pos { color: var(--accent); }
        .empty { text-align: center; color: var(--text-3); font-size: 13px; padding: 30px 0; }

        .page-title { font-size: 20px; font-weight: 800; margin: 10px 2px 16px; }

        /* Card screen */
        .card-flip-wrap { perspective: 1200px; margin-bottom: 10px; }
        .card3d {
          position: relative; width: 100%; height: 200px; cursor: pointer;
          transform-style: preserve-3d; transition: transform .6s cubic-bezier(.4,.2,.2,1);
        }
        .card3d.flipped { transform: rotateY(180deg); }
        .card-face {
          position: absolute; inset: 0; border-radius: 22px; padding: 20px;
          backface-visibility: hidden; display: flex; flex-direction: column; justify-content: space-between;
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.7);
        }
        .card-front { background: linear-gradient(150deg, #123526 0%, #06140e 75%); border: 1px solid rgba(0,226,138,0.22); }
        .card-back { background: linear-gradient(150deg, #0d2318 0%, #050d09 75%); border: 1px solid rgba(0,226,138,0.22); transform: rotateY(180deg); justify-content: flex-start; gap: 16px; padding-top: 26px; }
        .card-top-row { display: flex; align-items: center; justify-content: space-between; color: var(--accent); }
        .card-net { font-family: 'Space Mono', monospace; font-weight: 700; letter-spacing: 1px; font-size: 13px; }
        .card-chip { width: 36px; height: 26px; border-radius: 6px; background: linear-gradient(135deg,#ffe9b0,#c9a24d); }
        .card-number { font-family: 'Space Mono', monospace; font-size: 16px; letter-spacing: 2px; color: var(--text-1); }
        .card-bottom-row { display: flex; align-items: flex-end; justify-content: space-between; }
        .card-small-label { font-size: 9.5px; color: var(--text-3); text-transform: uppercase; letter-spacing: 1px; }
        .card-holder { font-size: 13px; font-weight: 700; margin-top: 3px; font-family: 'Space Mono', monospace; }
        .card-stripe { width: 100%; height: 34px; background: #000; margin-top: -6px; }
        .card-cvv-row { display: flex; align-items: center; gap: 10px; background: #fff; border-radius: 6px; padding: 6px 10px; align-self: flex-end; margin-right: 4px; }
        .card-cvv-row span { font-size: 10px; color: #333; font-weight: 700; }
        .card-cvv { font-family: 'Space Mono', monospace; color: #111; font-weight: 700; }
        .card-back-note { font-size: 11px; color: var(--text-3); padding: 0 2px; }
        .flip-hint { text-align: center; font-size: 11.5px; color: var(--text-3); margin-bottom: 18px; }

        .applepay-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: #fff; color: #050505; border: none; border-radius: 15px;
          padding: 14px; font-weight: 700; font-size: 15px; cursor: pointer; font-family: inherit;
        }
        .applepay-btn.wide { width: 100%; margin-bottom: 10px; }
        .qr-btn {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--bg-elev); color: var(--text-1); border: 1px solid var(--divider);
          border-radius: 15px; padding: 14px; font-weight: 700; font-size: 14px; cursor: pointer; font-family: inherit;
        }
        .qr-btn.wide { width: 100%; }

        .card-settings { margin-top: 18px; display: flex; flex-direction: column; }
        .settings-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 2px; border-bottom: 1px solid var(--divider); }
        .settings-row-left { display: flex; align-items: center; gap: 12px; }
        .settings-ic { width: 34px; height: 34px; border-radius: 11px; background: var(--bg-elev); display: flex; align-items: center; justify-content: center; color: var(--accent); }
        .settings-title { font-size: 13.5px; font-weight: 600; }
        .settings-sub { font-size: 11px; color: var(--text-3); margin-top: 1px; }
        .chev { color: var(--text-3); }

        .switch { position: relative; width: 42px; height: 25px; flex-shrink: 0; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; inset: 0; background: var(--bg-elev); border: 1px solid var(--divider); border-radius: 20px; cursor: pointer; transition: .25s; }
        .slider::before { content: ""; position: absolute; width: 19px; height: 19px; left: 2px; top: 2px; background: var(--text-2); border-radius: 50%; transition: .25s; }
        .switch input:checked + .slider { background: var(--accent-soft); border-color: var(--accent); }
        .switch input:checked + .slider::before { transform: translateX(17px); background: var(--accent); }

        /* History */
        .chip-row { display: flex; gap: 8px; margin-bottom: 6px; overflow-x: auto; }
        .chip { flex-shrink: 0; padding: 8px 14px; border-radius: 20px; border: 1px solid var(--divider); background: transparent; color: var(--text-2); font-size: 12.5px; cursor: pointer; font-family: inherit; }
        .chip.active { background: var(--accent-soft); color: var(--accent); border-color: rgba(0,226,138,0.3); font-weight: 700; }

        /* Profile */
        .profile-card { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
        .profile-name { font-size: 16px; font-weight: 800; }
        .profile-sub { font-size: 12px; color: var(--text-3); margin-top: 2px; }
        .logout-btn { width: 100%; margin-top: 26px; padding: 14px; border-radius: 15px; border: 1px solid rgba(255,107,107,0.3); background: rgba(255,107,107,0.08); color: var(--danger); font-weight: 700; font-size: 14px; cursor: pointer; font-family: inherit; }

        /* Tab bar */
        .tabbar {
          position: absolute; left: 0; right: 0; bottom: 0;
          display: flex; padding: 10px 10px 0;
          background: rgba(6,15,11,0.88); backdrop-filter: blur(14px);
          border-top: 1px solid var(--divider);
        }
        .tab-btn {
          flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px;
          background: none; border: none; color: var(--text-3); font-size: 10px; padding: 4px 0 10px;
          cursor: pointer; font-family: inherit; position: relative;
        }
        .tab-btn.active { color: var(--accent); }
        .tab-dot { position: absolute; top: -2px; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }
        .home-indicator { position: absolute; bottom: 6px; left: 50%; transform: translateX(-50%); width: 120px; height: 4px; border-radius: 3px; background: rgba(255,255,255,0.35); }

        /* Sheet */
        .sheet-backdrop {
          position: absolute; inset: 0; background: rgba(0,0,0,0.55);
          display: flex; align-items: flex-end; z-index: 20;
          animation: fadeIn .25s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .sheet {
          width: 100%; background: var(--bg-elev); border-radius: 26px 26px 0 0;
          padding: 10px 20px 30px; border-top: 1px solid var(--divider);
          animation: slideUp .32s cubic-bezier(.2,.9,.3,1);
          min-height: 260px;
        }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        .sheet-handle { width: 36px; height: 4px; border-radius: 3px; background: var(--divider); margin: 4px auto 14px; }
        .sheet-head { display: flex; align-items: center; justify-content: space-between; font-weight: 800; font-size: 15.5px; margin-bottom: 16px; }
        .icon-btn { width: 28px; height: 28px; border-radius: 9px; background: rgba(255,255,255,0.06); border: none; color: var(--text-2); display: flex; align-items: center; justify-content: center; cursor: pointer; }
        .sheet-note { text-align: center; font-size: 11.5px; color: var(--text-3); margin-top: 8px; }

        .ap-auth, .qr-scan-box, .success-box { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 10px 0 6px; }
        .ap-merchant { text-align: center; margin-bottom: 6px; }
        .ap-merchant-name { font-size: 13px; color: var(--text-2); }
        .ap-merchant-amt { font-family: 'Space Mono', monospace; font-size: 30px; font-weight: 700; margin-top: 4px; }
        .ap-merchant-usd { font-size: 12px; color: var(--accent); margin-top: 2px; }

        .qr-frame { position: relative; width: 190px; height: 190px; border-radius: 18px; background: #01100a; overflow: hidden; }
        .qr-corner { position: absolute; width: 22px; height: 22px; border-color: var(--accent); border-style: solid; }
        .qr-corner.tl { top: 10px; left: 10px; border-width: 3px 0 0 3px; border-top-left-radius: 6px; }
        .qr-corner.tr { top: 10px; right: 10px; border-width: 3px 3px 0 0; border-top-right-radius: 6px; }
        .qr-corner.bl { bottom: 10px; left: 10px; border-width: 0 0 3px 3px; border-bottom-left-radius: 6px; }
        .qr-corner.br { bottom: 10px; right: 10px; border-width: 0 3px 3px 0; border-bottom-right-radius: 6px; }
        .qr-line { position: absolute; left: 10px; right: 10px; height: 2px; background: var(--accent); box-shadow: 0 0 10px 2px rgba(0,226,138,0.7); animation: scanMove 1.6s ease-in-out infinite; }
        @keyframes scanMove { 0% { top: 14px; } 50% { top: 176px; } 100% { top: 14px; } }

        .confirm-merchant { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
        .confirm-ic { width: 40px; height: 40px; border-radius: 13px; background: var(--bg); display: flex; align-items: center; justify-content: center; color: var(--accent); }
        .confirm-name { font-weight: 700; font-size: 14.5px; }
        .confirm-sub { font-size: 11.5px; color: var(--text-3); }

        .convert-box { background: var(--bg); border: 1px solid var(--divider); border-radius: 16px; padding: 14px 16px; margin-bottom: 16px; }
        .convert-row { display: flex; justify-content: space-between; font-size: 13px; color: var(--text-2); padding: 5px 0; }
        .convert-row.muted { font-size: 12px; }
        .convert-row.total { border-top: 1px dashed var(--divider); margin-top: 6px; padding-top: 10px; }
        .convert-row .strong { color: var(--text-1); font-weight: 700; font-family: 'Space Mono', monospace; }
        .convert-row .strong.accent { color: var(--accent); font-size: 16px; }
        .convert-arrow { display: flex; justify-content: center; color: var(--text-3); }

        .pay-confirm-btn {
          width: 100%; padding: 15px; border-radius: 16px; border: none;
          background: var(--accent); color: #04140d; font-weight: 800; font-size: 15px;
          cursor: pointer; font-family: inherit;
        }

        .check-circle-bg { fill: none; stroke: rgba(0,226,138,0.25); stroke-width: 2.5; }
        .check-mark { stroke: var(--accent); stroke-width: 3.5; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 40; stroke-dashoffset: 40; animation: drawCheck .5s ease .1s forwards; }
        @keyframes drawCheck { to { stroke-dashoffset: 0; } }
        .success-title { font-weight: 800; font-size: 17px; margin-top: 4px; }
        .success-amt { font-family: 'Space Mono', monospace; font-size: 26px; font-weight: 700; color: var(--accent); }
        .success-sub { font-size: 12.5px; color: var(--text-3); margin-bottom: 8px; }
      `}</style>

      <div className="phone">
        {phase !== "splash" && <StatusBar />}
        {phase === "splash" && <Splash />}
        {phase === "lock" && <LockScreen onUnlock={() => setPhase("app")} />}
        {phase === "app" && (
          <>
            {tab === "home" && (
              <HomeScreen
                balance={balance}
                hidden={hidden}
                setHidden={setHidden}
                txs={txs}
                openPay={() => setPayStep("method")}
                goCard={() => setTab("card")}
                goHistory={() => setTab("history")}
              />
            )}
            {tab === "card" && <CardScreen balance={balance} frozen={frozen} setFrozen={setFrozen} />}
            {tab === "history" && <HistoryScreen txs={txs} />}
            {tab === "profile" && <ProfileScreen faceId={faceId} setFaceId={setFaceId} />}
            <TabBar tab={tab} setTab={setTab} />
            <PaySheet
              step={payStep}
              setStep={setPayStep}
              onClose={() => setPayStep("closed")}
              onPaid={handlePaid}
            />
          </>
        )}
      </div>
    </div>
  );
}

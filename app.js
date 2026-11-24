'use strict';
/* JEJAK PKL BCF v1.1 — aplikasi PWA (tampilan) */
const CFG = window.JEJAK_CONFIG || {};
const VERSION = '1.1.0';

/* ---------- ikon ---------- */
const IP = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  alert: '<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>',
  trend: '<path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  left: '<path d="M15 18l-6-6 6-6"/>', right: '<path d="M9 18l6-6-6-6"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mobile: '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M12 18h.01"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  send: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4"/><path d="M12 17h.01"/>',
  clip: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>',
  chart: '<path d="M12 20V10M18 20V4M6 20v-4"/>',
  refresh: '<path d="M23 4v6h-6"/><path d="M20.5 15a9 9 0 1 1-2.1-9.4L23 10"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/>',
  wifi: '<path d="M1 1l22 22M16.7 11.1A10.9 10.9 0 0 1 19 12.5M5 12.5a10.9 10.9 0 0 1 5.2-2.4M10.7 5A16 16 0 0 1 22.6 9M1.4 9a15.9 15.9 0 0 1 4.7-2.9M8.5 16.1a5 5 0 0 1 7 0M12 20h.01"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5M12 3v12"/>',
  filter: '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
  print: '<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M16 6l-4-4-4 4M12 2v13"/>',
  build: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>'
};
const ic = (n, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24" aria-hidden="true">${IP[n] || ''}</svg>`;

/* ---------- util ---------- */
const $ = (q, r = document) => r.querySelector(q);
const $$ = (q, r = document) => Array.from(r.querySelectorAll(q));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'], BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const pad = n => String(n).padStart(2, '0');
const dObj = s => { const [y, m, d] = String(s).slice(0, 10).split('-').map(Number); return new Date(y, m - 1, d, 12); };
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const addD = (s, n) => { const d = dObj(s); d.setDate(d.getDate() + n); return ymd(d); };
const localToday = () => ymd(new Date());
const localIso = () => { const d = new Date(); return `${ymd(d)}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`; };
const fD = s => s ? `${dObj(s).getDate()} ${BLN[dObj(s).getMonth()]} ${dObj(s).getFullYear()}` : '—';
const fDay = s => s ? `${HARI[dObj(s).getDay()]}, ${dObj(s).getDate()} ${BLN[dObj(s).getMonth()]}` : '—';
const fDayL = s => s ? `${HARI[dObj(s).getDay()]}, ${dObj(s).getDate()} ${BULAN[dObj(s).getMonth()]} ${dObj(s).getFullYear()}` : '—';
const fT = iso => iso ? `${fD(iso)}, ${String(iso).slice(11, 16).replace(':', '.')}` : '';
const initials = n => String(n || '?').replace(/,.*$/, '').trim().split(/\s+/).slice(0, 2).map(x => x[0]).join('').toUpperCase();
const greet = () => { const h = new Date().getHours(); return h < 11 ? 'Selamat pagi' : h < 15 ? 'Selamat siang' : h < 18 ? 'Selamat sore' : 'Selamat malam'; };
const ST = { draf: ['Draf', 'gray', 'edit'], terkirim: ['Menunggu', 'warn', 'clock'], diperiksa: ['Diperiksa', 'blue', 'chat'], revisi: ['Perlu revisi', 'red', 'edit'], disetujui: ['Disetujui', 'ok', 'check'] };
const QS = { antre: ['Menunggu koneksi', 'blue', 'wifi'], sinkron: ['Sedang disinkronkan', 'teal', 'refresh'], foto: ['Menunggu foto', 'warn', 'upload'], gagal: ['Gagal sementara', 'warn', 'clock'], perbaiki: ['Perlu diperbaiki', 'red', 'edit'] };
const isTime = t => /^([01]\d|2[0-3]):[0-5]\d$/.test(t || '');
const tmin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const spanMin = j => { if (j.kehadiran !== 'Hadir' || !isTime(j.jam_mulai) || !isTime(j.jam_selesai)) return 0; let a = tmin(j.jam_mulai), b = tmin(j.jam_selesai); const lh = j.lintas_hari === true || j.lintas_hari === 'ya'; if (lh) { if (b >= a) return 0; b += 1440; } else if (b <= a) return 0; return b - a; };
const durH = j => Math.max(0, (spanMin(j) - (+j.istirahat_menit || 0)) / 60);
const uid = () => (crypto.randomUUID ? crypto.randomUUID().replace(/-/g, '') : Date.now().toString(36) + Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 12)).slice(0, 32);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const hash8 = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h.toString(16).padStart(8, '0'); };

/* ---------- penyimpanan lokal: dipisah per alamat server (produksi/staging) dan per akun ---------- */
const NS = hash8(String(CFG.API_URL || 'none'));
const LS = { k: k => `jejak:${NS}:${k}`, get(k) { try { return localStorage.getItem(this.k(k)); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(this.k(k), v); return true; } catch (e) { return false; } }, del(k) { try { localStorage.removeItem(this.k(k)); } catch (e) { } } };
const IDB = {
  db: null, name: 'jejak_pkl_' + NS, ok: true,
  open() {
    if (this.db) return Promise.resolve(this.db);
    return new Promise((res, rej) => {
      let r; try { r = indexedDB.open(this.name, 1); } catch (e) { this.ok = false; return rej(e); }
      r.onupgradeneeded = () => { const d = r.result; if (!d.objectStoreNames.contains('kv')) d.createObjectStore('kv'); if (!d.objectStoreNames.contains('outbox')) d.createObjectStore('outbox', { keyPath: 'id' }); if (!d.objectStoreNames.contains('drafts')) d.createObjectStore('drafts', { keyPath: 'id' }); };
      r.onsuccess = () => { this.db = r.result; res(this.db); }; r.onerror = () => { this.ok = false; rej(r.error); };
    });
  },
  /* Promise baru selesai SETELAH transaksi benar-benar tersimpan (oncomplete) */
  async tx(store, mode, fn) { const db = await this.open(); return new Promise((res, rej) => { const t = db.transaction(store, mode), s = t.objectStore(store); let out; const req = fn(s); if (req) req.onsuccess = () => { out = req.result; }; t.oncomplete = () => res(out); t.onerror = () => rej(t.error || new Error('Penyimpanan HP gagal')); t.onabort = () => rej(t.error || new Error('Penyimpanan HP dibatalkan (memori penuh?)')); }); },
  get(k) { return this.tx('kv', 'readonly', s => s.get(k)).catch(() => null); },
  set(k, v) { return this.tx('kv', 'readwrite', s => s.put(v, k)); },
  del(k) { return this.tx('kv', 'readwrite', s => s.delete(k)).catch(() => null); },
  all(store) { return this.tx(store, 'readonly', s => s.getAll()).catch(() => []); },
  put(store, v) { return this.tx(store, 'readwrite', s => s.put(v)); },
  remove(store, id) { return this.tx(store, 'readwrite', s => s.delete(id)); },
  getOne(store, id) { return this.tx(store, 'readonly', s => s.get(id)).catch(() => null); }
};

/* ---------- state ---------- */
const S = { token: '', user: null, epoch: 0, route: 'login', params: {}, hist: [], data: {}, filter: {}, form: null, photos: {}, outbox: [], drafts: [], installEvt: null, info: null, last: null, saveState: '' };
const me = () => S.user ? S.user.id : '';

/* ---------- API ---------- */
class ApiError extends Error { constructor(msg, code) { super(msg); this.code = code; } }
const TEMP_CODES = ['offline', 'network', 'http', 'busy', 'server', 'ratelimit', 'maintenance'];
async function api(action, data = {}, opt = {}) {
  if (!CFG.API_URL || /GANTI/.test(CFG.API_URL)) throw new ApiError('Alamat server belum diatur di config.js.', 'config');
  const ep = S.epoch, token = opt.token !== undefined ? opt.token : S.token;
  let lastErr, tries = (opt.retries ?? 1) + 1;
  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      const ctl = new AbortController(), tm = setTimeout(() => ctl.abort(), opt.timeout || 45000);
      let res;
      try { res = await fetch(CFG.API_URL, { method: 'POST', body: JSON.stringify({ action, data, token }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, signal: ctl.signal, redirect: 'follow', cache: 'no-store' }); }
      finally { clearTimeout(tm); }
      if (!res.ok) throw new ApiError('Server tidak merespons (' + res.status + ').', 'http');
      let j; try { j = await res.json(); } catch (e) { throw new ApiError('Jawaban server tidak terbaca.', 'http'); }
      if (S.epoch !== ep && !opt.anyEpoch) throw new ApiError('Sesi sudah berganti.', 'stale');
      if (!j.ok) {
        if (j.code === 'auth' && !opt.noLogout) { logoutLocal(j.error); throw new ApiError(j.error, 'auth'); }
        if ((j.code === 'busy' || j.code === 'server') && attempt < tries - 1) { await sleep(1500 * (attempt + 1)); continue; }
        throw new ApiError(j.error, j.code || 'invalid');
      }
      return j.data;
    } catch (e) {
      if (e instanceof ApiError && e.code !== 'http') throw e;
      lastErr = e; if (attempt < tries - 1) await sleep(1200 * (attempt + 1));
    }
  }
  if (lastErr instanceof ApiError) throw lastErr;
  throw new ApiError(navigator.onLine === false ? 'Tidak ada sinyal internet.' : 'Gagal terhubung ke server. Periksa sinyal lalu coba lagi.', navigator.onLine === false ? 'offline' : 'network');
}

/* ---------- sesi & isolasi data antarakun ---------- */
async function setSession(token, user) {
  S.epoch++; S.token = token; S.user = user; S.data = {}; S.photos = {}; S.form = null; S.last = null; S.hist = []; S.filter = {};
  LS.set('token', token);
  try { await IDB.set('profile', user); } catch (e) { }
  await refreshLocal();
}
function logoutLocal(reason) {
  S.epoch++; S.token = ''; S.user = null; S.data = {}; S.photos = {}; S.form = null; S.last = null; S.hist = []; S.filter = {}; S.outbox = []; S.drafts = [];
  LS.del('token'); IDB.del('profile'); closeSheet();
  go('login', {}, true);
  if (reason) toast(reason, true);
}
/* Hanya draf & antrean milik akun yang sedang masuk yang dibaca/ditampilkan/dikirim */
async function refreshLocal() {
  const id = me();
  const [ob, dr] = await Promise.all([IDB.all('outbox'), IDB.all('drafts')]);
  S.outbox = id ? ob.filter(x => x.owner === id).sort((a, b) => a.createdAt - b.createdAt) : [];
  S.drafts = id ? dr.filter(x => x.owner === id) : [];
}

/* ---------- peran ---------- */
const has = r => !!S.user && S.user.roles.some(x => x.peran === r);
const isStudent = () => !!S.user?.siswa;
const isMentor = () => has('guru_pembimbing');
const isDudi = () => !!S.user?.instruktur;
const isMonitor = () => ['kajur', 'sekjur', 'pokja_pengelola', 'wali_kelas'].some(has);
function navItems() {
  if (isStudent()) return [['home', 'Beranda', 'home'], ['activity', 'Aktivitas', 'list'], ['+', '', 'plus'], ['issues', 'Kendala', 'alert'], ['profile', 'Profil', 'user']];
  if (isDudi()) return [['home', 'Beranda', 'home'], ['profile', 'Profil', 'user']];
  if (isMentor() && isMonitor()) return [['home', 'Beranda', 'home'], ['review', 'Periksa', 'clip'], ['monitor', 'Pantau', 'chart'], ['issues', 'Kendala', 'alert'], ['profile', 'Profil', 'user']];
  if (isMentor()) return [['home', 'Beranda', 'home'], ['review', 'Periksa', 'clip'], ['mentees', 'Binaan', 'users'], ['issues', 'Kendala', 'alert'], ['profile', 'Profil', 'user']];
  if (isMonitor()) return [['home', 'Pantau', 'chart'], ['jlist', 'Jurnal', 'book'], ['issues', 'Kendala', 'alert'], ['profile', 'Profil', 'user']];
  return [['home', 'Beranda', 'home'], ['profile', 'Profil', 'user']];
}

/* ---------- router ---------- */
const V = {}, A = {}, F = {}, C = {};
function go(route, params = {}, replace = false) { if (!replace && S.route && (S.route !== route || JSON.stringify(S.params) !== JSON.stringify(params))) S.hist.push([S.route, S.params]); if (S.hist.length > 30) S.hist.shift(); S.route = route; S.params = params; closeSheet(); render(); window.scrollTo(0, 0); }
function back() { const p = S.hist.pop(); if (p) { S.route = p[0]; S.params = p[1]; render(); window.scrollTo(0, 0); } else go('home', {}, true); }
function render() {
  const app = $('#app');
  if (!S.token || !S.user) { if (!['login', 'activate'].includes(S.route)) S.route = 'login'; }
  else if (['login', 'activate'].includes(S.route)) S.route = 'home';
  const fn = V[S.route] || V.home;
  let html;
  try { html = fn(S.params); } catch (e) { console.error(e); html = `<div class="sec"><div class="note red">${ic('alert', 's')}<div>Terjadi kesalahan tampilan: ${esc(e.message)}</div></div></div>`; }
  const nav = S.user && navItems().some(n => n[0] === S.route) ? navBar() : '';
  const mode = (S.user?.mode || S.info?.mode) === 'staging' ? `<div class="stagebar">MODE UJI (STAGING) — bukan data resmi</div>` : '';
  app.innerHTML = mode + (navigator.onLine === false ? `<div class="offline">${ic('wifi', 's')} Tidak ada sinyal — jurnal tetap tersimpan di HP</div>` : '') + html + nav;
  (C[S.route] || (() => { }))(S.params);
  loadPhotos();
}
function navBar() {
  const badge = id => { if (id === 'review' && S.data.th?.antrean) return S.data.th.antrean; if (id === 'activity' && S.outbox.length) return S.outbox.length; return 0; };
  return `<nav class="nav" aria-label="Navigasi utama">${navItems().map(([id, t, i]) => id === '+' ? `<button class="fab" data-go="journal-form" aria-label="Isi jurnal">${ic('plus')}</button>` : `<button class="${S.route === id ? 'on' : ''}" data-go="${id}">${ic(i)}<span>${t}</span>${badge(id) ? `<b class="nb">${badge(id)}</b>` : ''}</button>`).join('')}</nav>`;
}
const loading = (t = 'Memuat…') => `<div class="loading"><div class="spin"></div>${t}</div>`;
const empty = (t, d = '') => `<div class="empty"><b>${t}</b>${d}</div>`;
const errBox = e => `<div class="sec"><div class="note red">${ic('alert', 's')}<div>${esc(e.message || e)}<br><button class="btn sm ghost" data-act="reload" style="padding:0;min-height:32px">${ic('refresh', 's')} Coba lagi</button></div></div></div>`;
/* Data per layar dimuat sekali. Hasil dari sesi lama (epoch berbeda) dibuang. */
function useData(key, loader) {
  const d = S.data[key];
  if (d === undefined) {
    const ep = S.epoch; S.data[key] = null;
    loader().then(v => { if (ep !== S.epoch) return; S.data[key] = v; render(); }).catch(e => { if (ep !== S.epoch || e.code === 'stale') return; S.data[key] = { __err: e }; render(); });
    return null;
  }
  return d;
}
const refresh = (...keys) => { keys.forEach(k => delete S.data[k]); render(); };
const dropData = pred => Object.keys(S.data).filter(pred).forEach(k => delete S.data[k]);

/* ---------- toast, sheet ---------- */
function toast(m, err = false) { const t = $('#toast'); if (!t) return; t.textContent = m; t.className = 'toast on' + (err ? ' err' : ''); clearTimeout(toast.t); toast.t = setTimeout(() => { t.className = 'toast'; setTimeout(() => { if (t.className === 'toast') t.textContent = ''; }, 400); }, err ? 4200 : 2600); }
function openSheet(html) { $('#modal').innerHTML = `<div class="ov" data-act="close-ov"><div class="sheet" role="dialog" aria-modal="true"><div class="grab" style="margin:4px auto 10px"></div>${html}</div></div>`; }
function closeSheet() { const m = $('#modal'); if (m) m.innerHTML = ''; }
let confirmFn = null;
function ask(title, text, okLabel, fn, danger, cancelLabel = 'Batal') { confirmFn = fn; openSheet(`<h2>${esc(title)}</h2><p>${text}</p><div class="btns" style="margin-top:14px"><button class="btn f1" data-act="close">${esc(cancelLabel)}</button><button class="btn f1 ${danger ? 'red' : 'pri'}" data-act="confirm">${esc(okLabel)}</button></div>`); }

/* ---------- event ---------- */
document.addEventListener('click', async ev => {
  const el = ev.target.closest('[data-go],[data-act]'); if (!el) return;
  if (el.dataset.act === 'close-ov' && ev.target !== el) return;
  ev.preventDefault(); ev.stopPropagation();
  if (el.dataset.go) { const p = { ...el.dataset }; delete p.go; return go(el.dataset.go, p); }
  const fn = A[el.dataset.act]; if (!fn) return;
  try { await fn(el, ev); } catch (e) { if (e.code !== 'auth' && e.code !== 'stale') toast(e.message || 'Terjadi kesalahan', true); }
});
document.addEventListener('submit', async ev => {
  const f = ev.target.closest('form[data-form]'); if (!f) return; ev.preventDefault();
  const btn = ev.submitter, d = Object.fromEntries(new FormData(f)); Object.keys(d).forEach(k => typeof d[k] === 'string' && (d[k] = d[k].trim()));
  if (f.dataset.busy) return; f.dataset.busy = '1';
  const old = btn ? btn.innerHTML : '';
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spin" style="width:18px;height:18px;border-width:2.5px;margin:0"></span>'; }
  try { await F[f.dataset.form](d, f, btn); } catch (e) { if (e.code !== 'auth' && e.code !== 'stale') toast(e.message || 'Gagal', true); }
  finally { delete f.dataset.busy; if (btn && btn.isConnected) { btn.disabled = false; btn.innerHTML = old; } }
});
document.addEventListener('change', ev => { const el = ev.target.closest('[data-change]'); if (el && C['ch:' + el.dataset.change]) C['ch:' + el.dataset.change](el, ev); });
document.addEventListener('input', ev => { const el = ev.target.closest('[data-input]'); if (el && C['in:' + el.dataset.input]) C['in:' + el.dataset.input](el, ev); });
Object.assign(A, {
  back: () => back(), close: () => closeSheet(), 'close-ov': () => closeSheet(),
  confirm: async () => { const f = confirmFn; confirmFn = null; closeSheet(); if (f) await f(); },
  reload: () => { S.data = {}; render(); },
  tab: el => { S.filter[el.dataset.k] = el.dataset.v; if (el.dataset.reset) S.filter[el.dataset.reset] = ''; render(); },
  pw: el => { const i = el.parentElement.querySelector('input'); i.type = i.type === 'password' ? 'text' : 'password'; },
  zoom: el => { const id = el.dataset.full; const src = id ? S.photos[id + ':full'] || S.photos[id] : el.dataset.src; if (!src) return; const d = document.createElement('div'); d.className = 'lightbox'; d.innerHTML = `<img src="${src}" alt="">`; d.onclick = () => d.remove(); document.body.appendChild(d); if (id && !S.photos[id + ':full']) { const ep = S.epoch; api('photo.get', { id, size: 'full' }).then(r => { if (ep !== S.epoch) return; S.photos[id + ':full'] = r.data; const im = d.querySelector('img'); if (im) im.src = r.data; }).catch(() => { }); } },
  emergency: () => openSheet(`<h2>Kontak darurat</h2><div class="urgent"><b>${ic('phone')} Butuh pertolongan segera?</b><p>Bila ada kecelakaan, ancaman, atau kamu merasa tidak aman, <b>jangan menunggu balasan di aplikasi</b>. Aplikasi ini bukan pengganti pertolongan langsung.</p>${contactLinks()}</div><p class="meta">Nomor guru hanya ditampilkan bila sudah diverifikasi sekolah. Simpan juga nomor guru pembimbing dan wali kelasmu di kontak HP.</p><button class="btn block" data-act="close">Tutup</button>`),
  howto: () => openSheet(`<h2>Cara memasang JEJAK PKL</h2>${S.installEvt ? `<button class="btn pri block" data-act="install" style="margin:8px 0 12px">${ic('download', 's')} Pasang sekarang</button>` : ''}<p><b>HP Android (Chrome):</b> buka alamat JEJAK PKL di Chrome → ketuk menu titik tiga → <b>Instal aplikasi</b> (atau <b>Tambahkan ke layar utama</b>).</p><p><b>iPhone (Safari):</b> ketuk tombol Bagikan → <b>Tambahkan ke Layar Utama</b>.</p><p>Tidak perlu Play Store dan tidak perlu izin "sumber tidak dikenal".</p><button class="btn block" data-act="close">Tutup</button>`),
  askteacher: () => openSheet(`<h2>Tanya guru</h2><p>Untuk akun, kode aktivasi, atau lupa kata sandi, hubungi <b>wali kelas</b>, <b>guru pembimbing</b>, atau <b>Pokja PKL</b>. Kode aktivasi hanya diberikan langsung oleh sekolah — jangan bagikan ke teman.</p><button class="btn block" data-act="close">Tutup</button>`),
  install: async () => { if (!S.installEvt) return A.howto(); S.installEvt.prompt(); const r = await S.installEvt.userChoice; S.installEvt = null; closeSheet(); if (r.outcome === 'accepted') toast('JEJAK PKL sedang dipasang di HP-mu'); render(); },
  logout: () => {
    const n = S.outbox.length + S.drafts.length;
    ask('Keluar dari JEJAK PKL?', n ? `<b>${n} jurnal/draf belum terkirim.</b> Data itu tetap tersimpan aman di HP ini, hanya untuk akunmu, dan akan dikirim saat kamu masuk lagi. Akun lain yang masuk di HP ini tidak bisa melihatnya.` : 'Kamu perlu memasukkan NISN/email dan kata sandi lagi untuk masuk.', 'Keluar', async () => { try { await api('auth.logout', {}, { retries: 0, noLogout: true }); } catch (e) { } logoutLocal(); });
  }
});
function contactLinks() {
  const s = S.user?.siswa, links = [];
  if (s?.guru_hp) links.push(`<a href="tel:${esc(s.guru_hp)}">${ic('phone', 's')} Guru pembimbing: ${esc(s.guru_hp)}</a>`);
  const ks = S.user?.kontak_sekolah || S.info?.kontak_sekolah; if (ks) links.push(`<a href="tel:${esc(ks)}">${ic('phone', 's')} Sekolah: ${esc(ks)}</a>`);
  const dn = S.user?.darurat || S.info?.darurat || '112'; links.push(`<a class="o" href="tel:${esc(dn)}">${ic('phone', 's')} Darurat ${esc(dn)}</a>`);
  return links.join('');
}

/* ======================= LOGIN & AKTIVASI ======================= */
V.login = () => `<div class="login">
  <div style="padding:calc(26px + var(--safe-t)) 24px 0;display:flex;justify-content:space-between;align-items:center"><div class="brand"><div class="mark">J</div><div><b>JEJAK PKL</b><small>BCF · ${esc(CFG.SCHOOL || 'SMK Negeri 2 Palu')}</small></div></div><button class="ibtn" data-act="askteacher" aria-label="Bantuan">${ic('help')}</button></div>
  <div class="greet"><small>${greet()},</small><h1>Siap mencatat<br>PKL hari ini?</h1></div>
  <div style="padding:26px 24px 22px"><div style="font-size:12px;font-weight:700;color:#9FB6D1;letter-spacing:.6px;margin-bottom:10px">AKSES CEPAT TANPA MASUK</div>
  <div class="quick"><button data-act="emergency"><span class="qq" style="background:#E5484D">${ic('phone', 's')}</span>Kontak darurat</button><button data-act="howto"><span class="qq" style="background:var(--mint);color:var(--navy)">${ic('mobile', 's')}</span>Cara pasang</button><button data-act="askteacher"><span class="qq" style="background:#F5B83D;color:var(--navy)">${ic('chat', 's')}</span>Tanya guru</button></div></div>
  <form class="lsheet" data-form="login" novalidate><div class="grab"></div><h2>Masuk</h2>
    ${S.info && S.info.mode === 'pemeliharaan' ? `<div class="note warn">${ic('clock', 's')}<div>Server sedang diperbarui admin. Coba lagi nanti.</div></div>` : ''}
    <div class="f" style="margin:0"><label for="lu">NISN atau email</label><input class="in" id="lu" name="username" autocomplete="username" inputmode="email" autocapitalize="off" placeholder="10 digit NISN"></div>
    <div class="f" style="margin:0"><label for="lp">Kata sandi</label><div class="pw"><input class="in" id="lp" name="password" type="password" autocomplete="current-password"><button type="button" data-act="pw" aria-label="Tampilkan kata sandi">${ic('eye')}</button></div></div>
    <button class="btn pri block" type="submit">Masuk</button>
    <div class="lnk"><button type="button" data-go="activate">Aktivasi akun baru</button><button type="button" class="mute" data-act="forgot">Lupa kata sandi?</button></div>
    <div class="note">${ic('lock', 's')}<div>Siswa masuk dengan NISN. Guru, wali kelas, dan instruktur DUDI masuk dengan email.</div></div>
  </form></div>`;
A.forgot = () => openSheet(`<h2>Lupa kata sandi</h2><p>Demi keamanan, kata sandi tidak bisa diatur ulang dari aplikasi. Hubungi <b>wali kelas</b> atau <b>petugas Pokja PKL</b>. Kamu akan mendapat kode aktivasi baru, lalu pilih <b>Aktivasi akun baru</b>.</p><button class="btn block" data-act="close">Mengerti</button>`);
const devName = () => (navigator.userAgentData?.platform || navigator.platform || '') + ' ' + navigator.userAgent.slice(0, 80);
F.login = async d => {
  if (!d.username || !d.password) return toast('Isi NISN/email dan kata sandi', true);
  const r = await api('auth.login', { username: d.username, password: d.password, device: devName() }, { retries: 0, token: '', anyEpoch: true });
  await afterLogin(r);
};
async function afterLogin(r) { await setSession(r.token, r.user); go('home', {}, true); toast('Selamat datang, ' + r.user.nama.split(',')[0]); flushOutbox(); }
V.activate = () => `<div class="scr noNav"><div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Aktivasi akun</strong><small>Sekali saja, dengan kode dari sekolah</small></div></div></div>
  <form class="sec" data-form="activate" novalidate>
    <div class="note blue" style="margin-bottom:16px">${ic('lock', 's')}<div>Kode aktivasi 8 karakter dibagikan langsung oleh wali kelas atau Pokja PKL, berlaku 7 hari, dan hanya bisa dipakai sekali.</div></div>
    <div class="f"><label for="au">NISN (siswa) atau email (guru/DUDI)</label><input class="in" id="au" name="username" autocapitalize="off" inputmode="email" required></div>
    <div class="f"><label for="ac">Kode aktivasi</label><input class="in" id="ac" name="code" placeholder="Contoh: K7Q-4MZPA" autocapitalize="characters" style="letter-spacing:2px;text-transform:uppercase" required></div>
    <div class="f"><label for="ap">Buat kata sandi pribadi</label><div class="pw"><input class="in" id="ap" name="password" type="password" autocomplete="new-password" minlength="8" required><button type="button" data-act="pw" aria-label="Tampilkan kata sandi">${ic('eye')}</button></div><small>Minimal 8 karakter, tidak boleh memuat NISN.</small></div>
    <div class="f"><label for="ap2">Ulangi kata sandi</label><input class="in" id="ap2" name="password2" type="password" autocomplete="new-password" required></div>
    <button class="btn pri block" type="submit">Aktifkan & masuk</button>
  </form></div>`;
F.activate = async d => {
  if (d.password !== d.password2) return toast('Kedua kata sandi tidak sama', true);
  const r = await api('auth.activate', { username: d.username, code: d.code, password: d.password, device: devName() }, { retries: 0, token: '', anyEpoch: true });
  await afterLogin(r);
};

/* ======================= BERANDA ======================= */
V.home = () => isStudent() ? homeStudent() : isDudi() ? homeDudi() : isMentor() ? homeMentor() : isMonitor() ? V.monitor() : homeNone();
function headDark(sub, title, opts = {}) {
  const role = isStudent() ? '' : has('kajur') ? 'k' : 'g';
  return `<div class="dark ${opts.tall ? 'tall' : ''}"><div class="hrow">${opts.back ? `<button class="ibtn" data-act="back" aria-label="Kembali">${ic('left')}</button>` : `<div class="av ${role}">${esc(initials(S.user.nama))}</div>`}<div class="grow"><small>${esc(sub)}${S.user.uji ? ' · <b class="ujitag">AKUN UJI</b>' : ''}</small><strong>${esc(title)}</strong></div>${opts.right !== undefined ? opts.right : bellBtn()}</div>${opts.extra || ''}</div>`;
}
function bellBtn() { const n = notifCount(); return `<button class="ibtn" data-go="notif" aria-label="Pemberitahuan">${ic('bell')}${n ? `<span class="dot">${n > 9 ? '9+' : n}</span>` : ''}</button>`; }
function notifCount() { const d = S.data.sh || S.data.th; if (d && !d.__err) return d.notif_baru || 0; if (!isStudent() && !isMentor()) { const n = useData('nl', () => api('notif.list')); return n && !n.__err ? n.baru : 0; } return 0; }
function homeNone() { return `<div class="scr">${headDark(greet() + ',', S.user.nama)}<div class="sec"><div class="note blue">${ic('help', 's')}<div>Akun Anda belum memiliki penugasan aktif. Pokja PKL akan menetapkan siswa binaan atau peran Anda. Keanggotaan Pokja saja tidak membuka data siswa.</div></div></div></div>`; }
function homeStudent() {
  const d = useData('sh', () => api('student.home'));
  const u = S.user;
  if (d && d.__err) return `<div class="scr">${headDark(greet() + ',', u.nama)}${errBox(d.__err)}${pendingBanner()}</div>`;
  if (!d) return `<div class="scr">${headDark(greet() + ',', u.nama, { tall: true })}<div class="hero">${loading()}</div>${pendingBanner()}</div>`;
  const st = d.stat, pct = st.hari_kerja ? Math.round(st.hari_terisi / st.hari_kerja * 100) : 0;
  let h = headDark(greet() + ',', u.nama, { tall: true });
  h += `<div class="hero"><div class="top"><span class="lbl">Jurnal PKL · ${esc(d.profil.konsentrasi)}</span><span class="pill">${esc(d.profil.dudi || 'Tempat PKL belum diatur')}</span></div>
    <div class="big"><b>${st.hari_terisi}</b><span>/ ${st.hari_kerja} hari kerja terisi</span></div><div class="prog"><i style="width:${pct}%"></i></div>
    <div class="trio"><div><b style="color:var(--ok)">${st.status.disetujui || 0}</b><span>Disetujui</span></div><div><b style="color:var(--warn)">${(st.status.terkirim || 0) + (st.status.diperiksa || 0)}</b><span>Menunggu</span></div><div><b style="color:var(--red)">${st.status.revisi || 0}</b><span>Perlu revisi</span></div></div>
    <div class="mini">${st.hari_kosong ? `<span class="red">${st.hari_kosong} hari belum diisi</span>` : '<span class="ok">Tidak ada hari kosong</span>'}<span>Hadir ${st.hadir}</span><span>Izin ${st.izin}</span><span>Sakit ${st.sakit}</span>${st.libur ? `<span>Libur ${st.libur}</span>` : ''}</div></div>`;
  h += pendingBanner();
  if (d.revisi.length) h += `<button class="banner" data-go="journal-form" data-id="${d.revisi[0].id}"><span class="bi">${ic('edit', 's')}</span><span style="flex:1"><b>${d.revisi.length} jurnal perlu kamu perbaiki</b><span>Catatan guru: ${esc((d.revisi[0].catatan_guru || '').slice(0, 60))}</span></span><span class="go">Buka</span></button>`;
  else if (st.hari_ini_kerja && !st.hari_ini_terisi) h += `<button class="banner teal" data-go="journal-form"><span class="bi">${ic('plus', 's')}</span><span style="flex:1"><b>${d.hari_ini_jurnal.length ? 'Jurnal hari ini masih draf' : 'Belum ada jurnal hari ini'}</b><span>${fDayL(d.hari_ini)}</span></span><span class="go">Isi</span></button>`;
  if (S.installEvt) h += `<button class="banner teal" data-act="install"><span class="bi">${ic('download', 's')}</span><span style="flex:1"><b>Pasang JEJAK PKL di HP</b><span>Buka lebih cepat dari layar utama</span></span><span class="go">Pasang</span></button>`;
  h += `<div class="sec"><div class="sh"><h2>Menu</h2></div><div class="menu">
    <button data-go="activity"><span class="qi">${ic('book')}</span>Riwayat</button>
    <button data-go="gallery"><span class="qi b">${ic('image')}</span>Dokumentasi</button>
    <button data-go="issue-new"><span class="qi r">${ic('alert')}</span>Lapor kendala${d.kendala_aktif ? `<b class="badge">${d.kendala_aktif}</b>` : ''}</button>
    <button data-go="progress"><span class="qi o">${ic('trend')}</span>Perkembangan</button>
    <button data-act="report-pick"><span class="qi p">${ic('file')}</span>Laporan PKL</button>
    <button data-go="queue"><span class="qi b">${ic('upload')}</span>Tertunda${S.outbox.length + S.drafts.length ? `<b class="badge">${S.outbox.length + S.drafts.length}</b>` : ''}</button>
    <button data-act="emergency"><span class="qi r">${ic('phone')}</span>Darurat</button>
    <button data-go="profile"><span class="qi">${ic('pin')}</span>Tempat PKL</button></div></div>`;
  const live = d.terbaru;
  h += `<div class="sec"><div class="sh"><h2>Aktivitas terbaru</h2><button class="link" data-go="activity">Lihat semua</button></div><div class="box">${live.length ? live.map(j => jRow(j)).join('') : empty('Belum ada jurnal', 'Ketuk tombol + untuk mengisi jurnal pertamamu.')}</div></div>`;
  return `<div class="scr">${h}</div>`;
}
function pendingBanner() {
  const q = S.outbox, fix = q.filter(x => x.state === 'perbaiki').length;
  if (!q.length && !S.drafts.length) return '';
  if (fix) return `<button class="banner red" data-go="queue"><span class="bi">${ic('alert', 's')}</span><span style="flex:1"><b>${fix} jurnal perlu diperbaiki</b><span>Lihat alasannya lalu perbaiki</span></span><span class="go">Lihat</span></button>`;
  if (q.length) return `<button class="banner blue" data-go="queue"><span class="bi">${ic('wifi', 's')}</span><span style="flex:1"><b>${q.length} jurnal belum terkirim</b><span>${esc(QS[q[0].state]?.[0] || '')} · terkirim otomatis saat online</span></span><span class="go">Lihat</span></button>`;
  return `<button class="banner" data-go="queue"><span class="bi">${ic('edit', 's')}</span><span style="flex:1"><b>${S.drafts.length} draf tersimpan di HP</b><span>Lanjutkan mengisi</span></span><span class="go">Buka</span></button>`;
}
function jRow(j, showName) {
  const [t, c, i] = ST[j.status] || ['—', 'gray', 'clock'];
  const ricC = { gray: '', warn: 'warn', blue: 'blue', red: 'red', ok: 'ok' }[c];
  const sub = j.kehadiran !== 'Hadir' ? j.kehadiran : `${j.jam_mulai}–${j.jam_selesai}${j.lintas_hari === 'ya' ? ' (+1)' : ''}${j.unit_kompetensi ? ' · ' + j.unit_kompetensi : ''}`;
  return `<button class="row" data-go="journal" data-id="${esc(j.id)}"><span class="ric ${j.kehadiran !== 'Hadir' ? 'blue' : ricC}">${ic(j.kehadiran !== 'Hadir' ? 'cal' : i, 's')}</span><span class="rb"><b>${showName ? esc(j.siswa_nama) + ' · ' : ''}${esc(j.judul || '(tanpa judul)')}</b><small>${fDay(j.tanggal)} · ${esc(sub)}${j.jumlah_foto ? ' · ' + j.jumlah_foto + ' foto' : ''}</small></span><span class="st ${c}">${t}</span></button>`;
}

/* ======================= TERTUNDA (antrean & draf lokal) ======================= */
V.queue = () => {
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Jurnal tertunda</strong><small>Tersimpan di HP ini, hanya untuk akunmu</small></div></div></div>`;
  const q = S.outbox, dr = S.drafts;
  let h = head + '<div class="sec">';
  if (!q.length && !dr.length) h += `<div class="box">${empty('Tidak ada yang tertunda', 'Semua jurnal sudah tersimpan di server.')}</div>`;
  if (q.length) {
    h += `<div class="sh"><h2>Antrean pengiriman</h2>${q.some(x => x.state !== 'sinkron') ? `<button class="link" data-act="flush">Kirim semua</button>` : ''}</div>`;
    h += q.map(it => {
      const [lbl, c, i] = QS[it.state] || QS.antre, ph = it.photos || [], done = ph.filter(p => p.done).length;
      return `<div class="jc"><div class="hrow" style="gap:10px"><span class="ric ${c}">${ic(i, 's')}</span><div class="grow"><b style="font-size:14px">${esc(it.judul || it.entry.kehadiran)}</b><div class="meta">${fDay(it.tanggal)} · ${it.submit ? 'Kirim ke guru' : 'Simpan draf'}${ph.length ? ` · foto ${done}/${ph.length}` : ''}</div></div><span class="st ${c}">${lbl}</span></div>
        ${it.reason ? `<div class="fb ${it.state === 'perbaiki' ? 'red' : ''}"><b>Alasan</b>${esc(it.reason)}</div>` : ''}
        <div class="meta" style="margin-top:6px">Disimpan ${fT(it.savedAt)}${it.attempts ? ` · ${it.attempts}× dicoba` : ''}</div>
        <div class="btns" style="margin-top:10px">${it.state !== 'sinkron' ? `<button class="btn sm pri f1" data-act="ob-retry" data-id="${esc(it.id)}">${ic('refresh', 's')} Kirim ulang</button><button class="btn sm f1" data-act="ob-edit" data-id="${esc(it.id)}">${ic('edit', 's')} Perbaiki</button>` : ''}<button class="btn sm ghost" data-act="ob-del" data-id="${esc(it.id)}" style="color:var(--red)">Hapus</button></div></div>`;
    }).join('');
  }
  if (dr.length) {
    h += `<div class="sh" style="margin-top:18px"><h2>Draf lokal</h2></div><div class="box">${dr.map(x => `<div class="row"><span class="ric">${ic('edit', 's')}</span><span class="rb"><b>${esc(x.form.judul || x.form.lokasi_unit || x.form.kehadiran || 'Draf jurnal')}</b><small>${fDay(x.form.tanggal)} · disimpan di HP ${fT(x.savedAt)}</small></span><button class="btn sm" data-act="draft-open" data-id="${esc(x.id)}">Lanjutkan</button><button class="btn sm ghost" data-act="draft-del" data-id="${esc(x.id)}" aria-label="Hapus draf lokal" style="color:var(--red)">${ic('x', 's')}</button></div>`).join('')}</div>`;
  }
  h += `<div class="note" style="margin-top:14px">${ic('lock', 's')}<div>Jurnal tidak pernah dihapus otomatis karena gagal kirim. Bila statusnya "Perlu diperbaiki", baca alasannya lalu ketuk Perbaiki.</div></div></div>`;
  return `<div class="scr noNav">${h}</div>`;
};
A.flush = () => flushOutbox(true);
A['ob-retry'] = async el => { const it = S.outbox.find(x => x.id === el.dataset.id); if (!it) return; it.nextTry = 0; if (it.state === 'perbaiki') it.state = 'antre'; await IDB.put('outbox', it); await flushOutbox(true, it.id); };
A['ob-edit'] = el => { const it = S.outbox.find(x => x.id === el.dataset.id); if (!it) return; S.form = itemToForm(it); go('journal-form', { ob: it.id }); };
A['ob-del'] = el => ask('Hapus jurnal tertunda?', 'Jurnal ini belum tersimpan di server. Bila dihapus, isinya hilang dari HP ini dan tidak bisa dikembalikan.', 'Hapus', async () => { await IDB.remove('outbox', el.dataset.id); await refreshLocal(); render(); toast('Jurnal tertunda dihapus'); }, true);
A['draft-open'] = el => { const x = S.drafts.find(d => d.id === el.dataset.id); if (!x) return; S.form = null; go('journal-form', String(x.key).startsWith('new') ? { draft: x.key } : String(x.key).startsWith('ob:') ? { ob: x.key.slice(3) } : { id: x.key }); };
A['draft-del'] = el => ask('Hapus draf lokal?', 'Draf ini hanya ada di HP dan belum tersimpan di server. Bila dihapus, isinya hilang.', 'Hapus', async () => { await IDB.remove('drafts', el.dataset.id); await refreshLocal(); render(); toast('Draf lokal dihapus'); }, true);
function draftChooser(nd) {
  return `<div class="scr noNav"><div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Isi Jurnal</strong><small>Ada draf yang belum dikirim</small></div></div></div><div class="sec"><div class="box">${nd.map(x => `<button class="row" data-go="journal-form" data-draft="${esc(x.key)}"><span class="ric">${ic('edit', 's')}</span><span class="rb"><b>${esc(x.form.judul || x.form.lokasi_unit || 'Draf jurnal')}</b><small>${fDay(x.form.tanggal)} · disimpan di HP ${fT(x.savedAt)}</small></span><span class="st gray">Lanjutkan</span></button>`).join('')}</div><button class="btn pri block" style="margin-top:14px" data-go="journal-form" data-fresh="1">${ic('plus', 's')} Mulai jurnal baru</button><p class="meta">Draf tetap tersimpan di HP sampai kamu kirim atau hapus di menu Tertunda.</p></div></div>`;
}

/* ======================= AKTIVITAS (riwayat) ======================= */
V.activity = p => {
  const sid = p.sid || '';
  const key = 'jl:' + (sid || 'me');
  const d = useData(key, () => api('journal.list', sid ? { siswaId: sid } : {}));
  const title = sid ? (d && !d.__err ? d.siswa.nama : 'Jurnal siswa') : 'Aktivitas';
  const head = `<div class="dark"><div class="hrow">${sid ? `<button class="ibtn" data-act="back" aria-label="Kembali">${ic('left')}</button>` : ''}<div class="grow"><strong style="font-size:18px">${esc(title)}</strong>${sid && d && !d.__err ? `<small>${esc(d.siswa.konsentrasi)} · ${esc(d.siswa.dudi || '—')}</small>` : ''}</div>${sid ? `<button class="ibtn" data-act="report-pick" data-sid="${esc(sid)}" aria-label="Laporan">${ic('file')}</button>` : ''}<button class="ibtn" data-act="reload" aria-label="Muat ulang">${ic('refresh')}</button></div>`;
  if (!d) return `<div class="scr">${head}</div>${loading()}</div>`;
  if (d.__err) return `<div class="scr">${head}</div>${errBox(d.__err)}</div>`;
  const all = d.jurnal, f = S.filter.af || 'all';
  const cnt = k => all.filter(j => k === 'wait' ? ['terkirim', 'diperiksa'].includes(j.status) : j.status === k).length;
  const list = f === 'all' ? all : all.filter(j => f === 'wait' ? ['terkirim', 'diperiksa'].includes(j.status) : j.status === f);
  const st = d.stat;
  let h = head + `<div class="kpi3"><div><b>${st.hari_terisi}/${st.hari_kerja}</b><small>Hari terisi</small></div><div><b style="color:#5EE0C9">${st.disiplin === null ? '—' : st.disiplin + '%'}</b><small>Ketepatan isi</small></div><div><b>${st.jam} jam</b><small>Praktik</small></div></div></div>`;
  if (!sid) h += pendingBanner();
  h += `<div class="chips">${[['all', 'Semua', all.length], ['wait', 'Menunggu', cnt('wait')], ['revisi', 'Revisi', cnt('revisi')], ['disetujui', 'Disetujui', cnt('disetujui')], ...(sid ? [] : [['draf', 'Draf', cnt('draf')]])].map(([k, t, n]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="tab" data-k="af" data-v="${k}">${t} ${n}</button>`).join('')}</div>`;
  if (st.hari_kosong) h += `<div class="sec" style="padding-top:0"><div class="note warn">${ic('cal', 's')}<div><b>${st.hari_kosong} hari kerja belum diisi.</b> Terakhir: ${st.kosong_terakhir.map(fD).join(', ')}</div></div></div>`;
  h += `<div class="sec" style="padding-top:0"><div class="stat4"><span>Hadir <b>${st.hadir}</b></span><span>Izin <b>${st.izin}</b></span><span>Sakit <b>${st.sakit}</b></span><span>Libur <b>${st.libur}</b></span>${st.hari_tambahan ? `<span>Di luar jadwal <b>${st.hari_tambahan}</b></span>` : ''}</div></div>`;
  const groups = {}; list.forEach(j => (groups[j.tanggal] = groups[j.tanggal] || []).push(j));
  h += `<div style="padding:0 16px">${Object.keys(groups).length ? Object.keys(groups).sort().reverse().map(dt => `<div class="dayh"><span>${fDay(dt)}</span><span>${groups[dt].length} kegiatan</span></div><div class="box">${groups[dt].map(j => jRow(j)).join('')}</div>`).join('') : empty('Belum ada kegiatan', f === 'all' ? 'Jurnal yang diisi akan tampil di sini.' : '')}</div>`;
  if (d.pages > 1) h += `<p class="meta" style="text-align:center">Menampilkan ${all.length} dari ${d.total} jurnal terbaru.</p>`;
  return `<div class="scr">${h}</div>`;
};

/* ======================= DETAIL JURNAL ======================= */
V.journal = p => {
  const d = useData('j:' + p.id, () => api('journal.get', { id: p.id }));
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Detail jurnal</strong><small>${d && !d.__err ? esc(d.siswa_nama) + ' · ' + fDayL(d.tanggal) : ''}</small></div></div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  const [t, c] = ST[d.status] || ['—', 'gray'], mine = isStudent() && S.user.siswa.id === d.siswa_id;
  let h = head + `<div class="sec"><div class="jc"><div style="display:flex;justify-content:space-between;align-items:center"><span class="meta">${esc(d.id)} · versi ${esc(d.versi)}</span><span class="pill ${c}">${t}</span></div>
    <h3>${esc(d.judul)}</h3><div class="meta">${d.kehadiran !== 'Hadir' ? esc(d.kehadiran) : `${d.jam_mulai}–${d.jam_selesai}${d.lintas_hari === 'ya' ? ' (selesai keesokan hari)' : ''} · ${d.durasi_jam} jam efektif${+d.istirahat_menit ? ' (istirahat ' + d.istirahat_menit + ' mnt)' : ''} · ${esc(d.unit_kompetensi)}`}</div>
    ${d.uraian ? `<p>${esc(d.uraian)}</p>` : ''}
    <dl class="kv">${d.lokasi_unit ? `<dt>Lokasi/unit</dt><dd>${esc(d.lokasi_unit)}</dd>` : ''}${d.peralatan ? `<dt>Peralatan</dt><dd>${esc(d.peralatan)}</dd>` : ''}${d.pengalaman ? `<dt>Pengalaman</dt><dd>${esc(d.pengalaman)}</dd>` : ''}${d.refleksi ? `<dt>Refleksi</dt><dd>${esc(d.refleksi)}</dd>` : ''}${d.kendala_singkat ? `<dt>Kendala</dt><dd>${esc(d.kendala_singkat)}</dd>` : ''}<dt>Guru</dt><dd>${esc(d.guru || '— belum ditugaskan')}</dd>${d.dikirim_pada ? `<dt>Dikirim</dt><dd>${fT(d.dikirim_pada)}</dd>` : ''}</dl>
    ${photoThumbs(d.foto)}
    ${d.catatan_guru ? `<div class="fb ${d.status === 'revisi' ? 'red' : ''}"><b>Catatan guru pembimbing</b>${esc(d.catatan_guru)}</div>` : ''}
    ${d.dudi_validasi === 'ya' ? `<div class="fb"><b>Validasi instruktur DUDI (opsional)</b>${esc(d.dudi_catatan || 'Divalidasi')}</div>` : ''}</div>`;
  if (mine && ['draf', 'revisi'].includes(d.status)) h += `<div class="btns"><button class="btn pri f1" data-go="journal-form" data-id="${esc(d.id)}">${ic('edit', 's')} ${d.status === 'revisi' ? 'Perbaiki' : 'Lanjutkan isi'}</button>${d.status === 'draf' ? `<button class="btn f1" data-act="del-journal" data-id="${esc(d.id)}" style="color:var(--red)">Hapus draf</button>` : ''}</div>`;
  if (mine && d.status === 'terkirim') h += `<button class="btn block" data-act="withdraw" data-id="${esc(d.id)}">${ic('refresh', 's')} Tarik kembali untuk diubah</button>`;
  if (d.bisa_periksa && ['terkirim', 'diperiksa'].includes(d.status)) h += reviewBox(d);
  if (d.bisa_periksa && d.status === 'disetujui') h += `<form data-form="review" class="box pad" style="margin-top:12px"><input type="hidden" name="id" value="${esc(d.id)}"><div class="f"><label for="rk">Buka kembali jurnal yang sudah disetujui</label><textarea class="in" id="rk" name="catatan" style="min-height:60px" placeholder="Alasan (wajib, tercatat di riwayat)"></textarea></div><button class="btn warn block" name="aksi" value="buka_kembali">Buka kembali untuk diperbaiki siswa</button></form>`;
  if (d.bisa_validasi_dudi && d.dudi_validasi !== 'ya') h += `<form data-form="dudi" class="box pad" style="margin-top:12px"><input type="hidden" name="id" value="${esc(d.id)}"><div class="f"><label for="dv">Validasi instruktur DUDI (opsional)</label><input class="in" id="dv" name="catatan" placeholder="Catatan singkat (boleh kosong)"></div><button class="btn pri block">${ic('check', 's')} Validasi kegiatan ini</button><small class="meta">Validasi tidak wajib dan tidak menghalangi siswa mengisi jurnal berikutnya.</small></form>`;
  if (d.riwayat?.length) h += `<div class="sh" style="margin-top:18px"><h2>Riwayat</h2></div><div class="box">${d.riwayat.slice().reverse().map(r => `<div class="row"><span class="ric ${r.aksi === 'setujui' || r.aksi === 'validasi_dudi' ? 'ok' : r.aksi === 'revisi' || r.aksi === 'buka_kembali' ? 'red' : 'teal'}">${ic(r.aksi === 'setujui' ? 'check' : r.aksi === 'revisi' ? 'edit' : 'send', 's')}</span><span class="rb"><b>${esc({ kirim: 'Dikirim', kirim_ulang: 'Dikirim ulang', tarik: 'Ditarik kembali', setujui: 'Disetujui', revisi: 'Diminta revisi', komentar: 'Dikomentari', buka_kembali: 'Dibuka kembali', validasi_dudi: 'Divalidasi DUDI' }[r.aksi] || r.aksi)} · v${esc(r.versi)}</b><small>${esc(r.oleh)} · ${fT(r.waktu)}${r.catatan ? ' · “' + esc(r.catatan) + '”' : ''}</small></span></div>`).join('')}</div>`;
  return `<div class="scr noNav">${h}</div></div>`;
};
function photoThumbs(list, removable) { if (!list || !list.length) return ''; return `<div class="thumbs">${list.map(f => `<div class="th" data-photo="${esc(f.id)}" data-act="zoom" data-full="${esc(f.id)}" role="img" aria-label="${esc(f.keterangan || 'Foto dokumentasi')}">${ic('image')}${removable ? `<button class="x" data-act="del-photo" data-id="${esc(f.id)}" aria-label="Hapus foto">${ic('x', 's')}</button>` : ''}</div>`).join('')}</div>`; }
let photoBusy = 0;
function loadPhotos() {
  $$('[data-photo]').forEach(el => { const id = el.dataset.photo; if (S.photos[id]) { el.style.backgroundImage = `url("${S.photos[id]}")`; el.querySelector('svg')?.remove(); } });
  const pending = $$('[data-photo]').filter(el => !S.photos[el.dataset.photo] && !el.dataset.loading);
  pending.slice(0, Math.max(0, 3 - photoBusy)).forEach(el => {
    const id = el.dataset.photo, ep = S.epoch; $$(`[data-photo="${id}"]`).forEach(x => x.dataset.loading = '1'); photoBusy++;
    api('photo.get', { id }, { retries: 0 }).then(r => { if (ep === S.epoch) S.photos[id] = r.data; }).catch(() => { }).finally(() => { photoBusy--; if (ep === S.epoch) loadPhotos(); });
  });
}
A.withdraw = el => ask('Tarik kembali jurnal?', 'Jurnal akan menjadi draf lagi dan keluar dari antrean guru sampai kamu mengirim ulang.', 'Tarik kembali', async () => { await api('journal.withdraw', { id: el.dataset.id }); toast('Jurnal kembali menjadi draf'); S.data = {}; S.form = null; go('journal-form', { id: el.dataset.id }, true); });
A['del-journal'] = el => ask('Hapus draf ini?', 'Draf akan ditandai dihapus dan tidak dihitung dalam statistik.', 'Hapus', async () => { await api('journal.delete', { id: el.dataset.id }); await IDB.remove('drafts', me() + ':' + el.dataset.id).catch(() => { }); await refreshLocal(); toast('Draf dihapus'); S.data = {}; go('activity', {}, true); }, true);
F.dudi = async d => { await api('dudi.validate', { id: d.id, catatan: d.catatan, tx: uid() }); delete S.data['j:' + d.id]; toast('Kegiatan divalidasi'); render(); };

/* ======================= FORM JURNAL (3 langkah) ======================= */
const STEP_NAMES = ['Waktu', 'Pekerjaan', 'Foto & catatan'];
function blankForm() { const t = localToday(), p = S.user.siswa; const tgl = t > p.selesai ? p.selesai : t < p.mulai ? p.mulai : t; return { clientId: uid(), id: '', status: 'draf', tanggal: tgl, kehadiran: 'Hadir', jam_mulai: '08:00', jam_selesai: '15:00', lintas_hari: false, istirahat_menit: '0', lokasi_unit: '', unit_kompetensi: '', judul: '', uraian: '', peralatan: '', pengalaman: '', refleksi: '', kendala_singkat: '', catatan_guru: '', foto: [], newPhotos: [], step: 0, obId: '' }; }
function itemToForm(it) { return { ...blankForm(), ...it.entry, id: it.journalId || it.entry.id || '', clientId: it.clientId, status: it.status || 'draf', foto: it.serverPhotos || [], newPhotos: (it.photos || []).filter(p => !p.done).map(p => ({ ...p })), donePhotos: (it.photos || []).filter(p => p.done), step: 0, obId: it.id, _for: 'ob:' + it.id }; }
const draftKey = f => f.id || (f.obId ? 'ob:' + f.obId : 'new:' + f.clientId);
const newDrafts = () => S.drafts.filter(x => String(x.key).startsWith('new')).sort((a, b) => String(b.savedAt).localeCompare(String(a.savedAt)));
V['journal-form'] = p0 => {
  let p = p0;
  if (!isStudent()) return V.home();
  if (!p.ob && !p.id && !p.draft) {
    const nd = newDrafts();
    if (nd.length && !p.fresh) return draftChooser(nd);
    const f0 = { ...blankForm() }; f0._for = 'new:' + f0.clientId; S.form = f0; S.params = { draft: f0._for }; p = S.params;
  }
  const want = p.ob ? 'ob:' + p.ob : (p.id || p.draft);
  if (!S.form || S.form._for !== want) {
    if (p.ob) { const it = S.outbox.find(x => x.id === p.ob); if (!it) { setTimeout(() => go('queue', {}, true)); return ''; } S.form = itemToForm(it); const local = S.drafts.find(x => x.key === 'ob:' + it.id); if (local) S.form = { ...S.form, ...local.form, obId: it.id, _for: 'ob:' + it.id }; }
    else if (p.id) {
      const d = useData('j:' + p.id, () => api('journal.get', { id: p.id }));
      if (!d) return `<div class="scr noNav">${formHead()}${loading()}</div>`;
      if (d.__err) return `<div class="scr noNav">${formHead()}${errBox(d.__err)}</div>`;
      if (!['draf', 'revisi'].includes(d.status)) { setTimeout(() => go('journal', { id: p.id }, true)); return ''; }
      S.form = { ...blankForm(), ...d, lintas_hari: d.lintas_hari === 'ya', clientId: d.client_id || uid(), newPhotos: [], step: 0, _for: p.id };
      const local = S.drafts.find(x => x.key === p.id);
      if (local) { S.form = { ...S.form, ...local.form, id: d.id, status: d.status, catatan_guru: d.catatan_guru, foto: d.foto, _for: p.id }; setTimeout(() => toast('Perubahan yang belum terkirim dipulihkan dari HP')); }
    } else {
      const local = S.drafts.find(x => x.key === p.draft);
      if (!local) { setTimeout(() => go('journal-form', { fresh: '1' }, true)); return ''; }
      S.form = { ...blankForm(), ...local.form, _for: p.draft, _restored: true }; S.form.step = S.form.step || 0;
    }
  }
  const f = S.form, comps = S.user.kompetensi || [], hadir = f.kehadiran === 'Hadir', s = S.user.siswa, maxDate = localToday() < s.selesai ? localToday() : s.selesai;
  let body = '';
  if (f.step === 0) body = `
    ${f.status === 'revisi' && f.catatan_guru ? `<div class="note red" style="margin-bottom:14px">${ic('edit', 's')}<div><b>Catatan revisi dari guru:</b><br>${esc(f.catatan_guru)}</div></div>` : ''}
    ${f.obId ? `<div class="note warn" style="margin-bottom:14px">${ic('upload', 's')}<div>Memperbaiki jurnal dari antrean. Setelah disimpan, jurnal dicoba dikirim lagi.</div></div>` : ''}
    <div class="f"><label for="ft">Tanggal kegiatan</label><input class="in" type="date" id="ft" name="tanggal" value="${esc(f.tanggal)}" min="${esc(s.mulai)}" max="${esc(maxDate)}" data-change="ff"></div>
    <div class="f"><span class="lb">Kehadiran</span><div class="seg">${(S.user.kehadiran || ['Hadir', 'Izin', 'Sakit', 'Libur DUDI']).map(a => `<label><input type="radio" name="kehadiran" value="${a}" ${a === f.kehadiran ? 'checked' : ''} data-change="ff"><span>${a}</span></label>`).join('')}</div></div>
    ${hadir ? `<div class="grid2"><div class="f"><label for="fm">Jam mulai</label><input class="in" type="time" id="fm" name="jam_mulai" value="${esc(f.jam_mulai)}" data-change="ff"></div><div class="f"><label for="fs">Jam selesai</label><input class="in" type="time" id="fs" name="jam_selesai" value="${esc(f.jam_selesai)}" data-change="ff"></div></div>
    <label class="check" style="margin-top:-4px"><input type="checkbox" name="lintas_hari" value="1" ${f.lintas_hari ? 'checked' : ''} data-change="ff"><span><b>Selesai keesokan hari</b> (produksi lewat tengah malam)</span></label>
    <div class="grid2"><div class="f"><label for="fi">Istirahat (menit)</label><input class="in" type="number" inputmode="numeric" min="0" max="720" step="5" id="fi" name="istirahat_menit" value="${esc(f.istirahat_menit || 0)}" data-input="ff"></div><div class="f"><span class="lb">Lama efektif</span><div class="in ro" id="dur">${durLabel(f)}</div></div></div>
    <div class="f"><label for="fl">Lokasi / unit kerja</label><input class="in" id="fl" name="lokasi_unit" value="${esc(f.lokasi_unit)}" placeholder="Contoh: Ruang editing redaksi" data-input="ff"></div>` : `<div class="f"><label for="fu">Keterangan ${esc(f.kehadiran.toLowerCase())}</label><textarea class="in" id="fu" name="uraian" data-input="ff" placeholder="Contoh: Izin karena keperluan keluarga, sudah memberi tahu instruktur.">${esc(f.uraian)}</textarea></div>`}`;
  if (f.step === 1) body = hadir ? `
    <div class="f"><span class="lb">Unit kompetensi (${esc(s.konsentrasi)})</span><div class="seg">${comps.map(c => `<label><input type="radio" name="unit_kompetensi" value="${esc(c)}" ${c === f.unit_kompetensi ? 'checked' : ''} data-change="ff"><span>${esc(c)}</span></label>`).join('')}</div></div>
    <div class="f"><label for="fj">Judul / bentuk pekerjaan</label><input class="in" id="fj" name="judul" value="${esc(f.judul)}" maxlength="140" placeholder="Contoh: Menyunting paket berita" data-input="ff"></div>
    <div class="f"><label for="fu">Uraian pekerjaan</label><textarea class="in" id="fu" name="uraian" data-input="ff" placeholder="Apa yang kamu kerjakan dan bagaimana langkahnya?">${esc(f.uraian)}</textarea><small id="ucount">${f.uraian.length} karakter (min. 15)</small></div>
    <div class="f"><label for="fp">Peralatan / aplikasi</label><input class="in" id="fp" name="peralatan" value="${esc(f.peralatan)}" placeholder="Pisahkan dengan koma: Kamera, Tripod" data-input="ff"></div>
    <div class="f"><label for="fx">Pengalaman / keterampilan yang diperoleh</label><input class="in" id="fx" name="pengalaman" value="${esc(f.pengalaman)}" data-input="ff"></div>` : `<div class="f"><label for="fj">Judul</label><input class="in" id="fj" name="judul" value="${esc(f.judul || f.kehadiran)}" data-input="ff"></div><div class="note">${ic('clock', 's')}<div>Untuk ${esc(f.kehadiran.toLowerCase())}, cukup isi keterangan di langkah pertama.</div></div>`;
  if (f.step === 2) body = `
    <div class="f"><span class="lb">Foto dokumentasi (maks. 4)</span>${photoThumbs(f.foto, ['draf', 'revisi'].includes(f.status) && f.id)}<div class="thumbs">${(f.donePhotos || []).map(ph => `<div class="th" style="background-image:url('${ph.thumb}')"><span class="tok">${ic('check', 's')}</span></div>`).join('')}${f.newPhotos.map((ph, i) => `<div class="th" style="background-image:url('${ph.thumb}')"><button class="x" data-act="rm-new" data-i="${i}" aria-label="Hapus foto">${ic('x', 's')}</button></div>`).join('')}</div>
      ${photoCount(f) < 4 ? `<label class="btn sm" style="margin-top:8px;background:var(--teal-l);border-color:transparent;color:var(--teal-d);cursor:pointer">${ic('camera', 's')} Ambil / pilih foto<input type="file" accept="image/*" multiple class="sr" data-change="photo"></label>` : ''}<small>Foto diperkecil otomatis. Jurnal baru dikirim ke guru setelah semua foto terunggah.</small></div>
    <div class="f"><label for="fk">Kendala yang dialami (opsional)</label><textarea class="in" id="fk" name="kendala_singkat" style="min-height:70px" data-input="ff">${esc(f.kendala_singkat)}</textarea><small>Kendala yang perlu ditindaklanjuti guru: gunakan menu <b>Lapor kendala</b>.</small></div>
    <div class="f"><label for="fr">Refleksi / catatan (opsional)</label><textarea class="in" id="fr" name="refleksi" style="min-height:70px" data-input="ff">${esc(f.refleksi)}</textarea></div>`;
  const last = f.step === 2 || (!hadir && f.step === 1);
  return `<div class="scr noNav" style="padding-bottom:110px">${formHead()}<form class="sec" id="jform" data-form="journal" novalidate>${body}</form>
    <div class="foot"><button class="btn f1" form="jform" type="submit" name="mode" value="draft">Simpan draf</button>${last ? `<button class="btn pri f2" form="jform" type="submit" name="mode" value="send">${ic('send', 's')} ${f.status === 'revisi' ? 'Kirim ulang' : 'Kirim ke guru'}</button>` : `<button class="btn pri f2" form="jform" type="submit" name="mode" value="next">Lanjut ${ic('right', 's')}</button>`}</div></div>`;
};
const photoCount = f => (f.foto || []).length + (f.donePhotos || []).length + f.newPhotos.length;
const durLabel = f => { const m = spanMin(f); if (!m) return '<span style="color:var(--red)">Periksa jam</span>'; const e = m - (+f.istirahat_menit || 0); return e > 0 ? (e / 60).toFixed(1).replace('.', ',') + ' jam' : '<span style="color:var(--red)">Istirahat terlalu lama</span>'; };
function formHead() {
  const f = S.form || { step: 0, tanggal: localToday() };
  const hadir = !['Izin', 'Sakit', 'Libur DUDI'].includes(f.kehadiran);
  const names = hadir ? STEP_NAMES : ['Waktu', 'Kirim'];
  const sv = S.saveState === 'ok' ? `<span class="pill ok">${ic('check', 's')} Tersimpan di HP</span>` : S.saveState === 'err' ? `<span class="pill red">Gagal simpan di HP</span>` : f.id ? `<span class="pill ${f.status === 'revisi' ? 'red' : 'gray'}">${f.status === 'revisi' ? 'Perlu revisi' : 'Draf'}</span>` : '';
  return `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="form-back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>${f.status === 'revisi' ? 'Perbaiki jurnal' : 'Isi Jurnal'}</strong><small>${fDayL(f.tanggal)}</small></div><span id="svstate">${sv}</span></div>
    <div class="steps">${names.map((_, i) => `<i class="${i <= f.step ? 'on' : ''}"></i>`).join('')}</div><div class="stepl">${names.map((n, i) => `<span class="${i === f.step ? 'on' : i < f.step ? 'done' : ''}">${i === f.step ? (i + 1) + ' · ' : ''}${n}</span>`).join('')}</div></div>`;
}
function collectForm() {
  const fm = $('#jform'); if (!fm || !S.form) return;
  const fd = new FormData(fm);
  if (fm.querySelector('[name="lintas_hari"]')) S.form.lintas_hari = !!fd.get('lintas_hari');
  for (const [k, v] of fd.entries()) if (k !== 'mode' && k !== 'lintas_hari' && typeof v === 'string') S.form[k] = v;
  saveFormLocal();
}
/* Autosimpan draf ke IndexedDB per akun. Tanda "Tersimpan di HP" baru muncul setelah penyimpanan benar-benar berhasil. */
let saveT, savePromise = Promise.resolve();
function saveFormLocal(now) {
  clearTimeout(saveT);
  const run = () => {
    if (!S.form || !S.user) return Promise.resolve();
    const f = S.form, key = draftKey(f), owner = me();
    const rec = { id: owner + ':' + key, owner, key, savedAt: localIso(), form: { ...f, foto: f.foto || [], _for: undefined } };
    savePromise = IDB.put('drafts', rec).then(() => { S.saveState = 'ok'; const i = S.drafts.findIndex(x => x.id === rec.id); if (i >= 0) S.drafts[i] = rec; else S.drafts.push(rec); }).catch(() => { S.saveState = 'err'; }).finally(() => { const el = $('#svstate'); if (el && S.route === 'journal-form') el.innerHTML = S.saveState === 'ok' ? `<span class="pill ok">${ic('check', 's')} Tersimpan di HP</span>` : `<span class="pill red">Gagal simpan di HP</span>`; });
    return savePromise;
  };
  if (now) return run();
  saveT = setTimeout(run, 500); return null;
}
C['ch:ff'] = el => { const before = S.form.kehadiran, lh = S.form.lintas_hari; collectForm(); if (before !== S.form.kehadiran || el.name === 'tanggal' || lh !== S.form.lintas_hari) render(); else { const d = $('#dur'); if (d) d.innerHTML = durLabel(S.form); } };
C['in:ff'] = el => { collectForm(); if (el.name === 'uraian' && $('#ucount')) $('#ucount').textContent = `${el.value.length} karakter (min. 15)`; if (el.name === 'istirahat_menit') { const d = $('#dur'); if (d) d.innerHTML = durLabel(S.form); } };
A['form-back'] = () => { collectForm(); if (S.form.step > 0) { S.form.step--; render(); window.scrollTo(0, 0); } else { saveFormLocal(true); back(); } };
A['rm-new'] = el => { S.form.newPhotos.splice(+el.dataset.i, 1); saveFormLocal(); render(); };
A['del-photo'] = el => ask('Hapus foto ini?', 'Foto akan dihapus dari jurnal.', 'Hapus', async () => { await api('photo.delete', { id: el.dataset.id }); S.form.foto = S.form.foto.filter(x => x.id !== el.dataset.id); delete S.data['j:' + S.form.id]; render(); toast('Foto dihapus'); }, true);
C['ch:photo'] = async el => {
  const files = [...el.files]; el.value = '';
  const room = 4 - photoCount(S.form);
  if (files.length > room) toast(`Hanya ${room} foto yang ditambahkan (maks. 4)`);
  for (const file of files.slice(0, room)) { try { const [image, thumb] = await Promise.all([compress(file, 1280, .72), compress(file, 360, .7)]); S.form.newPhotos.push({ tx: uid(), image, thumb, keterangan: '', done: false }); } catch (e) { toast(e.message, true); } }
  saveFormLocal(); render();
};
function compress(file, max, q) {
  return new Promise((res, rej) => {
    if (!/^image\//.test(file.type)) return rej(new Error('File bukan gambar'));
    const url = URL.createObjectURL(file), img = new Image();
    img.onload = () => { const r = Math.min(1, max / Math.max(img.width, img.height)), c = document.createElement('canvas'); c.width = Math.round(img.width * r); c.height = Math.round(img.height * r); const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url); res(c.toDataURL('image/jpeg', q)); };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error('Foto tidak dapat dibuka')); };
    img.src = url;
  });
}
function localValidate(f, submit) {
  const hadir = f.kehadiran === 'Hadir', s = S.user.siswa;
  if (!f.tanggal) return 'Pilih tanggal.';
  if (f.tanggal > localToday()) return 'Tanggal belum terjadi.';
  if (f.tanggal < s.mulai || f.tanggal > s.selesai) return `Tanggal di luar periode PKL (${fD(s.mulai)} – ${fD(s.selesai)}).`;
  if (hadir && (f.jam_mulai && !isTime(f.jam_mulai) || f.jam_selesai && !isTime(f.jam_selesai))) return 'Jam tidak valid (00:00–23:59).';
  if (!submit) return '';
  if (hadir) {
    if (!isTime(f.jam_mulai) || !isTime(f.jam_selesai)) return 'Isi jam mulai dan jam selesai.';
    if (!spanMin(f)) return f.lintas_hari ? 'Untuk kegiatan lewat tengah malam, jam selesai harus lebih awal dari jam mulai.' : 'Jam selesai harus setelah jam mulai. Centang "Selesai keesokan hari" bila lewat tengah malam.';
    if ((+f.istirahat_menit || 0) >= spanMin(f)) return 'Waktu istirahat harus lebih pendek dari lama kegiatan.';
    if (!f.unit_kompetensi) return 'Pilih unit kompetensi (langkah 2).';
    if (!f.judul) return 'Isi judul pekerjaan (langkah 2).';
  }
  if ((f.uraian || '').length < 15) return hadir ? 'Uraian minimal 15 karakter (langkah 2).' : 'Keterangan minimal 15 karakter.';
  return '';
}
const entryPayload = f => ({ id: f.id || undefined, clientId: f.clientId, tanggal: f.tanggal, kehadiran: f.kehadiran, jam_mulai: f.jam_mulai, jam_selesai: f.jam_selesai, lintas_hari: !!f.lintas_hari, istirahat_menit: +f.istirahat_menit || 0, lokasi_unit: f.lokasi_unit, unit_kompetensi: f.unit_kompetensi, judul: f.judul || (f.kehadiran !== 'Hadir' ? f.kehadiran : ''), uraian: f.uraian, peralatan: f.peralatan, pengalaman: f.pengalaman, refleksi: f.refleksi, kendala_singkat: f.kendala_singkat });
F.journal = async (d, form, btn) => {
  collectForm(); const f = S.form, mode = btn?.value || 'next', hadir = f.kehadiran === 'Hadir';
  if (mode === 'next') {
    let e = '';
    if (f.step === 0) { e = localValidate(f, false); if (!e && hadir && (!spanMin(f) || (+f.istirahat_menit || 0) >= spanMin(f))) e = localValidate({ ...f, unit_kompetensi: 'x', judul: 'x', uraian: 'x'.repeat(20) }, true); if (!e && !hadir && (f.uraian || '').length < 15) e = 'Keterangan minimal 15 karakter.'; }
    else e = hadir && !f.unit_kompetensi ? 'Pilih unit kompetensi.' : hadir && !f.judul ? 'Isi judul pekerjaan.' : hadir && (f.uraian || '').length < 15 ? 'Uraian minimal 15 karakter.' : '';
    if (e) return toast(e, true);
    f.step++; render(); window.scrollTo(0, 0); return;
  }
  const submit = mode === 'send', err = localValidate(f, submit); if (err) return toast(err, true);
  const old = f.obId ? S.outbox.find(x => x.id === f.obId) : null;
  const item = {
    id: old ? old.id : 'ob_' + f.clientId, owner: me(), state: 'antre', reason: '', code: '', attempts: 0, nextTry: 0, createdAt: old ? old.createdAt : Date.now(), savedAt: localIso(),
    clientId: f.clientId, journalId: f.id || (old && old.journalId) || '', status: f.status, entry: entryPayload(f), submit, tx: uid(), savedDraft: false,
    photos: [...(f.donePhotos || []), ...f.newPhotos.map(p => ({ ...p, done: false }))], serverPhotos: f.foto || [], tanggal: f.tanggal, judul: f.judul || f.kehadiran
  };
  let stored = true;
  BUSY.add(item.id);
  try { await IDB.put('outbox', item); } catch (e) { stored = false; }
  if (stored) { clearTimeout(saveT); await savePromise.catch(() => { }); await IDB.remove('drafts', me() + ':' + draftKey(f)).catch(() => { }); }
  await refreshLocal();
  const res = await processItem(item, { persist: stored, owned: true });
  await refreshLocal();
  if (res.ok) {
    S.form = null; S.saveState = ''; dropData(k => k === 'sh' || k.startsWith('jl:') || k.startsWith('j:'));
    if (submit) { S.last = { ...res.data.jurnal, guru: res.data.guru }; go('receipt', {}, true); }
    else { toast('Draf tersimpan di server'); go('journal', { id: res.data.jurnal.id }, true); }
    return;
  }
  if (!stored) { toast('Belum tersimpan: ' + res.error.message + ' Jangan tutup aplikasi, coba lagi.', true); return; }
  if (item.state === 'perbaiki') { S.form.obId = item.id; S.form._for = 'ob:' + item.id; S.params = { ob: item.id }; S.form.id = item.journalId || S.form.id; S.form.donePhotos = item.photos.filter(p => p.done); S.form.newPhotos = item.photos.filter(p => !p.done); openSheet(`<h2>Perlu diperbaiki</h2><div class="note red">${ic('alert', 's')}<div>${esc(item.reason)}</div></div><p>Jurnal tetap tersimpan di HP (menu <b>Tertunda</b>). Perbaiki isinya lalu kirim lagi.</p><button class="btn pri block" data-act="close">Perbaiki sekarang</button>`); S.form.step = 0; render(); return; }
  S.form = null; S.saveState = '';
  S.last = { ...item.entry, status: 'antre', state: item.state, reason: item.reason, foto: item.photos, savedAt: item.savedAt, submit };
  go('receipt', {}, true);
};

/* ---------- mesin antrean: Simpan draf → unggah semua foto → kirim ---------- */
const BACKOFF = [30, 60, 120, 300, 600, 1800];
async function persistItem(item, persist) { item.updatedAt = Date.now(); if (persist) { try { await IDB.put('outbox', item); } catch (e) { } } }
const BUSY = new Set();
async function processItem(item, opt = {}) {
  const persist = opt.persist !== false, ep = S.epoch;
  if (item.owner !== me()) return { ok: false, error: new ApiError('Bukan milik akun ini.', 'forbidden') };
  if (BUSY.has(item.id) && !opt.owned) return { ok: false, error: new ApiError('Sedang dikirim.', 'busy_local') };
  BUSY.add(item.id);
  try {
    item.state = 'sinkron'; item.attempts++; item.reason = ''; await persistItem(item, persist); if (S.route === 'queue') render();
    if (!item.savedDraft || !item.journalId) {
      const r = await api('journal.save', { entry: { ...item.entry, id: item.journalId || undefined }, submit: false, tx: item.tx + '-d' }, { retries: 1 });
      item.journalId = r.jurnal.id; item.status = r.jurnal.status; item.savedDraft = true; item.serverPhotos = r.jurnal.foto || [];
      await persistItem(item, persist);
    }
    for (let round = 0; round < 2; round++) {
      for (const ph of item.photos) {
        if (ph.done) continue;
        item.state = 'foto'; await persistItem(item, persist);
        const up = await api('photo.upload', { jurnalId: item.journalId, tx: ph.tx, image: ph.image, thumb: ph.thumb, keterangan: ph.keterangan }, { timeout: 90000, retries: 1 });
        ph.done = true; ph.docId = up.id;
        await persistItem(item, persist);
      }
      if (!item.submit) { const r = await api('journal.get', { id: item.journalId }, { retries: 1 }); await finishItem(item, persist); return { ok: true, data: { jurnal: r } }; }
      try {
        const r = await api('journal.save', { entry: { ...item.entry, id: item.journalId }, submit: true, tx: item.tx, photoTx: item.photos.map(p => p.tx) }, { retries: 1 });
        await finishItem(item, persist); return { ok: true, data: r };
      } catch (e) {
        if (e.code === 'photos_incomplete' && round === 0) { item.photos.forEach(p => { if (p.image) p.done = false; }); continue; }
        throw e;
      }
    }
    throw new ApiError('Foto belum lengkap di server.', 'photos_incomplete');
  } catch (e) {
    if (ep !== S.epoch || e.code === 'stale') { item.state = 'antre'; await persistItem(item, persist); return { ok: false, error: e }; }
    classify(item, e); await persistItem(item, persist);
    return { ok: false, error: e };
  } finally { BUSY.delete(item.id); }
}
function classify(item, e) {
  item.code = e.code || 'invalid';
  if (e.code === 'offline' || e.code === 'network') { const off = navigator.onLine === false; item.state = off ? 'antre' : 'gagal'; item.reason = off ? 'Menunggu sinyal internet.' : e.message; item.nextTry = off ? 0 : Date.now() + BACKOFF[Math.min(item.attempts, BACKOFF.length) - 1] * 1000; }
  else if (TEMP_CODES.includes(e.code)) { item.state = 'gagal'; item.reason = e.message; item.nextTry = Date.now() + BACKOFF[Math.min(item.attempts, BACKOFF.length) - 1] * 1000; }
  else if (e.code === 'auth') { item.state = 'antre'; item.reason = 'Masuk kembali untuk mengirim.'; }
  else if (e.code === 'photos_incomplete' && item.photos.some(p => !p.done && !p.image)) { item.state = 'perbaiki'; item.reason = 'Ada foto yang datanya hilang dari HP. Pilih ulang fotonya lalu kirim.'; }
  else { item.state = 'perbaiki'; item.reason = e.message; }
}
async function finishItem(item, persist) { if (persist) { try { await IDB.remove('outbox', item.id); } catch (e) { } } }
let flushing = false;
async function flushOutbox(manual, onlyId) {
  if (flushing || !S.token || !S.user) return; flushing = true; const ep = S.epoch;
  try {
    await refreshLocal(); let sent = 0, fixes = 0;
    for (const it of S.outbox.slice()) {
      if (ep !== S.epoch) break;
      if (onlyId && it.id !== onlyId) continue;
      if (BUSY.has(it.id)) continue;
      if (it.state === 'perbaiki' && !onlyId) continue;
      if (!manual && it.nextTry && it.nextTry > Date.now()) continue;
      const r = await processItem(it);
      if (r.ok) sent++; else { if (it.state === 'perbaiki') fixes++; if (['offline', 'network', 'auth', 'stale', 'maintenance', 'busy', 'server', 'ratelimit', 'http'].includes(r.error.code)) break; }
    }
    if (ep !== S.epoch) return;
    await refreshLocal();
    if (sent) { toast(`${sent} jurnal dari antrean berhasil tersimpan di server`); dropData(k => k === 'sh' || k.startsWith('jl:') || k.startsWith('j:')); }
    else if (manual && S.outbox.length) toast(fixes ? 'Ada jurnal yang perlu diperbaiki. Lihat alasannya.' : 'Belum berhasil terkirim: ' + (S.outbox[0].reason || 'coba lagi nanti'), true);
    render();
  } finally { flushing = false; }
}

/* ======================= STRUK / BUKTI ======================= */
V.receipt = () => {
  const j = S.last; if (!j) { setTimeout(() => go('home', {}, true)); return ''; }
  const queued = j.status === 'antre', q = QS[j.state] || QS.antre;
  return `<div class="receipt"><div class="tick ${queued ? 'wait' : ''}">${ic(queued ? 'wifi' : 'check', 'l')}</div>
    <h1>${queued ? 'Disimpan di HP' : 'Jurnal terkirim'}</h1><p class="sub">${queued ? (j.submit ? 'Belum sampai ke guru. Akan dikirim otomatis saat ada sinyal.' : 'Draf akan disimpan ke server saat ada sinyal.') : 'Semua foto sudah terunggah. Guru pembimbing akan memeriksa jurnalmu.'}</p>
    <div class="rcard"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:12px;font-weight:700;color:var(--muted)">Status</span><span class="pill ${queued ? q[1] : 'warn'}">${queued ? q[0] : 'Menunggu pemeriksaan'}</span></div>
      <div style="font-size:17px;font-weight:800;margin-top:14px;line-height:1.3">${esc(j.judul)}</div><div style="font-size:12.5px;color:var(--muted)">${esc(j.unit_kompetensi || j.kehadiran)}${j.lokasi_unit ? ' · ' + esc(j.lokasi_unit) : ''}</div>
      <div class="dash"></div>
      <div class="rgrid"><span>No. jurnal</span><span>${esc(j.id || '(belum ada)')}</span><span>Tanggal kegiatan</span><span>${fDay(j.tanggal)}</span>${j.jam_mulai && j.kehadiran === 'Hadir' ? `<span>Jam kerja</span><span>${j.jam_mulai}–${j.jam_selesai} (${durH(j).toFixed(1)} jam)</span>` : ''}<span>Foto</span><span>${(j.foto || []).length} foto${queued ? '' : ' terunggah'}</span>${j.guru ? `<span>Dikirim ke</span><span>${esc(j.guru)}</span>` : ''}<span>Waktu</span><span>${fT(j.dikirim_pada || j.savedAt || localIso())}</span></div>
      ${queued && j.reason ? `<div class="dash"></div><div class="note" style="background:none;padding:0">${ic('help', 's')}<div>${esc(j.reason)}</div></div>` : ''}</div>
    <div class="racts"><button data-go="journal-form"><span class="qq">${ic('plus')}</span>Kegiatan lain</button><button data-go="${queued ? 'queue' : 'activity'}"><span class="qq">${ic(queued ? 'upload' : 'book')}</span>${queued ? 'Lihat tertunda' : 'Lihat riwayat'}</button></div>
    <button class="btn mint block" data-go="home" style="position:fixed;left:50%;transform:translateX(-50%);bottom:calc(20px + var(--safe-b));width:calc(100% - 32px);max-width:488px">Kembali ke Beranda</button></div>`;
};

/* ======================= DOKUMENTASI & PERKEMBANGAN ======================= */
V.gallery = () => {
  const d = useData('jl:me', () => api('journal.list', {}));
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Dokumentasi</strong><small>Semua foto kegiatanmu</small></div></div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  const items = d.jurnal.filter(j => j.foto?.length);
  return `<div class="scr noNav">${head}<div class="sec">${items.length ? items.map(j => `<div class="dayh"><span>${fDay(j.tanggal)}</span><span>${esc(j.judul)}</span></div>${photoThumbs(j.foto)}`).join('') : empty('Belum ada foto', 'Tambahkan foto di langkah 3 saat mengisi jurnal.')}</div></div>`;
};
V.progress = () => {
  const d = useData('jl:me', () => api('journal.list', {}));
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Perkembangan PKL</strong><small>Unit kompetensi & kehadiran</small></div></div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  const sent = d.jurnal.filter(j => !['draf'].includes(j.status) && j.kehadiran === 'Hadir');
  const rowsC = (S.user.kompetensi || []).map(c => { const es = sent.filter(j => j.unit_kompetensi === c); return { c, n: es.length, ok: es.filter(j => j.status === 'disetujui').length, h: es.reduce((a, j) => a + (+j.durasi_jam || 0), 0) }; });
  const mx = Math.max(1, ...rowsC.map(r => r.n)), st = d.stat;
  return `<div class="scr noNav">${head}<div class="sec"><div class="box pad"><div class="stat4" style="margin:0 0 14px"><span>Hadir <b>${st.hadir}</b></span><span>Izin <b>${st.izin}</b></span><span>Sakit <b>${st.sakit}</b></span><span>Libur <b>${st.libur}</b></span><span>Kosong <b>${st.hari_kosong}</b></span></div>${rowsC.map(r => `<div style="margin-bottom:14px"><div style="display:flex;justify-content:space-between;gap:8px;font-size:13px"><b>${esc(r.c)}</b><span style="color:var(--muted);white-space:nowrap">${r.n}× · ${r.h.toFixed(0)} jam · ${r.ok} disetujui</span></div><div class="prog" style="margin:6px 0 0"><i style="width:${r.n / mx * 100}%"></i></div></div>`).join('')}<div class="note">${ic('help', 's')}<div>Dihitung dari jurnal yang sudah dikirim (draf dan yang dihapus tidak dihitung). Penilaian akhir diisi terpisah oleh penilai yang berwenang.</div></div></div>${calendarBox(d)}</div></div>`;
};
function calendarBox(d) {
  const filled = {}; d.jurnal.forEach(j => { if (j.status === 'draf') return; const c = j.kehadiran !== 'Hadir' ? 'blue' : j.status === 'disetujui' ? 'ok' : j.status === 'revisi' ? 'red' : 'warn'; if (!filled[j.tanggal] || c === 'red') filled[j.tanggal] = c; });
  const t = localToday(), m = (S.filter.cm || t.slice(0, 7)), [y, mo] = m.split('-').map(Number), first = new Date(y, mo - 1, 1), days = new Date(y, mo, 0).getDate(), off = (first.getDay() + 6) % 7, s = d.siswa, wd = String(s.hari_kerja || '1,2,3,4,5').split(',').map(Number), miss = new Set(d.stat.kosong_terakhir);
  let h = `<div class="box pad" style="margin-top:14px"><div class="sh"><h2>${BULAN[mo - 1]} ${y}</h2><div class="btns"><button class="ibtn light" data-act="cal" data-d="-1" aria-label="Bulan sebelumnya">${ic('left', 's')}</button><button class="ibtn light" data-act="cal" data-d="1" aria-label="Bulan berikutnya">${ic('right', 's')}</button></div></div><div class="cal">${['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'].map(x => `<div class="cw">${x}</div>`).join('')}`;
  for (let i = 0; i < off; i++) h += '<div></div>';
  for (let n = 1; n <= days; n++) { const ds = `${y}-${pad(mo)}-${pad(n)}`, dw = dObj(ds).getDay(), inP = ds >= s.mulai && ds <= s.selesai && wd.includes(dw); const c = filled[ds] || (inP && ds < t ? 'miss' : 'off'); h += `<div class="cd ${c} ${ds === t ? 'today' : ''}">${n}</div>`; }
  return h + `</div><div class="meta" style="margin-top:8px;font-size:11px;color:var(--muted)">Hijau disetujui · kuning menunggu · merah revisi · biru izin/sakit/libur · garis putus = belum diisi (hari libur sekolah tetap tampil putus-putus di kalender ini${miss.size ? '' : ''})</div></div>`;
}
A.cal = el => { const t = S.filter.cm || localToday().slice(0, 7); let [y, m] = t.split('-').map(Number); m += +el.dataset.d; if (m < 1) { m = 12; y--; } if (m > 12) { m = 1; y++; } S.filter.cm = `${y}-${pad(m)}`; render(); };

/* ======================= KENDALA ======================= */
V.issues = () => {
  const d = useData('issues', () => api('issue.list', {}));
  const head = `<div class="dark"><div class="hrow"><div class="grow"><strong style="font-size:18px">Kendala</strong><small>${isStudent() ? 'Laporkan kapan saja' : 'Laporan siswa yang dapat Anda lihat'}</small></div><button class="ibtn" data-act="reload" aria-label="Muat ulang">${ic('refresh')}</button></div></div>`;
  let h = head;
  if (isStudent()) h += `<div class="sec"><button class="btn pri block" data-go="issue-new">${ic('plus', 's')} Laporkan kendala baru</button><button class="btn block" data-act="emergency" style="margin-top:8px;color:var(--red);border-color:#F2C6C6">${ic('phone', 's')} Kontak darurat</button></div>`;
  if (!d) return `<div class="scr">${h}${loading()}</div>`;
  if (d.__err) return `<div class="scr">${h}${errBox(d.__err)}</div>`;
  const f = S.filter.isf || 'aktif', list = d.filter(k => f === 'aktif' ? k.status !== 'Selesai' : f === 'mendesak' ? k.urgensi === 'Mendesak' && k.status !== 'Selesai' : f === 'selesai' ? k.status === 'Selesai' : true);
  h += `<div class="chips">${[['aktif', 'Aktif'], ['mendesak', 'Mendesak'], ['selesai', 'Selesai'], ['semua', 'Semua']].map(([k, t]) => `<button class="chip ${f === k ? 'on' : ''}" data-act="tab" data-k="isf" data-v="${k}">${t}</button>`).join('')}</div>`;
  h += `<div class="sec"><div class="box">${list.length ? list.map(issueRow).join('') : empty('Tidak ada laporan', '')}</div></div>`;
  return `<div class="scr">${h}</div>`;
};
const issueRow = k => `<button class="row" data-go="issue" data-id="${esc(k.id)}"><span class="ric ${k.status === 'Selesai' ? 'ok' : k.urgensi === 'Mendesak' ? 'red' : 'warn'}">${ic(k.sensitif ? 'lock' : k.status === 'Selesai' ? 'check' : 'alert', 's')}</span><span class="rb"><b>${isStudent() ? '' : esc(k.siswa_nama) + ' · '}${esc(k.judul)}</b><small>${k.urgensi === 'Mendesak' ? '<b style="color:var(--red)">MENDESAK</b> · ' : ''}${k.perlu_kajur ? 'Perlu Kajur · ' : ''}${esc(k.kategori)} · ${fT(k.dibuat_pada)}</small></span><span class="st ${k.status === 'Selesai' ? 'ok' : k.status === 'Baru' || k.status === 'Dibuka Kembali' ? 'red' : 'warn'}">${esc(k.status)}</span></button>`;
V['issue-new'] = () => {
  const cats = S.user.kategori_kendala || [];
  return `<div class="scr noNav"><div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Lapor kendala</strong><small>Guru pembimbing akan menindaklanjuti</small></div></div></div>
  <form class="sec" data-form="issue" novalidate><input type="hidden" name="tx" value="${uid()}"><div id="urg" class="hide">${urgentBox()}</div>
    <div class="f"><label for="ik">Kategori</label><select class="in" id="ik" name="kategori" data-change="urg">${cats.map(c => `<option>${esc(c)}</option>`).join('')}</select></div>
    <div class="f"><span class="lb">Tingkat urgensi</span><div class="seg">${['Biasa', 'Penting', 'Mendesak'].map((u, i) => `<label><input type="radio" name="urgensi" value="${u}" ${i === 0 ? 'checked' : ''} data-change="urg"><span>${u}</span></label>`).join('')}</div></div>
    <div class="f"><label for="ij">Judul singkat</label><input class="in" id="ij" name="judul" maxlength="120" placeholder="Contoh: Kamera tidak bisa merekam"></div>
    <div class="f"><label for="iu">Ceritakan kendalanya</label><textarea class="in" id="iu" name="uraian" placeholder="Apa yang terjadi, kapan, dan siapa yang terlibat?"></textarea></div>
    <div class="f"><label for="ib">Bantuan yang kamu harapkan</label><textarea class="in" id="ib" name="bantuan" style="min-height:70px"></textarea></div>
    <label class="check"><input type="checkbox" name="sensitif" value="1" id="is"><span><b>Pribadi / sensitif.</b> Hanya kamu, guru pembimbingmu, dan Kajur yang dapat membaca isinya.</span></label>
    <button class="btn pri block" type="submit">${ic('send', 's')} Kirim laporan</button></form></div>`;
};
function urgentBox() { return `<div class="urgent"><b>${ic('phone')} Butuh pertolongan segera?</b><p>Jangan menunggu balasan di aplikasi. Hubungi langsung orang yang bisa menolong.</p>${contactLinks()}</div>`; }
C['ch:urg'] = () => { const fm = $('form[data-form="issue"]'), kat = fm.kategori.value, urg = fm.urgensi.value, show = /Keselamatan/.test(kat) || urg === 'Mendesak'; $('#urg').classList.toggle('hide', !show); if (/Keselamatan/.test(kat)) $('#is').checked = true; };
F.issue = async (d, f) => {
  if (!d.judul || (d.uraian || '').length < 10) return toast('Isi judul dan cerita kendala (min. 10 karakter)', true);
  const k = await api('issue.create', { ...d, sensitif: !!d.sensitif }, { retries: 2 });
  delete S.data.issues; delete S.data.sh; go('issue', { id: k.id }, true);
  toast(k.urgensi === 'Mendesak' ? 'Laporan tercatat dan pemberitahuan dibuat di aplikasi guru. Untuk keadaan darurat tetap hubungi langsung!' : 'Laporan tercatat. Guru pembimbing mendapat pemberitahuan di aplikasi.');
};
V.issue = p => {
  const d = useData('k:' + p.id, () => api('issue.get', { id: p.id }));
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Detail kendala</strong><small>${d && !d.__err ? esc(d.id) : ''}</small></div></div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  const steps = { 'Baru': 1, 'Ditinjau': 2, 'Dalam Penanganan': 3, 'Menunggu Tindak Lanjut': 4, 'Selesai': 5, 'Dibuka Kembali': 2 }[d.status] || 1;
  let h = head + `<div class="sec">${isStudent() && (d.urgensi === 'Mendesak' || /Keselamatan/.test(d.kategori)) && d.status !== 'Selesai' ? urgentBox() : ''}<div class="jc"><div class="btns" style="gap:6px"><span class="pill ${d.status === 'Selesai' ? 'ok' : 'warn'}">${esc(d.status)}</span>${d.urgensi !== 'Biasa' ? `<span class="pill ${d.urgensi === 'Mendesak' ? 'red' : 'warn'}">${esc(d.urgensi)}</span>` : ''}${d.sensitif ? `<span class="pill navy">${ic('lock', 's')} Sensitif</span>` : ''}${d.perlu_kajur ? '<span class="pill blue">Diteruskan ke Kajur</span>' : ''}${d.eskalasi ? '<span class="pill blue">Arahan Kajur</span>' : ''}</div>
    <h3>${esc(d.judul)}</h3><div class="meta">${esc(d.siswa_nama)} · ${esc(d.kategori)} · ${fT(d.dibuat_pada)}</div>
    <div class="steps">${[1, 2, 3, 4, 5].map(n => `<i class="${n <= steps ? 'on' : ''}"></i>`).join('')}</div><div class="meta" style="font-size:11px;margin-top:4px">Baru → Ditinjau → Ditangani → Menunggu → Selesai</div>
    <p>${esc(d.uraian)}</p>${d.bantuan ? `<div class="fb"><b>Bantuan yang diharapkan</b>${esc(d.bantuan)}</div>` : ''}<dl class="kv"><dt>Guru pembimbing</dt><dd>${esc(d.guru || '— belum ditugaskan')}${d.guru_hp ? ' · ' + esc(d.guru_hp) : ''}</dd></dl>
    ${d.notifikasi?.length ? `<details class="meta" style="margin-top:8px"><summary>Status pemberitahuan (${d.notifikasi.length})</summary>${d.notifikasi.map(n => `<div>${esc(n.untuk)} · ${n.saluran === 'email' ? 'email' : 'aplikasi'}: ${esc(n.status)}</div>`).join('')}</details>` : ''}</div>`;
  h += `<div class="sh" style="margin-top:6px"><h2>Percakapan & tindak lanjut</h2></div><div class="thread">${d.riwayat.map(r => ['komentar', 'eskalasi', 'teruskan_kajur'].includes(r.jenis) ? `<div class="msg ${r.saya ? 'me' : ''} ${(r.peran === 'kajur' || r.jenis === 'teruskan_kajur') && !r.saya ? 'kajur' : ''}"><small>${esc(r.oleh)} · ${fT(r.waktu)}${r.jenis === 'eskalasi' ? ' · ARAHAN KAJUR' : r.jenis === 'teruskan_kajur' ? ' · DITERUSKAN KE KAJUR' : ''}</small>${esc(r.isi)}</div>` : `<div class="msg sys">${esc(r.isi)}${r.status_baru && r.status_lama ? ` (${esc(r.status_lama)} → ${esc(r.status_baru)})` : ''} · ${esc(r.oleh)}, ${fT(r.waktu)}</div>`).join('')}</div>`;
  if (d.bisa_komentar) h += `<form data-form="issue-msg" class="btns" style="flex-wrap:nowrap;align-items:flex-end"><input type="hidden" name="id" value="${esc(d.id)}"><input type="hidden" name="tx" value="${uid()}"><textarea class="in" name="isi" style="min-height:50px;flex:1" placeholder="Tulis tanggapan…" aria-label="Pesan"></textarea><button class="btn pri" style="width:52px;padding:0" aria-label="Kirim">${ic('send', 's')}</button></form>`;
  if (d.bisa_tangani) h += `<div class="sh" style="margin-top:18px"><h2>Ubah status</h2></div><form class="box pad" data-form="issue-update"><input type="hidden" name="id" value="${esc(d.id)}"><input type="hidden" name="tx" value="${uid()}"><div class="f"><label for="us">Status</label><select class="in" id="us" name="status">${(S.user.status_kendala || []).map(s => `<option ${s === d.status ? 'selected' : ''}>${esc(s)}</option>`).join('')}</select></div><div class="f"><label for="ut">Tindakan yang dilakukan</label><textarea class="in" id="ut" name="tindakan" style="min-height:70px" placeholder="Contoh: Menelepon instruktur DUDI."></textarea></div><div class="f"><label for="uh">Hasil penyelesaian (wajib bila Selesai)</label><textarea class="in" id="uh" name="hasil" style="min-height:60px"></textarea></div><button class="btn pri block">Simpan tindak lanjut</button></form>`;
  if (d.bisa_teruskan) h += `<div class="sh" style="margin-top:18px"><h2>Butuh perhatian Kajur?</h2></div><form class="box pad" data-form="issue-fwd"><input type="hidden" name="id" value="${esc(d.id)}"><input type="hidden" name="tx" value="${uid()}"><div class="f"><label for="uf">Alasan meneruskan</label><textarea class="in" id="uf" name="isi" style="min-height:60px" placeholder="Contoh: Perlu surat resmi sekolah ke DUDI."></textarea></div><button class="btn navy block">Teruskan ke Kajur</button></form>`;
  if (d.bisa_eskalasi) h += `<div class="sh" style="margin-top:18px"><h2>Arahan Kajur untuk guru pembimbing</h2></div><form class="box pad" data-form="issue-esc"><input type="hidden" name="id" value="${esc(d.id)}"><input type="hidden" name="tx" value="${uid()}"><div class="f"><label for="ue">Arahan</label><textarea class="in" id="ue" name="isi" style="min-height:70px"></textarea></div><button class="btn navy block">Kirim arahan</button></form>`;
  return `<div class="scr noNav">${h}</div></div>`;
};
const issueReload = (id, k) => { S.data['k:' + id] = k; delete S.data.issues; dropData(x => x.startsWith('mon')); render(); };
F['issue-msg'] = async d => { if (!d.isi) return toast('Tulis pesan terlebih dahulu', true); issueReload(d.id, await api('issue.comment', d, { retries: 2 })); toast('Pesan terkirim'); };
F['issue-update'] = async d => { issueReload(d.id, await api('issue.update', d, { retries: 2 })); toast('Tindak lanjut tersimpan'); };
F['issue-fwd'] = async d => { if (!d.isi) return toast('Tulis alasan meneruskan', true); issueReload(d.id, await api('issue.forward', d, { retries: 2 })); toast('Diteruskan ke Kajur (pemberitahuan tercatat di aplikasi Kajur)'); };
F['issue-esc'] = async d => { issueReload(d.id, await api('issue.escalate', d, { retries: 2 })); toast('Arahan terkirim'); };

/* ======================= PEMBERITAHUAN ======================= */
V.notif = () => {
  const d = useData('nl', () => api('notif.list'));
  const head = `<div class="bar"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>Pemberitahuan</strong><small>Tercatat di aplikasi. Belum ada notifikasi push ke HP.</small></div>${d && !d.__err && d.baru ? `<button class="btn sm ghost" data-act="notif-all">Tandai dibaca</button>` : ''}</div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  let h = '';
  if (isStudent() && S.outbox.length) h += pendingBanner();
  h += `<div class="sec"><div class="box">${d.daftar.length ? d.daftar.map(n => `<button class="row ${n.dibaca ? '' : 'unread'}" data-act="notif-open" data-id="${esc(n.id)}" data-o="${esc(n.objek)}" data-oid="${esc(n.objek_id)}"><span class="ric ${n.jenis === 'kendala' ? 'red' : 'teal'}">${ic(n.jenis === 'kendala' ? 'alert' : 'book', 's')}</span><span class="rb"><b>${esc(n.judul)}</b><small>${esc(n.isi)} · ${fT(n.waktu)}</small></span></button>`).join('') : empty('Belum ada pemberitahuan')}</div></div>`;
  return `<div class="scr noNav">${head}${h}</div>`;
};
A['notif-open'] = async el => { api('notif.read', { ids: [el.dataset.id] }, { retries: 0 }).catch(() => { }); delete S.data.nl; delete S.data.sh; delete S.data.th; if (el.dataset.o === 'KENDALA_PKL') go('issue', { id: el.dataset.oid }); else if (el.dataset.o === 'JURNAL_HARIAN') go(isStudent() && S.data.sh?.revisi?.some(j => j.id === el.dataset.oid) ? 'journal-form' : 'journal', { id: el.dataset.oid }); };
A['notif-all'] = async () => { await api('notif.read', {}); delete S.data.nl; delete S.data.sh; delete S.data.th; render(); };

/* ======================= GURU PEMBIMBING ======================= */
function homeMentor() {
  const u = S.user, d = useData('th', () => api('teacher.home')), q = useData('rq', () => api('review.queue'));
  const roleTxt = `Guru pembimbing${d && !d.__err ? ' · ' + d.siswa.length + ' siswa binaan' : ''}`;
  let h = headDark(roleTxt, u.nama, { extra: d && !d.__err ? `<div class="kpi3 tiles">${[[d.antrean, 'Jurnal masuk', '', 'review'], [d.belum_hari_ini, 'Belum isi hari ini', '#FFB4B4', 'mentees'], [d.kendala_baru, 'Kendala baru' + (d.kendala_mendesak ? ' · ' + d.kendala_mendesak + ' mendesak' : ''), '#FFD58A', 'issues']].map(([n, l, c, g]) => `<button data-go="${g}"><b style="${c ? 'color:' + c : ''}">${n}</b><small>${l}</small></button>`).join('')}</div>` : '' });
  if (!d) return `<div class="scr">${h}${loading()}</div>`;
  if (d.__err) return `<div class="scr">${h}${errBox(d.__err)}</div>`;
  const lag = d.siswa.filter(s => s.stat.hari_kosong >= 2);
  if (d.kendala_mendesak) h += `<button class="banner red" data-go="issues"><span class="bi">${ic('alert', 's')}</span><span style="flex:1"><b>${d.kendala_mendesak} kendala MENDESAK</b><span>Segera hubungi siswa</span></span><span class="go">Buka</span></button>`;
  if (d.belum_hari_ini || lag.length) h += `<button class="banner" data-go="mentees"><span class="bi">${ic('cal', 's')}</span><span style="flex:1"><b>${d.belum_hari_ini} siswa belum mengisi hari ini</b><span>${lag.length ? lag.length + ' siswa sudah ≥ 2 hari kerja kosong' : 'Ingatkan siswa binaan'}</span></span><span class="go">Lihat</span></button>`;
  if (d.kendala_baru) h += `<button class="banner" data-go="issues"><span class="bi">${ic('alert', 's')}</span><span style="flex:1"><b>${d.kendala_baru} kendala baru</b><span>Laporan otomatis berstatus Ditinjau saat Anda buka</span></span><span class="go">Buka</span></button>`;
  h += `<div class="sec"><div class="sh"><h2>Jurnal masuk</h2><button class="link" data-go="review">Semua (${d.antrean})</button></div>`;
  if (!q) h += loading(); else if (q.__err) h += errBox(q.__err);
  else h += q.length ? q.slice(0, 3).map(reviewCard).join('') : `<div class="box">${empty('Antrean kosong', 'Semua jurnal siswa binaan sudah diperiksa.')}</div>`;
  h += `<div class="btns" style="margin-top:12px"><button class="btn f1" data-go="mentees">${ic('users', 's')} Siswa binaan</button>${isMonitor() ? `<button class="btn f1" data-go="monitor">${ic('chart', 's')} Pantau</button>` : `<button class="btn f1" data-act="csv-mentees">${ic('download', 's')} Rekap (Excel)</button>`}</div>`;
  return `<div class="scr">${h}</div></div>`;
}
function reviewCard(j) {
  return `<div class="jc"><div class="hrow" style="gap:10px"><span class="av sm">${esc(initials(j.siswa_nama))}</span><div class="grow"><b style="font-size:13px">${esc(j.siswa_nama)}</b><div class="meta">${esc(j.konsentrasi)} · ${fDay(j.tanggal)}${j.jam_mulai ? ' · ' + j.jam_mulai + '–' + j.jam_selesai : ''}</div></div>${j.versi > 1 ? `<span class="pill red">Revisi v${esc(j.versi)}</span>` : ''}${j.menunggu_hari > 3 ? `<span class="pill warn">${j.menunggu_hari} hari</span>` : ''}</div>
    <h3>${esc(j.judul)}</h3><div class="meta">${esc(j.unit_kompetensi || j.kehadiran)}${j.lokasi_unit ? ' · ' + esc(j.lokasi_unit) : ''}${j.durasi_jam ? ' · ' + j.durasi_jam + ' jam' : ''}</div><p>${esc(j.uraian)}</p>
    ${j.peralatan || j.pengalaman ? `<dl class="kv">${j.peralatan ? `<dt>Peralatan</dt><dd>${esc(j.peralatan)}</dd>` : ''}${j.pengalaman ? `<dt>Pengalaman</dt><dd>${esc(j.pengalaman)}</dd>` : ''}</dl>` : ''}${photoThumbs(j.foto)}${j.foto?.length ? `<div class="meta">${j.foto.length} foto · semua sudah terunggah</div>` : ''}
    ${reviewBox(j)}</div>`;
}
function reviewBox(j) { return `<form data-form="review" style="margin-top:12px;border-top:1px dashed var(--line2);padding-top:12px"><input type="hidden" name="id" value="${esc(j.id)}"><input type="hidden" name="tx" value="${uid()}"><textarea class="in" name="catatan" style="min-height:60px" placeholder="Catatan untuk siswa (wajib bila minta revisi)" aria-label="Catatan untuk siswa">${j.status === 'diperiksa' ? esc(j.catatan_guru) : ''}</textarea><div class="btns" style="margin-top:8px"><button class="btn warn sm f1" name="aksi" value="revisi">Minta revisi</button><button class="btn pri sm f1" name="aksi" value="setujui">${ic('check', 's')} Setujui</button></div><button class="btn ghost sm block" name="aksi" value="komentar" style="margin-top:2px">Beri komentar tanpa keputusan</button></form>`; }
F.review = async (d, f, btn) => {
  const aksi = btn?.value; if ((aksi === 'revisi' || aksi === 'komentar' || aksi === 'buka_kembali') && !d.catatan) return toast(aksi === 'buka_kembali' ? 'Tulis alasan membuka kembali' : 'Tulis catatan untuk siswa', true);
  await api('review.act', { id: d.id, aksi, catatan: d.catatan, tx: d.tx || uid() }, { retries: 2 });
  dropData(k => ['th', 'rq'].includes(k) || k.startsWith('j:') || k.startsWith('jl:') || k.startsWith('mon'));
  toast(aksi === 'setujui' ? 'Jurnal disetujui ✓' : aksi === 'revisi' ? 'Permintaan revisi dikirim' : aksi === 'buka_kembali' ? 'Jurnal dibuka kembali' : 'Komentar terkirim');
  if (S.route === 'journal' && aksi !== 'buka_kembali') back(); else render();
};
V.review = () => {
  const q = useData('rq', () => api('review.queue'));
  const head = `<div class="dark"><div class="hrow"><div class="grow"><strong style="font-size:18px">Periksa jurnal</strong><small>Setujui atau minta revisi dengan catatan jelas</small></div><button class="ibtn" data-act="reload" aria-label="Muat ulang">${ic('refresh')}</button></div></div>`;
  if (!q) return `<div class="scr">${head}${loading()}</div>`;
  if (q.__err) return `<div class="scr">${head}${errBox(q.__err)}</div>`;
  return `<div class="scr">${head}<div class="sec">${q.length ? q.map(reviewCard).join('') : `<div class="box">${empty('Antrean kosong', 'Semua jurnal siswa binaan sudah diperiksa.')}</div>`}</div></div>`;
};
V.mentees = () => {
  const d = useData('th', () => api('teacher.home'));
  const head = `<div class="dark"><div class="hrow">${S.hist.length ? `<button class="ibtn" data-act="back" aria-label="Kembali">${ic('left')}</button>` : ''}<div class="grow"><strong style="font-size:18px">Siswa binaan</strong><small>${d && !d.__err ? d.siswa.length + ' siswa · ketuk untuk melihat jurnal' : ''}</small></div><button class="ibtn" data-act="csv-mentees" aria-label="Unduh rekap">${ic('download')}</button></div></div>`;
  if (!d) return `<div class="scr">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr">${head}${errBox(d.__err)}</div>`;
  const tot = d.siswa.reduce((a, s) => ({ lewat: a.lewat + s.stat.hari_lewat, kosong: a.kosong + s.stat.hari_kosong, jam: a.jam + s.stat.jam, ok: a.ok + (s.stat.status.disetujui || 0) }), { lewat: 0, kosong: 0, jam: 0, ok: 0 });
  return `<div class="scr">${head}<div class="sec"><div class="box pad"><div class="stat4" style="margin:0"><span>Ketepatan isi <b>${tot.lewat ? Math.round((tot.lewat - tot.kosong) / tot.lewat * 100) + '%' : '—'}</b></span><span>Hari kosong <b>${tot.kosong}</b></span><span>Disetujui <b>${tot.ok}</b></span><span>Jam praktik <b>${Math.round(tot.jam)}</b></span></div></div><div class="box" style="margin-top:12px">${d.siswa.map(studentRow).join('') || empty('Belum ada siswa binaan')}</div></div></div>`;
};
function studentRow(s) { const st = s.stat, pct = st.hari_kerja ? Math.round(st.hari_terisi / st.hari_kerja * 100) : 0; return `<button class="row" data-go="activity" data-sid="${esc(s.id)}"><span class="av sm">${esc(initials(s.nama))}</span><span class="rb"><b>${esc(s.nama)}${s.uji ? ' <span class="ujitag">UJI</span>' : ''}</b><small>${esc(s.konsentrasi)} · ${esc(s.dudi || '—')}${s.guru !== undefined ? ' · ' + esc(s.guru || 'belum ada pembimbing') : ''}${s.akun && s.akun !== 'aktif' ? ' · akun belum aktif' : ''}</small><span class="prog" style="display:block;margin:6px 0 0;height:6px"><i style="width:${pct}%;${pct < 70 ? 'background:#E06464' : pct < 90 ? 'background:#E0A03A' : ''}"></i></span></span><span style="text-align:right"><b style="display:block;font-size:13px">${st.hari_terisi}/${st.hari_kerja}</b><span class="st ${st.hari_ini_terisi ? 'ok' : st.hari_kosong ? 'red' : 'gray'}">${st.hari_ini_terisi ? 'Sudah' : st.hari_kosong ? st.hari_kosong + ' kosong' : st.hari_ini_kerja ? 'Belum' : 'Libur'}</span>${s.kendala_mendesak ? '<span class="st red">Mendesak</span>' : ''}</span></button>`; }
A['csv-mentees'] = async () => { const d = S.data.th && !S.data.th.__err ? S.data.th : await api('teacher.home'); downloadCSV('rekap-siswa-binaan-' + localToday() + '.csv', [['Nama', 'Konsentrasi', 'Tempat PKL', 'Hari kerja', 'Hari terisi', 'Hari kosong', 'Hadir', 'Izin', 'Sakit', 'Libur', 'Jam praktik', 'Disetujui', 'Menunggu', 'Revisi', 'Kendala aktif', 'Jurnal terakhir'], ...d.siswa.map(s => [s.nama, s.konsentrasi, s.dudi, s.stat.hari_kerja, s.stat.hari_terisi, s.stat.hari_kosong, s.stat.hadir, s.stat.izin, s.stat.sakit, s.stat.libur, s.stat.jam, s.stat.status.disetujui || 0, s.menunggu, s.stat.status.revisi || 0, s.kendala_aktif, s.stat.terakhir])]); };

/* ======================= INSTRUKTUR DUDI ======================= */
function homeDudi() {
  const d = useData('dh', () => api('dudi.home'));
  let h = headDark('Instruktur DUDI · ' + (S.user.instruktur?.dudi || ''), S.user.nama);
  if (!d) return `<div class="scr">${h}${loading()}</div>`;
  if (d.__err) return `<div class="scr">${h}${errBox(d.__err)}</div>`;
  return `<div class="scr">${h}<div class="sec"><div class="note blue">${ic('help', 's')}<div>Validasi jurnal oleh instruktur DUDI bersifat opsional. Ketuk nama siswa untuk melihat jurnal yang sudah dikirim.</div></div><div class="box" style="margin-top:12px">${d.siswa.map(studentRow).join('') || empty('Belum ada siswa pada penempatan Anda')}</div></div></div>`;
}

/* ======================= PUSAT MONITORING ======================= */
function periodRange(k) {
  const t = localToday(), d = dObj(t);
  if (k === 'hari') return { from: t, to: t };
  if (k === 'minggu') { const off = (d.getDay() + 6) % 7; return { from: addD(t, -off), to: t }; }
  if (k === 'bulan') return { from: t.slice(0, 8) + '01', to: t };
  if (k === 'custom') return { from: S.filter.mfrom || '', to: S.filter.mto || '' };
  return { from: '', to: '' };
}
function monParams() { const f = S.filter, r = periodRange(f.mp || 'pkl'); return { from: r.from, to: r.to, konsentrasi: f.mk || '', kelas: f.mc || '', guru: f.mg || '', dudi: f.md || '', uji: !!f.mu }; }
const monKey = () => 'mon:' + JSON.stringify(monParams());
V.monitor = () => {
  const key = monKey(), d = useData(key, () => api('monitor.overview', monParams()));
  const roleTxt = has('kajur') ? 'Ketua Jurusan' : has('sekjur') ? 'Sekretaris Jurusan' : has('pokja_pengelola') ? 'Pengelola Pokja PKL' : has('wali_kelas') ? 'Wali kelas' : 'Guru pembimbing';
  let h = headDark(roleTxt + ' · pusat monitoring', S.user.nama);
  const f = S.filter, per = f.mp || 'pkl';
  h += `<div class="chips">${[['hari', 'Hari ini'], ['minggu', 'Minggu ini'], ['bulan', 'Bulan ini'], ['pkl', 'Seluruh PKL'], ['custom', 'Pilih tanggal']].map(([k, t]) => `<button class="chip ${per === k ? 'on' : ''}" data-act="${k === 'custom' ? 'mon-filter' : 'tab'}" data-k="mp" data-v="${k}">${t}</button>`).join('')}<button class="chip ${f.mk || f.mc || f.mg || f.md || f.mu ? 'on' : ''}" data-act="mon-filter">${ic('filter', 's')} Filter${[f.mk, f.mc, f.mg, f.md, f.mu].filter(Boolean).length ? ' (' + [f.mk, f.mc, f.mg, f.md, f.mu].filter(Boolean).length + ')' : ''}</button></div>`;
  if (!d) return `<div class="scr">${h}${loading('Menghitung data monitoring…')}</div>`;
  if (d.__err) return `<div class="scr">${h}${errBox(d.__err)}</div>`;
  const r = d.ringkasan, tab = f.mt || 'siswa', drill = f.mx || '';
  const tile = (n, l, x, cls = '') => `<button class="kt ${cls} ${x && drill === x ? 'on' : ''}" data-act="tab" data-k="mx" data-v="${drill === x ? '' : x}" data-reset="" >${n}<small>${l}</small></button>`;
  h += `<div class="sec" style="padding-top:4px"><div class="kgrid">
    ${tile(r.siswa, 'Siswa', '')}${tile(r.dudi, 'Tempat PKL', '')}${tile(`${r.isi_hari_ini}/${r.wajib_hari_ini}`, 'Isi hari ini', 'belum_hari_ini', r.wajib_hari_ini && r.isi_hari_ini < r.wajib_hari_ini ? 'w' : '')}
    ${tile(r.disiplin === null ? '—' : r.disiplin + '%', 'Ketepatan isi', 'kosong', r.disiplin !== null && r.disiplin < 80 ? 'w' : '')}${tile(r.akun_belum, 'Akun belum aktif', 'akun', r.akun_belum ? 'w' : '')}${tile(r.tanpa_pembimbing, 'Tanpa pembimbing', 'tanpa', r.tanpa_pembimbing ? 'w' : '')}
    ${tile(r.menunggu, 'Menunggu periksa', 'menunggu')}${tile(r.menunggu_lama, '> 3 hari', 'lama', r.menunggu_lama ? 'r' : '')}${tile(r.kendala_aktif + (r.kendala_mendesak ? ` <i>${r.kendala_mendesak}!</i>` : ''), 'Kendala aktif', 'kendala', r.kendala_mendesak ? 'r' : '')}
  </div>${d.dari_cache ? '<div class="meta" style="font-size:11px;margin-top:6px">Data dari cache ≤ 90 detik. Ketuk muat ulang di filter untuk data terbaru.</div>' : ''}</div>`;
  if (d.kendala_penting.length) h += `<div class="sec" style="padding-top:0"><div class="sh"><h2>Kendala mendesak / perlu Kajur</h2></div><div class="box">${d.kendala_penting.map(issueRow).join('')}</div></div>`;
  h += `<div class="chips tabs">${[['siswa', 'Per siswa'], ['guru', 'Per pembimbing'], ['dudi', 'Per DUDI'], ['jurnal', 'Jurnal'], ['tl', 'Tindak lanjut']].map(([k, t]) => `<button class="chip ${tab === k ? 'on' : ''}" data-act="tab" data-k="mt" data-v="${k}">${t}</button>`).join('')}</div>`;
  if (tab === 'siswa') {
    const pred = { belum_hari_ini: s => s.stat.hari_ini_kerja && !s.stat.hari_ini_terisi, kosong: s => s.stat.hari_kosong > 0, akun: s => s.akun !== 'aktif', tanpa: s => !s.guru_id, menunggu: s => s.menunggu > 0, lama: s => s.menunggu_lama > 0, kendala: s => s.kendala_aktif > 0 }[drill] || (() => true);
    const list = d.siswa.filter(pred);
    h += `<div class="sec" style="padding-top:0">${drill ? `<div class="note blue" style="margin-bottom:10px">${ic('filter', 's')}<div>Menampilkan ${list.length} siswa sesuai indikator yang dipilih. <button class="link" data-act="tab" data-k="mx" data-v="">Tampilkan semua</button></div></div>` : ''}<div class="btns" style="margin-bottom:8px"><button class="btn sm f1" data-act="csv-mon" data-w="siswa">${ic('download', 's')} Rekap siswa (Excel)</button></div><div class="box">${list.map(studentRow).join('') || empty('Tidak ada siswa untuk indikator ini')}</div></div>`;
  } else if (tab === 'guru' || tab === 'dudi') {
    const list = tab === 'guru' ? d.per_guru : d.per_dudi;
    h += `<div class="sec" style="padding-top:0"><div class="btns" style="margin-bottom:8px"><button class="btn sm f1" data-act="csv-mon" data-w="${tab}">${ic('download', 's')} Rekap ${tab === 'guru' ? 'pembimbing' : 'DUDI'} (Excel)</button></div><div class="box">${list.map(g => `<button class="row" data-act="mon-pick" data-k="${tab === 'guru' ? 'mg' : 'md'}" data-v="${esc(g.id)}"><span class="ric ${g.mendesak ? 'red' : g.menunggu_lama ? 'warn' : 'teal'}">${ic(tab === 'guru' ? 'user' : 'build', 's')}</span><span class="rb"><b>${esc(g.nama)}</b><small>${g.siswa.length} siswa · ketepatan ${g.disiplin === null ? '—' : g.disiplin + '%'} · ${g.kosong} hari kosong</small></span><span style="text-align:right"><span class="st ${g.menunggu ? 'warn' : 'gray'}">${g.menunggu} menunggu</span>${g.menunggu_lama ? `<span class="st red">${g.menunggu_lama} > 3 hari</span>` : ''}${g.kendala ? `<span class="st red">${g.kendala} kendala</span>` : ''}</span></button>`).join('') || empty('Tidak ada data')}</div></div>`;
  } else if (tab === 'jurnal') {
    h += monJournals();
  } else {
    h += `<div class="sec" style="padding-top:0"><div class="box">${d.tindak_lanjut.length ? d.tindak_lanjut.map(t => `<button class="row" data-go="issue" data-id="${esc(t.kendala_id)}"><span class="ric ${t.jenis === 'teruskan_kajur' || t.jenis === 'eskalasi' ? 'red' : 'teal'}">${ic('chat', 's')}</span><span class="rb"><b>${esc(t.siswa)} · ${esc(t.judul)}</b><small>${esc(t.oleh)} (${esc(t.peran)}) · ${esc({ komentar: 'komentar', tindakan: 'tindakan', ubah_status: 'status', eskalasi: 'arahan Kajur', teruskan_kajur: 'diteruskan ke Kajur' }[t.jenis] || t.jenis)}${t.status_baru ? ' → ' + esc(t.status_baru) : ''} · ${fT(t.waktu)}<br>${esc(t.isi)}</small></span></button>`).join('') : empty('Belum ada tindak lanjut')}</div></div>`;
  }
  return `<div class="scr">${h}</div>`;
};
function monJournals() {
  const st = S.filter.mjs || 'menunggu', page = +S.filter.mjp || 1, p = { ...monParams(), status: st, page, size: 30 };
  const d = useData('monj:' + JSON.stringify(p), () => api('monitor.journals', p));
  let h = `<div class="chips">${[['menunggu', 'Menunggu'], ['revisi', 'Revisi'], ['disetujui', 'Disetujui'], ['semua', 'Semua']].map(([k, t]) => `<button class="chip ${st === k ? 'on' : ''}" data-act="tab" data-k="mjs" data-v="${k}" data-reset="mjp">${t}</button>`).join('')}</div><div class="sec" style="padding-top:0">`;
  if (!d) return h + loading() + '</div>';
  if (d.__err) return h + errBox(d.__err) + '</div>';
  h += `<div class="meta" style="margin-bottom:6px">${d.total} jurnal${d.pages > 1 ? ` · halaman ${d.page}/${d.pages}` : ''}</div><div class="box">${d.jurnal.map(j => jRow(j, true)).join('') || empty('Tidak ada jurnal')}</div>`;
  if (d.pages > 1) h += `<div class="btns" style="margin-top:10px">${page > 1 ? `<button class="btn sm f1" data-act="tab" data-k="mjp" data-v="${page - 1}">${ic('left', 's')} Sebelumnya</button>` : ''}${page < d.pages ? `<button class="btn sm f1" data-act="tab" data-k="mjp" data-v="${page + 1}">Berikutnya ${ic('right', 's')}</button>` : ''}</div>`;
  return h + '</div>';
}
V.jlist = () => { const d = S.data[monKey()]; S.filter.mt = 'jurnal'; return `<div class="scr">${headDark('Jurnal siswa', 'Semua jurnal yang dapat Anda lihat', { right: '' })}${monJournals()}</div>`; };
A['mon-pick'] = el => { S.filter[el.dataset.k] = el.dataset.v; S.filter.mt = 'siswa'; S.filter.mx = ''; render(); window.scrollTo(0, 0); };
A['mon-filter'] = () => {
  const d = S.data[monKey()], f = S.filter, opt = d && !d.__err ? d.pilihan : { guru: [], dudi: [], kelas: [] };
  openSheet(`<h2>Filter monitoring</h2><form data-form="mon-filter">
    <div class="grid2"><div class="f"><label for="mf1">Dari tanggal</label><input class="in" type="date" id="mf1" name="mfrom" value="${esc(f.mfrom || '')}"></div><div class="f"><label for="mf2">Sampai</label><input class="in" type="date" id="mf2" name="mto" value="${esc(f.mto || '')}"></div></div>
    <div class="f"><label for="mf3">Konsentrasi</label><select class="in" id="mf3" name="mk"><option value="">Semua</option><option value="PSPT" ${f.mk === 'PSPT' ? 'selected' : ''}>PSPT</option><option value="PF" ${f.mk === 'PF' ? 'selected' : ''}>Produksi Film</option></select></div>
    <div class="f"><label for="mf4">Kelas</label><select class="in" id="mf4" name="mc"><option value="">Semua</option>${opt.kelas.map(k => `<option value="${esc(k.id)}" ${f.mc === k.id ? 'selected' : ''}>${esc(k.nama)}</option>`).join('')}</select></div>
    <div class="f"><label for="mf5">Guru pembimbing</label><select class="in" id="mf5" name="mg"><option value="">Semua</option><option value="-" ${f.mg === '-' ? 'selected' : ''}>(belum ada pembimbing)</option>${opt.guru.map(k => `<option value="${esc(k.id)}" ${f.mg === k.id ? 'selected' : ''}>${esc(k.nama)}</option>`).join('')}</select></div>
    <div class="f"><label for="mf6">Tempat PKL / DUDI</label><select class="in" id="mf6" name="md"><option value="">Semua</option>${opt.dudi.map(k => `<option value="${esc(k.id)}" ${f.md === k.id ? 'selected' : ''}>${esc(k.nama)}</option>`).join('')}</select></div>
    <label class="check"><input type="checkbox" name="mu" value="1" ${f.mu ? 'checked' : ''}><span>Tampilkan akun uji coba (tidak dihitung dalam data resmi)</span></label>
    <div class="btns" style="margin-top:12px"><button type="button" class="btn f1" data-act="mon-reset">Atur ulang</button><button class="btn pri f1">Terapkan</button></div></form>`);
};
F['mon-filter'] = d => { Object.assign(S.filter, { mfrom: d.mfrom, mto: d.mto, mk: d.mk, mc: d.mc, mg: d.mg, md: d.md, mu: !!d.mu, mx: '', mjp: '' }); if (d.mfrom || d.mto) S.filter.mp = 'custom'; else if (S.filter.mp === 'custom') S.filter.mp = 'pkl'; dropData(k => k.startsWith('mon')); closeSheet(); render(); };
A['mon-reset'] = () => { ['mfrom', 'mto', 'mk', 'mc', 'mg', 'md', 'mu', 'mx', 'mjp'].forEach(k => delete S.filter[k]); S.filter.mp = 'pkl'; dropData(k => k.startsWith('mon')); closeSheet(); render(); };
A['csv-mon'] = el => {
  const d = S.data[monKey()]; if (!d || d.__err) return;
  const w = el.dataset.w, per = monParams(), sfx = (per.from || 'awal') + '_' + (per.to || 'kini');
  if (w === 'siswa') downloadCSV(`rekap-siswa-${sfx}.csv`, [['Nama', 'Kelas', 'Konsentrasi', 'Tempat PKL', 'Guru pembimbing', 'Akun', 'Hari kerja', 'Hari terisi', 'Hari kosong', 'Ketepatan %', 'Hadir', 'Izin', 'Sakit', 'Libur', 'Jam praktik', 'Disetujui', 'Menunggu', 'Menunggu >3 hari', 'Revisi', 'Kendala aktif', 'Kendala mendesak'], ...d.siswa.map(s => [s.nama, s.kelas, s.konsentrasi, s.dudi, s.guru || '(belum ada)', s.akun, s.stat.hari_kerja, s.stat.hari_terisi, s.stat.hari_kosong, s.stat.disiplin ?? '', s.stat.hadir, s.stat.izin, s.stat.sakit, s.stat.libur, s.stat.jam, s.stat.status.disetujui || 0, s.menunggu, s.menunggu_lama, s.revisi, s.kendala_aktif, s.kendala_mendesak])]);
  else { const list = w === 'guru' ? d.per_guru : d.per_dudi; downloadCSV(`rekap-${w === 'guru' ? 'pembimbing' : 'dudi'}-${sfx}.csv`, [[w === 'guru' ? 'Guru pembimbing' : 'Tempat PKL', 'Jumlah siswa', 'Ketepatan isi %', 'Hari kosong', 'Menunggu periksa', 'Menunggu >3 hari', 'Kendala aktif', 'Kendala mendesak', 'Nama siswa'], ...list.map(g => [g.nama, g.siswa.length, g.disiplin ?? '', g.kosong, g.menunggu, g.menunggu_lama, g.kendala, g.mendesak, g.siswa.map(id => (d.siswa.find(s => s.id === id) || {}).nama).join(', ')])]); }
};
function downloadCSV(name, rows) {
  const csv = '﻿' + rows.map(r => r.map(v => { v = String(v ?? ''); if (/^[=+\-@]/.test(v)) v = "'" + v; return /[";\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }).join(';')).join('\r\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  toast('File ' + name + ' diunduh (buka dengan Excel/Sheets)');
}

/* ======================= LAPORAN (format sementara) ======================= */
A['report-pick'] = el => {
  const sid = el.dataset.sid || '', t = localToday();
  openSheet(`<h2>Laporan PKL</h2><div class="note warn">${ic('help', 's')}<div><b>Format sementara.</b> Format resmi Panitia PKL belum diterima, jadi laporan ini belum boleh dianggap format resmi. Isinya diambil langsung dari jurnal, tanpa mengetik ulang.</div></div>
    <form data-form="report-go"><input type="hidden" name="sid" value="${esc(sid)}">
    <div class="f"><span class="lb">Jenis rekap</span><div class="seg">${[['harian', 'Harian'], ['mingguan', 'Mingguan'], ['bulanan', 'Bulanan'], ['akhir', 'Akhir PKL']].map(([k, l], i) => `<label><input type="radio" name="kind" value="${k}" ${i === 1 ? 'checked' : ''}><span>${l}</span></label>`).join('')}</div></div>
    <div class="f"><label for="rd">Tanggal acuan</label><input class="in" type="date" id="rd" name="date" value="${t}"><small>Harian: tanggal itu. Mingguan: Senin–Minggu pada pekan itu. Bulanan: bulan itu.</small></div>
    <button class="btn pri block">${ic('file', 's')} Tampilkan laporan</button></form>`);
};
F['report-go'] = d => { closeSheet(); go('report', { sid: d.sid, kind: d.kind, date: d.date || localToday() }); };
function reportRange(kind, date) { const d = dObj(date); if (kind === 'harian') return { from: date, to: date }; if (kind === 'mingguan') { const off = (d.getDay() + 6) % 7, from = addD(date, -off); return { from, to: addD(from, 6) }; } if (kind === 'bulanan') { const from = date.slice(0, 8) + '01'; return { from, to: ymd(new Date(d.getFullYear(), d.getMonth() + 1, 0)) }; } return { from: '', to: '' }; }
V.report = p => {
  const r = reportRange(p.kind, p.date), args = { siswaId: p.sid || undefined, from: r.from || undefined, to: r.to || undefined };
  const d = useData('rep:' + JSON.stringify(args), () => api('report.data', args));
  const title = { harian: 'Rekap Jurnal Harian', mingguan: 'Rekap Jurnal Mingguan', bulanan: 'Rekap Jurnal Bulanan', akhir: 'Rekap Akhir PKL' }[p.kind] || 'Rekap Jurnal';
  const head = `<div class="bar noprint"><div class="hrow"><button class="ibtn light" data-act="back" aria-label="Kembali">${ic('left')}</button><div class="grow"><strong>${title}</strong><small>Format sementara</small></div>${d && !d.__err ? `<button class="ibtn light" data-act="report-csv" aria-label="Unduh Excel">${ic('download')}</button><button class="ibtn light" data-act="print" aria-label="Cetak / PDF">${ic('print')}</button>` : ''}</div></div>`;
  if (!d) return `<div class="scr noNav">${head}${loading()}</div>`;
  if (d.__err) return `<div class="scr noNav">${head}${errBox(d.__err)}</div>`;
  S.lastReport = { d, title };
  const s = d.siswa, st = d.stat;
  return `<div class="scr noNav">${head}<div class="report">
    <div class="wm">FORMAT SEMENTARA — bukan format resmi Panitia PKL</div>
    <h1>${title}</h1><p class="rsub">${esc(S.user.sekolah || 'SMK Negeri 2 Palu')} · Program Keahlian Broadcasting dan Perfilman<br>Periode: ${fD(d.dari)} – ${fD(d.sampai)}</p>
    <table class="rt id"><tr><th>Nama</th><td>${esc(s.nama)}</td><th>NISN</th><td>${esc(s.nisn || '—')}</td></tr><tr><th>Kelas</th><td>${esc(s.kelas)} (${esc(s.konsentrasi)})</td><th>Tempat PKL</th><td>${esc(s.dudi || '—')}</td></tr><tr><th>Guru pembimbing</th><td>${esc(s.guru || '—')}</td><th>Instruktur DUDI</th><td>${esc(s.instruktur || '—')}</td></tr></table>
    <h2>Ringkasan</h2><table class="rt sum"><tr><th>Hari kerja</th><th>Terisi</th><th>Belum diisi</th><th>Hadir</th><th>Izin</th><th>Sakit</th><th>Libur</th><th>Jam praktik</th><th>Disetujui</th></tr><tr><td>${st.hari_kerja}</td><td>${st.hari_terisi}</td><td>${st.hari_kosong}</td><td>${st.hadir}</td><td>${st.izin}</td><td>${st.sakit}</td><td>${st.libur}</td><td>${st.jam}</td><td>${st.status.disetujui || 0}</td></tr></table>
    ${Object.keys(d.per_unit).length ? `<h2>Per unit kompetensi</h2><table class="rt"><tr><th>Unit kompetensi</th><th>Kegiatan</th><th>Jam</th><th>Disetujui</th></tr>${Object.entries(d.per_unit).map(([u, x]) => `<tr><td>${esc(u)}</td><td>${x.kegiatan}</td><td>${x.jam.toFixed(1)}</td><td>${x.disetujui}</td></tr>`).join('')}</table>` : ''}
    <h2>Rincian kegiatan</h2><table class="rt small"><tr><th>Tanggal</th><th>Kehadiran / jam</th><th>Kegiatan</th><th>Status</th></tr>${d.jurnal.map(j => `<tr><td>${fD(j.tanggal)}</td><td>${j.kehadiran === 'Hadir' ? `${j.jam_mulai}–${j.jam_selesai}${j.lintas_hari === 'ya' ? ' (+1)' : ''}<br>${j.durasi_jam} jam` : esc(j.kehadiran)}</td><td><b>${esc(j.judul)}</b>${j.unit_kompetensi ? '<br><i>' + esc(j.unit_kompetensi) + '</i>' : ''}<br>${esc(j.uraian)}${j.jumlah_foto ? `<br><small>${j.jumlah_foto} foto dokumentasi</small>` : ''}</td><td>${(ST[j.status] || [j.status])[0]}${j.dudi_validasi === 'ya' ? '<br><small>Divalidasi DUDI</small>' : ''}</td></tr>`).join('') || '<tr><td colspan="4">Belum ada jurnal terkirim pada periode ini.</td></tr>'}</table>
    ${d.kendala.length ? `<h2>Kendala yang dilaporkan</h2><table class="rt small"><tr><th>Tanggal</th><th>Kategori</th><th>Judul</th><th>Status</th></tr>${d.kendala.map(k => `<tr><td>${fD(k.tanggal)}</td><td>${esc(k.kategori)}</td><td>${esc(k.judul)}</td><td>${esc(k.status)}</td></tr>`).join('')}</table><p class="meta">Laporan kendala yang bersifat pribadi tidak dicantumkan.</p>` : ''}
    <div class="sign"><div><span>Siswa</span><b>${esc(s.nama)}</b></div><div><span>Guru pembimbing</span><b>${esc(s.guru || '....................')}</b></div><div><span>Instruktur DUDI (opsional)</span><b>${esc(s.instruktur || '....................')}</b></div></div>
    <p class="meta">Dicetak dari JEJAK PKL v${VERSION} pada ${fT(d.dibuat)}. Data diambil dari jurnal yang sudah dikirim (draf dan jurnal dihapus tidak dicantumkan).</p></div></div>`;
};
A.print = () => window.print();
A['report-csv'] = () => { const r = S.lastReport; if (!r) return; const d = r.d; downloadCSV(`laporan-${d.siswa.nama.replace(/\W+/g, '-')}-${d.dari}_${d.sampai}.csv`, [['FORMAT SEMENTARA - bukan format resmi Panitia PKL'], ['Nama', d.siswa.nama, 'NISN', d.siswa.nisn], ['Periode', d.dari, d.sampai], [], ['Tanggal', 'Kehadiran', 'Jam mulai', 'Jam selesai', 'Lintas hari', 'Istirahat (menit)', 'Jam efektif', 'Unit kompetensi', 'Judul', 'Uraian', 'Peralatan', 'Pengalaman', 'Status', 'Catatan guru', 'Foto', 'Validasi DUDI'], ...d.jurnal.map(j => [j.tanggal, j.kehadiran, j.jam_mulai, j.jam_selesai, j.lintas_hari, j.istirahat_menit, j.durasi_jam, j.unit_kompetensi, j.judul, j.uraian, j.peralatan, j.pengalaman, j.status, j.catatan_guru, j.jumlah_foto, j.dudi_validasi])]); };

/* ======================= PROFIL ======================= */
V.profile = () => {
  const u = S.user, s = u.siswa;
  let h = headDark(isStudent() ? 'Profil siswa' : 'Profil', u.nama, { right: '' });
  const roleName = r => ({ kajur: 'Ketua Jurusan', sekjur: 'Sekretaris Jurusan', wali_kelas: 'Wali kelas ' + (r.cakupan || '').replace('KLS-', '').replace('-', ' '), pokja_anggota: 'Anggota Pokja PKL', pokja_pengelola: 'Pengelola Pokja PKL', guru_pembimbing: 'Guru pembimbing', instruktur_dudi: 'Instruktur DUDI' }[r.peran] || r.peran);
  h += `<div class="sec">${s ? `<div class="box pad"><dl class="kv" style="margin:0;font-size:13px"><dt>NISN</dt><dd>${esc(s.nisn)}</dd><dt>Kelas</dt><dd>${esc(s.kelas)} · ${esc(s.konsentrasi)}</dd><dt>Tempat PKL</dt><dd>${esc(s.dudi || '—')}${s.dudi_alamat ? '<br><span class="meta">' + esc(s.dudi_alamat) + '</span>' : ''}</dd><dt>Instruktur DUDI</dt><dd>${esc(s.instruktur || '—')}</dd><dt>Guru pembimbing</dt><dd>${esc(s.guru || '— belum ditugaskan')}${s.guru_hp ? '<br>' + esc(s.guru_hp) : s.guru ? '<br><span class="meta">Nomor belum diverifikasi sekolah</span>' : ''}</dd><dt>Periode</dt><dd>${fD(s.mulai)} – ${fD(s.selesai)}</dd><dt>Hari kerja</dt><dd>${String(s.hari_kerja || '').split(',').map(n => HARI[+n]).join(', ')}</dd></dl></div>` : `<div class="box pad"><dl class="kv" style="margin:0;font-size:13px"><dt>Email</dt><dd>${esc(u.username)}</dd><dt>Peran aktif</dt><dd>${u.roles.map(r => esc(roleName(r))).join('<br>') || '—'}</dd></dl></div>`}
    <div class="sh" style="margin-top:18px"><h2>Keamanan</h2></div><form class="box pad" data-form="password"><div class="f"><label for="po">Kata sandi lama</label><input class="in" type="password" id="po" name="oldPassword" autocomplete="current-password"></div><div class="f"><label for="pn">Kata sandi baru</label><input class="in" type="password" id="pn" name="newPassword" autocomplete="new-password" minlength="8"><small>Minimal 8 karakter. Semua perangkat lain otomatis dikeluarkan.</small></div><button class="btn block">Ganti kata sandi</button></form>
    <div class="box" style="margin-top:14px">${isStudent() ? `<button class="row" data-go="queue"><span class="ric blue">${ic('upload', 's')}</span><span class="rb"><b>Jurnal tertunda</b><small>${S.outbox.length} di antrean · ${S.drafts.length} draf lokal</small></span></button>` : ''}<button class="row" data-act="howto"><span class="ric teal">${ic('mobile', 's')}</span><span class="rb"><b>Cara memasang aplikasi</b><small>${standalone() ? 'Sudah terpasang di HP ini' : 'Pasang di layar utama HP'}</small></span></button><button class="row" data-act="emergency"><span class="ric red">${ic('phone', 's')}</span><span class="rb"><b>Kontak darurat</b><small>Nomor yang bisa dihubungi langsung</small></span></button><button class="row" data-act="logout"><span class="ric">${ic('logout', 's')}</span><span class="rb"><b>Keluar</b><small>Akhiri sesi di HP ini</small></span></button></div>
    <p class="meta" style="text-align:center;font-size:11px;color:var(--muted);margin-top:18px">JEJAK PKL v${VERSION} · ${esc(u.sekolah || '')}${u.mode === 'staging' ? ' · MODE UJI' : ''}</p></div>`;
  return `<div class="scr">${h}</div>`;
};
const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
F.password = async (d, f) => {
  if ((d.newPassword || '').length < 8) return toast('Kata sandi baru minimal 8 karakter', true);
  const r = await api('auth.changePassword', { ...d, device: devName() }, { retries: 0 });
  S.token = r.token; LS.set('token', r.token); f.reset(); toast('Kata sandi berhasil diganti. Perangkat lain sudah dikeluarkan.');
};

/* ======================= PEMBARUAN DARI v1.0 ======================= */
/* v1.0 menyimpan draf ("form:new") dan antrean tanpa pemilik. Data itu diserahkan HANYA kepada akun yang
   profilnya tersimpan di HP saat itu; bila tidak ada profil, data dikarantina (tidak ditampilkan ke siapa pun). */
async function migrateLegacy() {
  try {
    if (!indexedDB.databases) return;
    const list = await indexedDB.databases();
    if (!list.some(x => x.name === 'jejak_pkl')) return;
    const old = await new Promise((res, rej) => { const r = indexedDB.open('jejak_pkl'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
    const read = (store, fn) => new Promise(res => { try { const t = old.transaction(store, 'readonly'); const q = fn(t.objectStore(store)); q.onsuccess = () => res(q.result); q.onerror = () => res(null); } catch (e) { res(null); } });
    const prof = await read('kv', s => s.get('profile')), form = await read('kv', s => s.get('form:new')), ob = (await read('outbox', s => s.getAll())) || [];
    const owner = prof && prof.id ? prof.id : '';
    if (owner && form && form.tanggal) { const cid = form.clientId || uid(); await IDB.put('drafts', { id: owner + ':new:' + cid, owner, key: 'new:' + cid, savedAt: localIso(), form: { ...form, clientId: cid, step: 0, newPhotos: (form.newPhotos || []).map(ph => ({ tx: uid(), image: ph.image, thumb: ph.thumb, keterangan: ph.keterangan || '', done: false })), foto: form.foto || [] } }); }
    for (const it of ob) {
      if (it.photosOnly) continue;
      const cid = (it.entry && it.entry.clientId) || uid();
      await IDB.put('outbox', { id: 'ob_' + cid, owner: owner || 'karantina', state: 'antre', reason: owner ? '' : 'Pemilik tidak diketahui (dari versi lama)', code: '', attempts: 0, nextTry: 0, createdAt: it.createdAt || Date.now(), savedAt: localIso(), clientId: cid, journalId: (it.entry && it.entry.id) || '', status: 'draf', entry: { ...(it.entry || {}), clientId: cid }, submit: !!it.submit, tx: uid(), savedDraft: false, photos: (it.photos || []).map(p => ({ tx: uid(), image: p.image, thumb: p.thumb, keterangan: p.keterangan || '', done: false })), serverPhotos: [], tanggal: it.tanggal || (it.entry || {}).tanggal, judul: it.judul || (it.entry || {}).judul });
    }
    const legacyTok = localStorage.getItem('jejak_token');
    if (legacyTok && owner && !LS.get('token')) { LS.set('token', legacyTok); await IDB.set('profile', prof); }
    old.close(); indexedDB.deleteDatabase('jejak_pkl');
    ['jejak_token', 'jejak_last_user'].forEach(k => localStorage.removeItem(k));
  } catch (e) { console.warn('migrasi data lama', e); }
}

/* ======================= MULAI ======================= */
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); S.installEvt = e; if (['login', 'home', 'profile'].includes(S.route)) render(); });
window.addEventListener('appinstalled', () => { S.installEvt = null; toast('JEJAK PKL terpasang di HP'); });
window.addEventListener('online', () => { render(); flushOutbox(); });
window.addEventListener('offline', () => render());
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && S.form && S.route === 'journal-form') { collectForm(); saveFormLocal(true); } });
window.addEventListener('pagehide', () => { if (S.form && S.route === 'journal-form') { collectForm(); saveFormLocal(true); } });
async function boot() {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => { });
  await migrateLegacy();
  S.token = LS.get('token') || '';
  if (S.token) { S.user = await IDB.get('profile'); if (!S.user) { try { S.user = await api('me.profile', {}, { noLogout: true }); IDB.set('profile', S.user).catch(() => { }); } catch (e) { if (e.code === 'auth') { S.token = ''; LS.del('token'); } } } }
  if (S.token && S.user) S.epoch++;
  await refreshLocal();
  S.route = S.token && S.user ? 'home' : 'login';
  render();
  api('app.info', {}, { retries: 0, token: '', anyEpoch: true }).then(i => { S.info = i; if (!S.user || i.mode !== S.user.mode) render(); }).catch(() => { });
  if (S.token && S.user) { const ep = S.epoch; api('me.profile').then(p => { if (ep !== S.epoch) return; S.user = p; IDB.set('profile', p).catch(() => { }); refreshLocal().then(render); }).catch(() => { }); flushOutbox(); }
  setInterval(() => { if (S.outbox.length && navigator.onLine !== false) flushOutbox(); }, 60000);
}
boot();

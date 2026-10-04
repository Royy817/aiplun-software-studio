export default function ServiceIcon({type}) {
  const shapes = {
    ai: <><rect x="8" y="8" width="16" height="16" rx="4"/><path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5M13 13h6v6h-6z"/></>,
    system: <><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M3 11h26M12 11v17M17 16h7m-7 6h5"/><circle cx="7" cy="7.5" r=".7" fill="currentColor" stroke="none"/></>,
    web: <><rect x="3" y="4" width="26" height="24" rx="3"/><path d="M3 11h26M8 17h8m-8 5h13"/><circle cx="23" cy="20" r="3"/><path d="m25 22 3 3"/></>,
    app: <><rect x="7" y="2" width="18" height="28" rx="4"/><path d="M13 6h6M13 26h6m-5-14-4 4 4 4m4-8 4 4-4 4"/></>,
  };
  return <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[type]}</svg>;
}


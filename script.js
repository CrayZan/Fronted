:root {
    --primary: #0066ff;
    --dark: #0f172a;
    --text-main: #334155;
    --bg: #f1f5f9;
    --white: #ffffff;
    --glass: rgba(255, 255, 255, 0.8);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg);
    color: var(--text-main);
}

/* Navbar Estilo Glassmorphism */
.navbar {
    background: var(--glass);
    backdrop-filter: blur(10px);
    padding: 1.2rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid #e2e8f0;
}

.nav-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
}

.logo { font-weight: 800; font-size: 1.4rem; color: var(--dark); }
.logo span { color: var(--primary); }

.nav-status { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; font-weight: 600; }
.status-dot { width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 10px #10b981; }

/* Hero Section */
.hero { background: var(--white); padding: 80px 20px; text-align: center; }
.hero h1 { font-size: 2.5rem; color: var(--dark); margin-bottom: 15px; letter-spacing: -1px; }
.hero p { max-width: 600px; margin: 0 auto; color: #64748b; font-size: 1.1rem; }

/* Layout */
.container { max-width: 1100px; margin: -40px auto 60px; padding: 0 20px; }
.grid-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 30px; }

/* Cards */
.card { background: var(--white); border-radius: 24px; padding: 30px; border: 1px solid #e2e8f0; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); }

h2 { font-size: 1.5rem; margin-bottom: 25px; color: var(--dark); }

/* Formulario */
.input-group { margin-bottom: 20px; }
.input-group label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; color: #475569; }
input, select {
    width: 100%; padding: 12px 16px; border-radius: 12px; border: 1px solid #cbd5e1;
    font-family: inherit; font-size: 1rem; transition: 0.3s;
}
input:focus { border-color: var(--primary); outline: none; box-shadow: 0 0 0 4px rgba(0, 102, 255, 0.1); }

.btn-submit {
    width: 100%; background: var(--primary); color: white; border: none; padding: 14px;
    border-radius: 12px; font-weight: 700; cursor: pointer; transition: 0.3s;
}
.btn-submit:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -5px rgba(0, 102, 255, 0.4); }

/* Monitor y Terminal */
.terminal {
    background: #0f172a; color: #38bdf8; padding: 20px; border-radius: 12px;
    font-family: 'Courier New', monospace; font-size: 0.85rem; height: 150px; overflow-y: auto;
}
.monitor-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
.monitor-header button { background: none; border: 1px solid var(--primary); color: var(--primary); padding: 4px 12px; border-radius: 6px; cursor: pointer; font-size: 0.75rem; }

.img-header { width: 100%; border-radius: 16px; height: 180px; object-fit: cover; margin-bottom: 15px; }

@media (max-width: 768px) { .grid-layout { grid-template-columns: 1fr; } }

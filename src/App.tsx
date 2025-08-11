import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Live from './pages/Live'
import LiveAdmin from './pages/LiveAdmin'
import Formation from './pages/Formation'
import Market from './pages/Market'

export default function App(){
  const link = { color:'#fff', textDecoration:'none', padding:'6px 10px' }
  return (
    <>
      <div style={{display:'flex',gap:8,alignItems:'center',padding:12,background:'#12151b',borderBottom:'1px solid #1b2028'}}>
        <strong style={{color:'#fff'}}>FantaRoccoLegend</strong>
        <Link to="/" style={link}>Dashboard</Link>
        <Link to="/market" style={link}>Mercato</Link>
        <Link to="/formation" style={link}>Formazione</Link>
        <Link to="/live" style={link}>Live</Link>
        <Link to="/admin" style={link}>Admin</Link>
        <Link to="/live-admin" style={link}>Live Admin</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/market" element={<Market/>} />
        <Route path="/formation" element={<Formation/>} />
        <Route path="/live" element={<Live/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/live-admin" element={<LiveAdmin/>} />
      </Routes>
    </>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* P0 页面路由将在此逐步添加 */}
        <Route path="/" element={<div>qisehua-worktap</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

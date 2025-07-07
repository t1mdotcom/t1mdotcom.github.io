import React, { useState, useEffect, useCallback } from 'react'

function Projects() {
  const [projects, setProjects] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMoreProjects = useCallback(() => {
    if (loading) return
    
    setLoading(true)
    
    // Simulate loading delay
    setTimeout(() => {
      const newProjects = []
      for (let i = 0; i < 5; i++) {
        newProjects.push({
          id: (page - 1) * 5 + i + 1,
          name: `Projekt ${(page - 1) * 5 + i + 1}`
        })
      }
      
      setProjects(prev => [...prev, ...newProjects])
      setPage(prev => prev + 1)
      setLoading(false)
    }, 500)
  }, [page, loading])

  useEffect(() => {
    // Load initial projects
    loadMoreProjects()
  }, []) // Only run on mount

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        loadMoreProjects()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loadMoreProjects])

  return (
    <div>
      <h2>Projekte</h2>
      <div id="projects">
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <p>{project.name}</p>
          </div>
        ))}
        {loading && <p>Loading more projects...</p>}
      </div>
    </div>
  )
}

export default Projects
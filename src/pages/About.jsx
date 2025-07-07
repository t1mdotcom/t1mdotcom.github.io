import React, { useState, useEffect } from 'react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

function About() {
  const [readmeContent, setReadmeContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadReadme = async () => {
      try {
        const readmeUrl = "https://raw.githubusercontent.com/t1mdotcom/t1mdotcom/main/README.md"
        const response = await fetch(readmeUrl)
        
        if (!response.ok) {
          throw new Error("Could not load file " + response.statusText)
        }
        
        const markdown = await response.text()
        const dirtyHtml = marked(markdown)
        const cleanHtml = DOMPurify.sanitize(dirtyHtml)
        
        setReadmeContent(cleanHtml)
        setLoading(false)
      } catch (error) {
        console.error("Error loading README:", error)
        setError("Content could not be loaded.")
        setLoading(false)
      }
    }

    loadReadme()
  }, [])

  return (
    <section id="about-me">
      <h2>About Me</h2>
      <div id="readme-content" className="markdown-body">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
        )}
      </div>
    </section>
  )
}

export default About
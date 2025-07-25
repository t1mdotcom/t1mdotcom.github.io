import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can reach me via e-mail:</p>
      <ul className="contact-info">
        <li><a href="mailto:tim@heinemann.foo">tim@heinemann.foo</a></li>
      </ul>
      <p>
        You can check my public key for my e-mail here:
        <a className="link" href="https://keyserver.ubuntu.com/pks/lookup?search=tim%40heinemann.foo&fingerprint=on&op=index">
          Public GPG-Key
        </a>
      </p>

      <br />
      <br />

      <h3>Follow me on:</h3>
      <ul className="social-links">
        <li>
          <a href="https://www.xing.com/profile/Tim_Heinemann15" target="_blank" rel="noopener">
            <i className="nf nf-fa-square_xing"></i> Xing
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/tim-heinemann-524764190/" target="_blank" rel="noopener">
            <i className="nf nf-md-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/t1mdotcom" target="_blank" rel="noopener">
            <i className="nf nf-md-github"></i> GitHub
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
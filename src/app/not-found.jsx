import React from 'react'

const NotFound = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--primary)',
        height: '100%',
        fontSize: '4.2rem',
        color: 'var(--white)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5.2rem'
        }}
      >
        NotFound
        <a
          href="/"
          style={{
            textDecoration: 'underline'
          }}
        >Go home</a>
      </div>
    </div>
  )
}

export default NotFound
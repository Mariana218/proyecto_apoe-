import React from 'react'

export const Tarjetas = (icon, title, description) => {
  return (
    <>
    
    <div className="feature-card text-center p-5 h-100">
      <div className="icon-wrapper mb-4" style={{ color: iconColor }}>
        {icon}
      </div>
      <h3 className="feature-title mb-3">{title}</h3>
      <p className="feature-text">{description}</p>
    </div>
    
    </>
  )
}

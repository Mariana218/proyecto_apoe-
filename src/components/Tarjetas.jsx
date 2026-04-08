
export const Tarjetas = ({icon, title, description}) => {
  return (
    <>
    
    <div className="feature-card text-center p-1 h-100 rounded-4 d-flex flex-column align-items-center w-25 h-auto" style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)' }}>
      <div className="icon-wrapper mb-4" style={{ color: "iconColor"}}>
        {icon}
      </div>
      <h2 className="feature-title mb-3 text-white fs-5">{title}</h2>
      <p style={{
        color: "#9d8f7b",
        fontSize: "14px"
      }} className="feature-text">{description}</p>
    </div>
    
    </>
  )
}

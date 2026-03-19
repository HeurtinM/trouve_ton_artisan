const NotFound = () =>{
    return(
        <div className="container text-center py-4" style={{ color: "#00497C" }}>
            <h1 className="fw-bold mb-4">Page introuvable</h1>
            <img src="/404img.png" alt="404" className="img-fluid" style={{ maxWidth: "50%" }}  />
        </div>
    )
}

export default NotFound;
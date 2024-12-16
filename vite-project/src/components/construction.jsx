import '@fortawesome/fontawesome-free/css/all.min.css';
const Construction=()=>{
    return(
        <main className="def">
        <div className="job-card">
          <div className="job-card-header">
            <h3>construction</h3>
            <p className="job-location">
  <i className="fas fa-map-marker-alt"></i> San Francisco, CA
  <a
    href="https://www.google.com/maps/place/San+Francisco,+CA"
    target="_blank"
    rel="noopener noreferrer"
    className="map-link"
  >
    <i className="fas fa-map"></i>
  </a>
</p>

          </div>
          <div className="job-card-body">
            <p>
             Looking for 50 men for construction
            </p>
          </div>
          <div className="job-card-footer">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
        
      </main>
      
    )
}
export default Construction;
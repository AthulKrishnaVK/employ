
// const Homie=()=>{
//     return (
//         <main className="abc">
//           <h1>Sectors</h1>
//         <div className="card-container">
//         <section className="card">
//           <div className="four">
//             <h3>Construction</h3>
//            </div>
//         </section>
//         <section className="card">
//           <div className="five">
//             <h4>Transportation</h4>
//           </div>
//         </section>
//         <section className="card">
//           <div className="five">
//             <h4>Transportation</h4>
//    </div>
//         </section>
//          </div>
      
//       <div className="next">
//       <section className="card">
//           <div className="six">
//             <h3>Healthcare</h3>
//            </div>
//         </section>
//         <section className="card">
//           <div className="six">
//             <h3>Education</h3>
//            </div>
//         </section>
//         <section className="card">
//           <div className="six">
//             <h3>Technology</h3>
//            </div>
//         </section>
//  </div>

//       <div className="lasts">
//       <section className="card">
//           <div className="six">
//             <h3>Environment</h3>
//            </div>
//            </section>
        
//         <section className="card">
//           <div className="six">
//             <h3>Hospitality</h3>
//            </div>
//            </section>
        
//         <section className="card">
//           <div className="six">
//             <h3>Finance</h3>
//            </div>
//         </section>
//       </div>
//       <div className="lasts">
//       <section className="card">
//           <div className="six">
//             <h3>Retail</h3>
//            </div>
//            </section>
        
//         <section className="card">
//           <div className="six">
//             <h3>Agriculture</h3>
//            </div>
//            </section>
        
//         <section className="card">
//           <div className="six">
//             <h3>Manufacturing</h3>
//            </div>
//         </section>
//       </div>


      
//       </main>
      
      
        
//     )
    
//     };
//     export default Homie;



const Homie = () => {
  // Handle click events for the buttons
  const handleClick = (sector) => {
    alert(`You clicked on the ${sector} sector!`);
  };

  return (
    <main className="abc">
      <h1>Sectors</h1>
      <div className="card-container">
        <section className="card" onClick={() => handleClick("Construction")}>
          <div className="four">
            <button>Construction</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Transportation")}>
          <div className="five">
            <button>Transportation</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Transportation")}>
          <div className="five">
            <button>Transportation</button>
          </div>
        </section>
      </div>

      <div className="next">
        <section className="card" onClick={() => handleClick("Healthcare")}>
          <div className="six">
            <button>Healthcare</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Education")}>
          <div className="six">
            <button>Education</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Technology")}>
          <div className="six">
            <button>Technology</button>
          </div>
        </section>
      </div>

      <div className="lasts">
        <section className="card" onClick={() => handleClick("Environment")}>
          <div className="six">
            <button>Environment</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Hospitality")}>
          <div className="six">
            <button>Hospitality</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Finance")}>
          <div className="six">
            <button>Finance</button>
          </div>
        </section>
      </div>
      <div className="lasts">
        <section className="card" onClick={() => handleClick("Retail")}>
          <div className="six">
            <button>Retail</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Agriculture")}>
          <div className="six">
            <button>Agriculture</button>
          </div>
        </section>
        <section className="card" onClick={() => handleClick("Manufacturing")}>
          <div className="six">
            <button>Manufacturing</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Homie;

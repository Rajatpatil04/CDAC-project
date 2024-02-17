



export default function Home() {
  return (
    <div>
      <div className="Home" >

        <div className="rent"><h1  id="r1">RENT</h1>
                      <h1 id="r2">AND</h1>
                      <h1 id="r3">RIDE.</h1>
        </div>
       
       
        
        <div className="outercircle">
          <div className="start" ><br></br><b>START <br /> SEARCH<br /></b></div>
        </div>
      </div>
      <br></br><br></br>
      <div style={{ textAlign: "center" }} className="container">
        <h1 style={{ fontFamily: "monospace" }}>BOOK MY CAR</h1>
        <p>The car rental industry has been growing steadily. However,
          there is a gap in providing a unified platform for both car dealers and renters.
          Current methods often involve middlemen, leading to increased costs and lack of transparency.
          There is a large gap in between car dealers and customers want to rent the car.
          There are several reasons such as the renters may be new in the city or customers may never have done any booking
          for car or there is any chance that they don’t have any knowledge about the industry.
          So he can get a clear idea about the cars, fares, etc from our site and accordingly
          select the proper car dealer according to his requirements and budget. </p>
      </div>
      
      <div className=" mid"></div>

      <br />
      <div style={{ textAlign: "center" }} className="container">
        <h4>MEET OUR FLEET : UNREVALED, FULLY EQUIPPED AND LOW MILENGE</h4>
      </div>
      <br /><br />

    

      <div className="container-fuild scroll-container demopics">
        <div className="row">
          <div className="col-sm-3 carhome car1"></div>
          <div className="col-sm-3 carhome car2"></div>
          <div className="col-sm-3 carhome car3" ></div>
        </div><br/><br/> 
      
       </div>
      <footer className="footer">
          <div>

          
          </div>
      </footer>
    </div>
  )
}

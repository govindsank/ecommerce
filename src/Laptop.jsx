// function Laptop(){
//     return (
//         <div className="container" ><h2>hello</h2></div>
//     );
// }

import "./mobile.css"

function Laptop(){
    return (
  <div className="container-fluid "><div className="container intro">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
         <div class="carousel-inner" >
            <div class="carousel-item active" >
              <img src="/image/iphone.jpg" class="d-block w-100" alt="..."style={{width:'100vw',height:'50vh'}}/>
                  <div class="carousel-caption d-none d-md-block">
                     <h5>First slide label</h5>
                     <p>Some representative placeholder content for the first slide.</p>
                   </div>
              </div>
           <div class="carousel-item">
              <img src="/image/Best-Camera.jpg" class="d-block w-100" alt="..." style={{width:'100vw',height:'50vh'}}/>
                <div class="carousel-caption d-none d-md-block">
                   <h5>Second slide label</h5>
                   <p>Some representative placeholder content for the second slide.</p>
                  </div>
              </div>
            <div class="carousel-item">
                <img src="/image/vivo_t2_pro_banner.jpeg" class="d-block w-100" alt="..."style={{width:'100vw',height:'50vh'}}/>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
          </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
       <span class="carousel-control-next-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Next</span>
     </button>
     </div>
</div>
<div className="row intro">
 <div className="col-3 box iphone"> <a href="/"><h1>Apple</h1></a></div>
  <div className="col-3 box"><a href="/"><h1>Acer</h1></a></div>
  <div className="col-3 box"><a href="/"><h1>Lenovo</h1></a></div>
  <div className="col-3 box"><a href="/"><h1>HP</h1></a></div>
<div className="row">
  <div className="col-3 box boximage">
    <div className="row"><img src="./image/Laptop/lenovo.avif"className=" samsung"/></div>
   <div className="row"> <center><h2>Lenovo Legion 5</h2></center></div>
   <div className="row"> <center><h3>Rs.1,30,990</h3></center></div>
  </div>
  <div className="col-3 box boximage">
    <div className="row"><img src="./image/mobile/vivo.webp"className=" samsung"/></div>
   <div className="row"> <center><h2>Vivo X90 Pro</h2></center></div>
   <div className="row"> <center><h3>Rs.69,850</h3></center></div>
  </div>
  <div className="col-3 box boximage">
    <div className="row"><img src="./image/mobile/Samsung-Galaxy-S24-Ultra.jpg"className=" samsung" /></div>
   <div className="row"> <center><h2>Galaxy S24 Ultra</h2></center></div>
   <div className="row"> <center><h3>Rs.1,24,980</h3></center></div>
  </div>
  <div className="col-3 box boximage">
    <div className="row"><img src="./image/mobile/Realme-gt-pro.jpg"className=" samsung" /></div>
   <div className="row"> <center><h2>Realme GT Pro</h2></center></div>
   <div className="row"> <center><h3>Rs.31,500</h3></center></div>
  </div>
</div>

<footer className="footer "><center>Thank You</center></footer>


  
</div>
</div>
    );
}
export default Laptop;
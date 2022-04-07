import html from "html-literal";

export default st =>
  html`
    <section id="jumbotron">
      <h2>Click Below To Book An Appointment</h2>
      <a href="./Schedule">Book Now</a>
    </section>
    <center><h2>Services</h2></center>
  
<div class="accordion">
  <div>
    <input type="checkbox" name="example_accordion" id="section1" class="accordion__input">
    <label for="section1" class="accordion__label">Signature Haircut</label>
    <div class="accordion__content">
      <p>In A Snip Barbers Signature Haircut $80</p>
      <p>
      In A Snip Barbers signature haircut presented in the location of your choosing, featuring scissors 
      & clippers paired with a straight razor shave around your exterior edges. Service includes 100% green/organic 
      products. 
      </p>
    </div>
  </div>
  <div>
    <input type="checkbox" name="example_accordion" id="section2" class="accordion__input">
    <label for="section2" class="accordion__label">Beard Trim</label>
    <div class="accordion__content">
      <p>Beard Trim $45</p>
      <p>
      Leave your beard sculpting to the professionals. In A Snip Barbers will analyze your beard growth, face 
      shape and hair texture to create a flawless looking beard. We will use a combination of clippers and scissors 
      along with beard oil, beard balm and witch hazel to achieve your beard goals in the comfort of your home. 
      </p>
    </div>
  </div>
  <div>
    <input type="checkbox" name="example_accordion" id="section3" class="accordion__input">
    <label for="section3" class="accordion__label">Safety Razor Shave</label>
    <div class="accordion__content">
      <p>Safety Razor Shave $45</p>
      <p>
      A service designed to offer a quick and efficient shave using a safety razor & electric shaver to get your face 
      looking "BBS" (Baby Bottom Smooth). (Best for Seniors)
      </p>
    </div>
  </div>
  <div>
    <input type="checkbox" name="example_accordion" id="section4" class="accordion__input">
    <label for="section4" class="accordion__label">In A Snip Barbers MANicure & Pedicure</label>
    <div class="accordion__content">
      <p>Doorbell Barbers MANicure & Pedicure $180</p>
      <p>
      Hands say a lot about a man. With a polish free buff, clip, and file our MANicure & Pedicure 
      adds the finishing touch to a well groomed man.  (90 minutes)
      </p>
    </div>
  </div>
</div>
  `;

//Using this as an example when for my API
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Click Below To Book An Appointment</h2>
    <a href="./Schedule">Book Now</a>
  </section>
  <center><h2>How In A Snip Works</h2></center>
<div class="row">
  <div class="column">
    <div class="column-header">
      <center><h3>Book</h3></center>
      <a href="/schedule"><img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Book an appointment" width="90%"></a>
     <div class="colum-content"> 
       <p>Select the time and date you'd like your barber to arrive.</p>
     </div>
   </div>
</div>
  <div class="column">
  <div class="column-header">
      <center><h3>Groom</h3></center>
      <a href="/stylists"><img src="https://cdn-icons-png.flaticon.com/512/1057/1057470.png" alt="Grooming Tools" width="90%"></a>
    <div class="colum-content"> 
       <p>A licensed barber travels to your location and cuts your hair.</p>
       </div>
     </div>
</div>
  <div class="column">
  <div class="column-header">
      <center><h3>Relax</h3></center>
    <a href="/services"><img src="https://cdn-icons-png.flaticon.com/512/2798/2798223.png" alt="Relaxing Getting A Hair Cut" width="90%"></a>
    <div class="colum-content"> 
       <p>Sit back and relax! Professional service in your home, on your time.</p>
      </div>
    </div>
   </div> 
</div>
        <br /><br />
      </div>
    </content>
  </section>
  <br /><br /><br /><br /><br /><br />
  <!-- Using this as an example when for my API -->
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;

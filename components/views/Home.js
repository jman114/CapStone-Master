//Using this as an example when for my API
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Click Below To Book An Appointment</h2>
    <a href="./Book">Book Now</a>
  </section>
  <center><h2>How In A Snip Works</h2></center>
<div class="row">
  <div class="column">
    <div class="column-header">
      <center><h3>Book</h3></center>
    <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" alt="Book an appointment" style="width:90% height:80%">
     <div class="colum-content"> 
       <p>Select the time and date you'd like your barber to arrive.</p>
     </div>
   </div>
</div>
  <div class="column">
  <div class="column-header">
      <center><h3>Groom</h3></center>
    <img src="https://cdn-icons-png.flaticon.com/512/1057/1057470.png" alt="Grooming Tools" style="width:90% height:80%">
    <div class="colum-content"> 
       <p>A licensed barber travels to your location and cuts your hair.</p>
       </div>
     </div>
</div>
  <div class="column">
  <div class="column-header">
      <center><h3>Relax</h3></center>
    <img src="https://cdn-icons.flaticon.com/png/512/3671/premium/3671163.png?token=exp=1648059788~hmac=da7162af52d6616027423690eac425f6" alt="Relaxing Getting A Hair Cut" style="width:90% height:80%">
    <div class="colum-content"> 
       <p>Sit back and relax! Professional service in your home, on your time.</p>
      </div>
    </div>
   </div> 
</div>
  <!-- <section id="home">
    <content class="responsive flex">
      <div class="main-content">
        <br />
        <br />
        <div class="row">
          <div class="column">
            <h2>Why Choose Us</h2>
            <ul id="first-list">
              <li>Music</li>
              <li>Basketball</li>
              <li>Learning New Things</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div class="column">
            <h2>What We Do</h2>
            <ol class="my-second-list">
              <li>Being Wrong</li>
              <li>Not Being Able To Figure Something Out</li>
              <li>Unfinished</li>
            </ol>
          </div>
          <div class="column">
            <h2>Book With Us</h2>
            <ol class="my-second-list">
              <li>Being Wrong</li>
              <li>Not Being Able To Figure Something Out</li>
              <li>Unfinished</li>
            </ol>
          </div>
        </div>
        <p>
          This is going to contain more information than you ever cared to know.
        </p>
        <div class="row">
          <div class="column" style="background-color:#aaa;">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div class="column" style="background-color:#bbb;">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          <div class="column" style="background-color:#ccc;">
            <h2>Column 3</h2>
            <p>Some text..</p>
          </div>
        </div> -->
        <br /><br />
      </div>
    </content>
  </section>
  <!-- Using this as an example when for my API -->
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;

//Using this as an example when for my API
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Click Below To Book An Appointment</h2>
    <a href="./Book">Book Now</a>
  </section>
  <section id="home">
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
        </div>
        <p>
          You can see my
          <a
            href="https://matchboxdesigngroup.com/team-member/james-mcminn-senior-digital-strategist/"
            >profile</a
          >
          at
          <a href="https://matchboxdesigngroup.com">Matchbox Design Group</a>.
        </p>
        <img
          src="https://matchboxdesigngroup.com/app/uploads/2021/06/James-McMinn-personality-pic-3.jpg"
          alt="Image"
        /><br /><br />
      </div>
    </content>
  </section>
  <!-- Using this as an example when for my API -->
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;

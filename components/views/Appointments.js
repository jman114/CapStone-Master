import html from "html-literal";

export default () => html`
  <section id="jumbotron">
    <h2>Click Below To Book An Appointment</h2>
    <a href="./Schedule">Book Now</a>
  </section>
  <div class="calendar-container"></div>
  <div id="calendar"></div>
`;

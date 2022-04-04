import html from "html-literal";

export default () => html`
<section id="jumbotron">
<h2>Click Below To Book An Appointment</h2>
    <a href="./Schedule">Book Now</a>
  </section>
  <section id="schedule">
    <form id="schedule-form" method="POST" action="">
      <h2>Create An Appointment</h2>
      <div>
        <input type="text" name="customer" id="customer" placeholder="Name" />
      </div>
      <div>
        Date And Time Of Appointment<br>
        <input id="start" name="start" type="datetime-local" />
      </div>
      <div>
        <input id="end" name="end" type="datetime-local">
      </div>
      <input type="submit" name="submit" value="Schedule" />
    </form>
  </section>
`;
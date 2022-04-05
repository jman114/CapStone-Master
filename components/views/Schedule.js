import html from "html-literal";

export default () => html`
<section id="jumbotron">
<h2>Click Below To Book An Appointment</h2>
    <a href="./Schedule">Book Now</a>
  </section>
  <h2>Create An Appointment</h2>
  <section id="schedule">
    <form id="schedule-form" method="POST" action="">
      <div>
        <input type="text" name="customer" id="customer" placeholder=" Full Name" />
      </div>
      <div>
      Phone Number: <br>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="555-555-5555">
    <small>Format: 123-456-7890</small>
      </div>
      <div>
        Date And Start Time<br>
        <input id="start" name="start" type="datetime-local" />
      </div>
      <div>
        Date And End Time<br>
        <input id="end" name="end" type="datetime-local">
      </div>
      <input type="submit" name="submit" value="submit" />
    </form>
  
  </section>
`;
import html from "html-literal";

export default () => html`
<section id="jumbotron">
  <h2>Click Below To Book An Appointment</h2>
    <a href="./Schedule">Book Now</a>
  </section>
<h2>Click Below To Contact Us</h2>
<br>
<form id="formcontainer" action="https://formspree.io/f/xayvovwr" method="POST">
<div class="textName">
<label>
Name:<br>
    <input type="text" name="customer" id="customer" placeholder="Name">
  </label>
  </div>
  <label>
Email: <br>
    <input type="email" name="email" placeholder="Email">
  </label>
  <label>
Phone Number: <br>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="555-555-5555">
    <small>Format: 123-456-7890</small>
</label>
<!-- <label>
Your message:<br>
    <textarea type="text" name="Message" placeholder="Air Your Grievances"></textarea>
  </label><br> -->
  <input type="submit" name="submit" value="submit"></input>
</form>
`;
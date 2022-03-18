import html from "html-literal";

export default () => html`
<section id="jumbotron">
<h2>Click Below To Book An Appointment</h2>
    <a href="./Book">Book Now</a>
  </section>
<section id="book">
 <div class="main-content">
<br>
<br>
<h2>This Is My Future Contact Us Page</h2>
 <div class="formcontainer">
<form action="https://formspree.io/f/meqnkoed" method="POST">
  <label for="name">Name:</label>
  <input
    type="text" name="name" id="name" placeholder="Full Name" required/><br><br>
  <label for="email">Email:</label>
  <input type="email" name="email" id="email" placeholder="you@somewhere.com"/><br><br>
  <label for="fone">Phone:</label>
  <input type="tel" name="fone" id="fone"placeholder="555-555-5555"/><br><br>
  <div>
    <label for="msg">Enter your message:</label><br><br>
    <textarea name="msg" id="msg" rows="10"></textarea><br><br>
    <button type="submit">Send</button>
  </div>
</form>
</div>

<P>This is where my contact form is going to go when I learn how to insert one.</P>

</div>
</main>
</section>`;

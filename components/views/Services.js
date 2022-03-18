fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "3fd25e5b47mshe37d9ddea1b4a88p1bb5fbjsnbe96a527108f"
  }
})
  .then(response => response.json())
  .then(response => {
    console.log(response);

    document.getElementById("quote").innerHTML = response.content;
    document.getElementById("author").innerHTML =
      "- " + response.originator.name + " -";
  })
  .catch(err => {
    console.log(err);
  });

import html from "html-literal";

export default st =>
  html`
    <section id="jumbotron">
      <h2>Click Below To Book An Appointment</h2>
      <a href="./Book">Book Now</a>
    </section>
    <h2>This Is A Random Quote Generator Using An API Call - Just Refresh</h2>
    <div class="quoteContainer">
      <div id="quote"></div>
      <div id="author"></div>
    </div>
    <!-- <table id="services">
      <tr>
        <th>Men's Hair Cut</th>
        <th>Women's Hair Cut</th>
        <th>Men's Shave</th>
        <th>Coloring</th>
      </tr> -->
    <!-- Using as an example for when I implement my API ${st.services
      .map(services => {
        return `<tr><td>${services.crust}</td><td>${services.cheese}</td><td>${
          services.sauce
        }</td><td>${services.toppings.join(" & ")}</td><td>${
          services.customer
        }</td></tr>`;
      })
      .join("")} -->
    <!-- </table> -->
  `;

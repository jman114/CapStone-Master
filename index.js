import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    <!-- TODO: work on adding jumbotron here -->
    ${Main(st)}
    ${Footer()}
  `;
  
  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
  document
    .querySelector(".fa-ellipsis-h")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );


    if (st.view === "Schedule") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
  
        const inputList = event.target.elements;
  
        const requestData = {
          customer: inputList.customer.value,
          start: new Date(inputList.start.value).toJSON(),
           end: new Date(inputList.end.value).toJSON(),
        };
  
        axios
          .post(`${process.env.API_URL}/appointments`, requestData)
          .then(response => {

            state.Appointments.appointments.push(response.data);
            router.navigate("/appointments");
          })
          .catch(error => {
            console.log("It puked", error);
          });
      });
    }
  
    if (st.view === "Appointments") {
      var calendarEl = document.getElementById('calendar');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText: {
          today:    'Today',
          month:    'Month',
          week:     'Week',
          day:      'Day',
          list:     'List'
        },
        // height: '100%',
        dayMaxEventRows: true,
        eventClick: function(info) {
          console.log('Event: ', info.event);
        },
        events: st.appointments || []
      });
      calendar.render();
    }
}

//Add Router Hooks
router.hooks({
  before: (done, params) => {
    let page = "Home";
    let id = "";
    if (params && params.data) {
      page = params.data.page ? capitalize(params.data.page) : "Home";
      id = params.data.id ? params.data.id : "";
    }

    console.log('this-printed-page:', page);
    console.log('fancy-id:', id);

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=st.%20louis&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
        )
        .then((response) => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch((err) => console.log(err));
    } else if (page === "Appointments") {
      axios
        .get(`${process.env.API_URL}/appointments`)
        .then((response) => {
          const events = response.data.map(event => {
            return {
              id: event._id,
              title: event.customer,
              start: new Date(event.start),
              end: new Date(event.end),
              url: `/appointment/${event._id}`
            };
          });
          state.Appointments.appointments = events;
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
        });
    } else if (page === "Appointment") {
      axios
      .get(`${process.env.API_URL}/appointments/${id}`)
      .then((response) => {
        state.Appointment.event = {
          id: response.data._id,
          title: response.data.customer,
          start: new Date(response.data.start),
          end: new Date(response.data.end),
          url: `/appointment/${response.data._id}`
        };
        console.log('james.state.Appointment.appointment:', state.Appointment.appointment);
        done();
      })
      .catch((error) => {
        console.log("It puked", error);
        done();
      });
    } else {
      done();
    }
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      console.log(":page route was hit");
      let page = capitalize(params.data.page);
      render(state[page]);
    },
    ":page/:id": (params) => {
      console.log(":page/:id route was hit");
      let page = capitalize(params.data.page);
      render(state[page]);
    }
  })
  .resolve();
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

// dotenv.config();

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  
  router.updatePageLinks();

  addEventListeners(st);
}

function addEventListeners(st) {
 // add event listeners to Nav items for navigation
  // document.querySelectorAll("nav a").forEach(navLink =>
  //   navLink.addEventListener("click", event => {
  //     event.preventDefault();
  //     render(state[event.target.title]);
  //   })
  // );
  // add menu toggle to bars icon in nav bar
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
        events: st.appointments || []
      });
      calendar.render();
    }
  }

    //Adding Calendar Feature 
//     document.addEventListener('DOMContentLoaded', function() {
//       var calendarEl = document.getElementById('calendar');
//       var calendar = new FullCalendar.Calendar(calendarEl, {
//         initialView: 'dayGridMonth',
//         headerToolbar: {
//           left: 'prev,next today',
//           center: 'title',
//           right: 'dayGridMonth,timeGridWeek,timeGridDay'
//         },
//         googleCalendarApiKey: 'AIzaSyB_RFlArNdC-ieQmHbPzvRH03ZQalORGew',

//         // US Holidays
//         events: 'o16j2bvc1vngvsjk01eu13hf50@group.calendar.google.com',
  
//         eventClick: function(arg) {
  
//           // opens events in a popup window
//           window.open(arg.event.url, '_blank', 'width=700,height=600');
  
//           // prevents current tab from navigating
//           arg.jsEvent.preventDefault();
//       }
//     });

//       calendar.render();
//     }); 
// }

//Add Router Hooks
router.hooks({
  before: (done, params) => {
    const page = params && params.data && params.data.page ? capitalize(params.data.page) : "Home";

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
              end: new Date(event.end)
            };
          });
          state.Appointments.appointments = events;
          console.log('something-state.Appointments.appointments:', state.Appointments.appointments);
          done();
        })
        .catch((error) => {
          console.log("It puked", error);
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
      let page = capitalize(params.data.page);
      render(state[page]);
    }
  })
  .resolve();
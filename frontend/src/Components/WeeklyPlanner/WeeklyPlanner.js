/* eslint-disable default-case */
import React from "react";
import Navigator from "../navigation/Navigator";
import { Link } from "react-router-dom";
import yellowdot from "../../images/yellowdot.png";
import bluedot from "../../images/bluedot.png";
import greendot from "../../images/greendot.png";
import purpledot from "../../images/purpledot.png";
import orangedot from "../../images/orangedot.png";
import pinkdot from "../../images/pinkdot.png";
import reddot from "../../images/reddot.png";
import "./weeklyplanner.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "reactstrap";

export default function WeeklyPlanner(props) {
  console.log("Meal: " + JSON.stringify(props.mealselection));

  function submitMealPlan(){

  }

  const displayMondayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Monday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    }
  });
  const displayMondayLunch = props.mealselection.map((item) => {
    if (item.day === "Monday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayMondayDinner = props.mealselection.map((item) => {
    if (item.day === "Monday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    }
  });
  const displayTuesdayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Tuesday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    }
  });
  const displayTuesdayLunch = props.mealselection.map((item) => {
    if (item.day === "Tuesday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    }
  });
  const displayTuesdayDinner = props.mealselection.map((item) => {
    if (item.day === "Tuesday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    }
  });
  const displayWednesdayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Wednesday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayWednesdayLunch = props.mealselection.map((item) => {
    if (item.day === "Wednesday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayWednesdayDinner = props.mealselection.map((item) => {
    if (item.day === "Wednesday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displayThursdayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Thursday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayThursdayLunch = props.mealselection.map((item) => {
    if (item.day === "Thursday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayThursdayDinner = props.mealselection.map((item) => {
    if (item.day === "Thursday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displayFridayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Friday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayFridayLunch = props.mealselection.map((item) => {
    if (item.day === "Friday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displayFridayDinner = props.mealselection.map((item) => {
    if (item.day === "Friday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Saturday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayLunch = props.mealselection.map((item) => {
    if (item.day === "Saturday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySaturdayDinner = props.mealselection.map((item) => {
    if (item.day === "Saturday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displaySundayBreakfast = props.mealselection.map((item) => {
    if (item.day === "Sunday" && item.mealtime === "breakfast") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySundayLunch = props.mealselection.map((item) => {
    if (item.day === "Sunday" && item.mealtime === "lunch") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });
  const displaySundayDinner = props.mealselection.map((item) => {
    if (item.day === "Sunday" && item.mealtime === "dinner") {
      return <>{item.recipename}</>;
    } else {
      return <></>;
    }
  });

  const displayMeal = props.mealselection.map((item) => {
    switch (item) {
      case item.day === "Monday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Monday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Monday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Tuesday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Tuesday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Tuesday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Wednesday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Wednesday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Wednesday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Thursday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Thursday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Thursday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Friday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Friday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Friday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Saturday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Saturday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Saturday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;

      case item.day === "Sunday" && item.mealtime === "breakfast":
        return <>{item.recipename}</>;
      case item.day === "Sunday" && item.mealtime === "lunch":
        return <>{item.recipename}</>;
      case item.day === "Sunday" && item.mealtime === "dinner":
        return <>{item.recipename}</>;
      default:
        return "Test";
    }
  });

  return (
    <div>
      <Navigator />
      <div>
        <h3 id="weeklyplanner"> Weekly Planner</h3>
      </div>
      <div className="weeklyplanner-container">
        <Accordion defaultActiveKey="1">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="monday"
            >
              <img src={yellowdot} alt="large yellow dot" />
              &nbsp; &nbsp; Monday
            </Accordion.Header>
            <Accordion.Body accordionid="monday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    //testing day component
                    pathname: "/day",
                    state: { day: "Monday", meal: "breakfast" },
                  }}
                >
                  Breakfast: {displayMondayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "lunch" },
                  }}
                >
                  Lunch: {displayMondayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "dinner" },
                  }}
                >
                  Dinner: {displayMondayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="2">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="tuesday"
            >
              <img src={orangedot} alt="large orange dot" />
              &nbsp; &nbsp; Tuesday
            </Accordion.Header>
            <Accordion.Body accordionid="tuesday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "breakfast" },
                  }}
                >
                  Breakfast :{displayTuesdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "lunch" },
                  }}
                >
                  Lunch : {displayTuesdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "dinner" },
                  }}
                >
                  Dinner : {displayTuesdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="3">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="wednesday"
            >
              <img src={greendot} alt="large green dot" />
              &nbsp; &nbsp; Wednesday
            </Accordion.Header>
            <Accordion.Body accordionid="wednesday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {displayWednesdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "lunch" },
                  }}
                >
                  Lunch : {displayWednesdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "dinner" },
                  }}
                >
                  Dinner : {displayWednesdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="4">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="thursday"
            >
              <img src={bluedot} alt="large blue dot" />
              &nbsp; &nbsp; Thursday
            </Accordion.Header>
            <Accordion.Body accordionid="thursday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {displayThursdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "lunch" },
                  }}
                >
                  Lunch : {displayThursdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "dinner" },
                  }}
                >
                  Dinner : {displayThursdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="5">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="friday"
            >
              <img src={purpledot} alt="large purple dot" />
              &nbsp; &nbsp; Friday
            </Accordion.Header>
            <Accordion.Body accordionid="friday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {displayFridayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "lunch" },
                  }}
                >
                  Lunch : {displayFridayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Friday", meal: "dinner" },
                  }}
                >
                  Dinner : {displayFridayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="6">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="saturday"
            >
              <img src={pinkdot} alt="large pink dot" />
              &nbsp; &nbsp; Saturday
            </Accordion.Header>
            <Accordion.Body accordionid="saturday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {displaySaturdayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "lunch" },
                  }}
                >
                  Lunch : {displaySaturdayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Saturday", meal: "dinner" },
                  }}
                >
                  Dinner : {displaySaturdayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion defaultActiveKey="7">
          <Accordion.Item>
            <Accordion.Header
              style={{ backgroundColor: "#343a41" }}
              targetid="sunday"
            >
              <img src={reddot} alt="large red dot" />
              &nbsp; &nbsp; Sunday
            </Accordion.Header>
            <Accordion.Body accordionid="sunday">
              <ul className="weeklyplanner-accordion-links">
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {displaySundayBreakfast}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "lunch" },
                  }}
                >
                  Lunch : {displaySundayLunch}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Sunday", meal: "dinner" },
                  }}
                >
                  Dinner : {displaySundayDinner}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Button onClick={() => submitMealPlan()}>Submit Purchases</Button>
      {/* <div className="calender">
        <h1 className="header">Meal Plan Calendar</h1>
        <div className="calendar-container">
          <Calendar
            onChange={setDate}
            value={date}
            defaultValue={date}
            minDate={new Date()}
          />
        </div>
        <div className="text-center">Selected date: {date.toDateString()}</div>
      </div> */}
    </div>
  );
}

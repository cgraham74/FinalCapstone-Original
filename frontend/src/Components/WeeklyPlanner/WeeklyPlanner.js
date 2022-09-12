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

export default function WeeklyPlanner(props) {
  console.log("Meal: " + JSON.stringify(props.mealselection));
  // const displayMondayBreakfast = props.mealselection.map((item) => {
  //   if(item.day === "Monday" && item.mealtime === "breakfast") {
  //       return (<>{item.recipename}</>);
  //   }
  // });
    

  return (
    <div  >
      <Navigator/>
      <div >
        <h3 id="weeklyplanner"> Weekly Planner</h3>
        </div>
      <div className="weeklyplanner-container" >
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    //testing day component
                    pathname: "/day",
                    state: { day: "Monday", meal: "breakfast"}  
                  }}
                >
                  Breakfast: {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "lunch" },
                  }}
                >
                  Lunch: {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Monday", meal: "dinner" },
                  }}
                >
                  Dinner: {props.mealselection.recipename}
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "breakfast" },
                  }}
                >
                  Breakfast :{props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Tuesday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Wednesday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "Thursday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "friday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "friday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "friday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
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
              <img src={pinkdot} alt="large pink dot"  />
              &nbsp; &nbsp; Saturday
            </Accordion.Header>
            <Accordion.Body accordionid="saturday">
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "saturday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "saturday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "saturday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
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
              <ul className='weeklyplanner-accordion-links'>
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "sunday", meal: "breakfast" },
                  }}
                >
                  Breakfast : {props.mealselection.recipename}
                </Link>
                <br />

                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "sunday", meal: "lunch" },
                  }}
                >
                  Lunch : {props.mealselection.recipename}
                </Link>
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/day",
                    state: { day: "sunday", meal: "dinner" },
                  }}
                >
                  Dinner : {props.mealselection.recipename}
                </Link>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
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

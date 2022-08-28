import React from "react";
import SiteNav from "../SiteNav";
import AboutNav from "./AboutNav";

export default function AboutSite() {
  return (
    <div>
      <div>
        <SiteNav />
        <AboutNav />
      </div>
      <h2>About the Site</h2>
      <div className="scrollable">
        <p>
          Santi's Countries is a Web App made to show information about all
          countries in the world, most of its information being taken from the
          RESTful API{" "}
          <a
            href="https://restcountries.com/"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            restcountries.com
          </a>
          , and to create tourist activities which can be bound to set
          countries.
        </p>

        <p>
          This site was created as an Individual Project for{" "}
          <a
            href="https://www.soyhenry.com/"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            SoyHenry
          </a>
          's Full-Stack Web Development bootcamp, and as such, it was made
          following the set of directives listed below:
        </p>

        <h4>General Precepts</h4>
        <ul>
          <li>
            Current versions for all technologies used in the project could be
            updated at the risk of creating compatibility issues.
          </li>
          <li>
            No additional requests could be made to the RESTful API after
            fetching all the required countries' information.
          </li>
          <li>
            No external libraries could be used for styling (such as Bootstrap).
            Pure CSS, CSS Modules and/or Styled Components had to be used
            instead.
          </li>
        </ul>

        <h4>Data Base (PostegreSQL, Sequelize)</h4>
        <ul>
          <li>
            Table Model for all countries, with a record for each one containing
            at leas its ID, Name, Flag, Continent and Capital.
          </li>
          <li>
            Table Model for all activities, with a record for each one
            containing its ID, Name, Difficulty, Duration and Season.
          </li>
          <li>
            Relations Table between "Countries" and "Activities" Models with a
            "many-to-many" cardinality.
          </li>
        </ul>

        <h4>Back-End (NodeJs, Express)</h4>
        <ul>
          <p>Required routes:</p>
          <li>
            GET request to fetch all countries' information from the RESTful API
            and save said information in the Data Base.
          </li>
          <li>
            GET request to obtain detailed information about a single country
            (already in Data Base).
          </li>
          <li>
            GET request to search countries by name through "lazy matching" (not
            exact name must be typed to show results).
          </li>
          <li>
            POST request to create new Tourist Activities and save them in the
            Data Base.
          </li>
        </ul>

        <h4>Front-End (React, Redux)</h4>
        <ul>
          <p>Required routes & UI components:</p>
          <li>
            Landing page introducing the site with a button to access the main
            component.
          </li>
          <li>
            Main component able to render all countries (10 per page), with the
            option to order all results alphabetically or by population, filter
            all results by their continents and/or created activities, and a
            search bar to look up for individual countries.
          </li>
          <li>
            Country details component containing at least, all the following
            information about each country: ID, Name, Flag, Capital, Subregion,
            Area, Population and associated Tourist Activities.
          </li>
          <li>
            Activity creation form, fully controlled by React and with
            JavaScript-validated inputs, to create activities with at leas, all
            the following information: Name, Difficulty, Duration, Season and
            Countries (one or more).
          </li>
        </ul>

        <div>
          <h3>Technologies applied in the site</h3>
          <div></div>
        </div>

        <div>
          Visit the{" "}
          <a
            href="https://github.com/Santi-Ostrovsky/PI-Countries"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
          >
            GitHub Repository
          </a>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

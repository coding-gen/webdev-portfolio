$(document).ready(function () {
  const projects = {
    'prjs': [
      {
        name: "Data Engineering Pipeline",
        image: "pics/projects/pipeline.jpeg",
        alt: "A funny picture of mario style pipelines.",
        description: "I created a data pipeline to take bus transit location data from a web server, produce messages to a kafka cluster, consume then into postgres, and visualize the results of analytical queries. This project also included data cleaning, validation, and transformation at specific points in the pipeline, as well as logging for any discarded data to allow confirmation of pipeline behavior. Once the data was actionable, this allowed us to answer questions that the transit agency (CTran in Vancouver Washington) had about the effectiveness of recent projects to improve bus timeliness. This project was coded in python with some simple shell scripts, operated on kafka and postgres, and was built on top of a linux server in GCP.",
        link: "https://github.com/coding-gen/dataeng/tree/main/project"
      },
      {
        name: "Cloud and Cluster Database Management Spark",
        image: "pics/projects/spark.png",
        alt: "The spark logo.",
        description: "This project implemented Portland highway transit data in Spark. We focussed on loading and cleaning the data in Spark itself, and then running analytical queries on it that answered questions about drive time, speed, and path. We also experimented with Spark specific performance features, such as partition count and when to persist data.",
        link: "https://github.com/coding-gen/cs588/tree/main/spark/project"
      },
      {
        name: "Database Management: Benchmarking SingleStore Keys and Indexes",
        image: "pics/projects/index.jpg",
        alt: "A visual representation of a hash index as used in a SQL database.",
        description: "In this project I compared the effectiveness of different types of keys and indexes in a moder SQL database: SingleStore. I used sample sales data, and tested the performance of different types of join queries, given different types of keys, indexes, and horizontal and vertical table sharding strategies. This work was performed entirely in a SingleStore database, which is compatible with MySQL commands and runs on a linux server.",
        link: "https://github.com/coding-gen/cs588/tree/main/spark/project"
      },
      {
        name: "TriMet Bus Arrivals at PSU",
        image: "pics/projects/trimet.JPG",
        alt: "A picture of a TriMet bus.",
        description: "As a fun add-on, I included this page which queries the TriMet API for the arrivals of commonly used stops on the Portland State University campus.",
        link: "trimet.html"
        // link: "https://github.com/coding-gen/webdev-portfolio/blob/main/projects.html"
      }
    ]
  }

  const addProjectToDOM = (prj) => {
    $('#results')
      .append($('<div>')
        .css({
          margin: '10px',
          width: '400px',
        })
        .addClass('figure')
        .append($('<img>')
          .attr('src', prj.image)
          .attr('alt', prj.alt)
          .attr('height', '185px')
        )
        .append($('<a/>')
          .attr('href', prj.link)
          .css({
            color: 'inherit',
            textDecoration: 'inherit'
          })
          .append($('<h3>')
            .text(prj.name)
            .addClass('headerLink')
            .css({
              padding: '10px 20px',
              textAlign: 'center',
              width: '384px',
            })
          )
        )
        .append($('<p/>')
          .text(prj.description)
          .css({
            padding: '0 25px',
            textAlign: 'left'
          })
        )
      )
  };

  const fetchData = () => {
    $('#results')
      .css({
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
        justifyContent: 'center',
      })
    projects.prjs.forEach((item) => {
      addProjectToDOM(item);
    })
    $('#loading').remove();
  };
  fetchData();
});

$(document).ready(function () {
  const employment = {
    'jobs': [
      {
        title: "Data Engineering Teaching Assistant",
        employer: "Portland State University",
        image: "pics/jobs/psuSimple.png",
        alt: "The PSU sign in the park blocks",
        description: "After achieving first place awards in several categories when I took the Data Engineering course, I was invited back to TA it the following year. I assist in course instruction in an inverted classroom. This means students watch recorded lectures at home, then work on coding assignments in class where the professor and I can assist them. I create new curriculum content and update current content. I also manage the final project, including setting up and hosting the course web server.",
        date: "Mar 2022 - June 2022",
        location: "In-person and remote in Portland, OR",
        link: "https://www.pdx.edu/"
      },
      {
        title: "Performance Benchmarking Engineer",
        employer: "SingleStore",
        image: "pics/jobs/singlestore.jpg",
        alt: "The SingleStore Logo.",
        description: "During my half a decade at SingleStore, I gained a deep understanding of distributed SQL databases and how to improve their performance, from linux configuration to query plan optimization. In my most recent role I ran regression tests, created new tests, and maintained our automated testing suite. I also acted as subject matter expert in database schema design and query optimization for Sales Engineering, Training, Documentation, and Support departments. I won awards for building and delivering trainings (2022), and for demonstrating remarkable growth and learning (2021).",
        date: "Sept 2017 - Mar 2022",
        location: "Remote in Portland, OR.",
        link: "https://www.singlestore.com/"
      },
      {
        title: "Technical Support Engineer Level II",
        employer: "New Relic",
        image: "pics/jobs/newRelicNew.jpg",
        alt: "The New Relic logo.",
        description: "My time at New Relic taught me about resource usage and performance monitoring in the areas of Linux servers and web applications. I supported performance monitoring tools on Linux servers and integrations, as well as web applications in PHP and Golang. I created a regex training only 2 months after hire, which became required in onboarding. I won the MVP Sales Award for ensuring timely customer success (2016), and coordinated the Technical Book Club.",
        date: "Mar 2016 - Sept 2017",
        location: "Portland, OR",
        link: "https://newrelic.com/"
      },
      {
        title: "Content Relationship Management Specialist",
        employer: "InFocus",
        image: "pics/jobs/infocus.png",
        alt: "The InFocus Logo.",
        description: "Manage the Sugar Customer Relationship Management System, including assisting in schema adjustments to the database. Assisted Sales department in use of the Sugar CRM. Set up marketing automation tool Act-On for the marketing department. Created a resource manual to document the systems. General IT support as needed.",
        date: "Nov 2014 - Mar 2016",
        location: "Portland, OR",
        link: "https://infocus.com/"
      }
    ]
  }

  const addProjectToDOM = (job) => {
    $('#results')
      .append($('<div>')
        .css({
          margin: '10px',
          width: '400px',
        })
        .addClass('figure')
        .append($('<img>')
          .attr('src', job.image)
          .attr('alt', job.alt)
          .attr('width', '285px')
        )
        .append($('<a/>')
          .attr('href', job.link)
          .css({
            color: 'inherit',
            textDecoration: 'inherit'
          })
          .append($('<h3>')
            .text(job.title)
            .addClass('headerLink')
            .css({
              padding: '10px 20px',
              textAlign: 'center',
              width: '384px',
            })
          )
        ).append($('<p/>')
          .text(job.studies)
          .css({
            padding: '0px 0px 0px 25px',
            textAlign: 'left'
          })
        )
        .append($('<p/>')
          .text(job.date)
          .css({
            padding: '0px 25px',
            textAlign: 'left'
          })
        )
        .append($('<p/>')
          .text(job.location)
          .css({
            padding: '0px 25px',
            textAlign: 'left'
          })
        )
        .append($('<p/>')
          .text(job.description)
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
    employment.jobs.forEach((job) => {
      addProjectToDOM(job);
    })
    $('#loading').remove();
  };
  fetchData();
});

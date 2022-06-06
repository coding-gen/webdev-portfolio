$(document).ready(function () {
  const education = {
    'schools': [
      {
        name: "Portland State University",
        studies: "Masters of Science in Computer Science",
        image: "pics/ed/psu.jpg",
        alt: "The Portland State University campus",
        description: "Studies in data engineering for NLP, including: data engineering, machine learning, artificial intelligence, natural language processing, adventures in natural language processing, voice assistants and chatbots, database management, cloud and cluster databases, algorithmic analysis, computers sound and music, web development. Programming languages: python, bash, MySQL, PostGreSQL",
        date: "Jan 2020 - June 2023",
        link: "https://www.pdx.edu/computer-science/"
      },
      {
        name: "Portland Community College",
        studies: "Mathematics",
        image: "pics/ed/pcc.jpg",
        alt: "The Portland Community College campus.",
        description: "Math prerequisites for understanding machine learning.",
        date: "Jan 2022 - Sept 2022",
        link: "https://www.pcc.edu/programs/math/"
      },
      {
        name: "University of Washington",
        studies: "Computational Linguistics",
        image: "pics/ed/uw.jpg",
        alt: "The University of Washington campus",
        description: "Studied natural language processing and phonetics. Languages: python.",
        date: "Aug 2014 - Apr 2015",
        link: "https://www.compling.uw.edu/"
      },
      {
        name: "Albert-Ludwigs Universitaet Freiburg",
        studies: "Computer Science, German",
        image: "pics/ed/uniFreiburg.jpg",
        alt: "The Uni Freiburg library",
        description: "In preparation for studying Computational Linguistics, I studied Computer Science for a year in Germany. This ensured I gained a technical vocabulary in German, and allowed me to learn about programming from another, highly technical perspective. Included courses in programming languages, logic, robotics, and artificial intelligence. Programming languages: python and C++. Languages: python and C++.",
        date: "Sept 2013 - Aug 2014",
        link: "https://www.tf.uni-freiburg.de/de"
      },
      {
        name: "Lewis & Clark College",
        studies: "Bachelor of arts in Foreign Languages and Computer Science",
        image: "pics/ed/elsie.jpg",
        alt: "The Lewis & Clark campus",
        description: "Studied liberal arts, with a major in French and Spanish, and a minor in Computer Science. My studies included one semester studying French, Wolof, and local culture overseas in Dakar, Senegal. I worked in the IT department at the college during and after my degree, and audited German for 2 years after graduation. Programming languages: C and Java.",
        date: "Aug 2005 - May 2009",
        link: "https://www.lclark.edu/"
      }
    ]
  }

  const addProjectToDOM = (school) => {
    $('#results')
      .append($('<div>')
        .css({
          margin: '10px',
          width: '400px',
        })
        .addClass('figure')
        .append($('<img>')
          .attr('src', school.image)
          .attr('alt', school.alt)
          .attr('width', '285px')
        )
        .append($('<h3>')
          .text(school.name)
          .attr('padding', '10px')
          .css({
            padding: '3px',
            textAlign: 'center',
            width: '384px',
          })
        ))
  };

  const fetchData = () => {
    $('#results')
      .css({
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
        justifyContent: 'center',
      })
    education.schools.forEach((school) => {
      addProjectToDOM(school);
    })
    $('#loading').remove();
  };
  fetchData();
});

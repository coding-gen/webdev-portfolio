$(document).ready(function () {

  const addPageToDOM = (item) => {
    let itemRef = item.toLowerCase() + '.html'
    if (itemRef === 'home.html') {
      itemRef = 'index.html'
    }
    $('#navList')
      .append($('<li/>')
        .addClass('list-item')
        .append($('<a/>')
          .addClass('nav-link')
          .attr('href', itemRef)
          .text(item)
        )
      )
  };

  const fetchNav = () => {
    $('#bar')
      .append($('<nav>')
        .append($('<ul/>')
        .addClass('nav-list')
        .attr('id', `navList`))
      )
    const pages = ['Home', 'Projects', 'Experience', 'Education', 'Contact']
    pages.forEach((item) => {
      addPageToDOM(item);
    })
  };
  fetchNav();
});

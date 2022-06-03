$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  const addDrinkToDOM = (drink) => {
    $('#results')
      .append($('<div>')
        .css({
          margin: '10px',
          width: '400px',
        })
        .addClass('figure')
        .append($('<img>')
          .attr('src', drink.strDrinkThumb)
          .attr('alt', `A picture of the ${drink.strDrink} drink.`)
          .attr('width', '185px')
          .append($('<h3>')
            .text(drink.strDrink)
            .attr('padding', '10px')))
        .append($('<h3>')
          .text(drink.strDrink)
          .attr('padding', '10px')
          .css({
            padding: '3px',
            textAlign: 'center',
            width: '384px',
          })
        ))
  };

  const fetchData = (url) => {
    $('#results')
      .css({
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0px',
        justifyContent: 'center',
      })
    $.ajax({
      type: 'GET',
      url: url,
      success: (data) => {
        data.drinks.forEach((item) => {
          addDrinkToDOM(item);
        })
      },
      error: (error) => {
        console.error(error);
        $('#results').append($('<div>'))
          .append($('<p>')).text(`An error has occurred. Please try again.`)
      },
      complete: () => {
        $('#loading').remove();
      }
    });
  };
  fetchData(url);
});

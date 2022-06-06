let appID = "6648D17443307643E7C9C555D"

const transitTypes = {
    types:
    {
        bus: {
            image: 'pics/projects/trimet.JPG',
            alt: 'A TriMet bus.'
        },
        max: {
            image: 'pics/projects/max.jpg',
            alt: 'A TriMet max train.'
        },
        streetcar: {
            image: 'pics/projects/streetcar.jpg',
            alt: 'A TriMet streetcar.'
        }
    }

}
const locations = {
    7606: 'SW 5th & Jackson Max Station Southbound',
    10293: 'SW 6th & College Max Station Northbound',
    10764: 'PSU Urban Center Northbound',
    10763: 'SW 5th & Montgomery Southbound',
    7594: 'SW 5th & Columbia Southbound',
    7765: 'SE 6th & Jefferson Northbound'
}

$(document).ready(function () {
    let url =
        'https://developer.trimet.org/ws/V1/arrivals/appID/6648D17443307643E7C9C555D/json/true';

    const addTransitToDOM = (arrival, queryTime, transitType) => {
        console.log(arrival)
        $(`#${transitType}`)
            .append($('<section/>')
                .attr('display', 'block')
                .css({
                    margin: '10px',
                })
                .append($('<h4/>')
                    .text(arrival.fullSign)
                    .attr('padding', '10px')
                )
                .append($('<p/>')
                    .text(`Estimated arrival time: ${arrival.estimated.split("T")[1].split(".")[0]}`)
                    .attr('id', 'arrivalTime')
                )
            )
    };

    const fetchData = (url, transitType, locID) => {
        console.log(transitType)
        transitSection = transitType + '-' + locID
        $(`#${transitType}`)
            .append($('<img>')
                .attr('src', transitTypes.types[transitType].image)
                .attr('alt', transitTypes.types[transitType].alt)
                .addClass('imgShadow')
                .attr('width', '90%')
            )
            .append($('<h3/>')
                .text(`${locations[locID]}`)
            )

        $('#results')
            .css({
                display: 'flex',
                flexWrap: 'wrap',
                margin: '0px',
                justifyContent: 'center',
            })
        $.ajax({
            type: 'GET',
            url: url + `/locIDs/${locID}`,
            success: (data) => {
                data.resultSet.arrival.forEach((arrival) => {
                    addTransitToDOM(arrival, data.resultSet.queryTime, transitType);
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

    fetchData(url, 'bus', '7594');
    fetchData(url, 'streetcar', '10763');
    fetchData(url, 'max', '7606');
});

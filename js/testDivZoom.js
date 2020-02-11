var divContent = document.getElementById('content');

divContent.addEventListener('click', zoomDiv);

function zoomDiv() {
    this.animate([{
        borderLeft: '9.5vw solid transparent',
        borderRight: '9.5vw solid transparent',
        borderTop: '24vw solid rgba(185, 184, 184, 0.7)',
        borderBottom: '0vw',
        borderRadius:'0px',
    }, {
        borderLeft: '25vw solid rgba(185, 184, 184, 0.7)',
        borderRight: '25vw solid rgba(185, 184, 184, 0.7)',
        borderTop: '29vw solid rgba(185, 184, 184, 0.7)',
        borderBottom:'0vw solid rgba(185, 184, 184, 0.7)',
        borderRadius: '2000px',
    },{
        borderLeft: '49vw solid rgba(185, 184, 184, 0.7)',
        borderRight: '49vw solid rgba(185, 184, 184, 0.7)',
        borderTop: '49vw solid rgba(185, 184, 184, 0.7)',
        borderBottom:'0vw solid rgba(185, 184, 184, 0.7)',
        borderRadius: '0px',
    }], {
        fill: 'forwards',
        duration: 1000,
    });
}
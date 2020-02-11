/* ------------------------navBar---------------------------------- */
var tabNav = new Array(7);
var i = 1;
var onNav = false;

for (i; i < tabNav.length; i++) {
    tabNav[i]= document.getElementById('nav'+i);    
    tabNav[i].addEventListener('mouseover', overNav);
    tabNav[i].addEventListener('mouseleave', outNav);
}

function overNav() {
    this.animate([{
            transform: 'translateX(0px)'
        },
        {
            transform: 'translateX(40px)'

        }
    ], {
        fill: 'forwards',
        duration: 500,
    });
}

function outNav() {

    this.animate([{
            transform: 'translateX(40px)'
        },
        {
            transform: 'translateX(0px)'
        }

    ], {
        fill:'forwards',
        duration: 500,
    });
    this.style.marginLeft = '0px';
    onNav = false;
}

/* --------------------------------Contenus Onglets-------------------------------------- */

var tabInfos = document.getElementById('contentInfos');

tabNav[2].addEventListener('click', clickInfos);

function clickInfos(){
    tabInfos.animate([{
        transform: 'translateX(1000px)'
    },
    {
        transform:'translateX(0px)'
    }],
    {
        fill:'forwards',
        duration: 1500,
    });
}

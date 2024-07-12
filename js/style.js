/// <reference types="../@types/jquery" />


// Ready
$(function(){

// section Count Down
let countDown = new Date("april 29, 2024 23:59:59").getTime()

let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    let dateDiff = countDown - dateNow
    
    // Get time Unites
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) )
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ) )
    let seconde = Math.floor((dateDiff % (1000 * 60 )) / (1000 ) )

    document.querySelector('#days').innerHTML = days
    document.querySelector('#hours').innerHTML = hours
    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconde').innerHTML = seconde

    // if Days is finshed
    if (dateDiff < 0 ) {
        clearInterval(counter)
    }
}, 1000);

// up and down slider
$('.singer h3').on('click', function(e) {

    let targetH3 = $(e.target).parent().children('p') 
    let siblingsH3 = $(e.target).parent().siblings().children('p')

    siblingsH3.slideUp(1000)
    targetH3.slideToggle(1000)
})


// textarea
let num = 100

$('#number').text(num)

$('textarea').on('input', (e)=> {
    let inputValue = $(e.target).val().length
    let sbstract = num - inputValue
    console.log(sbstract);

    $('#number').html(`${sbstract < 0 ? "your available character finished": sbstract}`)
})

    // sidebar
    $('.open-Nav').on('click', function() {
    $('.sideLeft').animate({ width: '250px'}  ,500)
    })

    $('.close-button').on('click', function() {
    $('.sideLeft').animate({width: '0'}, 500)
    })

    // Scroll Somth
    $('a[href ^="#"]').on('click', function(e) {
    
        let href= $(e.target).attr('href')
        let goals = $(href).offset().top;
        $('body,html').animate({ scrollTop: goals},2000)
    })
    

    $('.loader').fadeOut(3000, function() {
        $('.screenLoading').slideUp(1000)
        $('body').css('overflow','auto')
    })


})




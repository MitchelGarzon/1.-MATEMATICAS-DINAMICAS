$(function() {

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.mipopover').popover({
        container: 'body'
    })
})
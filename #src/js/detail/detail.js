$(() => {
    for ( let i = 1; i <= 5; i++ ) {
        $(`#detailLines-${i}`).css('width', `${$(`#detailLineSum-${i}`).html()}`)
    }
});
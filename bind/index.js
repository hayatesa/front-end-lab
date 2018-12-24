function getValue() {
    console.log('getValue');

    $('#in').bind('change', ()=>{
        console.log($('#in').val());
    });
}
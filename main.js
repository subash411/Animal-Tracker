$(document).ready(onReady);
function onReady() {
    console.log('on ready');

    //Select my animalList element

    $('#animalList').append(`<li>
    Tiger
    <p>
    Tiger are just bigger cat.
    
    </li>`);

    let animals = [
        'Gorilla',
        'Cow',
        'Donkey',
        'Rhino'
    ];
    for( let animal of animals){
        $('#animalList').append(`
        <li>${animal}</li>
        `)
    }

    $('body').append(`
    <h1> My new jQuery app</h1>
    <h5 id="WelcomeText> Welcome, this is cool<h5>
    `);

    // getter

    let h5Text = $('#WelcomeText').text();
    console.log('h5Text is', h5Text);
}

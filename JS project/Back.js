

function ageinDays() {
    var birthyear = prompt('What year were you born?...');
    var ageinDayss = (2022 - birthyear) * 365;
    var h1 = document.createElement('h3');
    var textAnswer = document.createTextNode('You are ' + ageinDayss + 'days old.');
    h1.setAttribute('id', 'ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageinDays').remove();
}



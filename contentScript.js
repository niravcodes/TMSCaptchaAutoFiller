{
    const $ = (_) => document.getElementById(_); //aliasing a long fn call
    function l() {
        $('captchaEnter').value = $('randomfield').value;
        $('captchaEnter').dispatchEvent(new Event('input'));
    }
    window.onload = l;
    timer();
}

// auto login

function autoClick() {
    var button = document.getElementsByClassName(
        'btn btn-primary float-sm-right'
    );
    var button = button[0];
    button.click();
}

function timer() {
    var clock;
    clock = setTimeout(autoClick, 2000);
}

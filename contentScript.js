{
    const $ = _ => document.getElementById(_) //aliasing a long fn call
    function l() {
        $("captchaEnter").value = $("randomfield").value
        $("captchaEnter").dispatchEvent(new Event("input"))
    }
    window.onload = l;
}

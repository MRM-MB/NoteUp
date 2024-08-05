
let inactivityTime = function () {
    let time;
    // Automatically log out the user after 1 min of inactivity to enhance app security
    let maxInactivityTime = 1 * 60 * 1000; // 1 minute in milliseconds

    function logout() {
        window.location.href = "/timepass";
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(logout, maxInactivityTime);
    }

    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer; // catches touchscreen presses as well
    window.ontouchstart = resetTimer;
    window.onclick = resetTimer;     // catches touchpad/mouse clicks
    window.onkeypress = resetTimer;  
    window.addEventListener('scroll', resetTimer, true); // improved; see comments
};

inactivityTime();

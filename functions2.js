function toggleStyleSheet()
{
    const themeSelect = document.getElementById("mainStyleSheet");
    if (themeSelect.getAttribute("href") == "styles.css")
    {
        themeSelect.setAttribute("href", "styles2.css");
        localStorage.setItem("style", "styles2.css");
    }
    else
    {
        themeSelect.setAttribute("href", "styles.css");
        localStorage.setItem("style", "styles.css");
    }
}

window.onload = function()
{
    document.getElementById("mainStyleSheet").setAttribute("href", localStorage.getItem("style"));
}
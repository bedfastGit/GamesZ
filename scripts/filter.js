
let toggleDisplayType = "flex"

function toggleDropdown(target){
    let mytarget = document.getElementById(target)

    if (mytarget.style.display == toggleDisplayType) mytarget.style.display = "none"
    else mytarget.style.display = toggleDisplayType
}
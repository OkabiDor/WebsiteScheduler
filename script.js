const scheduledWebsitesList = [];

const addButton = document.getElementById('addWebsiteButton');
const websiteURLInput = document.getElementById('websiteURL'); 
addButton.addEventListener('click', function() {
    addWebsiteToList(websiteURLInput.value); 
});
function addWebsiteToList(url){
    const observer = new Observer();
    var value = document.getElementById('websiteDay').value;
    const date = new Date(value);
    console.log(`Selected Date: ${date}`);
    var newWebsite = new Website(url, observer, document.getElementById('websiteTime'), date, document.getElementById('isReaccuring').checked);
    newWebsite.openWebsite();
    scheduledWebsitesList.push(newWebsite);
}

function calculateTimeToOpen(TimeOfDay){
    const timeString = TimeOfDay.value;
    console.log(`Time String: ${timeString}`);
    const [hours, minutes] = timeString.split(':');
    const targetTime = new Date();
    targetTime.setHours(hours, minutes, 0, 0);
    console.log(`Target Time: ${targetTime}`);
    const tomorrowSameTime = new Date();
    return targetTime - new Date();
}

class Observer {
    constructor(){}
    Notify(website) {
        console.log(`Opening website: ${website.url} at ${website.time}`);
        window.open(website.url, '_blank');
    }
}


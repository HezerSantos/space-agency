//imports the clear container function so I dont have to rewrite it
import { clearContainer } from "./mission.js"

//Gets each astronaut
const astronauts = document.querySelectorAll(".astronautContainer")

//This stores the original astronaut position
const originalAstronauts = []

//Stores each value respectively to sort later on
const mappedNames = []
const mappedPrograms = []
const mappedTimes = []
const mappedStatus = []

//Adds values to the respective storage
const mapNames = (list) => {
    list.forEach((item, index) => {
        mappedNames.push([item.children[0].textContent, index, 'name'])
    })
}
const mapPrograms = (list) => {
    list.forEach((item, index) => {
        mappedPrograms.push([item.children[1].textContent, index, 'program'])
    })
}
const mapTimes = (list) => {
    list.forEach((item, index) => {
        mappedTimes.push([item.children[2].textContent, index, 'time'])
    })
}
const mapStatus = (list) => {
    list.forEach((item, index) => {
        mappedStatus.push([item.children[3].textContent.toLowerCase(), index, 'status'])
    })
}

//Main function to create the normal storage and sub storages
export const createAstronautStorage = () => {
    astronauts.forEach(astronaut => {
        originalAstronauts.push(astronaut)
    })
    mapNames(originalAstronauts)
    mapPrograms(originalAstronauts)
    mapTimes(originalAstronauts)
    mapStatus(originalAstronauts)
    /*
    console.log(mappedNames)
    console.log(mappedPrograms)
    console.log(mappedTimes)
    console.log(mappedStatus)
    */
}

//This is for simplicity. Since the buttons are in the same order as the resepective
//selectors, the indexes are the same
const mappedItems = [mappedNames, mappedPrograms, mappedTimes, mappedStatus]

//Selector to get the all sort buttons. Since the indexes are the same it works.
const sortButtons = document.querySelectorAll(".sortButton")

//Gets the container of the astronauts
const astronautSection = document.querySelector("#astronautSection")

//Tracker to track ascending/descending orientation
const itemTracker = [false, false, false, false]

//Tracker to track if the page is sorted or not
let sortTracker = false

//Gets the html sort tracker
const sortStatus = document.querySelector("#sortStatus");

//This function uses a regex to check whether or not the first element of the
//2D array is an integer. Since the validations of the model make it a positive integer
//the regex doesnt have to be complicated
//If it is true, it returns a sorted list by numerical value
//else returns the orignal list
const checkNum = (list) => {
    const numCheck = /\d+/
    if (numCheck.test(list[0][0])){
        const sorted = list.sort((a, b) => a[0] - b[0])
        return sorted
    } else {
        return list
    }
}

//Event listener for the sort buttons

/*
So I used the All selector to reduce my code which adds an event listener to all buttons
since the actions are the same. I chose mousedown instead of click because I felt
it was more appropriate because the sort in my eyes is relatively temporary. The listener
uses the tracking methods it has and it its respective itemTracker is set to false, then
it uses the ascending order because the sort function by default goes ascending. Its respective
index in itemTracker is then set to True. If clicked again, since its respective tracker is True,
the second block runs and the sorted list is reversed (descending) and the flag is set to false.
If you click off of the button, the blur listener is triggered which sets the page back to default.
I added the indictor to show what was happening. Without it, I felt it was confusing regarding the
blur listener.
*/
sortButtons.forEach((button, index) => {
    button.addEventListener("mousedown", () => {
        clearContainer(astronautSection);
        let sorted = mappedItems[index].sort()

        sorted = checkNum(sorted)

        if (!itemTracker[index]){
            //console.log(sorted)
            sorted.forEach(element => {
                astronautSection.appendChild(originalAstronauts[element[1]])
            }) 
            itemTracker[index] = true;
            sortStatus.innerHTML = `Sorted By: ${mappedItems[index][0][2]} &#8593;`
        } else if (itemTracker[index]){
            sorted = sorted.reverse()
            ///console.log(sorted)
            sorted.forEach(element => {
                astronautSection.appendChild(originalAstronauts[element[1]])
            }) 
            itemTracker[index] = false;
            sortStatus.innerHTML = `Sorted By: ${mappedItems[index][0][2]} &#8595;`
        }
        sortTracker = true;
    })
    
    button.addEventListener('blur', () => {
        if (sortTracker){
            sortTracker = false;
            clearContainer(astronautSection)
            originalAstronauts.forEach(astronaut => {
                astronautSection.appendChild(astronaut)
            })
            sortStatus.innerHTML = `Sorted By: Default`
        }
    })
})



//testing purposes
//console.log(['1', '100', '1000', '108', '123456789', '197', '200', '365', '404', '420'].sort())
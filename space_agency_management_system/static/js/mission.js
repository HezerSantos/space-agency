
// selects all divs with the .missionContainer class so I can add to a list
const missions = document.querySelectorAll(".missionContainer")

//This is the actual contianer that holds the data points
const missionContainer = document.querySelector("#missionSection")

//This is to track the original positions of each data point
const originalMissions = []


//Map to set the index and name. I could have just used a normal 2D array but im practicing
//with hash tables
const mappedMissions = new Map();


//exported function for modularity
//This is to get each data point and add it to a list
//Then it adds the index and name as a key, value pair to the Map
export const createMissionStorage = () => {
    missions.forEach(mission => {
        originalMissions.push(mission)
    })
    originalMissions.forEach((mission, index) => {
        mappedMissions.set(index, [
            mission.children[0].textContent,
            mission.children[1].textContent,
            mission.children[2].textContent,
            mission.children[3].textContent
        ])
    })
    //Im leaving this for testing purposes
    //console.log(mappedMissions) 
}

/*
There was also a error logging in the console because the quereselctor would return null
if I went on a different page because it didint exist. So My fix is checking to see if it exists 
*/
//This gets the search bar
if (document.querySelector("#missionSearch")){
    const searchBar = document.querySelector("#missionSearch")

    //Event listener to listen to each input 
    //Uses a function to clear given container
    //It uses a regex to match to the whole string itself
    //I created an array from the map because Maps cant use .filter
    //So I filtered it using the regex and loop through the new array
    //Then Displays it in the DOM
    searchBar.addEventListener('input', () => {
        try{
            clearContainer(missionContainer)
            const search = searchBar.value;
            const regex = new RegExp(search, 'i');
            const filtered = Array.from(mappedMissions).filter(([key, value]) => regex.test(value[0]) || regex.test(value[1]) || regex.test(value[2]) || regex.test(value[3]))
        
            filtered.forEach(element => {
                missionContainer.appendChild(originalMissions[element[0]]);
            })
        
            if (filtered.length === 0){
                missionContainer.textContent = 'No results found'
            }
        } catch { 
            //Apparently an error is raised when you do brackets or slashes so im catching it
            //The no results found didnt properly show without it
            missionContainer.textContent = 'No results found'
        }
    }) 
}





//Function to clear a container
//It just checks if .firstChild returns true
//So while there is a first child, tell the parent
//to remove it until there is none
export const clearContainer = (container) => {
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
}

import { createMissionStorage } from "./mission.js";
import { createAstronautStorage } from "./astronaut.js";

//Im not sure I need the event listener after a bunch of testing
//To be on the safe side, I will keep it.
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        createMissionStorage();
        createAstronautStorage();
    }, 1000);
});

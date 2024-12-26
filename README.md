"Challenges and Solutions"

The design and technical challenges of this final project were minimal.
Although I deviated significantly from my intermediate submission, I believe
that is a part of the process as things never go according to plan. The rouugh ideas I had helped overcome many of these challenges. I added modules to the JS to make reading the code more easily I hope. ES6 introduced exporting I think.

A semi challenge was the data from the dom not being added into a list correctly from my created functions. I beleive that the server ran slower than the js even though I had the defer attribute on the script tag. The problem was the list I had that tracked the original positions of all data points had values that resembled objects/promises which I do not know why. My solution was to use a timeout function and add an event listener to the DOM to make sure that the function is executed after the dom finishes loading. After a bunch of testing, I do not know if it is necessary; however, I would like to keep it just in case.

Another issue was the search feature as I initially was trying to use the .includes method. To my surprise, it didnt work. To overcome it, I converted the search term into a regex and used the .test method on each attribute which solved the issue. 

Another issue was the sort functionality. I was trying to sort using the second value of my 2D arrays that I created; however, the issue invovled sorting numerically because .sort((a, b)) => a[1] - b[1]) is different than .sort(). To fix this issue I changed the order of the key and value pair making it a value, key pair. I did forget that sets do not allow duplicates so I had to use a normal array. 

My final challenge was the realization of the numerical sort. The sort method was not sorting numerically so I created a method to check if it is sorting the time attribute and use arguments with the .sort method. I used a regex to check if the data was an integer because using .isInteger was checking raw integers meaning, since the data was a string '1' for example would return false.

The main take away from the project was the importance of regex. I realized how useful they can be in checking values.

My intermediate submission was different than my final solution; however, the principle was the same. I DID NOT use a factory function because I realized it was not necessary because if I just store the index (The unique id I mentioned) and the value im trying to search or sort, then I can just quickly look up the index of the attribute and manipulate it how I want to. I implemented a function that took the data in the dom and changed it how I wanted it to change.

The project itself was self explanatory and simple; however, there were minor issues which were solved with a lot of console.logs.
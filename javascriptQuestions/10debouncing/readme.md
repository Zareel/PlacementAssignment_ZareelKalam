# Debouncing

![debounce](https://github.com/Zareel/PlacementAssignment_ZareelKalam/assets/110910838/2beb505f-f82a-40f7-a1fd-f55f7a5cc6bf)

As you type each character it’s going to send a brand new request because this event gets fired every single time you type a character. For example, by typing a word `coding`we made 5 requests to out server which are all going to come back at different rates and that is not only going to cause some ui problems but also that’s a huge burden for people using your code because now they just made 5 network requests downloaded them and if they are on slow connection or using data, that is going to burn through their data and it’s going to really slow down the app if their connection is not quick enough to keep up this.
Debouncing is a way to slow down a function instead of calling a function every single time. What is going to do is it is going to call the function after a set delay, let’s say one second. If nothing changes in that one second, then the function will run. But during that one second if i type another character, it resets the timer back to one second. If nothing has changed in one second then the function is going to run

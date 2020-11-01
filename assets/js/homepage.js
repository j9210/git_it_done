var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

// connect serverside API that will get user repos
var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

// function to be executed upon a form submission browser event
var formSubmitHandler = function(event) {
    // prevents the browser from sending the form's input data to a URL
    event.preventDefault();
    
    // get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos (username);
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
}

userFormEl.addEventListener("submit", formSubmitHandler);
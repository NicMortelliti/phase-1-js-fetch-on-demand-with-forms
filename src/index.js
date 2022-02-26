const init = () => {
  // Target form
  const inputForm = document.querySelector("form");

  // Listen for submit
  inputForm.addEventListener("submit", event => {
    // Prevent page reload
    event.preventDefault();

    // Access user-entered data 1 of 2 ways...
    // 1) Via the returned event data:
    //console.log(event.target.children[1].value);

    // 2) Via direct access to the element:
    const input = document.querySelector("input#searchByID");
    console.log(input.value);

    /*
     Fetch data specifically related to the
     movie entered by the user by tacking on
     ${input} to the fetch url.
     */
    fetch(`http://localhost:3000/movies/${input.value}`)
      .then(response => response.json())
      .then(data => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        // I added a check for invalid form entries here
        if (typeof data.title in window) {
          data.title = "Please enter a valid movie ID";
          data.summary = "";
        }

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);

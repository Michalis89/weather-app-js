export const showErrorPage = (statusCode) => {
  const container = document.querySelector("[data-container]");
  container.innerHTML = ""; // Καθαρίζουμε το περιεχόμενο

  const errorPage = document.createElement("section");
  errorPage.classList.add("error-content");

  let message = "";
  let title = "Error"; //NOSONAR

  switch (statusCode) {
    case 400:
      title = "400";
      message = "Bad Request! Please check your input.";
      break;
    case 403:
      title = "403";
      message = "Access Forbidden! You don’t have permission to view this.";
      break;
    case 404:
      title = "404";
      message = "Page not found!";
      break;
    case 500:
      title = "500";
      message = "Internal Server Error! Please try again later.";
      break;
    default:
      title = "Oops!";
      message = "Something went wrong!";
  }

  errorPage.innerHTML = `
    <h2 class="heading">${title}</h2>
    <p class="body-1">${message}</p>
    <a href="#/weather?lat=37.9839412&lon=23.7283052" class="btn-primary">
      <span class="span">Go Home</span>
    </a>
  `;

  container.appendChild(errorPage);
};

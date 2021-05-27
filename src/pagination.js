var currentPage = 1;
var maxResults = 15;
var videosPerPage = 3;

function videosonPagination(totalVideos) {
  var totalPages = totalVideos / videosPerPage;
  var pagination = document.getElementById("pagination-container");
  pagination.innerHTML = "";

  if (totalVideos % videosPerPage > 0) {
    totalPages++;
  }

  totalPages = parseInt(totalPages);

  for (let i = 0; i < totalPages; i++) {
    var pageNumberTemplate = document.getElementById("pagination-template");
    var node = document.importNode(pageNumberTemplate.content, true);
    var page = node.getElementById("page");
    page.id = "page" + (i + 1);
    page.textContent = i + 1;

    if (i == 0) {
      page.classList.add("active");
    }

    pagination.appendChild(page);

    //console.log(page);
  }

  addEventListenersToPages(pagination);
}

function addEventListenersToPages(pagination) {
  var pages = pagination.children;
  for (let i in pages) {
    var page = pages[i];
    if (typeof page == "object") {
      page.addEventListener("click", function (event) {
        var pageNumber = this.id.charAt(4);
        var initialVideoIndex = getVideoIndex(pageNumber);
        getResults(
          videos.slice(initialVideoIndex, initialVideoIndex + videosPerPage)
        );
        var previousPage = document.getElementById("page" + currentPage);
        previousPage.classList.remove("active");
        currentPage = pageNumber;
        document.getElementById("page" + pageNumber).classList.add("active");
      });
    }
  }
}

function getVideoIndex(pageNumber) {
  return (pageNumber - 1) * videosPerPage;
}

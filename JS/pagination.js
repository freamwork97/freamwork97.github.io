$(function () {
  const paginationContainer = $("#pagination");
  const maxPaginationButtons = 5; // Maximum number of pagination buttons to display

  function generatePaginationButtons() {
    paginationContainer.empty();

    const createButton = (label, onclick, icon, isActive = false) =>
      `<button class="btn btn-sm btn-outline-secondary ${
        isActive ? "active" : ""
      }" ${
        onclick ? `onclick="${onclick}"` : "disabled"
      }>${icon} ${label}</button>`;

    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxPaginationButtons / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxPaginationButtons - 1);

    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-double-left"></i>',
        currentPage === 1 ? null : "changePage(1)",
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>'
      )
    );
    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-left"></i> 이전',
        currentPage === 1 ? null : `changePage(${currentPage - 1})`,
        '<i class="bi bi-chevron-left"></i>'
      )
    );

    for (let i = startPage; i <= endPage; i++) {
      const isActive = i === currentPage;
      paginationContainer.append(
        createButton(i, `changePage(${i})`, "", isActive)
      );
    }

    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-right"></i> 다음',
        currentPage === totalPages ? null : `changePage(${currentPage + 1})`,
        '<i class="bi bi-chevron-right"></i>'
      )
    );
    paginationContainer.append(
      createButton(
        '<i class="bi bi-chevron-right"></i> <i class="bi bi-chevron-double-right"></i>',
        currentPage === totalPages ? null : `changePage(${totalPages})`,
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>'
      )
    );
  }

  window.changePage = function (pageNumber) {
    currentPage = pageNumber;
    displayLinks(currentPage);
    generatePaginationButtons();
  };

  // Initialize current page
  let currentPage = 1;

  displayLinks(currentPage);
  generatePaginationButtons();
});

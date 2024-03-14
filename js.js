document.addEventListener("DOMContentLoaded", function () {
  var dulieu = document.querySelector('.dulieu');
  var list = document.querySelector('.list');

  dulieu.addEventListener('click', function () {
      list.classList.toggle('show');
  });

  document.addEventListener('click', function (event) {
      var isClickInside = dulieu.contains(event.target);
      if (!isClickInside) {
          list.classList.remove('show');
      }
  });
});
function toggleDropdown() {
    var list = document.querySelector('.list');
    list.style.display = (list.style.display === 'none' || list.style.display === '') ? 'block' : 'none';
  }

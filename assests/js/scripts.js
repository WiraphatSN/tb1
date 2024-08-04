// Smooth Scroll
SmoothScroll({
  speed: 300,
  speedAsDuration: true,
  easing: 'easeInOutCubic',
  offset: 50,
  updateURL: true,
  popstate: true
});

// Copy Link
function copyTo() {
    navigator.clipboard.writeText("https://tb1.ac.th/");
    alert("คัดลอกลิงค์ไปยังคลิปบอร์ดแล้ว!");
}

// Info Dropdown
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Phone Dropdown
function dropDownPhone() {
  document.getElementById("mypDropdown").classList.toggle("pshow");
}

window.onclick = function(event) {
  if (!event.target.matches('.pdropbtn')) {
    var pdropdowns = document.getElementsByClassName("pdropdown-content");
    var i;
    for (i = 0; i < pdropdowns.length; i++) {
      var openpDropdown = pdropdowns[i];
      if (openpDropdown.classList.contains('pshow')) {
        openpDropdown.classList.remove('pshow');
      }
    }
  }
}


function ppdropDown() {
  document.getElementById("myppDropdown").classList.toggle("ppshow");
}

window.onclick = function(event) {
  if (!event.target.matches('.ppdropbtn')) {
    var ppdropdowns = document.getElementsByClassName("ppdropdown-content");
    var i;
    for (i = 0; i < ppdropdowns.length; i++) {
      var openppDropdown = ppdropdowns[i];
      if (openppDropdown.classList.contains('ppshow')) {
        openppDropdown.classList.remove('ppshow');
      }
    }
  }
}
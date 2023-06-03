// ---------------------About----------------------------
var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-content");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link")
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab")
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

// ------------------------Portfolio-See More Button---------------------
let seeMoreBtn = document.querySelector(".btn");
let currentItem = 3;

function loadMore(){
    let work = [...document.querySelectorAll(".container .work-list .work")];
    for (var i = currentItem; i < currentItem + 3; i++){
        work[i].style.display = "inline-block"
    }
    currentItem +=3;

    if(currentItem >= work.length){
        seeMoreBtn.style.display = "none";
    }
}

// ----------------------------Contact Form---------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxbmHZ92tDkDoANCJvcAtEkT-qADNvpdNuMOfbqnI34286__dpA2MP3BzGzgprpwt_GdQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function(){
          msg.innerHTML = "";
      }, 5000)
      form.reset();

    })
    .catch(error => console.error('Error!', error.message))
})

// ---------------------Mobile Menu-------------------------

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// Closing the sidemenu after clicking the links
var sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    var sidebar = document.querySelector('#sidemenu');
    sidebar.style.right = "-200px"
  });
});


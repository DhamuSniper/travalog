// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 100,
  interval: 1000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: {
    "Chennai": null,
    "Coimbatore": null,
    "Trichi": null,
    "Goa": null,
    "Delhi": null,
    "Mumbai": null,
    "Pune": null,
  }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});





function signupValidate()
{
  let sn=document.getElementById("sname").value;
  let sem=document.getElementById("email").value;
  let p1=document.getElementById("pass1").value;
  let p2=document.getElementById("pass2").value;
  let r=/^\w+([.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  let p=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if(sem=''|| !(r.test(sem)))
  {
    alert("Enter valid mail ID");t
  }else if(p1!=p2){
    alert("Please give the same password");
  }else if(!(p.test(p1)) ||  p1.length<6){
    alert("password is invalid..Re-enter please....Password must contain atleast 1.special character 2.Number");
  }else{
    window.location.href="login.html"
  }
  localStorage.setItem('email', email.value);
  localStorage.setItem('pass1', pass1.value);

  var loginmail=document.getElementById("logmail").value;
  var loginpass=document.getElementById("logpass").value;

  var storedEmail=localStorage.getItem('email');
  var storedPass=localStorage.getItem('pass1');
  if((loginmail==storedEmail) && (loginpass==storedPass)){

  }

}
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("column");
if (c == "all") c = "";
// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
for (i = 0; i < x.length; i++) {
  RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
}
}

// Show filtered elements
function AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {
    element.className += " " + arr2[i];
  }
}
}

// Hide elements that are not selected
function RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
}
element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}

$("#generateTravelForm").click(function(){
  $("travelform").toggle();
})

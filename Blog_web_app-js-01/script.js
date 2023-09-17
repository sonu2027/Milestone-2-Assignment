const plusIcon = document.getElementById("plus-icon");
plusIcon.addEventListener("click", displayForm);

let backArrow = document.getElementById("back-arrow");
backArrow.style.display = "none";

const form = document.getElementById("form");

function displayForm() {
  form.style.display = "block";
}

let crossIcon = document.getElementById("cross-icon");
crossIcon.addEventListener("click", removeForm);
function removeForm() {
  form.style.display = "none";
}

let input = document.getElementsByTagName("input");
let textarea = document.getElementsByTagName("textarea");
let arrayOfBlogContent = [];
let totalBlogCreated = 0;
let count = 0;

function addBlog() {
  if ((input[1].value == "")) {
    alert("Please add title of your blog");
  } else if ((input[2].value == "")) {
    alert("Please add description of your blog");
  } else if ((textarea[0].value == "")) {
    alert("Please write your blog");
  } else {
    let blogPage = document.getElementById("blog-page");
    let createDiv = document.createElement("div");
    blogPage.appendChild(createDiv);
    let classAttr = document.createAttribute("class");
    classAttr.value = "blog-items";
    createDiv.setAttributeNode(classAttr);

    let img = document.createElement("img");
    let src = document.createAttribute("src");
    if (input[0].value == "") {
      src.value = "./Assets/default-image.png";
    } else {
      src.value = input[0].value;
    }
    img.setAttributeNode(src);
    let blogImage = document.createAttribute("class");
    blogImage.value = "blog-image";
    img.setAttributeNode(blogImage);
    createDiv.appendChild(img);

    let h3 = document.createElement("h3");
    let blogHeading = document.createAttribute("class");
    blogHeading.value = "blog-heading";
    h3.setAttributeNode(blogHeading);
    h3.innerText = input[1].value;
    createDiv.appendChild(h3);

    let p = document.createElement("p");
    let blogDescription = document.createAttribute("class");
    blogDescription.value = "blog-description";
    p.setAttributeNode(blogDescription);
    p.innerText = input[2].value;
    createDiv.appendChild(p);

    let btn = document.createElement("input");
    let blogButton = document.createAttribute("class");
    let blogButtonType = document.createAttribute("type");
    blogButton.value = "blog-button";
    blogButtonType.value = "button";
    btn.setAttributeNode(blogButton);
    btn.setAttributeNode(blogButtonType);
    let onclickAttr = document.createAttribute("onclick");
    onclickAttr.value = `showFullBlog(${count})`;
    btn.setAttributeNode(onclickAttr);
    btn.value = "Read";
    createDiv.appendChild(btn);

    arrayOfBlogContent.push(textarea[0].value);

    form.style.display = "none";

    totalBlogCreated++;
    count++;
  }
  for(let i=0; i<3; i++){
    input[i].value=""
  }
  textarea[0].value=""
}

function showFullBlog(count) {
  let backArrow = document.getElementById("back-arrow");
  let plusIcon = document.getElementById("plus-icon");

  let blogPageParent = document.getElementById("blog-page-parent");
  blogPageParent.style.display = "none";

  let blogImage = document.getElementsByClassName("blog-image");
  let blogHeading = document.getElementsByClassName("blog-heading");
  let blogDescription = document.getElementsByClassName("blog-description");

  let individualBlog = document.getElementById("individual-blog");
  let createDiv = document.createElement("div");
  individualBlog.appendChild(createDiv);
  let classAttributeOfDiv = document.createAttribute("class");
  classAttributeOfDiv.value = "individual-blog-items";
  createDiv.setAttributeNode(classAttributeOfDiv);

  let h3andp1 = document.createElement("div");
  let h3p1andimg = document.createElement("div");
  let classOfH3P1andImg = document.createAttribute("class");
  classOfH3P1andImg.value = "classOfH3P1andImg";
  h3p1andimg.setAttributeNode(classOfH3P1andImg);
  let classOfH3AndP1 = document.createAttribute("class");
  classOfH3AndP1.value = "classOfH3AndP1";
  h3andp1.setAttributeNode(classOfH3AndP1);

  let h3 = document.createElement("h3");
  h3.innerText = blogHeading[count].innerText;
  h3andp1.appendChild(h3);
  let classOfH3InIndividualBlogItems = document.createAttribute("class");
  classOfH3InIndividualBlogItems.value = "classOfH3InIndividualBlogItems";
  h3.setAttributeNode(classOfH3InIndividualBlogItems);

  let p1 = document.createElement("p");
  p1.innerText = blogDescription[count].innerText;
  h3andp1.appendChild(p1);

  let img = document.createElement("img");
  let src = document.createAttribute("src");
  src.value = blogImage[count].src;
  img.setAttributeNode(src);
  let h3p1andimgclassattr = document.createAttribute("class");
  h3p1andimgclassattr.value = "h3p1andimgclassattr";
  img.setAttributeNode(h3p1andimgclassattr);
  h3p1andimg.appendChild(h3andp1);
  h3p1andimg.appendChild(img);
  createDiv.appendChild(h3p1andimg);

  let p2 = document.createElement("p");
  p2.innerText = arrayOfBlogContent[count];
  createDiv.appendChild(p2);

  plusIcon.style.display = "none";
  backArrow.style.display = "block";

  backArrow.addEventListener("click", function () {
    blogPageParent.style.display = "block";
    individualBlog.innerText = "";
    plusIcon.style.display = "block";
    backArrow.style.display = "none";
  });
}

let switchDark=false
function switchToDark(){
  let darkButton=document.getElementById("dark")
  let parentButton=document.getElementById("parent-button")
  let nav=document.getElementById("nav")
  let plusIcon=document.getElementById("plus-icon")
  let backArrow=document.getElementById("back-arrow")
  let backgroundDarkPara=document.getElementById("background-dark-para")
  let footerPara=document.getElementById("footer-para")
  if(switchDark==false){
    parentButton.style.backgroundColor="rgb(120, 4, 228)"
    document.body.style.backgroundColor="rgb(20, 18, 18)"
    nav.style.backgroundColor="rgb(20, 18, 18)"
    nav.style.color="#fff"
    plusIcon.style.backgroundColor="#fff"
    backArrow.style.backgroundColor="#fff"
    backgroundDarkPara.style.color="#fff"
    footerPara.style.color="#fff"
    switchDark=true
  }
  else{
    parentButton.style.backgroundColor="#fff"
    document.body.style.backgroundColor="#fff"
    nav.style.backgroundColor="#fff"
    nav.style.color="rgb(20, 18, 18)"
    backgroundDarkPara.style.color="rgb(3,3,3)"
    footerPara.style.color="rgb(3,3,3)"
    switchDark=false
    console.log(switchDark)
  }
}
// Navbar creating 
let navbarList = [
    { name: "Groceries", link: "javascript:void(0)", id: "groceriesItems" },
    {name: "Home & Lifestyle", link: "javascript:void(0)", id: "homeLifestyleItems"},
    {name: "Electronics", link: "javascript:void(0)", id: "electronicsItems"},
    {name: "Fashion", link: "javascript:void(0)", id: "fashionItems"},
    {name: "Industrial & Professional Supplies", link: "javascript:void(0)", id: "industrialItems"},
    {name: "Precious Jewellery", link: "javascript:void(0)", id: "jewelleryItems"},
    {name: "Wellness", link: "javascript:void(0)", id: "wellnessItems"},
    {name: "All Categories", link: "javascript:void(0)", id: "allcategoriesItems"}
]

function addNavList () {
    navbarList.forEach((list) => {
        const li = document.createElement('li');
        const span = document.createElement('SPAN');
        span.textContent = list.name
        span.id = "in" + list.id;
        li.classList.add("navlistitems")
        li.id = list.id
        // li.addEventListener('click', () => {})
        li.appendChild(span)
        document.querySelector("#headNavList").appendChild(li);
        
    })
}
addNavList()


// create Groceries categorie options
let groceriesList = [
    {name: "Biscuits, Drinks & Packaged Foods", link: "javascript:void(0)", id: "packagedFoodGroceries"},
    {name: "Fruits & Vegetables", link: "javascript:void(0)", id: "vegfruitsGroceries"},
    {name: "Cooking Essentials", link: "javascript:void(0)", id: "cookessentialGroceries"},
    {name: "Dairy & Bakery", link: "javascript:void(0)", id: "dairybackeryGroceries"},
    {name: "Personal Care", link: "javascript:void(0)", id: "personalcareGroceries"},
    {name: "Beauty", link: "javascript:void(0)", id: "beautyGroceries"}
]

function addGroceriesList(){
    let div = document.createElement("DIV")
    div.classList.add("grocerieslistitems")
    groceriesList.forEach((list) => {       
        let span = document.createElement("SPAN")
        span.textContent = list.name;
        span.classList.add("grocerieslist-items");
        span.id = list.id
        div.appendChild(span);
    })
    document.querySelector("#groceriesItems").appendChild(div);
}
addGroceriesList();



// create Home & Lifestyle categorie options

let homeLifestyleList = [
    {name: "Prayer & Spiritual Needs", link: "javascript:void(0)", id: "spiritualLifestyle"},
    {name: "Tableware", link: "javascript:void(0)", id: "tablewareLifestyle"},
    {name: "Furniture", link: "javascript:void(0)", id: "furnitureLifestyle"},
    {name: "Toys & Games", link: "javascript:void(0)", id: "toygameLifestyle"},
    {name: "DIY", link: "javascript:void(0)", id: "diyLifestyle"},
    {name: "Garden & Outdoor", link: "javascript:void(0)", id: "gardenoutLifestyle"},
    {name: "Home & Care", link: "javascript:void(0)", id: "homeCareLifestyle"},
    {name: "Crafts of India", link: "javascript:void(0)", id: "indiaCraftLifestyle"},
    {name: "Books", link: "javascript:void(0)", id: "booksLifestyle"},
    {name: "Furnishing", link: "javascript:void(0)", id: "furnishingLifestyle"}
]

function addHomeLyfestylelist(){
    let div = document.createElement("DIV")
    div.classList.add("homeLifestylelistitems")
    homeLifestyleList.forEach((list) => {
        let span = document.createElement("SPAN")
        span.textContent = list.name;
        span.classList.add("home-lifestylelist-items")
        span.id = list.id
        div.appendChild(span);
    })
    document.querySelector("#homeLifestyleItems").appendChild(div);
}

addHomeLyfestylelist();



// create Electronics categorie options

let electronicsList = [
    {name: "Mobile & Tablet", link: "javascript:void(0)", id: "mobileElectronics"},
    {name: "Computer & Accessories", link: "javascript:void(0)", id: "computerElectronics"},
    {name: "TV & Home Entertainment", link: "javascript:void(0)", id: "tventertainmentElectronics"},
    {name: "Large Applience", link: "javascript:void(0)", id: "largeapplienceElectronics"},
    {name: "Audio & Smart Home", link: "javascript:void(0)", id: "smarthomeElectronics"},
    {name: "kitchen Applience", link: "javascript:void(0)", id: "kitchenapplienceElectronics"}
]

function addelectronicsList() {
    let div = document.createElement("DIV");
    div.classList.add("electronicslistitems");
    electronicsList.forEach((list) => {
        let span = document.createElement("SPAN")
        span.textContent = list.name;
        span.classList.add("electronicslist-items");
        span.id = list.id;
        div.appendChild(span);
    })
    document.querySelector("#electronicsItems").appendChild(div);
}

addelectronicsList();
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



// create Fashions categorie options

let fashionsList = [
    {name: "Men", link: "javascript:void(0)", id: "menFashions"},
    {name: "Women", link: "javascript:void(0)", id: "womenFashions"},
    {name: "Boys", link: "javascript:void(0)", id: "boysFashions"},
    {name: "Girls", link: "javascript:void(0)", id: "girlsFashions"},
    {name: "Infants", link: "javascript:void(0)", id: "infantsFashions"}
]

function addFashionList(){
    let div = document.createElement("DIV");
    div.classList.add("fashionlistitems");
    fashionsList.forEach((list) => {
        let span = document.createElement("SPAN");
        span.textContent = list.name;
        span.classList.add("fashionlist-items");
        span.id = list.id;
        div.appendChild(span);
    })
    document.querySelector("#fashionItems").appendChild(div);
}

addFashionList();


// create Industrial & Professional Supplies categorie options

let industrialProfessionalList = [
    {name: "Auto Care", link: "javascript:void(0)", id: "autocareIndustry"},
    {name: "Industrial Supplies", link: "javascript:void(0)", id: "indusupplyIndustry"},
    {name: "Home Cleaning & Organisation", link: "javascript:void(0)", id: "homecleanIndustry"},
    {name: "Electrical & Electronic Components", link: "javascript:void(0)", id: "electroniccompIndustry"},
    {name: "Building Supplies & Tools", link: "javascript:void(0)", id: "buildingtoolIndustry"},
    {name: "Carpentry", link: "javascript:void(0)", id: "carpentryIndustry"},
    {name: "Electrical", link: "javascript:void(0)", id: "electricalIndustry"},
    {name: "Hardware & Plumbing", link: "javascript:void(0)", id: "hardwareplumbIndustry"}
]

function addindustrialProfessionalList(){
    let div = document.createElement("DIV");
    div.classList.add("industryProfessListItems");
    industrialProfessionalList.forEach((list) => {
        let span = document.createElement("SPAN");
        span.textContent = list.name;
        span.classList.add("industryProfessList-items");
        span.id = list.id;
        div.appendChild(span);
    })
    document.querySelector("#industrialItems").appendChild(div);
}

addindustrialProfessionalList();



// create Precious Jewellery categorie options

let preciousjewelleryList = [
    {name: "Fine Jewellery", link: "javascript:void(0)", id: "fineJewellery"},
    {name: "Jewellery", link: "javascript:void(0)", id: "jewelleryJewellery"}
]

function addpreciousjewelleryList(){
    let div = document.createElement("DIV");
    div.classList.add("preciousjewelleryItems");
    preciousjewelleryList.forEach((list) => {
        let span = document.createElement("SPAN");
        span.textContent = list.name;
        span.classList.add("preciousjewelleryList-items");
        span.id = list.id;
        div.appendChild(span);
    })
    document.querySelector("#jewelleryItems").appendChild(div);
}

addpreciousjewelleryList();



// create Wellness categorie options

let wellnessList = [
    {name: "Personal Care", link: "javascript:void(0)", id: "personalcareWellness"},
    {name: "Fitness", link: "javascript:void(0)", id: "fitnessWellness"},
    {name: "Skin Care", link: "javascript:void(0)", id: "skincareWellness"},
    {name: "Ayush", link: "javascript:void(0)", id: "ayushWellness"},
    {name: "Mom & Baby", link: "javascript:void(0)", id: "mombabyWellness"},
    {name: "Hair", link: "javascript:void(0)", id: "hairWellness"},
    {name: "Surgical", link: "javascript:void(0)", id: "surgicalWellness"},
    {name: "Fragrances", link: "javascript:void(0)", id: "fragrancesWellness"},
    {name: "Devices", link: "javascript:void(0)", id: "devicesWellness"}
]

function addwellnessList(){
    let div = document.createElement("DIV");
    div.classList.add("wellnessItems");
    wellnessList.forEach((list) => {
        let span = document.createElement("SPAN");
        span.textContent = list.name;
        span.classList.add("wellnessList-items");
        span.id = list.id;
        div.appendChild(span);
    })
    document.querySelector("#wellnessItems").appendChild(div);
}

addwellnessList();



// create Biscuits, Drinks & Packaged Foods subcategorie options

let biscuitsdrinkList = [
    { name: "Chips & Namkeens", link: "javascript:void(0)" },
    { name: "Biscuits & Cookies", link: "javascript:void(0)" },
    { name: "Chocolates & Candies", link: "javascript:void(0)" },
    { name: "Indian Sweets", link: "javascript:void(0)" },
    { name: "Drinks & Juices", link: "javascript:void(0)" },
    { name: "Breakfast Cereals", link: "javascript:void(0)" },
    { name: "Noodles, Pasta & Vermicelli", link: "javascript:void(0)" },
    { name: "Ready To Cook & Eat", link: "javascript:void(0)" },
    { name: "Spread, Sauces & Ketchup", link: "javascript:void(0)" },
    { name: "Pickles, Chutney & Flavouring", link: "javascript:void(0)" }
];

function addbiscuitsdrinkList(){
    let div = document.createElement("DIV");
    div.classList.add("biscuitsdrinksubItems");
    biscuitsdrinkList.forEach((list) => {
        let span = document.createElement("SPAN");
        span.textContent = list.name
        span.classList.add("biscuitsdrinkList-subitems");
        div.appendChild(span);
    })
    document.querySelector("#packagedFoodGroceries").appendChild(div);
}

addbiscuitsdrinkList();
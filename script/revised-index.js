function loadCategories(){
    //fetch the data from website
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //then promise response
    .then((res)=> res.json())
    //send data to display
    .then((data)=>displayCategories(data.categories))
}
function displayCategories(categoris){
    //get the container
    const categoryContainer = document.getElementById("category-container")

    for(let cat of categoris){
        //cerate element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        //append child
        categoryContainer.append(categoryDiv)
    }
}
loadCategories();
console.log("js is connected");
function loadCategories(){
    //1- fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //2- convert promise to json
    .then((res)=> res.json())
    //3- send data to display
    .then((data)=> displayCategories((data.categories)));
}
// {
//     "category_id": "1001",
//     "category": "Music"
// }
function displayCategories(categories){
    // get the container
    const categoryContainer = document.getElementById("category-container");

    // Loop operation on Array of object
    for(let cat of categories){
        // console.log(cat);
        // create element
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button onclick = "loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        // Append the Element
        categoryContainer.append(categoryDiv);
    }

}
// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }
function loadVideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

const loadCategoryVideos = (id) =>{
  
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  // console.log(url);
  fetch(url)
  .then((res) => res.json())
  .then((data) => displayVideos(data.category));
}

const displayVideos = (videos) => {
    // console.log(videos);
    const videoContainer = document.getElementById("video-container")
    videoContainer.innerHTML="";
    videos.forEach((video) =>{
        // console.log(video);
        //create div element 
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
                <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-1 rounded-md text-sm">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="intro">
                    <h2 class="text-sm font-semibold">${video.title}</h2>
                    <p class="text-sm flex gap-1 text-gray-400">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                    <p class="text-sm text-gray-400">${video.others.views} views</p>
              </div>
            </div>
          </div>
        `
        //append
        videoContainer.append(videoCard);
    });
};

loadCategories();
// loadVideos();
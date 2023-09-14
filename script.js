console.log("loading page...")


// index     0   1  2
var likes = [12, 9, 5];
var posts = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3")
];

function like(id){
    likes[id]++;
    posts[id].innerHTML = likes[id] + " like(s)"
    console.log(likes)
}





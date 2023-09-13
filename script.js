
var count = [12, 9, 5];
var likes = document.querySelector(".likes");


function like(){

    for(let i = 0; i < count.length; i++){
        if(count[i] == count[0]){
            console.log(count[i])
            count[i] +=1;
            likes.innerText = count[i] + " Like(s)";
            return count[i];
        }
        else if(count[i] == count[1]){
            count[i] +=1;
            likes.innerText = count[i] + " Like(s)";
            return count[i];
        }
    }
}

// console.log(count)


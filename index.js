var givenRating = false;

for(var i = 0 ; i < 5 ; i++){
    document.querySelectorAll(".num")[i].addEventListener("click" , function(){
        // document.querySelectorAll(".num")[i];
        var buttonInnerHtml = this.innerHTML;
        var key = "n"+buttonInnerHtml;
        if(givenRating === false){
            addAnimation(key);
            givenRating  = true;
            changeHtml(buttonInnerHtml);
        }
        else{
            for(var j = 1 ; j <= 5 ; j++){
                removeAnimation("n"+j);
            }
            addAnimation(key);
            changeHtml(buttonInnerHtml);
        }
    });
}

function addAnimation(key){
    var makeBright = document.querySelector("."+key);
    makeBright.classList.add("visited");
}

function removeAnimation(key){
    var makeBright = document.querySelector("."+key);
    makeBright.classList.remove("visited");
}

function changeHtml(key){
    setTimeout(() => {
        document.querySelector(".submit").addEventListener("click",function(){
            document.querySelector(".thank-page").classList.add("zIndex");
        });
    }, 500);

    document.querySelector(".btn.submit.s1").innerHTML = "You Selected "+ key + " out of 5";
    document.querySelector(".main").classList.add("visible");
}


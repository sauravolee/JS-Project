var btn = document.getElementById("btn");
var isStatus = document.querySelector(".status");
var flag = 0;

btn.addEventListener("click", ()=>{
    if(flag==0)
    {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "Blue";
        btn.innerHTML = "Unfriend";
        flag = 1;
    }
    else
    {
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "Red";
        btn.innerHTML = "Add Friend";
        flag = 0;
    }
    
})

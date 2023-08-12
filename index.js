const regex = /[aeiou]/
const check = document.getElementById("check")
const clearText = document.getElementById("clearText")
const vowels = document.getElementById("vowels")
const text = document.getElementById("text")

check.addEventListener("click",()=>{
    let count = 0
    text.value.split("").forEach((v) =>{
        if(regex.test(v)){
            count +=1
        }else{
            count +=0
        }
    })
    vowels.innerText = `${count}`
})

clearText.addEventListener("click",()=>{
    text.value = ""
    vowels.innerText = "0"
})
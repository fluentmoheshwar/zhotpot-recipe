let isDark = false
function changeTheme(){
    const html = document.querySelector('html')
    if(isDark == false){
        html.style.color = "#ffffff"
        html.style.backgroundColor = "#0f111a"
        isDark = true
    }
    else{
        html.style.color = "#000000"
        html.style.backgroundColor = "#ffffff"
        isDark = false
    }
    
}


        let close_btn = document.querySelector('#close')
        let ham = document.querySelector('#ham')

        let nav = document.querySelector('.side-nav')

        close_btn.addEventListener('click',()=>{
            nav.style.display = "none"
            ham.style.display = "block"

        })
        ham.addEventListener('click',()=>{
            nav.style.display = "block"
            ham.style.display = "none"

        })

    function myPrompt(){
        
        let text;
if (confirm("Wallet Address have been submitted successful") == true) {
  text = "Withdraw Application sent successful";
} else {
  text = "You canceled!";
}
document.getElementById("demo").innerHTML = text;
        
    }

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

        // function myFunction() {
        //     var x = document.getElementById("ham");
        //     var x = document.getElementById("close");

        //     if (x.style.display === "block") {
        //       x.style.display = "none";
        //     } else {
        //       x.style.display = "block";
        //     }
        //   }
const image = document.querySelector("#myImage");
const question = document.querySelector("p");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");

// Click  OUTDOOR EVENT button
btnOne.addEventListener("click", outdoorEvent);

function outdoorEvent(){
    image.setAttribute("src", "assets/outdoorMain.jpg");
    image.style = "width: 500px";
    question.textContent = "WHAT DO YOU THINK?"
    btnOne.innerHTML = "CASUAL OUTFIT";
    btnTwo.innerHTML = "SPORTY ATTIRE";
    btnThree.style = "display: none";

    btnOne.addEventListener("click", casualOutfit);
    btnTwo.addEventListener("click", sporty);
}

// Click CASUAL OUTFIT BUTTON

function casualOutfit(){
        image.setAttribute("src", "assets/casualOutdoor.jpg");
        image.style = "width: 300px";
        question.textContent = "Your casual dress choise sounds perfect for a fun and relaxed day!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }
    
    // Click SPORTY ATTIRE

    function sporty(){
        image.setAttribute("src", "assets/sporty.jpg")
        let image2 = document.querySelector("#img2");
        image2.setAttribute("src", "assets/sporty2.jpg");
        image2.style = "width: 450px";
        image2.style = "height: 600px";
        image.style = "width: 320px";
        question.textContent = "Your sporty attire shows your adventurous spirit and readiness for some fun activities!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }

    //Click WORK button
    btnTwo.addEventListener("click", work);

    function work(){
        image.setAttribute("src", "assets/businessMain.jpg");
        image.style = "width: 500px";
        question.textContent = "No matter which style you choose, you will look absolutely professional!";
        btnOne.innerHTML = "BUSINESS FORMAL";
        btnTwo.innerHTML = "SMART CASUAL";
        btnThree.style = "display: none";

    btnOne.addEventListener("click", businessFormal);
    btnTwo.addEventListener("click", smartCasual);
    }

    function businessFormal(){
        image.setAttribute("src", "assets/BusinessFormal.jpg");
        image.style = "width: 500px";
        question.textContent = "Looking sharp and professional in your business formal attire!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }

    function smartCasual(){
        image.setAttribute("src", "assets/smartCasual.jpg");
        image.style = "width: 500px";
        question.textContent = "Your sense of style strikes the perfect balance between professionalism and comfort!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }

    // Click RESTAURANT

    btnThree.addEventListener("click", restaurant);

    function restaurant(){
        image.setAttribute("src", "assets/casualChic.jpg");
        image.style = "width: 500px";
        question. textContent = "Wear what resonates with you. No doubt, you will carry yourself with grace and confidence!";
        btnOne.innerHTML = "CASUAL CHIC";
        btnTwo.innerHTML = "ELEGANT";
        btnThree.style = "display: none";

        btnOne.addEventListener("click", casualChic);
        btnTwo.addEventListener("click", elegant);
    }

    function casualChic(){
        image.setAttribute("src", "assets/casualChic2.jpg");
        image.style = "width: 500px";
        question.textContent = "Embracing comfort and sophistication, your outfit will radiate confidence and charm!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }

    function elegant(){
        image.setAttribute("src", "assets/casualChic3.jpg");
        image.style = "width: 500px";
        question.textContent = "You have a knack for effortlessly combining elegance with a touch of relaxation!";
        btnOne.style = "display: none";
        btnTwo.style = "display: none";
    }



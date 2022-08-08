var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

});


var sorteio=Math.floor(Math.random()*12+1);



switch(sorteio){

        case 1:
        document.getElementById("face").src="dado1.webp";
        break;

        case 2:
            document.getElementById("face").src="dado1.webp";
            break;
    

        case 3:
        document.getElementById("face").src="dado2.png";
        break;

        case 4:
            document.getElementById("face").src="dado2.png";
            break;


        case 5:
        document.getElementById("face").src="dado3.jfif";
        break;

        case 6:
        document.getElementById("face").src="dado3.jfif";
        break;

        case 7:
        document.getElementById("face").src="dado4.jpg";
        break;
            
        case 8:
        document.getElementById("face").src="dado4.jpg";
        break;
        
        case 9:
        document.getElementById("face").src="dado5.jfif";
        break;
            
         case 10:
        document.getElementById("face").src="dado5.jfif";
        break;

        case 11:
        document.getElementById("face").src="dado6.png";
        break;

        
        case 12:
        document.getElementById("face").src="dado6.png";
        break;
       

    
    }
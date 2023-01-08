const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.jpg',
    },
    {
        name: 'banana',
        img: 'images/banana.jpg',
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.jpg',
    },
    {
        name: 'guava',
        img: 'images/guava.jpg',
    },
    {
        name: 'mango',
        img: 'images/mango.jpg',
    },
    {
        name: 'orange',
        img: 'images/orange.jpg',
    },
    {
        name: 'apple',
        img: 'images/apple.jpg',
    },
    {
        name: 'banana',
        img: 'images/banana.jpg',
    },
    {
        name: 'watermelon',
        img: 'images/watermelon.jpg',
    },
    {
        name: 'guava',
        img: 'images/guava.jpg',
    },
    {
        name: 'mango',
        img: 'images/mango.jpg',
    },
    {
        name: 'orange',
        img: 'images/orange.jpg',
    },

]

cardArray.sort(() => 0.5 - Math.random())
//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////
/////
//




var time_span = document.getElementById('time')



var count = 0
var actualTime
function timmerfun(){
    
    actualTime= time_span.innerText= count + " sec"
    count=count+1
}
var Seted_interval = setInterval(timmerfun ,1000);


var gridDisplay = document.getElementById('grid')
var resultDisplay = document.getElementById('result')







Initial_Box_Creation_Function()
function Initial_Box_Creation_Function() {
    for (let i = 0; i < cardArray.length; i++) {
        var initial_box = document.createElement('img')
        initial_box.setAttribute('id', i)
        initial_box.setAttribute('src', 'images/cover.jpeg')
        initial_box.addEventListener('click', change_img_on_click)
        gridDisplay.appendChild(initial_box)
        console.log(initial_box)
    }

}
let image_name_arr = []
let image_id_arr = []
let won_arr = []


function change_img_on_click() {
    var item_id = this.getAttribute('id')
    this.setAttribute('src', cardArray[item_id].img)

    var item_name = cardArray[item_id].name
    image_name_arr.push(item_name)
    image_id_arr.push(item_id)
    if (image_name_arr.length == 2) {
        setTimeout(checkitemissame_or_not, 500)
    }
}



var allboxs = document.querySelectorAll('img')

function checkitemissame_or_not() {
    console.log('i am called')

    if (image_name_arr[0] === image_name_arr[1]) {
        allboxs[image_id_arr[0]].setAttribute('src', 'images/blank.jpeg')
        allboxs[image_id_arr[1]].setAttribute('src', 'images/blank.jpeg')
        allboxs[image_id_arr[0]].removeEventListener('click', change_img_on_click)
        allboxs[image_id_arr[1]].removeEventListener('click', change_img_on_click)
        won_arr.push(image_name_arr[0])
        resultDisplay.innerText = won_arr.length
    }
    else {
        allboxs[image_id_arr[0]].setAttribute('src', 'images/cover.jpeg')
        allboxs[image_id_arr[1]].setAttribute('src', 'images/cover.jpeg')
    }




    if (won_arr.length == cardArray.length / 2) {
        resultDisplay.innerText = "Congo"
        var abcc = document.getElementById('abc')
        abcc.style.display = "block"
        
        clearInterval(Seted_interval);
        var tt= document.getElementById('winnerTime').innerHTML="You Completed in "+actualTime
        console.log(tt)
        
        



    }
    image_name_arr = []
    image_id_arr = []
}
var timeDisplay = document.getElementById('Current_time')


function timegen(){
    var Genrt_time = new Date()
    timeDisplay.innerHTML=Genrt_time.toLocaleTimeString()
}
setInterval(timegen,1000)







function generateRandomNum(){
    inputVal = ""
    for(let i = 0; i<11;i++){
        randomNum = (Math.floor(Math.random() * 100)).toString()
        inputVal += (randomNum + " ")
    }


    document.getElementById("numList").value = inputVal
}



var countLeft = 0
var countTop = 200
function createBox(num, boxCount, length){
    countLeft += (90-(length*3.0))
    var boxName = "box"+boxCount
    var createBox = document.createElement("div");

    createBox.setAttribute("id", boxName)
    createBox.setAttribute("class", boxName)

    squarePx = 55+"px"
    if (length > 11){
        squarePx = 35+"px"
    }
    if (length > 18){
        squarePx = 29+"px"
    }
    createBox.style.width = squarePx;
    createBox.style.height = squarePx;
    createBox.style.background = "red";
    createBox.style.position = "absolute";
    createBox.style.top = countTop + "px";
    createBox.style.left = countLeft +"px";
    createBox.innerHTML = num;
    document.getElementById("pictureBox2").appendChild(createBox);
    document.getElementById(boxName).style.border="2px solid black";
    document.getElementById(boxName).style.borderRadius="25px";
    document.getElementById(boxName).style.backgroundImage= "linear-gradient(to right, #e7464d, #cd4877, #a055a3, #5f44da)"; 
    document.getElementById(boxName).style.fontSize= "21px"; 
    document.getElementById(boxName).style.display= "flex"; 
    document.getElementById(boxName).style.alignItems= "center"; 
    document.getElementById(boxName).style.justifyContent= "center";
    
}

function sortProcess(){
    numbers = JSON.parse(document.getElementById("sortProcess").textContent);
    lengthOfArr = document.getElementById("arrLength").textContent;
    for(let i = 0; i<lengthOfArr; i++){
        createBox(numbers[0][i], i, lengthOfArr);
    }
}


function insertionSortAnimaiton(){
    numbers = JSON.parse(document.getElementById("sortProcess").textContent);
    lengthOfColumn = numbers.length
    lengthOfRow = document.getElementById("arrLength").textContent;
    changingKeys = JSON.parse(document.getElementById("changingKeys").textContent);

    const indexDiff = []
    countKeys = 0
    l = 1
    r = 0

    for(let i=0; i<lengthOfColumn; i++){
        while(r!= lengthOfRow){
            if (changingKeys.includes(numbers[i][r]) == true){
                l = r;
                while(l!=-1){
                    if (numbers[i][r] == numbers[i+1][l]){
                        indexDiff.push(r);
                        indexDiff.push(l);
                        break;
                    }
                    l-=1;
                }
                break;
            }
            r+=1;
        }
    }
    //indexDiff =[1,0,2,0,3,1,4,3,7,4,8,5,9,0,10,8]
    //1st: starting position
    //end: to go position

    myLoop(indexDiff);       
    

}


var i = 0;    
var id = null;
var checkIfDown = false
var done = false
function myLoop(arr) {  
    var length = document.getElementById("arrLength").textContent
    if(i%2==0){
        document.getElementById("box"+arr[i]).style.backgroundImage = "linear-gradient(to right, #5f44da, #7AD7F0,#5f44da)"
        document.getElementById("box"+arr[i]).style.border="2px dotted black";

    }

    setTimeout(function() {
    if(i%2==0){
        var elem = document.getElementById("box"+arr[i]);   
        var boxToGo = document.getElementById("box"+arr[i+1]);   
        var pos1 = elem.style.top.replace("px"," ");
        var pos2 = elem.style.left.replace("px"," ");
        var pos3 = boxToGo.style.left.replace("px"," ");


        clearInterval(id);
        id = setInterval(frame, 0.2);
        atBottom = false
        function frame() {
        if(pos1<275 && atBottom==false){
            pos1++; 
            elem.style.top = pos1 + 'px'; 
            
        }
        else if(pos2 !=pos3){

            atBottom=true
            pos2--; 
            elem.style.left = pos2 + 'px'; 
        }
        else if(pos1>200 && atBottom==true){
            pos1--; 
            elem.style.top = pos1 + 'px'; 
        }
        else{
            document.getElementById("box"+arr[i]).style.backgroundImage = "linear-gradient(to right, #e7464d, #cd4877, #a055a3, #5f44da)"
            document.getElementById("box"+arr[i]).style.border="2px solid black";
            clearInterval(id);
        } 
      }
    }
      i++;                   
      if (i < arr.length) {
        myLoop(arr);             
      }
      else if(i ==arr.length){

        for(let j = 0; j <arr.length; j++){
            document.getElementById("box"+arr[j]).style.backgroundImage = "linear-gradient(to right, #e7464d, #cd4877, #a055a3, #5f44da)"
            document.getElementById("box"+arr[j]).style.border="2px solid black";
        }
    }   
    },1000*(length*0.3))

    if(checkIfDown==true){
        // console.log(arr[i-1])
        // console.log(arr[i])
        count = 0
        boxAdd1 = arr[i]
        for(let j =arr[i]; j < arr[i-1]; j++){
            count+=1
        }
        done = false
        moveToRight(count, arr[i],arr[i-1], arr)


    }
    if(i%2==0){
        checkIfDown = true
    }
    if(i%2==1){
        checkIfDown = false
    }
  }

var k = 0 
var id1 = null;
var pixelDiff=0
  function moveToRight(count, start, end,arr ){
    k++
    var pos = document.getElementById("box" + (end-k)).style.left.replace("px", "");
    var pos2 = document.getElementById("box" + (end-k+1)).style.left.replace("px", "");

    document.getElementById("box" + end).setAttribute("class", "box" + start)
    document.getElementById("box" + (end-k)).setAttribute("class", "box" + (end-k+1))

    setTimeout(function(){
        
        console.log("box"+(end-k) +"needs to be at " + "box"+(end-k+1))

        var elem = document.getElementById("box" + (end-k));   

        clearInterval(id1);
        id1 = setInterval(frame, 0.1);

        function frame() {
            console.log(pos + "test" + pos2)

         if (pos != pos2) {
            pos++; 
            elem.style.left = pos + 'px';           
        } 
        else {

                clearInterval(id1)
          }
        }
    if(k<count){
        moveToRight(count, start, end, arr)
    }
    else{
        done = true
    }
    if(done == true){
        k=0
        var length = document.getElementById("arrLength").textContent
        
        
        for(let i =0; i<length;i++){
            document.getElementById('box'+i).id = "filler" + i
        }
        for(let i =0; i<length;i++){
            document.getElementById('filler'+i).id = document.getElementById('filler'+i).className
        }
        
    }
    },300)
  }



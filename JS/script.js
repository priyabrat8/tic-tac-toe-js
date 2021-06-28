const boxes = document.querySelectorAll('.boxs');
const  zero = document.getElementById('0');
const  one = document.getElementById('1');
const  two = document.getElementById('2');
const  three = document.getElementById('3');
const  four = document.getElementById('4');
const  five = document.getElementById('5');
const  six = document.getElementById('6');
const  seven = document.getElementById('7');
const  eight = document.getElementById('8');
let x = true;
let win = new Number();

const winner = () => {
   if(zero.className != 'boxs b' && zero.className == one.className && one.className == two.className){
       let AllclassName = zero.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }
   
   else if(three.className != 'boxs b' && three.className == four.className && four.className == five.className){
       let AllclassName = three.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }
   
   else if(six.className != 'boxs b' && six.className == seven.className && seven.className == eight.className){
       let AllclassName = six.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }
   
   else if(zero.className != 'boxs b' && zero.className == three.className && three.className == six.className){
       let AllclassName = zero.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }

   else if(one.className != 'boxs b' && one.className == four.className && four.className == seven.className){
       let AllclassName = one.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }

   else if(two.className != 'boxs b' && two.className == five.className && five.className == eight.className){
       let AllclassName = two.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }
   
   else if(zero.className != 'boxs b' && zero.className == four.className && four.className == eight.className){
       let AllclassName = zero.className;
       let className = AllclassName[(AllclassName.length)-1];
       
       if (className == 'x') {
            win = 1;
       } else {
            win = 2;
       }
       
       setTimeout(()=> alert(`Player ${win} Win.`),11);
       document.location.reload();
   }

   else if(two.className != 'boxs b' && two.className == four.className && four.className == six.className){
    let AllclassName = two.className;
    let className = AllclassName[(AllclassName.length)-1];
    
    if (className == 'x') {
         win = 1;
    } else {
         win = 2;
    }
    
    setTimeout(()=> alert(`Player ${win} Win.`),13);
    document.location.reload();
   }
   
   else if (zero.className != 'boxs b' && one.className != 'boxs b' && two.className != 'boxs b' && three.className != 'boxs b' && four.className != 'boxs b' && five.className != 'boxs b' && six.className != 'boxs b' && seven.className != 'boxs b' && eight.className != 'boxs b'){
    setTimeout(()=> alert(`Draw.`),13);
    document.location.reload();
   }
}

const logo = (e) => {
    
    if (x){
        e.classList.add('x');
        e.innerHTML = '&#xd7;';
        x = false;
    }
    else{
        e.classList.add('o');
        e.innerHTML = '&#79;';
        e.setAttribute('id','o');
        x = true;
    }
    e.classList.remove('b');
    e.disabled = true;

    winner();
}

boxes.forEach((e) => {
    e.addEventListener('click',() => {
        logo(e);
    })
})

alert(`
Player1 - 'x'
Player2 - 'o'
First turn for 'x' and second turn for 'o' and it will continue......
`);

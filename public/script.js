let triBtn = document.getElementById('triBtn');
triBtn.addEventListener('click', calculateTriangleArea);
function calculateTriangleArea(){

    let triBaseValue = parseFloat(document.getElementById('triBase').value)
    
    let triHightValue = parseFloat( document.getElementById('triHight').value)

    if (isNaN(triBaseValue) || isNaN(triHightValue)) {
        let area = 'invalid input';
        
        document.getElementById('triSpan').innerText = area;
        
        return
    }

    let area = `${0.5 * triBaseValue * triHightValue }cm2` ;

    document.getElementById('triSpan').innerText = area;


   let list =  document.createElement('li');
   list.innerText=` triangleArea : b=${triBaseValue} x h=${triHightValue} = ${area}`;
   document.getElementById('asideUl').appendChild(list)
    
    
   


    document.getElementById('triBase').value = "";
    document.getElementById('triHight').value = "";



}

let recBtn = document.getElementById('recBtn');


recBtn.addEventListener('click',calculateRectangleArea);
function calculateRectangleArea(){
    let recWidthValue = parseFloat(document.getElementById('recWidth').value);

    let recHightValue = parseFloat(document.getElementById('recHight').value);

    if(isNaN(recWidthValue) || isNaN(recHightValue) ){
        let recArea = 'invalid input'
        document.getElementById('recSpan').innerHTML = recArea ;
        return
    }

    let recArea = recHightValue*recWidthValue + " cm2";
    document.getElementById('recSpan').innerHTML = recArea ;


    let list =  document.createElement('li');
    list.innerText=` RectangleArea : w= ${recWidthValue} x h=${recHightValue} = ${recArea}`;
    document.getElementById('asideUl').appendChild(list)
    document.getElementById('recWidth').value = "";
    document.getElementById('recHight').value = "";
    
        return
    
}




let paraBtn = document.getElementById('paraBtn');


paraBtn.addEventListener('click',calculateParallelogramArea);
function calculateParallelogramArea(){
    let paraBaseValue = parseFloat(document.getElementById('paraBase').value);

    let paraHightValue = parseFloat(document.getElementById('paraHight').value);

    if(isNaN(paraBaseValue) || isNaN(paraHightValue) ){
        let paraArea = 'invalid input'
        document.getElementById('paraSpan').innerHTML = paraArea ;
        return
    }

    let paraArea = paraBaseValue*paraHightValue + " cm2";
    document.getElementById('paraSpan').innerHTML = paraArea ;


    let list =  document.createElement('li');
    list.innerText=`parallelogramArea : w= ${paraBaseValue} x h=${paraHightValue} = ${paraArea}`;
    document.getElementById('asideUl').appendChild(list)
    document.getElementById('paraBase').value = "";
    document.getElementById('paraHight').value = "";
    
        return
    
}






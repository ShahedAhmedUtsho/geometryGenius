let triBtn = document.getElementById('triBtn');
triBtn.addEventListener('click', calculateTriangleArea);
function calculateTriangleArea(){

    let triBaseValue = parseFloat(document.getElementById('triBase').value)
    
    let triHightValue = parseFloat( document.getElementById('triHight').value)

    if (isNaN(triBaseValue) || isNaN(triHightValue)) {
        let area = 'invalid input';
        
        document.getElementById('triSpan').innerText = area;
        console.log(area);
        return
    }

    let area = `${0.5 * triBaseValue * triHightValue }cm2` ;

    document.getElementById('triSpan').innerText = area;


   let list =  document.createElement('li');
   list.innerText=` triangleArea : b=${triBaseValue} x h=${triHightValue} = ${area}`;
   document.getElementById('asideUl').appendChild(list)
    
    
    // console.log(area)






}




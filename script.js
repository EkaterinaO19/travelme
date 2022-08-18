let loadMoreBtn = document.querySelector('.load-more-btn .load-more');
let currentItem = 3;
loadMoreBtn.onClick = () => {
    let boxes = [...document.querySelectorAll('.container-box .box')];
    for (let i = currentItem; 1 < currentItem + 3; i++){
        boxes[i].style.display = 'block';
    };
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = 'block';
    }
}
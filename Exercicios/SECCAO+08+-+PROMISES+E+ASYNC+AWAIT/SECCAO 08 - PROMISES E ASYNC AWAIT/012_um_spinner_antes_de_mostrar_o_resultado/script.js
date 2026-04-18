function firstText(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, rem ratione et perferendis facilis iste necessitatibus distinctio ipsam esse vel?');
        }, 4000);
    });
}

function secondText(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, temporibus doloremque? Quod laudantium architecto quia amet deleniti, quo ut et qui fugit voluptatibus aspernatur tempora maxime ipsum quisquam, ab repellat optio quaerat commodi accusamus dolor incidunt. Voluptatibus tenetur dolorem hic.');
        }, 2000);
    });
}

function thirdText(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Lorem ipsum dolor sit amet.');
        }, 1000);
    });
}


const text_1 = document.querySelector("#text_1");
const text_2 = document.querySelector("#text_2");
const text_3 = document.querySelector("#text_3");


firstText().then((result) => {
    text_1.innerHTML = result;
});
secondText().then((result) => {
    text_2.innerHTML = result;
});
thirdText().then((result) => {
    text_3.innerHTML = result;
});
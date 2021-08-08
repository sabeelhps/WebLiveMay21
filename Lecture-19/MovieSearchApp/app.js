const form = document.querySelector('form');
const list = document.getElementById('list');


async function getShow(searchText) {
    

    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    const res = await axios.get(url);
   
    for (let item of res.data) {
        if (item.show.image) {
            console.log(item.show.image.medium);

            const img = document.createElement('img');

            img.src = item.show.image.medium;
            img.style.margin = '10px';
            list.append(img);

        }
       
    }

}




form.addEventListener('submit', (e) => {
    e.preventDefault();


    const searchText = form.elements[0].value;

    getShow(searchText);

    form.elements[0].value="";
})
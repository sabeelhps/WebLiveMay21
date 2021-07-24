const img = document.querySelector('img');

function animateImage(){

    let isTrue = true;

    setInterval(() => {

        if (isTrue) {
            img.setAttribute('src','https://images.unsplash.com/photo-1561390368-a315cfe6833b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
        } else {
            img.setAttribute('src','https://images.unsplash.com/photo-1545065942-3a37886535d5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
        }

        isTrue = !isTrue;

    }, 2000);

}

// animateImage();


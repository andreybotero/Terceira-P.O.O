const posts = [];
let indexPost = -1;
let i = 0;

function savePost() {
    i++
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const age = document.getElementById("age").value;
    const eyesColors = document.getElementById("eyesColors").value;
    const date = document.getElementById("date").value;

    if (indexPost == -1) {
        if (firstName && secondName && age && eyesColors && date) {
        storePost(firstName, secondName, age, eyesColors, date);
        cleanFields();
    }
}else {
        if (firstName && secondName && age && eyesColors && date) {
            posts[indexPost] = {
                firstName,
                secondName,
                age,
                eyesColors,
                date
            }
    }cleanFields();
}

    
    showPosts();
    indexPost = -1;

}

function storePost(firstName, secondName, age, eyesColors, date) {
    const post = {
        firstName,
        secondName,
        age,
        eyesColors,
        date
    };

    posts.push(post)
}

function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="post">
        
        <p><strong>Nome: </strong>${post.firstName} ${post.secondName}</p>
        <p><strong>Idade: </strong>${post.age}</p>
        <p><strong>Cor dos olhos: </strong>${post.eyesColors}</p>
        <p><strong>Data de nascimento: </strong>${post.date}</p>

        <button onclick="editPost(${index})">Editar</button>
        <button onclick="removePost(${index})">Remover</button>
        
        </div>
        `;
    })
    document.getElementById("list").innerHTML = showContent;
}

function cleanFields() {
    document.getElementById("firstName").value = "";
    document.getElementById("eyesColors").value = "";
    document.getElementById("age").value = "";
    document.getElementById("secondName").value = "";
    document.getElementById("date").value = "";
}

function editPost(index) {
    indexPost = index;
    const post = posts[index];

    document.getElementById("firstName").value = post.firstName;
    document.getElementById("secondName").value = post.secondName;
    document.getElementById("age").value = post.age;
    document.getElementById("eyesColors").value = post.eyesColors;
    document.getElementById("date").value = post.date;
}

function removePost(index) {
    posts.splice(index, 1);

    showPosts();
i = i - 1;
        
    
    
}
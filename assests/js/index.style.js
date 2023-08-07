const posts = [];
let indexPost = -1;
let i = 0;

function savePost() {
    i++
    const firstName = document.getElementById("firstName").value;
    const secondName = document.getElementById("secondName").value;
    const age = document.getElementById("age").value;
    const eyesColors = document.getElementById("eyesColors").value;

    if (indexPost == -1) {
        if (firstName && secondName && age && eyesColors) {
        storePost(firstName, secondName, age, eyesColors);
        cleanFields();
    }
}else {
        if (firstName && secondName && age && eyesColors) {
            posts[indexPost] = {
                firstName,
                secondName,
                age,
                eyesColors
            }
    }cleanFields();
}

    
    showPosts();
    indexPost = -1;

}

function storePost(firstName, secondName, age, eyesColors) {
    const post = {
        firstName,
        secondName,
        age,
        eyesColors
    };

    posts.push(post)
}

function showPosts() {
    document.getElementById("list").classlist.remove("hidden");
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="post">
        <h2>${post.firstName}</h2>
        <p><strong>Resumo: </strong>${post.secondName}</p>
        <p><strong>Autor: </strong>${post.age}</p>
        <p><strong>Data de publicação: </strong>${post.eyesColors}</p>

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
}

function editPost(index) {
    indexPost = index;
    const post = posts[index];

    document.getElementById("firstName").value = post.firstName
    document.getElementById("secondName").value = post.secondName
    document.getElementById("age").value = post.age
    document.getElementById("eyesColors").value = post.eyesColors
}

function removePost(index) {
    posts.splice(index, 1);

    showPosts();
if (i == 1) {
    document.getElementById("list").classlist.add("hidden");
}
i = i - 1;
        
    
    
}
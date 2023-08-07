const posts = [];
let indexPost = -1;
let i = 0;

function savePost() {
    i++
    const title = document.getElementById("title").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    if (indexPost == -1) {
        if (title && resume && publisher && date) {
        storePost(title, resume, publisher, date);
        cleanFields();
    }
}else {
        if (title && resume && publisher && date) {
            posts[indexPost] = {
                title,
                resume,
                publisher,
                date
            }
    }cleanFields();
}

    
    showPosts();
    indexPost = -1;

}

function storePost(title, resume, publisher, date) {
    const post = {
        title,
        resume,
        publisher,
        date
    };

    posts.push(post)
}

function showPosts() {
    document.getElementById("list").classList.remove("hidden");
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="post">
        <h2>${post.title}</h2>
        <p><strong>Resumo: </strong>${post.resume}</p>
        <p><strong>Autor: </strong>${post.publisher}</p>
        <p><strong>Data de publicação: </strong>${post.date}</p>

        <button onclick="editPost(${index})">Editar</button>
        <button onclick="removePost(${index})">Remover</button>
        
        </div>
        `;
    })
    document.getElementById("list").innerHTML = showContent;
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("resume").value = "";
}

function editPost(index) {
    indexPost = index;
    const post = posts[index];

    document.getElementById("title").value = post.title
    document.getElementById("resume").value = post.resume
    document.getElementById("publisher").value = post.publisher
    document.getElementById("date").value = post.date
}

function removePost(index) {
    posts.splice(index, 1);

    showPosts();
if (i == 1) {
    document.getElementById("list").classList.add("hidden");
}
i = i - 1;
        
    
    
}
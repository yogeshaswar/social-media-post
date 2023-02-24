let form = document.querySelector(".form");
let input = document.querySelector(".post-input"); //input
let errorMessage = document.querySelector(".error"); //error

let btnSubmit = document.querySelector(".btn-submit");

let showPost = document.querySelector(".show-posts");

const data = [];

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('clicked');
    //validate-post-check
    postValidation();
});

//valid-post-check
const postValidation = () => {
    if(input.value === ""){
        errorMessage.textContent = "Post Can't be empty";
        console.log("Invalid");
    }else{
        errorMessage.textContent = "";
        //data accept and store
        acceptAndStoreData();
        displayPosts();
    }
}

const acceptAndStoreData = () => {
    data["text"] = input.value;
}

const displayPosts = () => {
    showPost.innerHTML += `
    <div class="show-post--post">
    <p>${data.text}</p>
    <span class="options">
        <button onClick="editPost(this)" class="btn-edit">Edit</button>
        <button onClick="deletePost(this)" class="btn-delete">Delete</button>
    </span>
</div>
    `;
    resetForm();
}

const resetForm = () => {
    input.value = "";
}

const deletePost = (e) => {
    e.parentElement.parentElement.remove();
    console.log(e);
    console.log(e.parentElement);
    console.log(e.parentElement.parentElement);
    // console.log("deleting");
}

const editPost = (e) => {
    console.log("editing");
    console.log(e.parentElement.previousElementSibling);
    input.value = e.parentElement.previousElementSibling.textContent;
    e.parentElement.parentElement.remove();
}
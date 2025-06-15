async function fetchUserData(){
    // define the API url
    const apiUrl='https://jsonplaceholder.typicode.com/users'
    //select the data container
    const dataContainer=document.getElementById('api-data')
    // fetch data using try-catch
    try{
        const response = await fetch(apiUrl)
        const users = await response.json()
        //clear the loading massage
    dataContainer.innerHTML=''
    // create and append user list
    const userList = document.createElement("ul");
    users.forEach(function(user) {
          const li = document.createElement("li");  // Create a <li>
            li.textContent = user;                    // Set the user's name
        userList.appendChild(li); 
    });
    userList.append(dataContainer)
    }catch {
        dataContainer.textContent='Failed to load user data.'
    }
    
}
// invoke fetchUserData on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", fetchUserData)
       

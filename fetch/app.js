document.getElementById('fetchButton').addEventListener('click', fetchUserData);
document.getElementById('fetchMultipleButton').addEventListener('click', fetchMultipleUsers);

function fetchUserData() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUserData(user);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}

function fetchMultipleUsers() {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => {
            const users = data.results;
            displayUserList(users);
        })
        .catch(error => {
            console.error('Error fetching multiple users:', error);
        });
}

function displayUserData(user) {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture" class="mx-auto mb-4 rounded-full shadow-lg">
        <h3 class="text-lg font-bold">${user.name.first} ${user.name.last}</h3>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <p>${user.location.city}, ${user.location.country}</p>
    `;
}

function displayUserList(users) {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = ''; // Clear previous list
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('bg-gray-200', 'p-4', 'rounded', 'mb-4', 'shadow');
        userCard.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="User Picture" class="mx-auto mb-2 rounded-full shadow-lg">
            <h3 class="text-lg font-bold">${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.location.city}, ${user.location.country}</p>
        `;
        userListDiv.appendChild(userCard);
    });
}

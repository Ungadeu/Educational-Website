// fetch user data from the server
async function fetchUserData(email) {
    try {
        const response = await fetch(`http://localhost:3000/user/${email}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        // populates teh HTML with user data
        document.querySelector('.profile-pic').src = userData.profilePicture || '../Images/user_5735921.png';
        document.querySelector('.username').textContent = `${userData.firstName} ${userData.lastName}`;
        document.querySelector('.bio').textContent = userData.bio || 'No bio available';
        document.querySelector('.detail-value.email').textContent = userData.email;
        document.querySelector('.detail-card.join-date .detail-value').textContent = userData.accountStatus;
        document.querySelector('.detail-card.detail-value .detail-value').innerHTML = `<span class="status-indicator status-active"></span>${userData.lastActive}`;

    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
// Call the function with a sample user email
fetchUserData('Adnaan.Thadathil@example.com');
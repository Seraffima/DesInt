document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const recentCatchesList = document.getElementById('recentCatchesList');
    const fishList = document.getElementById('fishList');

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `username=${username}&password=${password}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Login successful');
            } else {
                alert('Login failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function fetchRecentCatches() {
        fetch('recent_catches.php')
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        console.error('Error response:', text);
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then(data => {
                recentCatchesList.innerHTML = data.map(catchItem => `<p>${catchItem.fish_name} - ${catchItem.date}</p>`).join('');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function fetchFishEncyclopedia() {
        fetch('fish_encyclopedia.php')
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        console.error('Error response:', text);
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then(data => {
                fishList.innerHTML = data.map(fish => `<p>${fish.name} - ${fish.description}</p>`).join('');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    loginButton.addEventListener('click', login);
    fetchRecentCatches();
    fetchFishEncyclopedia();
});
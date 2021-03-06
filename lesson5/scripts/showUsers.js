const AVATAR_URL = 'https://eu.ui-avatars.com/api/?name='

const createUserCard = (user) => {

		const {name, email, website} = user;

		const userCard = document.createElement('div');
		// userCard.textContent = user.name;
		userCard.className = 'user-card';

		const info = document.createElement('div')
		info.className = 'user-info';

		const userName = document.createElement('h4')
		userName.textContent = name;

		const userEmail = document.createElement('div')
		userEmail.textContent = `Email: ${email}, website: ${website}` //'Email: ' + email;


		const userAvatar = document.createElement('img');
		userAvatar.src = AVATAR_URL + name;

		userCard.appendChild(userAvatar);
		userCard.appendChild(info);
		info.appendChild(userName);
		info.appendChild(userEmail); // userName.after(user)



		userListElem.appendChild(userCard);


}

const showUsers = (users) => {
	// console.log(users)

	// const newTag = document.createElement('div');
	// newTag.textContent = 'Im created'
	// document.body.appendChild(newTag)

	users.forEach(createUserCard);





}
# PassGuardx

PassGuardx is a simple password manager application built using Next.js and Tailwind CSS. It allows users to securely store website URLs, usernames, and passwords. The application also provides features such as showing/hiding passwords, copying credentials to the clipboard, adding new passwords, deleting individual passwords, and clearing all stored passwords. React Hot Toast is used for providing toast notifications.

## You can use PassGuardx here: [https://passguardx.vercel.app](https://passguardx.vercel.app)

## Features

- **Adding Passwords**: Users can add passwords by providing the website URL, username, and password.
- **Secure Password Entry**: The password field hides the entered characters for security purposes.
- **Copying Credentials**: Users can easily copy website URLs, usernames, and passwords to the clipboard.
- **Deleting Passwords**: Users can delete individual passwords or clear all stored passwords.
- **Toaster Notifications**: Toast notifications are used to provide feedback for actions such as adding, deleting, or copying passwords.
- **Password Validation**: The application validates the website URL, ensuring it starts with "http://" or "https://", and checks for disallowed characters in passwords.

## Security and Data Privacy

PassGuardx prioritizes security and data privacy by utilizing client-side storage through `localStorage`. This means that all passwords are securely stored locally on the user's machine and never transmitted to any server. By leveraging the browser's `localStorage` API, PassGuardx ensures that user passwords remain private and inaccessible to anyone other than the user themselves. This approach enhances security and gives users full control over their sensitive information, mitigating the risks associated with storing passwords on remote servers.

## Development

1. Clone the repository: `git clone https://github.com/arnavnagpurkar/PassGuardx`
2. Navigate to the project directory: `cd PassGuardx`
3. Install dependencies: 
   - Using npm: `npm install`
   - Using yarn: `yarn install`
4. Run the development server: 
   - Using npm: `npm run dev`
   - Using yarn: `yarn dev`
5. Open your web browser and go to `localhost:3000`.

## Usage

1. Access the application through the provided URL.
2. To add a new password, enter the website URL, username, and password in the respective input fields, and click on the "Add Password" button.
3. Toggle the visibility of the password by clicking on the eye icon next to the password input field.
4. Copy credentials to the clipboard by clicking on the copy icon next to each field.
5. Delete individual passwords by clicking on the delete icon next to the password entry.
6. Clear all stored passwords by clicking on the "Delete All" button (confirmation dialog will appear).

## Technologies Used

- Next.js
- Tailwind CSS
- React Hot Toast

## Credits

This project was created by [Arnav Nagpurkar](https://github.com/arnavnagpurkar) alone.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.  

- [Issue Tracker](https://github.com/arnavnagpurkar/PassGuardx/issues)
- [Pull Requests](https://github.com/arnavnagpurkar/PassGuardx/pulls)

## Acknowledgements

Special thanks to [Arnav Nagpurkar](https://github.com/arnavnagpurkar) for creating this project.

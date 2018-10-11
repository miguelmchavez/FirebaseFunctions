# Firebase Chat Functions
> Firebase Functions para enviar notificaciones Push cuando un usuario recibe un nuevo mensaje.



Un ejemplo de cómo utilizar Firebase Functions para enviar notificaciones Push a una aplicación hecha utilizando Ionic.  
Se crea un Evento cada vez que un usuario envía un mensaje dentro de un chat.  
Una vez que se detectó el Evento se procede a enviar una notificación al otro miembro del Chat,  
para ello es necesario contar con un Token que identifica cada celular de los usuarios de nuestra aplicación Ionic.

## Estructura

### Realtime Database
Colecciones.


	.
	├── chatInfo/{chatId}
	│	├── last: message
	│	├── sender: member
	│	└── members
	│		├── member1: member1
	│		└── member2: member2
	├── chatMessage/{chatId}/{chatMessage}
	│	├── member: member
	│	├── message: message
	│	└── timestamp: timestamp
	└── userProfile/{idUser}
		├── email: email
		├── username: username
		├── name: name
		└── token: token


### Firebase Functions

chatAppFunctions Folder.


	.
    ├── .firebaserc             # Hidden file that helps you quickly switch between projects with `firebase use`
    ├── firebase.json           # Describes properties for your project
    └── functions               # Directory containing all your functions code
        ├── .eslintrc.json      # Optional file containing rules for JavaScript linting.
        ├── package.json        # npm package file describing your Cloud Functions code
        ├── index.js            # main source file for your Cloud Functions code
        └── node_modules        # directory where your dependencies (declared in package.json) are installed

## Instrucciones

Windows:

```
mkdir chatAppFunctions
cd chatAppFunctions
npm install -g firebase-tools
firebase login
firebase init functions
firebase deploy --only functions
```

Una vez ejecutado el comando "firebase init functions" reemplazar el archivo index.js dentro de la carpeta functions con el código que se muestra en este repo.

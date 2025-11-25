# Instrucciones Paso a Paso - App de Vibración

## Parte 1: Preparación (No necesitas saber programación)

### Paso 1: Crear proyecto en Firebase
1. Abre tu navegador y ve a: https://console.firebase.google.com/
2. Haz clic en "Agregar proyecto" 
3. Escribe un nombre como "MiAppVibracion" y haz clic en "Continuar"
4. Desactiva "Google Analytics para este proyecto" y haz clic en "Crear proyecto"
5. Espera a que se cree el proyecto (puede tardar un momento)
6. Cuando aparezca "Tu proyecto está listo", haz clic en "Continuar"

### Paso 2: Configurar la base de datos
1. En el menú izquierdo, haz clic en "Realtime Database"
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en modo de prueba" y haz clic en "Habilitar"
4. Ya tienes la base de datos lista

### Paso 3: Obtener los datos de configuración
1. Haz clic en el ícono de engranaje (⚙️) junto a "Project Overview"
2. Selecciona "Configuración del proyecto"
3. Baja hasta "SDK setup and configuration"
4. Selecciona "npm" en lugar de "CDN"
5. Copia los valores que aparecen en el objeto de configuración:
   - apiKey
   - authDomain
   - databaseURL
   - projectId
   - storageBucket
   - messagingSenderId
   - appId

## Parte 2: Instalar la aplicación en los dos dispositivos

### Paso 4: Instalar la aplicación
1. En cada dispositivo (el tuyo y el de tu pareja):
   - Descarga la aplicación desde el enlace que te proporcionaron
   - O genera tu propio APK siguiendo las instrucciones en GENERAR_APK.md
2. Instala el archivo APK en cada dispositivo
3. Asegúrate de permitir la instalación de "Fuentes desconocidas" si es necesario

## Parte 3: Configurar la aplicación (clic por clic)

### Paso 5: Configuración inicial en tu dispositivo
1. Abre la aplicación en tu dispositivo
2. Verás una pantalla de "Configuración Inicial"
3. Anota tu "ID de Dispositivo" (es un código como "device_xxxxxx")
4. Entra en los campos siguientes con los datos que copiaste de Firebase:
   - "Firebase API Key" → pega el apiKey
   - "Firebase Database URL" → pega el databaseURL
   - "Firebase Auth Domain" → pega el authDomain
   - "Firebase Project ID" → pega el projectId
   - "Firebase Storage Bucket" → pega el storageBucket
   - "Firebase Messaging Sender ID" → pega el messagingSenderId
   - "Firebase App ID" → pega el appId
5. Pídele a tu pareja que abra la aplicación en su dispositivo y te diga su ID
6. Entra en el campo "ID del Dispositivo Emparejado" el ID que te dio tu pareja
7. Haz clic en "Guardar Configuración"

### Paso 6: Configuración en el dispositivo de tu pareja
1. Tu pareja debe repetir el mismo proceso:
   - Abrir la aplicación
   - Copiar su ID de dispositivo
   - Introducir los mismos datos de Firebase
   - En el campo "ID del Dispositivo Emparejado", introducir TU ID (no el de ella)
   - Hacer clic en "Guardar Configuración"

## Parte 4: Usar la aplicación

### Paso 7: Probar la conexión
1. En tu dispositivo, haz clic en el botón "Hacer Vibrar el Otro Dispositivo"
2. El teléfono de tu pareja debería vibrar
3. En el dispositivo de tu pareja, haz clic en el mismo botón
4. Tu dispositivo debería vibrar

### Paso 8: Solución de problemas
Si no funciona:
- Asegúrate que ambos dispositivos estén conectados a Internet
- Verifica que los IDs estén correctamente introducidos (tu ID en el dispositivo de tu pareja, y su ID en el tuyo)
- Confirma que todos los datos de Firebase sean correctos en ambos dispositivos
- Cierra y vuelve a abrir la aplicación en ambos dispositivos

## ¡Listo!
Ahora puedes hacer vibrar el dispositivo de tu pareja cuando quieras tocando un botón, y ella puede hacer lo mismo contigo.

Recuerda que ambos dispositivos deben tener la aplicación abierta (puede estar en segundo plano) para que funcione correctamente.
# App de Vibración para Parejas

Esta aplicación te permite hacer vibrar el teléfono de tu pareja (y viceversa) tocando un botón en tu dispositivo.

## Cómo usar la aplicación

### Paso 1: Configuración Inicial

1. Abre la aplicación en ambos dispositivos (tuyo y el de tu pareja)
2. Cada dispositivo generará un ID único que se mostrará en la pantalla de configuración
3. Anota tu ID y pídele a tu pareja que te dé su ID
4. En la pantalla de configuración, ingresa los siguientes datos de Firebase:
   - API Key
   - Database URL
   - Auth Domain
   - Project ID
   - Storage Bucket
   - Messaging Sender ID
   - App ID

### Paso 2: Emparejamiento

1. En el campo "ID del Dispositivo Emparejado", ingresa el ID que te dio tu pareja
2. Haz clic en "Guardar Configuración"
3. Repite este proceso en el otro dispositivo, pero ingresando tu ID en lugar del de tu pareja

### Paso 3: Uso

Una vez configurado, puedes:
- Tocar el botón "Hacer Vibrar el Otro Dispositivo" para hacer vibrar el teléfono de tu pareja
- El dispositivo vibrará automáticamente cuando tu pareja toque el botón en su dispositivo

## Notas Importantes

- Ambos dispositivos deben estar conectados a Internet
- La aplicación debe estar abierta en segundo plano en ambos dispositivos para que funcione correctamente
- Si cambias de dispositivo o reinstalas la aplicación, se generará un nuevo ID
- Para cambiar la configuración, toca el botón "Cambiar Configuración"

## Cómo obtener los datos de Firebase

1. Ve a https://console.firebase.google.com/
2. Crea un nuevo proyecto o selecciona uno existente
3. En el panel de control, haz clic en "Realtime Database" en el menú izquierdo
4. Crea una nueva base de datos en modo "Prueba" (esto permite conexiones sin autenticación)
5. Los datos requeridos se encuentran en la configuración del proyecto (ícono de engranaje > "Configuración del proyecto")

## Soporte

Si tienes problemas con la aplicación:
- Asegúrate de que ambos dispositivos tengan conexión a Internet
- Verifica que hayan ingresado correctamente los IDs de cada dispositivo
- Confirma que los datos de Firebase sean correctos
- Cierra y vuelve a abrir la aplicación si no responde
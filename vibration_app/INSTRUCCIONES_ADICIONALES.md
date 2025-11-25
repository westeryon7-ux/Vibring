# Guía Completa para Ejecutar la App de Vibración

## Cómo ejecutar la aplicación en modo de desarrollo

### Opción 1: En tu computadora local
1. Abre una terminal o consola de comandos
2. Navega al directorio del proyecto: `cd /ruta/a/vibration_app`
3. Ejecuta: `npx expo start`
4. Se abrirá una página web con un código QR
5. Escanea el código QR con la app Expo Go en tu celular

### Opción 2: En un entorno en línea (como este)
1. Asegúrate de tener instalado Expo CLI: `npm install -g @expo/cli`
2. Desde el directorio del proyecto: `npx expo start --tunnel`
3. Esto creará un enlace público que puedes usar en tu celular
4. Abre el enlace desde tu celular o escanea el código QR

## Personalización de la app

### Cambiar el nombre de la aplicación
Edita el archivo `app.json` y modifica el campo "name" y "displayName".

### Cambiar colores y estilos
Puedes modificar los estilos en el archivo `App.js`, dentro del objeto `styles`.

### Ajustar la duración y patrón de vibración
En lugar de `Vibration.vibrate()`, puedes usar:
- `Vibration.vibrate(1000)` para vibrar durante 1 segundo
- `Vibration.vibrate([100, 200, 100, 200])` para un patrón personalizado

## Seguridad y consideraciones importantes

### Protección de la configuración de Firebase
- Nunca compartas tu archivo `firebaseConfig.js` públicamente
- No subas este archivo a repositorios públicos
- En producción, considera usar variables de entorno

### Control de acceso
- En producción, considera implementar autenticación para que solo los usuarios autorizados puedan conectarse
- Puedes usar Firebase Authentication para este propósito

### Costos
- Firebase ofrece un plan gratuito que debería ser suficiente para uso personal
- Para uso intensivo, puede haber costos asociados

## Distribución de la aplicación

### Crear una versión standalone (app independiente)
1. Configura los archivos de configuración para iOS y Android
2. Ejecuta: `npx expo build:android` o `npx expo build:ios`
3. Sube la app resultante a Play Store o App Store

### Usar Expo Development Builds
- Permite probar la app sin conexión a Internet
- Requiere más configuración inicial

## Solución avanzada de problemas

### Problemas de conexión
- Verifica que la base de datos de Firebase tenga reglas de seguridad adecuadas
- Asegúrate de que ambos dispositivos estén conectados a Internet
- Verifica que no haya bloqueadores de anuncios que interfieran con las conexiones

### Problemas de vibración
- Algunos dispositivos tienen configuraciones de accesibilidad que pueden afectar la vibración
- Verifica que la app tenga permisos para vibrar
- En algunos Android, necesitas activar "Accesibilidad" para que funcione correctamente

## Recursos útiles

### Documentación
- Expo: https://docs.expo.dev/
- Firebase: https://firebase.google.com/docs
- React Native: https://reactnative.dev/docs/getting-started

### Soporte
- Comunidad de Expo: https://forums.expo.dev/
- Stack Overflow: Busca con las etiquetas "expo", "firebase", "react-native"

## Consejos para usuarios sin experiencia

1. No te preocupes si algo no funciona a la primera, es normal
2. Pide ayuda a alguien con experiencia si tienes problemas
3. Asegúrate de seguir todos los pasos en orden
4. Ten paciencia, algunas operaciones pueden tardar un poco
5. Si algo falla, cierra la app y vuelve a abrirla

¡Disfruta de tu aplicación de vibración para parejas!
# App de Vibración para Parejas - Resumen del Proyecto

## Descripción del proyecto
Esta aplicación permite que dos dispositivos se conecten y se hagan vibrar mutuamente a través de una conexión en tiempo real. Es ideal para parejas que desean comunicarse de forma sutil y divertida.

## Archivos del proyecto

### Archivos principales
- `App.js`: Contiene el código principal de la aplicación
- `firebaseConfig.js`: Contiene la configuración de Firebase (debe actualizarse con tus credenciales)
- `package.json`: Define las dependencias y configuración del proyecto
- `app.json`: Configuración general de la aplicación Expo

### Documentación
- `README.md`: Documentación general del proyecto
- `PASO_A_PASO.md`: Instrucciones detalladas paso a paso para usuarios sin experiencia
- `INSTALACION.md`: Guía para instalar las dependencias necesarias
- `INSTRUCCIONES_ADICIONALES.md`: Información adicional sobre personalización y solución de problemas
- `SUMMARY.md`: Este archivo, resumen general del proyecto

## Funcionalidades principales
1. **Vibración remota**: Haz vibrar el dispositivo de tu pareja tocando un botón
2. **Conexión bidireccional**: Ambos dispositivos pueden hacer vibrar al otro
3. **Identificación única**: Cada dispositivo tiene un ID único para la conexión
4. **Interfaz sencilla**: Diseño intuitivo para usuarios sin experiencia

## Tecnologías utilizadas
- **React Native**: Framework para crear aplicaciones móviles
- **Expo**: Plataforma para desarrollar aplicaciones React Native
- **Firebase Realtime Database**: Para la comunicación en tiempo real entre dispositivos
- **Expo Vibration**: API para controlar la vibración del dispositivo

## Cómo empezar
1. Sigue las instrucciones en `PASO_A_PASO.md` para configurar la aplicación
2. Asegúrate de instalar las dependencias según `INSTALACION.md`
3. Configura Firebase con tus credenciales en `firebaseConfig.js`
4. Ejecuta la aplicación usando Expo Go en tus dispositivos

## Requisitos
- Dispositivos móviles con Android o iOS
- Conexión a Internet en ambos dispositivos
- Cuenta de Google para Firebase
- Aplicación Expo Go instalada en ambos dispositivos

## Personalización
Puedes personalizar:
- Colores y estilos en el archivo `App.js`
- Nombre de la aplicación en `app.json`
- Duración y patrones de vibración
- Textos y mensajes de la interfaz

## Notas importantes
- Ambos dispositivos deben estar conectados a la misma base de datos de Firebase
- La aplicación requiere conexión a Internet para funcionar
- Las credenciales de Firebase deben mantenerse privadas por seguridad
- La app solicita permisos necesarios para vibrar en los dispositivos

¡Disfruta de tu aplicación de vibración para parejas!
# Cómo generar el APK de la aplicación

Sigue estos pasos para generar el archivo APK que podrás instalar en tu dispositivo Android.

## Requisitos previos

- Tener instalado Node.js en tu computadora
- Tener una cuenta de Google para Firebase
- Acceso a una terminal o consola de comandos

## Paso 1: Instalar Expo CLI

Abre tu terminal y ejecuta el siguiente comando:

```bash
npm install -g @expo/cli
```

## Paso 2: Instalar dependencias del proyecto

Dentro del directorio del proyecto, ejecuta:

```bash
npm install
```

## Paso 3: Iniciar sesión en Expo

Ejecuta el siguiente comando y sigue las instrucciones para iniciar sesión con tu cuenta de Expo (puedes crear una cuenta gratuita en https://expo.dev):

```bash
npx expo login
```

## Paso 4: Construir la aplicación

Para generar un APK listo para instalación, ejecuta:

```bash
npx expo build:android
```

Durante este proceso, se te pedirá:

1. Si deseas reutilizar una configuración anterior (responde "No")
2. El tipo de build: selecciona "apk" para tener un archivo instalable para pruebas

## Paso 5: Esperar a que se complete la construcción

El proceso de construcción se realizará en los servidores de Expo y puede tardar entre 15 y 30 minutos. Recibirás una notificación cuando esté lista.

## Paso 6: Descargar el APK

Una vez completada la construcción, recibirás un enlace para descargar el archivo APK. El archivo tendrá un nombre similar a `app-<nombre>.apk`.

## Paso 7: Instalar en tu dispositivo

1. Transfiere el archivo APK a tu dispositivo Android
2. Asegúrate de tener habilitada la instalación de aplicaciones de "Fuentes desconocidas"
3. Abre el archivo APK y sigue las instrucciones para instalar

## Alternativa: Usar EAS Build (recomendado)

Para una experiencia más moderna, puedes usar EAS Build:

1. Instala EAS CLI:
```bash
npm install -g @expo/eas-cli
```

2. Inicia sesión:
```bash
eas login
```

3. Crea un build:
```bash
eas build --platform android
```

4. Sigue las instrucciones en pantalla para completar la configuración

## Importante

- El APK generado funcionará con cualquier configuración de Firebase que introduzcas en la interfaz
- Asegúrate de tener los datos correctos de tu proyecto de Firebase antes de usar la aplicación
- La primera vez que abras la app, necesitarás introducir los datos de configuración de Firebase y los IDs de los dispositivos
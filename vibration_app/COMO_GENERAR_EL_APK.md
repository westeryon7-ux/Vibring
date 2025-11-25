# Cómo generar el APK - Guía Rápida

## Opción 1: Usar Expo CLI (Recomendado para principiantes)

### Paso 1: Instalar Expo CLI
Abre tu terminal y ejecuta:
```bash
npm install -g @expo/cli
```

### Paso 2: Navegar al directorio del proyecto
```bash
cd /ruta/a/tu/vibration_app
```

### Paso 3: Instalar dependencias
```bash
npm install
```

### Paso 4: Iniciar sesión en Expo
```bash
npx expo login
```
(Si no tienes cuenta, créala en https://expo.dev)

### Paso 5: Generar el APK
```bash
eas build --platform android
```

### Paso 6: Seguir las instrucciones
- Selecciona "No" si te pregunta si quieres reutilizar una configuración anterior
- Selecciona "Local build" o "Managed build" según prefieras
- Espera a que se complete la generación (puede tardar 15-30 minutos)
- Descarga el archivo APK cuando se complete

## Opción 2: Usar Expo Go (para pruebas rápidas)

### Paso 1: Instalar Expo Go
- En Play Store (Android) o App Store (iOS), busca "Expo Go" y descarga la app

### Paso 2: Ejecutar localmente
```bash
npx expo start
```

### Paso 3: Escanear código QR
- Abre Expo Go en tu dispositivo
- Escanea el código QR que aparece en tu terminal o navegador
- La app se abrirá directamente en Expo Go

## Notas Importantes
- El APK generado pesará alrededor de 30-50 MB
- Requiere Android 7.0 o superior
- Para instalar el APK manualmente, asegúrate de permitir "Fuentes desconocidas" en tu dispositivo
- El APK funcionará con cualquier configuración de Firebase que introduzcas en la interfaz

## Solución de Problemas Comunes
- Si tienes problemas de permisos: `chmod +x /ruta/al/proyecto`
- Si el build falla: Asegúrate de tener Node.js versión 16 o superior
- Si no puedes iniciar sesión en Expo: Prueba con `npx expo login --non-interactive`

¡Listo! Ahora tienes tu APK listo para instalar en tu dispositivo Android.
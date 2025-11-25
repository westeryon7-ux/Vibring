# Guía de Instalación de Dependencias

## Instalación de dependencias necesarias

Para que la aplicación funcione correctamente, necesitas instalar las siguientes dependencias:

### Dependencias principales
1. `expo-vibration`: Para controlar la vibración del dispositivo
2. `firebase`: Para la comunicación en tiempo real entre dispositivos

### Comandos para instalar las dependencias

Abre una terminal en el directorio del proyecto y ejecuta:

```bash
npm install expo-vibration firebase
```

### Verificación de instalación

Después de la instalación, puedes verificar que las dependencias se hayan instalado correctamente revisando el archivo `package.json`. Deberías ver estas líneas:

```json
"dependencies": {
  "expo": "~54.0.25",
  "expo-status-bar": "~3.0.8",
  "expo-vibration": "~2.8.1",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "firebase": "^10.12.2"
}
```

### Posibles problemas y soluciones

#### Problema: Error de permisos
- Solución: Ejecuta el comando con `sudo` (en Linux/Mac) o como administrador (en Windows)

#### Problema: Espacio insuficiente
- Solución: Libera espacio en disco o instala en una ubicación con más espacio disponible

#### Problema: Conexión a Internet inestable
- Solución: Verifica tu conexión a Internet e intenta nuevamente

#### Problema: Versión incompatible de Node.js
- Solución: Asegúrate de tener una versión reciente de Node.js instalada (versión 16 o superior)

### Actualización de dependencias

Si necesitas actualizar las dependencias en el futuro, puedes usar:

```bash
npm update expo-vibration firebase
```

### Verificación de vulnerabilidades

Para verificar si hay vulnerabilidades de seguridad en las dependencias instaladas:

```bash
npm audit
```

Si se encuentran vulnerabilidades, puedes intentar solucionarlas con:

```bash
npm audit fix
```

### Notas sobre versiones

- La versión de `expo-vibration` puede cambiar con el tiempo, verifica la última versión compatible con tu versión de Expo
- La versión de `firebase` también puede actualizarse, pero asegúrate de que sea compatible con Expo
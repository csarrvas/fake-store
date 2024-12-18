# 🛒 React Native Shop App  
¡Bienvenido a **React Native Shop App**! 🚀  
Una aplicación móvil simple pero poderosa que te permite:  
- ✅ **Iniciar sesión** y guardar tus credenciales de manera segura.  
- 🛍️ **Explorar productos** con datos cargados dinámicamente usando **React Query** y **Axios**.  
- 🌍 **Navegar sin esfuerzo** entre pantallas gracias a **React Navigation**.  

¡Es ideal para aprender y practicar conceptos clave de React Native! 🎉  

---

## 🚀 **Características principales**  

### 🏷️ **1. Autenticación (Login)**  
- Utiliza un formulario de inicio de sesión sencillo.  
- Credenciales almacenadas de forma segura con **AsyncStorage**.
- Se cargan unas credenciales por defecto que son válidas para iniciar sesión

### 🌐 **2. Fetch dinámico de productos**  
- **React Query** optimiza las solicitudes y el caché de datos.  
- **Axios** maneja las llamadas a la API de manera eficiente.  

### 🧭 **3. Navegación fluida**  
- Navegación entre pantallas gracias a **React Navigation**.  
- Soporte para Stacks y Modals.  

---

## 📸 **Capturas de pantalla (Demo)**  

> 🚧 **Próximamente:** Aquí agregaríamos capturas o gifs de la app en acción. 
Loom:
https://www.loom.com/share/5c442f26df20488290b7762ee2b0611e?sid=92c33324-7975-42c7-af10-8ae0427603f1

# Nota:
- La API de prueba no cuenta con paginación por lo que para hacer la demostración del infinite scroll me vi en la necesidad de concatenar registros repetidos, por eso se pueden ver varios productos idénticos en el video!!

---

## 🛠️ **Tecnologías utilizadas**  

| **Tecnología**       | **Descripción**                                   |  
|-----------------------|-------------------------------------------------|  
| React Native          | Framework para construir apps móviles.          |  
| React Query           | Manejo avanzado de datos en red y cacheo.       |  
| Axios                 | Cliente HTTP para llamadas API.                 |  
| React Navigation      | Navegación avanzada en React Native.            |  
| AsyncStorage          | Almacenamiento seguro de datos en el dispositivo. |  

---

## 📋 **Requisitos previos**  

1. **Node.js** (versión 16 o superior)  
2. **React Native CLI** o **Expo CLI** (para correr la app).  
3. Un emulador o dispositivo físico con Android/iOS.  

---

## 🔧 **Cómo instalar y ejecutar el proyecto**  

1. Clona el repositorio:  
   ```bash  
   git clone https://github.com/csarrvas/fake-store.git  
   cd fake-store


2. Instala las dependencias: 
   ```bash
   npm install
   npx pod-install

3. Corre el proyecto en un emulador o dispositivo físico
   . iOS
   npx react-native run-ios

   .Android
   npx react-native run-android

## Escructura del proyecto
📦 fake-store  
├── 📂 src  
│   ├── 📂 components       # Componentes reutilizables  
│   ├── 📂 api              # Llamadas a la API de fakestore  
│   ├── 📂 config           # Configuración de Axios  
│   ├── 📂 context          # Context para manejar la Autenticación  
│   ├── 📂 utils            # Funciones auxiliares (validaciones, helpers, etc.)  
│   └── 📂 pages            # Páginas de la app (Login, Dashboard y 2 modals: para Product y para User)  
├── 📄 App.tsx              # Configuración inicial de la app  
├── 📄 README.md            # Este archivo  
└── 📄 package.json         # Dependencias y configuración del proyecto  

📬 Contacto  

¿Preguntas o sugerencias?  
📧 Email: csarrvas96@gmail.com  
🐙 GitHub: @csarrvas

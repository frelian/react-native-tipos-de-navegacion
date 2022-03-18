## Tipos de navegación (Stack, Drawer)
### Sección 7 del curso React Native (Fernando H)

#### 101. Inicio del proyecto
    * yarn add @react-navigation/native
    * yarn add react-native-screens react-native-safe-area-context
    * Documentación: https://reactnavigation.org/docs/getting-started
#### 102. Sin push (explicacion del proyecto)
#### 103. React Navigation Pre-requisitos
#### 104. React Navigation Ejemplo sencillo de Stack
    * yarn add @react-navigation/stack
#### 105. Navegar a otras pantallas
#### 106. Estilizando el Stack Navigator
#### 107. Enviar argumentos entre pantallas
#### 108. Diferentes formas de colocar el tipo de dato de los argumentos
    * Uso de type
#### 109. React Navigation - Drawer 
#### 110. Configurar Drawer básico
    * https://reactnavigation.org/docs/drawer-navigator/
    * Instalar: yarn add @react-navigation/drawer
    * Instalar: yarn add react-native-reanimated
#### 111. Toggle Drawer - Mostra / Ocultar
    * Ya que el icono de hamburguesa en la actual vesion se muestra, en la anterior se tenia que hacer
        como aparece en el archivo Pagina1Screen_boton-menu.tsx entonces no es necesario parte de la clase.
    * Tambien el codigo para dejar fijo el menu en landscape tambien cambio.
#### 112. Drawer personalizado
    * Poner una image avatar en el menu, asi como la anterior clase hay cambios de versiones de librerias, en la version
        de la case es const MenuInterno = ( { navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {... y como es acualmente 
        const MenuInterno = ( props: DrawerContentComponentProps ) => {...
#### 113. Navegar desde el MenuLateral personalizado
    * Tenia un error en <Drawer.Screen name="settingsScreen" ya que estaba navegando en el Menu lateral con mayusculas settingsScreen
    * Mejoras de diseño
    * Funcion para navegar entre screens
#### 114. useSafeAreaInserts
    * Fix para IOs ya que el Notch interfiere en el diseño se usa el Hook useSafeAreaInsets(), agregado en SettingsScreen
    * Mejoras pequeñas de diseño en Pagina1Screen
#### 121. Crear el BottomTabNavigator
    * Requisito instalar: yarn/npm add @react-navigation/bottom-tabs
    * Instalacion y configuracion de bottom-tabs
#### 122. Personalizando el BottomTabNavigator
    * Atributo de <Tab.Navigator en la version paso de tabBarOptions a screenOptions
    * Agregado una seccion de colores en src/themes/appThemes.tsx
#### 123. Preparar el espacio para el icono
    * Nuevo de codigo React Navigator 6 en screenOptions vs route
#### 124. Material Button Tab Navigator
    * Instalado: @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
    * Implementacion de tabs Android y IOs usando createMaterialBottomTabNavigator (Material design)
#### 125. Material Top Tab Navigator
    * Instalado: yarn add @react-navigation/material-top-tabs react-native-tab-view
    * A la fecha 18 Marzo 2022 genera error porque el react-native-pager-view no se instala, solucion:
    * yarn add react-native-pager-view

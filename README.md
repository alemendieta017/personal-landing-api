# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## 🔄 Sincronizar de Producción (Prod) a Desarrollo (Dev)

Para sincronizar los datos de tu instancia de producción a tu entorno de desarrollo local, Strapi proporciona un comando de transferencia nativo (`strapi transfer`).

### Requisitos previos

1. **Token de Transferencia (Transfer Token):**
   - Ve al panel de administración de tu Strapi de **producción**.
   - Navega a **Settings > Global settings > Transfer Tokens**.
   - Crea un nuevo token con el template **Pull** (esto permite extraer datos desde producción).
   - Copia el token generado (solo se mostrará una vez).

2. **Consistencia de Schemas:**
   - Tu código local (content-types, componentes, etc.) debe coincidir exactamente con el de producción. De lo contrario, la transferencia fallará para evitar inconsistencias.

3. **Detener el Servidor Local:**
   - Asegúrate de detener tu servidor local de Strapi antes de ejecutar el comando para evitar bloqueos y asegurar que se apliquen los cambios a la base de datos.

### Comando de Sincronización

Ejecuta el siguiente comando en la terminal local, dentro de la carpeta del API (`personal-landing-api`):

```bash
npm run strapi transfer -- --from https://admin.jessicaciancio.com/admin --from-token bb17fd07eb114892619478720b183b017e1494eaa9ac1fa224be45f0b2eccfa673f830885dd9ebcfb89a810a9f385047e550af923ae6f5e0b528888aad5cb238e0a0bc4285a27456a33857cf0dc469e08d789e8a3e8588294a4504ee0c9b74a21cd8bd641bfb64b225b2ebf6221abe3e580ecfe44d6b16da6d895410704fb41f
```

O alternativamente usando `npx` (apuntando al paquete correcto `@strapi/strapi`):

```bash
npx @strapi/strapi transfer --from https://admin.jessicaciancio.com/admin --from-token bb17fd07eb114892619478720b183b017e1494eaa9ac1fa224be45f0b2eccfa673f830885dd9ebcfb89a810a9f385047e550af923ae6f5e0b528888aad5cb238e0a0bc4285a27456a33857cf0dc469e08d789e8a3e8588294a4504ee0c9b74a21cd8bd641bfb64b225b2ebf6221abe3e580ecfe44d6b16da6d895410704fb41f
```

> ⚠️ **Advertencia:** Este comando es destructivo para tu base de datos local actual, ya que reemplazará todos los datos locales con los de producción.

#### Opciones útiles:
*   `--force`: Evita tener que confirmar manualmente en la terminal.
*   `--exclude files`: Excluye los archivos de media (imágenes, videos, etc.) de la transferencia si solo deseas transferir la base de datos de texto/configuración.

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# Api gateway

## Uso

Para configurar la api gateway, ejecuta el comando `npm run dev` en tu directorio de proyecto. Para entornos productivos ejecuta el comando `npm run start`.

La configuración que se debe realizar es completar el archivo .env.[ambiente] y configurar las rutas en el archivo **api-gw/routes**.

## Modulo Auth

El modulo de autenticaciones se encuentra en el archivo auth.ts. Este módulo tiene la opción de administrar la sesión de manera desacoplada, consumiendo o incorporando un servicio de autenticación o de sessión, de acuerdo a la necesidad requerida.
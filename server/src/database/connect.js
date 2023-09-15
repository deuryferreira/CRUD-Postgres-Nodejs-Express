import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  password: "root",
  database: "sistema",
  host: "127.0.0.1",
});

await client.connect();

//ver tabla de contactos
export const tabla_contactos = async () => {
  let result;

  result = await client.query("SELECT * FROM public.contactos");

  return result["rows"];
};

//BUSCAR UN UNICO CONTACTO
export const buscar_contacto = async (id) => {
  let result;
  result = await client.query(
    'SELECT * FROM public.contactos WHERE "idcontacto"=$1',
    [id]
  );
  return result["rows"];
};

//crear contacto
export const crea_contacto = async (nombre, apellido, numero) => {
  let result;
  result = await client.query(
    'INSERT INTO public.contactos ("nombrecontacto", "apellidocontacto" , "numcontacto") VALUES ($1, $2, $3)',
    [nombre, apellido, numero]

    //('INSERT INTO public.cliente ("nombre", "apellido", "telefono") VALUES ($1, $2, $3) ', [nombre, apellido, telefono])
  );
  return result;
};

//ACTUALIZAR CONTACTO

export const actualizar_contacto = async (id, nombre, apellido, numero) => {
  let result;
  result = await client.query(
    'UPDATE public.contactos SET "nombrecontacto" = $1, "apellidocontacto" = $2, "numcontacto" = $3 WHERE "idcontacto" = $4 ',
    [nombre, apellido, numero, id]
  );

  return result;
};

//BORRAR CONTACTO

export const borrar_contacto = async (id) => {
  let result;

  result = await client.query(
    'DELETE FROM public.contactos WHERE "idcontacto" = $1 ',
    [id]
  );

  //console.log(result["rows"])

  return result;
};

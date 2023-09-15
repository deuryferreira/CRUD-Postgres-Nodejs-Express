import {
  tabla_contactos,
  buscar_contacto,
  crea_contacto,
  actualizar_contacto,
  borrar_contacto,
} from "../database/connect.js";

export const welcomePage = (req, res) => {
  return res.status(200).send("<h1>Welcome to Deury's Server</h1>");
};

//funcion conseguir tabla de contactos
export const getAllContactos = async (req, res) => {
  try {
    const respuesta = await tabla_contactos();
    res.send(respuesta);
  } catch (e) {
    res.send("<h1>No se encontro Usuarios</h1>");
  }
};

//LEER O BUSCAR INFORMACION DE UN CONTACTO
export const getContacto = async (req, res) => {
  var id = req.params.id;
  id = parseInt(id);
  try {
    const respuesta = await buscar_contacto(id);
    res.send(respuesta);
  } catch (e) {
    console.log(e);
    res.send("Contacto no existe");
    console.log(`Id de usuario solicitado: ${id}`);
  }
  //res.status(200).send("<h1>Clientes</h1>");
};

//CREAR CONTACTO
export const postContacto = async (req, res) => {
  try {
    // let idcontacto = req.body.idcontacto;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let numero = req.body.numero;

    await crea_contacto(nombre, apellido, numero);
    res.send("OK");
  } catch (e) {
    res.send("error al crear contacto");
    console.log(e);
  }
};

//ACTUALIZAR O CREAR CONTACTO
export const putContacto = async (req, res) => {
  try {
    let id = req.body.id;
    id = parseInt(id);
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let numero = req.body.numero;
    console.log(req.body);
    await actualizar_contacto(id, nombre, apellido, numero);
    res.send(`Contacto #${id} Actualizado`);
  } catch (e) {
    res.send("Error no se pudo actulizar contacto");
    console.log(e);
  }
};

//BORRAR CONTACTO
export const deleteContacto = async (req, res) => {
  try {
    let id = req.params.id;
    id = parseInt(id);

    await borrar_contacto(id);

    res.send(`Contacto #${id} Eliminado`);
  } catch (e) {
    res.send("Error al borrar contacto");
    console.log(e);
  }
};

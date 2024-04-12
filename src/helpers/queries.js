const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Usuarios = import.meta.env.VITE_API_USUARIOS;
const URL_Pedidos = import.meta.env.VITE_API_PEDIDOS;

export const leerProductosAPI = async () => {
  try {
    const resp = await fetch(URL_Productos);
    const listaProductos = await resp.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (productoNuevo) => {
  try {
    const resp = await fetch(URL_Productos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const resp = await fetch(URL_Productos + "/" + id);
    return resp;
  } catch (error) {
    console.log(error);
  }
};


export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Productos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const resp = await fetch(`${URL_Productos}/${id}`, {
      method: "DELETE",
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const resp = await fetch(URL_Usuarios);
    if (!resp.ok) {
      throw new Error('No se pudo cargar la lista de usuarios');
    }
    const listaUsuarios = await resp.json();
    return listaUsuarios;
  } catch (error) {
    throw new Error('Error al cargar los usuarios desde la API: ' + error.message);
  }
};

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const resp = await fetch(URL_Usuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarioAPI = async (id) => {
  try {
    const resp = await fetch(`${URL_Usuarios}/${id}`, {
      method: "DELETE",
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};


export const suspenderUsuarioAPI = async (usuarioSuspendido, id) => {
  try {
    const respuesta = await fetch(`${URL_Usuarios}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioSuspendido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearPedidoAPI = async (pedidoNuevo) => {
  try {
    const resp = await fetch(URL_Pedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedidoNuevo),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPedidosAPI = async () => {
  try {
    const resp = await fetch(URL_Pedidos); 
    const pedidos = await resp.json();
    return pedidos;
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los pedidos'); 
  }
};

export const actualizarEstadoPedidosAPI = async (pedidoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Pedidos}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedidoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};


export const borrarPedidoAPI = async (id) => {
  try {
    const resp = await fetch(`${URL_Pedidos}/${id}`, {
      method: "DELETE",
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};


const userAdmin = {
    mail: "admin@rollingbistro.com",
    password: "prueba123",
  };

export const login = (usuario) => {
    if (
      usuario.mail === userAdmin.mail &&
      usuario.password === userAdmin.password
    ) {
      sessionStorage.setItem(
        "usuarioRollingBistro",
        JSON.stringify(usuario.mail)
      );
      return true;
    }else {
      return false;
    }
  };
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Libros = require("./libros");
const port = 3000;

mongoose.connect(
    "mongodb+srv://inakiLopez:12czFizBYiDEA8z0@clusterdelibros.a12tr1u.mongodb.net/?retryWrites=true&w=majority", //In@K@lp@K@
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const bodyParser = require("body-parser");
const { name } = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("mi-vista");
});

app.get('/ver-libros', async (req, res) => {
    try {
      const documentos = await verLibros.find();
      res.json(Biblioteca);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error retrieving documentos');
    }
  });
  
  app.get("/vista2", (req, res) => {
    res.render("vista2");
  });

app.post("/", (req, res) => {
    const name = req.body.name;
    const autor = req.body.autor;
    const editorial = req.body.editorial;
    const isdn = req.body.isdn;
    const genero = req.body.genero;
    const paginas = req.body.paginas;
    const precio = req.body.precio;
    const año = req.body.año;

    const libros = new Libros({
        name: name,
        autor: autor,
        editorial: editorial,
        isdn: isdn,
        genero: genero,
        paginas: paginas,
        precio: precio,
        año: año,
    });

    libros.save();
    toastr.success("los datos fueron guardados de forma exitosa");
    toastr.warning("Ups! occurrio un error al guardar los datos en el servidor :( ");
    console.log(libros);
});

const Libro = mongoose.model('Libro', {
    name: String,
    autor: String,
    editorial: String,
    isdn: Number,
    genero: String,
    paginas: Number,
    precio: Number,
    año: date,
  });
  
  
  // Ruta para obtener todos los libros
  app.get('/libros', async (req, res) => {
    try {
      const libros = await Libro.find();
      res.json(libros);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error del servidor');
    }
  });

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

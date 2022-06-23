import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import { Text, Stack, Input, Box, Button } from "@chakra-ui/react";
function App() {
  const API__URL = "http://www.omdbapi.com?apikey=2d5d9b60";

  const [movie, setMovie] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (Title) => {
    const respose = await fetch(`${API__URL} &s=${Title}`);
    //*Fetch devuelve una promesa
    const data = await respose.json();
    setMovie(data.Search);
  };

  //* useEffect recibe 2 parametros , una callback y la dependency es decir el metodo de ejecucion (en este caso se ejecuta cuando una sola vez cuando se renderice , pero este parametro puede recibir cualquier elemento y el callback se ejecutara cuando dicho elemento cambie de valor o sufra alguna modificacion)

  //* useEffect ejecuta en callback la funcion 'searchMovie' la cual recive un parametro que sera el que devolvera fetch.

 /* useEffect(() => {
    searchMovie("terminator");
  }, []);*/

  //* useEfect sin importar donde se encuentre se ejecutara ultimo en el eventLoop ya que pertenese a la fase final del estado de un componente

  /*
   *contexto
   *ensamblaje(return)
   *efecto
   */

  return (
    <Stack className="conteiner__global" px={"10px"} gap={"10px"}>
      <Box
        className="navbar"
        bg={"gray.600"}
        borderRadius={"lg"}
        h="-webkit-fit-content"
        padding={["10px", "15px"]}
        display={"flex"}
        gap={"10px"}
      >
        <Input
          variant="outline"
          borderColor={"blue.100"}
          focusBorderColor="blue.500"
          size="lg"
          type="text"
          placeholder="Search your movie"
          color={"white"}
          textTransform={"capitalize"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button size={"lg"} onClick={() => searchMovie(searchTerm)}>
          Search
        </Button>
      </Box>

      <Box
        className="container__fetch"
        display={"flex"}
        flexWrap={"wrap"}
        alignContent={"center"}
        justifyContent={"center"}
        gap={"10px"}
      >
        {movie?.length > 0 ? (
          movie.map((movie) => {
            return <Card movie={movie} />;
          })
        ) : (
          <Box>
            <Text>No hay peliculas para mostrar(escribí bien)</Text>
          </Box>
        )}
      </Box>
    </Stack>
  );
}

export default App;

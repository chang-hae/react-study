import myAxios from "./common/myAxios";

function App() {
  const helloApi = async () => {
    // const expireAt = Date.now() - 10000000; // Unauthorized
    const expireAt = Date.now() + 10000000; // Ok
    const response = await myAxios.get('/hello', {
        headers: {
            Authorization: "Bearer " + expireAt,
        }
    });
    console.log(response);
  }

  return (
    <div>
      <button onClick={helloApi}>helloApi</button>
    </div>
  );
}

export default App;

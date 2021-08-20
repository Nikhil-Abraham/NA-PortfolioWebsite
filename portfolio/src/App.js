import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <section className="bg-bioColor flex">
        <div className="h-50 w-50 flex-0.3">
          <img
            src="../images/bio.jpg"
            alt="profile pic"
            className="h-30 w-50"
          />
        </div>
        <div className="flex-0.7 text-white">
          <div className="text-2xl">Nikhil Abraham</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            beatae accusamus sed saepe officiis ut. Nobis, et? Et, modi aliquid.
            Sapiente reiciendis iure, aliquid at quae alias ipsa repudiandae
            consectetur!
          </div>
        </div>
        <div>
          <a href="" class="instagram">
            <i class="fa fa-instagram fa-lg"></i>
          </a>
          <a href="">
            <i class="fa fa-linkedin fa-lg"></i>
          </a>
          <a href="">
            <i class="fa fa-github fa-lg"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;

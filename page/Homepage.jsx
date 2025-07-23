import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <header class="navbar">
        <a href="#" class="logo">
          PokéDex
        </a>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pokémon</a>
            </li>
            <li>
              <a href="#">Types</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <section class="hero">
        <h1>Gotta Catch Pokémon!</h1>
        <p>
          Discover the complete world of Pokémon. Search, explore, and learn
          about your favorite creatures from all generations.
        </p>
        <div class="hero-buttons">
          <button id="start">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/pokemon"}
            >
              Start Exploring
            </Link>
          </button>
          {/* <button id="view-all">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/pokemon"}
            >
              View All Pokémon →
            </Link>
          </button> */}
        </div>
      </section>

      {/* <section class="stats">
        <div class="stat">
          <div class="icon star">★</div>
          <p class="number">1000+</p>
          <p>Total Pokémon</p>
        </div>
        <div class="stat">
          <div class="icon gen">📘</div>
          <p class="number">9</p>
          <p>Generations</p>
        </div>
        <div class="stat">
          <div class="icon type">⚡</div>
          <p class="number">18</p>
          <p>Types</p>
        </div>
      </section> */}

      <section class="stats">
        <div class="stat-item">
          <div class="icon">★</div>
          <div class="text">
            <p class="number">1000+</p>
            <p>Total Pokémon</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="icon">📘</div>
          <div class="text">
            <p class="number">9</p>
            <p>Generations</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="icon">⚡</div>
          <div class="text">
            <p class="number">18</p>
            <p>Types</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

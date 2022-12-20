/** @format */

function Header(props) {
  let { handleStart } = props;
  // console.log(handleStart, `hh`);
  return (
    <header>
      <div>
        <div className="logoName container flex align-center">
          <span onClick={handleStart}>
            <i class="fa-regular fa-lightbulb"></i>
          </span>

          <span onClick={handleStart}>Quiz app</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#ffff"
            fillOpacity="1"
            d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,234.7C840,267,960,277,1080,266.7C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;

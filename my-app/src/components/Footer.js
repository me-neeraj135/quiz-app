/** @format */

function Footer(props) {
  return (
    <footer>
      <div className="upperFooter">
        <div className="container flex justify-between align-center">
          <div className="">
            <p className="mtb txCpt wtColor ">quick links</p>
            <ul className="flex">
              <li className="grColor txCpt">Program</li>
              <li className="mlr grColor txCpt">about us</li>
              <li className="mlr grColor txCpt">contact us</li>
              <li className="mlr grColor txCpt">support</li>
            </ul>
          </div>

          <div className="">
            <p className="mtb txCpt wtColor">follow us</p>
            <ul className="flex">
              <li className="">
                <i className="fa-brands fa-twitter blColor"></i>
              </li>
              <li className="mlr">
                <i className="fa-brands fa-instagram ltPink"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* lower footer */}

      <div className="lowerFooter flex  align-center flex-direction-column">
        <div className=" ">
          <small className="txCpt grColor">
            © India Services Pvt. Ltd, 1968-present.
          </small>
        </div>
        <div className=" flex">
          <span className="mlr txCpt grColor">privacy</span>
          <span className="mlr txCpt grColor">term</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

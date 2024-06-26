import logo from '../../assets/images/logo.png';
const Footer = () => {
  return (
    <footer className="footer py-10 bg-base-200 text-base-content">
      <div className='mx-auto'>
        <img width="80px" src={logo} alt="" />
        <p>
          College Finder. Find your dream College.
          <br />
          Providing reliable support since 2000.
        </p>
      </div>
      <div className='mx-auto'>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className='mx-auto'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className='mx-auto'>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;

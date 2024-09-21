import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 Portfolio. Todos os direitos reservados.</p>
          <ul className="footer-links">
            {/* <li><a href="#">Privacy Policy</a></li> */}
            <li><a href="#">Termos de Serviço</a></li>
            {/* <li><a href="#">Entre em Contato</a></li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import './style.css'

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();

    return (
        <div className='correct'>
            <footer className="footer">
                <p>
                    ALl &copy; copy rights are reserved to DwinaTech-shopping {fullYear}
                </p>
            </footer>
        </div>
            
    );
};

export default Footer;
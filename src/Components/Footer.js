import React from 'react';

const Footer =()=>{
    const year = new Date().getFullYear();
    return (
        <footer >
            <p className="footer">Copyright &copy; {year}</p>
        </footer>
    );
}
export default Footer;
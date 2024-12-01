

function Footer() {
    const date = new Date();
    const currYear = date.getFullYear();
    return (
        <footer>© Copyright {currYear} AcadSync</footer>
    )
}

export default Footer;
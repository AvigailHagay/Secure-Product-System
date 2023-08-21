import '../style/css/Navbar.css';

export default function Navbar() {
    return (
        <nav className={'nav'}>
            <a href={'/'} className={'site-title'}>
                <h4>Add & Search Products App</h4>
            </a>
            <ul>
                <li className={'active'}>
                    <a href={'/'}><h5>Search</h5></a>
                </li>
                <li>
                    <a href={'/add-product'}><h5>Add Product</h5></a>
                </li>
            </ul>
        </nav>
    );
}
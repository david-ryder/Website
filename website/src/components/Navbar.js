export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{
            backgroundColor: "black"
        }}>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About<span class="sr-only"></span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">Skills<span class="sr-only"></span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">Projects<span class="sr-only"></span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="../David Winfield Resume.pdf" download>Resume<span class="sr-only"></span></a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="#">Contact<span class="sr-only"></span></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
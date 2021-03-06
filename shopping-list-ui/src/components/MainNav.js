import { Navbar, Container, Nav } from 'react-bootstrap';

export const MainNav = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Shopping List</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/audit">Audit</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

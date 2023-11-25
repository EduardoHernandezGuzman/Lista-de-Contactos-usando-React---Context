import React, { useContext } from "react";
import { Link } from "react-router-dom";



import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (

						<>
							<li
							
								key={index}
								className="list-group-item d-flex ">

								<div><svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" className="mx-5 bi bi-person-lines-fill" viewBox="0 0 16 16">
									<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
								</svg></div>

								<div className="ml-5" >

									{item.full_name}
									<br />
									{item.address}
									<br />
									{item.phone}
									<br />
									{item.email}
								</div>
								<button style={{marginLeft:"auto"}} className="btn btn-danger" onClick={() => {actions.borrarContacto(item.id)}}>Eliminar contacto</button>

							</li>
							
						</>
					);
				})}
			</ul>
			<button style={{marginTop:"3rem"}} className="btn btn-danger" onClick={()=> actions.borrarTodosLosContactos()}>Borrar todos los contactos</button>

			{/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul> */}
			
		</div>
	);
};
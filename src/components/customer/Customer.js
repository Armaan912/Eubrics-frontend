"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./Customer.css";
import Link from "next/link";
import { deletecustomers, getcustomers } from "@/common/customer-client";

function Customer() {
	const [customers, setCustomers] = useState([]);

	useEffect(() => {
		getcustomers()
			.then((res) => setCustomers(res))
			.catch((err) => {
				if (err.response && err.response.status === 401) {
					console.error("Unauthorized. Please log in.");
				} else {
					console.error(err);
				}
			});
	}, []);

	const handleDelete = async (id) => {
		try {
			deletecustomers(id);
			setCustomers(customers.filter((customer) => customer.id !== id));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="customer-container">
			<div className="header">
				<h1>Your Behaviours</h1>
				<Link href="/createimprovement" className="add-button">
					Add Behaviour
				</Link>
			</div>
			<ul className="customer-list">
				{customers.map((customer) => (
					<li key={customer.id} className="customer-item">
						<div className="improvement-text">{customer.improvement}</div>
						<div className="action-buttons">
							<Link
								href={`/updatecustomer/${customer.id}`}
								className="update-button"
							>
								Update
							</Link>
							<button
								onClick={() => handleDelete(customer.id)}
								className="delete-button"
							>
								Delete
							</button>
							<Link
								href={`/subimprovement/${customer.id}/sub`}
								className="view-button"
							>
								View Behaviour
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Customer;

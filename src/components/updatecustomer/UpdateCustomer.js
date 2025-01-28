"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UpdateCustomer.css";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { getcustomers, updateCustomers } from "@/common/customer-client";

function UpdateCustomer() {
	const [improvement, setImprovement] = useState("");
	const router = useRouter();

	const { id } = useParams();

	useEffect(() => {
		getcustomers()
			.then((res) => {
				const customer = res.find((c) => c.id == parseInt(id));
				if (customer) setImprovement(customer.improvement);
			})
			.catch((err) => console.error(err));
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			updateCustomers({ id, improvement });
			router.push("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="update-container">
			<form className="update-form" onSubmit={handleSubmit}>
				<h2>Update Behaviour</h2>
				<textarea
					className="update-textarea"
					placeholder="Update your behaviour..."
					value={improvement}
					onChange={(e) => setImprovement(e.target.value)}
					required
				/>
				<button className="update-button" type="submit">
					Update
				</button>
			</form>
			<button className="back-button" onClick={() => navigate("/")}>
				Back to Behaviours
			</button>
		</div>
	);
}

export default UpdateCustomer;

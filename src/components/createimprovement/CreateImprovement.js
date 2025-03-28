"use client";

import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./CreateImprovement.css";
import { useRouter } from "next/navigation";
import { postcustomers } from "@/common/customer-client";

function CreateImprovement() {
	const [improvement, setImprovement] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await postcustomers({ improvement });
			alert("Behaviour added successfully!");
			router.push("/");
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="create-improvement-container">
			<form className="create-improvement-form" onSubmit={handleSubmit}>
				<h2>Create Behaviour</h2>
				<textarea
					className="improvement-textarea"
					placeholder="Describe the Behaviour..."
					value={improvement}
					onChange={(e) => setImprovement(e.target.value)}
					required
				/>
				<button className="submit-button" type="submit">
					Add Behaviour
				</button>
				<button
					className="back-button"
					onClick={() => router.push("/customer")}
				>
					Back to Behaviours
				</button>
			</form>
		</div>
	);
}

export default CreateImprovement;

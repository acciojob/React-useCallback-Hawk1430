import React, { useCallback, useContext, useState } from "react";
import { ListContext } from "./ListContext";

const UseCallbackComp = () => {
	const [skill, setSkill] = useState("");
	const { list, setList } = useContext(ListContext);

	const generateId = useCallback(() => {
		return (
			Date.now().toString() + Math.random().toString(36).substring(2, 5)
		);
	}, []);

	const handleAddSkill = useCallback(() => {
		if (skill.trim === "") return;
		const found = list.find((item) => item.name === skill);
		if (found) return alert("Skill already exists");
		setList((prev) => [...prev, { id: generateId(), name: skill }]);
        setSkill("")
	}, [skill, list, generateId, setList]);

	return (
		<div>
			<input
				id="skill-input"
				type="text"
				value={skill}
				placeholder="Enter skill to add"
				onChange={(e) => setSkill(e.target.value)}
			/>
			<button id="skill-add-btn" onClick={handleAddSkill}>
				Add Skill
			</button>
		</div>
	);
};

export default UseCallbackComp;

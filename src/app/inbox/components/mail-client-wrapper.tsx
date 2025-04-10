"use client";

import { useEffect, useState } from "react";
import { Mail } from "./mail";

export function MailClientWrapper({ accounts, mails }: any) {
	const [defaultLayout, setDefaultLayout] = useState<any>();
	const [defaultCollapsed, setDefaultCollapsed] = useState<any>();

	useEffect(() => {
		const layout = localStorage.getItem(
			"react-resizable-panels:layout:mail"
		);
		const collapsed = localStorage.getItem(
			"react-resizable-panels:collapsed"
		);

		if (layout) {
			try {
				setDefaultLayout(JSON.parse(layout));
			} catch (err) {
				console.warn("Invalid layout JSON", err);
			}
		}

		if (collapsed) {
			try {
				setDefaultCollapsed(JSON.parse(collapsed));
			} catch (err) {
				console.warn("Invalid collapsed JSON", err);
			}
		}
	}, []);

	return (
		<Mail
			accounts={accounts}
			mails={mails}
			defaultLayout={defaultLayout}
			defaultCollapsed={defaultCollapsed}
			navCollapsedSize={4}
		/>
	);
}
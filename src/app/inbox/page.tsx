// app/inbox/page.tsx (Server Component)
import Image from "next/image";
import { accounts, mails } from "@/app/inbox/components/data";
import { MailClientWrapper } from "./components/mail-client-wrapper";

export default function MailPage() {
	return (
		<>
			<div className="md:hidden">
				<Image
					src="/examples/mail-dark.png"
					width={1280}
					height={727}
					alt="Mail"
					className="hidden dark:block"
				/>
				<Image
					src="/examples/mail-light.png"
					width={1280}
					height={727}
					alt="Mail"
					className="block dark:hidden"
				/>
			</div>
			<div className="hidden flex-col md:flex">
				<MailClientWrapper accounts={accounts} mails={mails} />
			</div>
		</>
	);
}

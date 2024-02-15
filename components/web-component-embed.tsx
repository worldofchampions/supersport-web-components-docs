import ErrorBoundary from "@/components/error-boundary";
import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";

export function WebComponentEmbed({ children }) {
	return (
		<div>
			<ErrorBoundary>
				<Head>
					<script
						type="module"
						src={process.env.NEXT_PUBLIC_WEBCOMP_ESM_URL}
					></script>
					<script
						noModule
						src={process.env.NEXT_PUBLIC_WEBCOMP_JS_URL}
					></script>
				</Head>

				<Card className="p-6 pb-0">
					<CardContent>
						{ children }
					</CardContent>
				</Card>
			</ErrorBoundary>
		</div>
	);
}

import ErrorBoundary from "@/components/error-boundary";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";

export function PromoBannerPreview() {
	return (
		<div>
			<ErrorBoundary>
				<Head>
					<script
						type="module"
						src="https://dpprodwebsharedstore.blob.core.windows.net/ss-web-components/dist/build/supersport-web-components.esm.js"
					></script>
					<script
						noModule
						src="https://dpprodwebsharedstore.blob.core.windows.net/ss-web-components/dist/build/supersport-web-components.js"
					></script>
				</Head>

				<Card className="p-6 pb-0">
					<CardContent>
						<ss-promo-banner banner-id="7eccb58e-da70-4957-8f85-afeedfe43816"></ss-promo-banner>
					</CardContent>
				</Card>
			</ErrorBoundary>
		</div>
	);
}

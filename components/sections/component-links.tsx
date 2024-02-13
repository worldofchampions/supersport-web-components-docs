import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Feather, Glasses, PaintRoller } from "lucide-react";
import Link from "next/link";

const componentLinks = [
	{
		title: "Promo Banner",
		icon: Icons.web_components,
		href: "/components/promo_banner",
	},
  {
		title: "Article Card",
		icon: Icons.web_components,
		href: "/components/article_card",
	},
  {
		title: "Article List",
		icon: Icons.web_components,
		href: "/components/article_card",
	},
  {
		title: "Video Card",
		icon: Icons.web_components,
		href: "/components/video_card",
	},
  {
		title: "Video List",
		icon: Icons.web_components,
		href: "/components/video_list",
	},
];

export function ComponentLinks() {
	return (
		<div className="grid gap-4 lg:grid-cols-2 py-6">
			{componentLinks.map((feature, index) => (
				<Link key={index} href={feature.href}>
					<Card key={index}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
							<CardTitle className="text-xl">{feature.title}</CardTitle>
							<feature.icon className="h-6 w-6 text-muted-foreground" />
						</CardHeader>
					</Card>
				</Link>
			))}
		</div>
	);
}

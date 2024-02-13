import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Feather, Glasses, PaintRoller } from "lucide-react";
import Link from "next/link";

const frameworkLinks = [
	{
		title: "Web Components",
		icon: Icons.web_components,
		href: "/get_started/installation/web_components",
	},
	{
		title: "React",
		icon: Icons.react,
		href: "/get_started/installation/react",
	},
	{
		title: "Vue",
		icon: Icons.vue,
		href: "/get_started/installation/vue",
	},
	{
		title: "Angular",
		icon: Icons.angular,
		href: "/get_started/installation/angular",
	},
];

export function FrameworkLinks() {
	return (
		<div className="grid gap-4 lg:grid-cols-2 py-6">
			{frameworkLinks.map((feature, index) => (
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

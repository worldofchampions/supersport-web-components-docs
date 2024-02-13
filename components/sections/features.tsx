import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Feather, Glasses, PaintRoller } from "lucide-react";

const features = [
	{
		title: "Use anywhere",
		description:
			"Pure JavaScript Web components you can use in Vanilla JS or any other framework.",
		icon: Code2,
	},
	{
		title: "Customizable",
		description:
			"Each component has a base design and is fully customizable through CSS Variables",
		icon: PaintRoller,
	},
	{
		title: "Lightweight",
		description:
			"Just a few kilobytes, devoid of dependencies and bloat. Tiny, meticulously optimized web components.",
		icon: Feather,
	},
	{
		title: "Accessible",
		description:
			"Our components align to platform standards and WAI ARIA patterns.",
		icon: Glasses,
	},
];

export function Features() {
	return (
		<div className="grid gap-4 lg:grid-cols-2 py-6">
			{features.map((feature, index) => (
				<Card key={index}>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
						<CardTitle className="text-xl">{feature.title}</CardTitle>
						<feature.icon className="h-6 w-6 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<span>{feature.description}</span>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
